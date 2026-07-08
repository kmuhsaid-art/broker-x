<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Wallet extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'currency',
        'balance',
        'locked_balance',
        'status'
    ];

    protected $casts = [
        'balance' => 'decimal:8',
        'locked_balance' => 'decimal:8',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }


    public function availableBalance()
    {
        return bcsub(
            $this->balance,
            $this->locked_balance,
            8
        );
    }


    public function credit(float $amount): void
    {
        $this->increment(
            'balance',
            $amount
        );
    }


    public function debit(float $amount): bool
    {
        if ($this->availableBalance() < $amount) {
            return false;
        }

        $this->decrement(
            'balance',
            $amount
        );

        return true;
    }


    public function lock(float $amount): bool
    {
        if ($this->availableBalance() < $amount) {
            return false;
        }

        $this->increment(
            'locked_balance',
            $amount
        );

        return true;
    }


    public function unlock(float $amount): void
    {
        $this->decrement(
            'locked_balance',
            $amount
        );
    }
}