<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ChildProduct extends Pivot
{
    /**
     * @var array
     */
    protected $appends = [
        'subtotal'
    ];

    /**
     * Calcular sub-total
     *
     * @return float
     */
    public function getSubtotalAttribute(): float
    {
        return  $this->quantity * $this->product('price')->price;
    }

    /**
     * Produto agregado.
     *
     * @param $select
     */
    public function product($select = '*')
    {
        return \DB::table('products')->where('id', $this->child_id)->select($select)->first();
    }
}
