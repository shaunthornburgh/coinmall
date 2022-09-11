<?php

use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\CoinController;
use App\Http\Controllers\API\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [LoginController::class, 'login']);
Route::post('register', [RegisterController::class, 'register']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/me', [LoginController::class, 'me']);
    Route::post('logout', [LoginController::class, 'logout']);

    // Coins
    Route::prefix('coins')->name('coins.')->group(function () {
        Route::get('/', [CoinController::class, 'index'])->name('index');
        Route::post('/', [CoinController::class, 'create'])->name('create');
    });
});

