<?php

namespace App\Services;

use App\Models\Candle;
use App\Models\Market;
use App\Models\Order;

class MarketService
{
    public function index()
    {
        return Market::query()

            ->with([
                'baseAsset',
                'quoteAsset',
                'price',
            ])

            ->where('is_active', true)

            ->orderBy('display_name')

            ->get()

            ->map(function ($market) {

                return [

                    'id' => $market->id,

                    'uuid' => $market->uuid,

                    'symbol' => $market->symbol,

                    'display_name' => $market->display_name,

                    'engine' => $market->engine,

                    'base_asset' => $market->baseAsset?->symbol,

                    'quote_asset' => $market->quoteAsset?->symbol,

                    'price' => $market->price?->last_price,

                    'bid_price' => $market->price?->bid_price,

                    'ask_price' => $market->price?->ask_price,

                    'high_24h' => $market->price?->high_24h,

                    'low_24h' => $market->price?->low_24h,

                    'volume_24h' => $market->price?->volume_24h,

                    'change_24h' => $market->price?->change_24h,

                    'maker_fee' => $market->maker_fee,

                    'taker_fee' => $market->taker_fee,

                ];

            });
    }

    public function show(string $symbol)
    {
        $market = Market::query()

            ->with([
                'baseAsset',
                'quoteAsset',
                'price',
            ])

            ->where('symbol', $symbol)

            ->where('is_active', true)

            ->firstOrFail();

        return [

            'id' => $market->id,

            'uuid' => $market->uuid,

            'symbol' => $market->symbol,

            'display_name' => $market->display_name,

            'engine' => $market->engine,

            'price_precision' => $market->price_precision,

            'quantity_precision' => $market->quantity_precision,

            'tick_size' => $market->tick_size,

            'step_size' => $market->step_size,

            'maker_fee' => $market->maker_fee,

            'taker_fee' => $market->taker_fee,

            'price' => $market->price,

            'base_asset' => $market->baseAsset,

            'quote_asset' => $market->quoteAsset,

        ];
    }

    public function ticker()
    {
        return $this->index();
    }

    public function orderBook(string $symbol)
    {
        $market = Market::where('symbol', $symbol)->firstOrFail();

        return [

            'market' => [

                'id' => $market->id,

                'symbol' => $market->symbol,

                'display_name' => $market->display_name,

            ],

            'bids' => Order::query()

                ->where('market_id', $market->id)

                ->where('status', 'OPEN')

                ->where('side', 'BUY')

                ->orderByDesc('price')

                ->limit(20)

                ->get(),

            'asks' => Order::query()

                ->where('market_id', $market->id)

                ->where('status', 'OPEN')

                ->where('side', 'SELL')

                ->orderBy('price')

                ->limit(20)

                ->get(),

        ];
    }

    public function candles(
        string $symbol,
        string $interval = '1m',
        int $limit = 200
    ) {

        $market = Market::where('symbol', $symbol)->firstOrFail();

        return Candle::query()

            ->where('market_id', $market->id)

            ->where('interval', $interval)

            ->latest('open_time')

            ->limit($limit)

            ->get()

            ->reverse()

            ->values();
    }
}