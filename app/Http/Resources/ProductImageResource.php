<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductImageResource extends JsonResource
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
      'file' => $this->file,
      'breakpoints' => $this->sizes->mapWithKeys(function ($file, $size) {
        return [$size => asset("storage/$file", getenv('APP_ENV') === 'production')];
      })
    ];
  }
}
