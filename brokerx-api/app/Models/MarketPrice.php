<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MarketPrice extends Model
{
    use HasFactory;

    protected $fillable = [
        'market_id',
        'last_price',
        'bid_price',
        'ask_price',
        'high_24h',
        'low_24h',
        'volume_24h',
        'change_24h',
        'price_at',
    ];

    protected $casts = [
        'price_at' => 'datetime',
    ];

    public function market(): BelongsTo
    {
        return $this->belongsTo(Market::class);
    }
}