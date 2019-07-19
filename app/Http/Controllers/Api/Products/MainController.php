<?php

namespace App\Http\Controllers\Api\Products;

use App\Models\Product;
use App\Http\Resources\ProductResource;
use Preetender\QueryString\ApiController;
use App\Http\Requests\StoreProductRequest;
use App\Support\Upload;

class MainController extends ApiController
{
  /**
   * @var string
   */
  protected $model = Product::class;

  /**
   * @var string
   */
  protected $resource = ProductResource::class;

  /**
   * Iniciar nova instancia.
   *
   * @var boolean
   */
  protected $modelNewInstance = true;

  /**
   * Cadastrar produto.
   *
   * @param StoreProductRequest $request
   */
  public function store(StoreProductRequest $request)
  {
    $db = app('db');
    //
    $images = [];
    //
    try {
      $db->beginTransaction();

      $product = new Product;
      $product->fill($request->except('images'));
      $product->save();

      // produtos filhos
      if ($request->has('children') && sizeof($request->children) > 0) {
        // sincronizar filhos
        foreach ($request->children as $id => $attributes) {
          $product->children()->attach([$id => json_decode($attributes, true)]);
        }
      }

      if ($request->hasFile('images')) {
        foreach ($request->images as $image) {
          //
          // Preparar arquivos.
          //
          $supportUpload = Upload::make($image);
          $supportUpload->prepare($product->id)->dispatchNow();
          //
          $images[] = $supportUpload;
          //
          $product->images()->create([
            'file' => $supportUpload->getPath(),
            'sizes' => $supportUpload->getSizesFilename()
          ]);
        }
      }
      // autorizar transação
      $db->commit();

      //
      return response()->json($product);
    } catch (\Exception $e) {
      // reverter operação no banco de dados.
      $db->rollback();

      // remover arquivos enviados
      if (count($images) > 0) {
        foreach ($images as $image) {
          // remover arquivo enviado.
          $image->revert();
        }
      }

      //
      return response()->json($e->getMessage(), 400);
    }
  }

  /**
   * Remover produto.
   */
  public function destroy()
  { }
}
