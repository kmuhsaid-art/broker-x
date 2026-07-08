<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WalletTransaction extends Model
{
    protected $fillable = [

        'uuid',

        'wallet_id',

        'user_id',

        'currency',

        'type',

        'direction',

        'amount',

        'balance_before',

        'balance_after',

        'locked_before',

        'locked_after',

        'reference_type',

        'reference_id',

        'reference_no',

        'description',

        'metadata',

        'created_by'

    ];

    protected $casts = [

        'metadata'=>'array',

    ];

    public function wallet()
    {
        return $this->belongsTo(Wallet::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function creator()
    {
        return $this->belongsTo(User::class,'created_by');
    }
}