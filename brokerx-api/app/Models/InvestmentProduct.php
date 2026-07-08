<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InvestmentProduct extends Model
{
    protected $fillable = [

        'uuid',

        'category_id',

        'title',

        'slug',

        'description',

        'currency',

        'minimum_amount',

        'maximum_amount',

        'expected_roi',

        'roi_type',

        'duration_value',

        'duration_unit',

        'profit_distribution',

        'risk_level',

        'featured',

        'allow_early_withdraw',

        'auto_renew',

        'status',

        'thumbnail',

        'banner',

        'terms',

        'created_by',

    ];

    protected $casts = [

        'featured' => 'boolean',

        'allow_early_withdraw' => 'boolean',

        'auto_renew' => 'boolean',

        'status' => 'boolean',

    ];

    public function category()
    {
        return $this->belongsTo(

            InvestmentCategory::class

        );
    }

    public function investments()
    {
        return $this->hasMany(

            InvestmentOrder::class,

            'product_id'

        );
    }

    public function creator()
    {
        return $this->belongsTo(

            User::class,

            'created_by'

        );
    }
}