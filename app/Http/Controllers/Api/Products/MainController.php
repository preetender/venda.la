<?php

namespace App\Http\Controllers\Api\Products;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;


class MainController extends Controller
{
    /**
     * Obter lista de produtos.
     *
     * @return mixed
     */
    public function index()
    {
        return ProductResource::collection(Product::all());
    }

    /**
     * Cadastrar produto.
     */
    public function store()
    { }

    /**
     * Remover produto.
     */
    public function destroy()
    { }
}
