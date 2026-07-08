<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Candle extends Model
{
    use HasFactory;

    protected $fillable = [
        'market_id',
        'interval',
        'open',
        'high',
        'low',
        'close',
        'volume',
        'open_time',
        'close_time',
    ];

    protected $casts = [
        'open_time' => 'datetime',
        'close_time' => 'datetime',
    ];

    public function market(): BelongsTo
    {
        return $this->belongsTo(Market::class);
    }
}