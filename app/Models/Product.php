<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'category_id',
        'description',
        'price',
        'kit'
    ];

    /**
     * @var array
     */
    protected $casts = [
        'price' => 'float',
        'kit' => 'boolean'
    ];

    /**
     * @var array
     */
    protected $appends = [
        'total'
    ];

    /**
     * Total do produto
     *
     * @return float
     */
    public function getTotalAttribute()
    {
        if (!$this->attributes['kit']) return (float) $this->attributes['price'];

        return $this->children->map(function ($product) {
            return (int) $product->getOriginal('pivot_quantity') * (float) $product->price;
        })->sum();
    }

    /**
     * Imagens vinculada ao produto.
     *
     * @return HasMany
     */
    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }

    /**
     * Produto que compõe o kit.
     *
     * @return BelongsToMany
     */
    public function children(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'child_product', 'product_id', 'child_id')
            ->using(ChildProduct::class)
            ->withPivot('quantity');
    }
}
