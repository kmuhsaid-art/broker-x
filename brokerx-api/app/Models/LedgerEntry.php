<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LedgerEntry extends Model
{
    protected $fillable = [

        'user_id',

        'wallet_id',

        'transaction_id',

        'type',

        'amount',

        'balance_before',

        'balance_after',

        'reference_type',

        'reference_id',

        'description',

        'created_by'

    ];



    protected $casts = [

        'amount' => 'decimal:8',

        'balance_before' => 'decimal:8',

        'balance_after' => 'decimal:8'

    ];



    public function wallet()
    {
        return $this->belongsTo(
            Wallet::class
        );
    }



    public function transaction()
    {
        return $this->belongsTo(
            Transaction::class
        );
    }



    public function reference()
    {
        return $this->morphTo();
    }
}