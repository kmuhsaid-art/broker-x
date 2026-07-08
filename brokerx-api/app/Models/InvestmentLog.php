<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InvestmentLog extends Model
{
    protected $fillable = [

        'investment_order_id',

        'status',

        'description',

        'created_by',

        'metadata',

    ];

    protected $casts = [

        'metadata'=>'array',

    ];

    public function investment()
    {
        return $this->belongsTo(

            InvestmentOrder::class,

            'investment_order_id'

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