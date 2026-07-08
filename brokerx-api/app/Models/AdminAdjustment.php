<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminAdjustment extends Model
{
    protected $fillable = [

        'wallet_id',

        'admin_id',

        'type',

        'amount',

        'reason',

        'status'

    ];


    protected $casts = [

        'amount' => 'decimal:8'

    ];


    public function wallet()
    {
        return $this->belongsTo(Wallet::class);
    }


    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id');
    }
}