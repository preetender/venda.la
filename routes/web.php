<?php

use App\Models\Product;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'app');

Route::get('/test', function () {
    // $product = App\Models\Product::find(4);
    // $product->load('compositions');
    // // dd($product);

    // return $product;

    return Product::all()->map(function ($product) {
        if ($product->kit) {
            $product->load('children');
        }

        return $product;
    });
});
