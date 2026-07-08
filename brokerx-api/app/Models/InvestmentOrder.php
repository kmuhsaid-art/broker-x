<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\InvestmentProduct;

class InvestmentOrder extends Model
{
    protected $fillable = [

        'uuid',

        'user_id',

        'product_id',

        'wallet_id',

        'amount',

        'expected_profit',

        'current_profit',

        'status',

        'user_note',

        'admin_note',

        'approved_by',

        'approved_at',

        'started_at',

        'ended_at',

        'completed_at',

    ];

    protected $casts = [

        'approved_at'=>'datetime',

        'started_at'=>'datetime',

        'ended_at'=>'datetime',

        'completed_at'=>'datetime',

    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function wallet()
    {
        return $this->belongsTo(Wallet::class);
    }

    public function product()
    {
        return $this->belongsTo(

            InvestmentProduct::class,

            'product_id'

        );
    }

    public function admin()
    {
        return $this->belongsTo(

            User::class,

            'approved_by'

        );
    }

    public function logs()
    {
        return $this->hasMany(

            InvestmentLog::class

        );
    }

    public function walletLocks()
    {
        return $this->morphMany(
            WalletLock::class,
            'reference'
        );
    }

    public function payouts()
    {
        return $this->hasMany(

            InvestmentPayout::class

        );
    }

    public function transactions()
    {
        return $this->hasMany(
            InvestmentTransaction::class
        );
    }

}