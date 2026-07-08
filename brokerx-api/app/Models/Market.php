<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Market extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'base_asset_id',
        'quote_asset_id',
        'symbol',
        'display_name',
        'engine',
        'price_precision',
        'quantity_precision',
        'tick_size',
        'step_size',
        'min_quantity',
        'max_quantity',
        'maker_fee',
        'taker_fee',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /*
    |--------------------------------------------------------------------------
    | Asset
    |--------------------------------------------------------------------------
    */

    public function baseAsset(): BelongsTo
    {
        return $this->belongsTo(
            Asset::class,
            'base_asset_id'
        );
    }

    public function quoteAsset(): BelongsTo
    {
        return $this->belongsTo(
            Asset::class,
            'quote_asset_id'
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Market Price
    |--------------------------------------------------------------------------
    */

    public function price(): HasOne
    {
        return $this->hasOne(
            MarketPrice::class
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Candles
    |--------------------------------------------------------------------------
    */

    public function candles(): HasMany
    {
        return $this->hasMany(
            Candle::class
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Orders
    |--------------------------------------------------------------------------
    */

    public function orders(): HasMany
    {
        return $this->hasMany(
            Order::class
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Trades
    |--------------------------------------------------------------------------
    */

    public function trades(): HasMany
    {
        return $this->hasMany(
            Trade::class
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Positions
    |--------------------------------------------------------------------------
    */

    public function positions(): HasMany
    {
        return $this->hasMany(
            Position::class
        );
    }
}