<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InvestmentCategory extends Model
{
    protected $fillable = [

        'name',

        'slug',

        'description',

        'icon',

        'color',

        'status',

    ];

    protected $casts = [

        'status' => 'boolean',

    ];

    public function products()
    {
        return $this->hasMany(

            InvestmentProduct::class,

            'category_id'

        );
    }
}