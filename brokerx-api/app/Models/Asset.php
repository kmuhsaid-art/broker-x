<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Asset extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'asset_category_id',
        'symbol',
        'name',
        'slug',
        'icon',
        'precision',
        'display_precision',
        'is_tradeable',
        'is_depositable',
        'is_withdrawable',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /*
    |--------------------------------------------------------------------------
    | Category
    |--------------------------------------------------------------------------
    */

    public function category(): BelongsTo
    {
        return $this->belongsTo(
            AssetCategory::class,
            'asset_category_id'
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Wallets
    |--------------------------------------------------------------------------
    */

    public function wallets(): HasMany
    {
        return $this->hasMany(
            Wallet::class
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Markets
    |--------------------------------------------------------------------------
    */

    public function baseMarkets(): HasMany
    {
        return $this->hasMany(
            Market::class,
            'base_asset_id'
        );
    }

    public function quoteMarkets(): HasMany
    {
        return $this->hasMany(
            Market::class,
            'quote_asset_id'
        );
    }
}