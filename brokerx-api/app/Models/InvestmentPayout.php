<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InvestmentPayout extends Model
{
    protected $fillable = [

        'investment_order_id',

        'amount',

        'status',

        'method',

        'transaction_reference',

        'paid_by',

        'paid_at',

        'note',

    ];

    protected $casts = [

        'paid_at'=>'datetime',

    ];

    public function investment()
    {
        return $this->belongsTo(

            InvestmentOrder::class

        );
    }

    public function admin()
    {
        return $this->belongsTo(

            User::class,

            'paid_by'

        );
    }
}