<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductImage extends Model
{
  /**
   * @var array
   */
  protected $fillable = [
    'file',
    'sizes'
  ];

  /**
   * @var array
   */
  protected $casts = [
    'sizes' => 'collection'
  ];

  /**
   * Produto relacionado.
   *
   * @return BelongsTo
   */
  public function product(): BelongsTo
  {
    return $this->belongsTo(Product::class);
  }

  /**
   * Obter url do arquivo
   *
   * @param $size
   */
  public function url($size = 50)
  {
    return app('filesystem')->url($this->sizes->get($size));
  }
}
