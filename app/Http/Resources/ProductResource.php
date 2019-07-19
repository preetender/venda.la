<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
      'slug' => str_slug($this->name),
      'description' => $this->description,
      'images' => $this->whenLoaded('images', ProductImageResource::collection($this->images), []),
      'kit' => $this->kit,
      'children' => $this->when($this->kit, function () {
        // carregar produtos filhos.
        $this->load('children');
        //
        return ProductResource::collection($this->children);
      }),
      'dates' => [
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at
      ]
    ];
  }
}
