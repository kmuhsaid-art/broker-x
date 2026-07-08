<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [

        'wallet_id',

        'type',

        'direction',

        'amount',

        'balance_after',

        'reference_type',

        'reference_id',

        'created_by'

    ];



    protected $casts = [

        'amount' => 'decimal:8',

        'balance_after' => 'decimal:8'

    ];



    public function wallet()
    {
        return $this->belongsTo(
            Wallet::class
        );
    }



    public function reference()
    {
        return $this->morphTo();
    }
}