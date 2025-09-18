<?php

use App\Http\Controllers\Api\NewsletterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Newsletter subscription routes
Route::prefix('newsletter')->group(function () {
    Route::post('/subscribe', [NewsletterController::class, 'subscribe']);
    Route::post('/unsubscribe', [NewsletterController::class, 'unsubscribe']);
});
