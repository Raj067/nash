<?php

namespace App\Services;

use Symfony\Component\HttpFoundation\Response;

class PublicFileResponse
{
    public function make(string $filePath, string $publicUri): Response
    {
        $response = response()->file($filePath, [
            'Content-Disposition' => 'inline; filename="'.basename($filePath).'"',
        ]);

        // Only offload files that already resolve to the same publicly served file.
        $publicPath = public_path(ltrim($publicUri, '/'));
        if (stripos(request()->server('SERVER_SOFTWARE', ''), 'LiteSpeed') !== false
            && is_file($publicPath)
            && realpath($publicPath) === realpath($filePath)) {
            $uri = '/'.implode('/', array_map('rawurlencode', explode('/', ltrim($publicUri, '/'))));

            // LiteSpeed serves the static file, including ranges, without a PHP body.
            return response('', 200, [
                'X-LiteSpeed-Location' => $uri,
                'Content-Type' => $response->getFile()->getMimeType() ?: 'application/octet-stream',
                'Content-Disposition' => $response->headers->get('Content-Disposition'),
            ]);
        }

        return $response;
    }
}
