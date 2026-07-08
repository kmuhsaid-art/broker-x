<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Deposit extends Model
{
    protected $fillable = [

        'user_id',

        'wallet_id',

        'amount',

        'currency',

        'payment_method',

        'payment_reference',

        'status',

        'approved_by',

        'approved_at',

        'note'

    ];

    protected $casts = [

        'amount' => 'decimal:8',

        'approved_at' => 'datetime'

    ];


    public function wallet()
    {
        return $this->belongsTo(Wallet::class);
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function approver()
    {
        return $this->belongsTo(
            User::class,
            'approved_by'
        );
    }
}