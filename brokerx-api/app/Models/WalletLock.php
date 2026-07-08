<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Enums\WalletLockStatus;

class WalletLock extends Model
{
    protected $fillable = [

        'wallet_id',

        'amount',

        'type',

        'status',

        'reference_type',

        'reference_id',

        'description',

        'created_by',

        'released_at',

        'release_note',

        'released_by'

    ];


    protected $casts = [

    'amount' => 'decimal:8',

    'released_at' => 'datetime',

    'status' => WalletLockStatus::class

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