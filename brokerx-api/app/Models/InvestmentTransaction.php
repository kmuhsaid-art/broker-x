<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class InvestmentTransaction extends Model
{
    use HasFactory;

    protected $fillable = [

        'investment_order_id',

        'type',

        'amount',

        'description',

    ];

    protected $casts = [

        'amount' => 'decimal:8',

    ];

    /*
    |--------------------------------------------------------------------------
    | RELATIONSHIPS
    |--------------------------------------------------------------------------
    */

    public function investment()
    {
        return $this->belongsTo(
            InvestmentOrder::class,
            'investment_order_id'
        );
    }
}