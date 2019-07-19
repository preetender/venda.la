<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Preetender\QueryString\ApiResource;

class ProductResource extends ApiResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request)
  {
    return [
      'id' => $this->id,
      'name' => $this->name,
      'price' => $this->price,
      'category_id' => $this->category_id,
      'kit' => $this->kit,
      'slug' => str_slug($this->name),
      'description' => $this->description,
      'images' => $this->whenLoaded('images', ProductImageResource::collection($this->images), []),
      'children' => $this->whenQueryParam('with,children', $this->when($this->kit, function () {
        // carregar produtos filhos.
        $this->load('children');
        //
        return ProductResource::collection($this->children);
      })),
      'dates' => [
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at
      ]
    ];
  }
}
