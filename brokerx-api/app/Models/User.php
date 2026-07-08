<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

#[Fillable(['name', 'email', 'password'])]
#[Hidden(['password', 'remember_token'])]
class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * User Wallets
     */
    public function wallets(): HasMany
{
    return $this->hasMany(Wallet::class);
}

public function orders(): HasMany
{
    return $this->hasMany(Order::class);
}

public function positions(): HasMany
{
    return $this->hasMany(Position::class);
}

public function buyTrades(): HasMany
{
    return $this->hasMany(Trade::class, 'buyer_id');
}

public function sellTrades(): HasMany
{
    return $this->hasMany(Trade::class, 'seller_id');
}

public function deposits()
{
    return $this->hasMany(Deposit::class);
}

public function withdrawals()
{
    return $this->hasMany(Withdrawal::class);
}

}