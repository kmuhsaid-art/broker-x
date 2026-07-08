<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Withdrawal extends Model
{
    protected $fillable = [

        'user_id',

        'wallet_id',

        'amount',

        'fee',

        'net_amount',

        'currency',

        'destination',

        'status',

        'approved_by',

        'approved_at',

        'note'

    ];

    protected $casts = [

        'amount' => 'decimal:8',

        'fee' => 'decimal:8',

        'net_amount' => 'decimal:8',

        'approved_at' => 'datetime'

    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function wallet()
    {
        return $this->belongsTo(Wallet::class);
    }


    public function approver()
    {
        return $this->belongsTo(
            User::class,
            'approved_by'
        );
    }


    public function walletLocks()
    {
        return $this->morphMany(
            WalletLock::class,
            'reference'
        );
    }
}