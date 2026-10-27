<?php

use App\Services\PublicFileResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Tests\TestCase;

uses(TestCase::class);

beforeEach(function () {
    $this->downloadDirectory = sys_get_temp_dir().'/nacp-download-'.bin2hex(random_bytes(8));
    mkdir($this->downloadDirectory.'/public/storage', 0700, true);
    $this->file = $this->downloadDirectory.'/archive sample.rar';
    file_put_contents($this->file, '0123456789abcdef');
    symlink($this->file, $this->downloadDirectory.'/public/storage/archive sample.rar');
    $this->app->usePublicPath($this->downloadDirectory.'/public');
});

afterEach(function () {
    unlink($this->downloadDirectory.'/public/storage/archive sample.rar');
    unlink($this->file);
    rmdir($this->downloadDirectory.'/public/storage');
    rmdir($this->downloadDirectory.'/public');
    rmdir($this->downloadDirectory);
});

it('hands an existing public file to LiteSpeed without streaming a PHP body', function () {
    $this->app->instance('request', Request::create('/', 'GET', server: ['SERVER_SOFTWARE' => 'LiteSpeed']));

    $response = app(PublicFileResponse::class)->make($this->file, '/storage/archive sample.rar');

    expect($response->getStatusCode())->toBe(200)
        ->and($response->headers->get('X-LiteSpeed-Location'))->toBe('/storage/archive%20sample.rar')
        ->and($response->headers->get('Content-Disposition'))->toBe('inline; filename="archive sample.rar"')
        ->and($response->headers->get('Content-Type'))->not->toBeEmpty()
        ->and($response->headers->has('Content-Length'))->toBeFalse()
        ->and($response->getContent())->toBe('');
});

it('keeps byte-range downloads working on other web servers', function () {
    $request = Request::create('/', 'GET', server: [
        'SERVER_SOFTWARE' => 'Apache',
        'HTTP_RANGE' => 'bytes=4-7',
    ]);
    $this->app->instance('request', $request);

    $response = app(PublicFileResponse::class)->make($this->file, '/storage/archive sample.rar');
    $response->prepare($request);
    ob_start();
    $response->sendContent();
    $content = ob_get_clean();

    expect($response)->toBeInstanceOf(BinaryFileResponse::class)
        ->and($response->getStatusCode())->toBe(206)
        ->and($response->headers->get('Content-Range'))->toBe('bytes 4-7/16')
        ->and($content)->toBe('4567');
});

it('does not offload a private file through a different public file', function () {
    $this->app->instance('request', Request::create('/', 'GET', server: ['SERVER_SOFTWARE' => 'LiteSpeed']));
    unlink($this->downloadDirectory.'/public/storage/archive sample.rar');
    file_put_contents($this->downloadDirectory.'/public/storage/archive sample.rar', 'different file');

    $response = app(PublicFileResponse::class)->make($this->file, '/storage/archive sample.rar');

    expect($response)->toBeInstanceOf(BinaryFileResponse::class)
        ->and($response->headers->has('X-LiteSpeed-Location'))->toBeFalse();
});

it('falls back to PHP when the public storage link is unavailable', function () {
    $this->app->instance('request', Request::create('/', 'GET', server: ['SERVER_SOFTWARE' => 'LiteSpeed']));

    $response = app(PublicFileResponse::class)->make($this->file, '/storage/missing.rar');

    expect($response)->toBeInstanceOf(BinaryFileResponse::class)
        ->and($response->headers->has('X-LiteSpeed-Location'))->toBeFalse();
});
