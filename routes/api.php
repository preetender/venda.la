<?php

use App\Http\Middleware\CheckClientTokenMiddleware;

Route::apiResource('products', 'Api\\Products\\MainController')->middleware(CheckClientTokenMiddleware::class);
