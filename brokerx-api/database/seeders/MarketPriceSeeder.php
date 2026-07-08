<?php

namespace Database\Seeders;

use App\Models\Market;
use App\Models\MarketPrice;
use Illuminate\Database\Seeder;

class MarketPriceSeeder extends Seeder
{
    public function run(): void
    {
        $prices = [

            'BTCUSDT' => [
                'last_price' => 108250.35,
                'bid_price' => 108245.80,
                'ask_price' => 108255.20,
                'high_24h' => 109120.50,
                'low_24h' => 107180.30,
                'volume_24h' => 15234.58,
                'change_24h' => 1.82,
            ],

            'ETHUSDT' => [
                'last_price' => 2548.70,
                'bid_price' => 2548.30,
                'ask_price' => 2549.10,
                'high_24h' => 2580.00,
                'low_24h' => 2498.40,
                'volume_24h' => 98450.12,
                'change_24h' => 2.14,
            ],

            'BNBUSDT' => [
                'last_price' => 672.35,
                'bid_price' => 672.20,
                'ask_price' => 672.60,
                'high_24h' => 680.10,
                'low_24h' => 665.20,
                'volume_24h' => 35210.65,
                'change_24h' => 0.91,
            ],

            'SOLUSDT' => [
                'last_price' => 151.44,
                'bid_price' => 151.40,
                'ask_price' => 151.48,
                'high_24h' => 154.80,
                'low_24h' => 148.60,
                'volume_24h' => 62431.22,
                'change_24h' => 1.35,
            ],

            'XRPUSDT' => [
                'last_price' => 2.24,
                'bid_price' => 2.23,
                'ask_price' => 2.24,
                'high_24h' => 2.29,
                'low_24h' => 2.18,
                'volume_24h' => 2154800,
                'change_24h' => -0.62,
            ],

            'ADAUSDT' => [
                'last_price' => 0.67,
                'bid_price' => 0.67,
                'ask_price' => 0.68,
                'high_24h' => 0.69,
                'low_24h' => 0.66,
                'volume_24h' => 834000,
                'change_24h' => 0.42,
            ],

            'DOGEUSDT' => [
                'last_price' => 0.18,
                'bid_price' => 0.18,
                'ask_price' => 0.18,
                'high_24h' => 0.19,
                'low_24h' => 0.17,
                'volume_24h' => 3280000,
                'change_24h' => -1.10,
            ],

            'EURUSD' => [
                'last_price' => 1.1742,
                'bid_price' => 1.1741,
                'ask_price' => 1.1743,
                'high_24h' => 1.1760,
                'low_24h' => 1.1712,
                'volume_24h' => 0,
                'change_24h' => 0.18,
            ],

            'GBPUSD' => [
                'last_price' => 1.3715,
                'bid_price' => 1.3714,
                'ask_price' => 1.3716,
                'high_24h' => 1.3742,
                'low_24h' => 1.3660,
                'volume_24h' => 0,
                'change_24h' => -0.24,
            ],

            'USDJPY' => [
                'last_price' => 144.32,
                'bid_price' => 144.31,
                'ask_price' => 144.33,
                'high_24h' => 144.90,
                'low_24h' => 143.82,
                'volume_24h' => 0,
                'change_24h' => 0.45,
            ],

            'XAUUSD' => [
                'last_price' => 3348.25,
                'bid_price' => 3348.10,
                'ask_price' => 3348.40,
                'high_24h' => 3362.50,
                'low_24h' => 3324.70,
                'volume_24h' => 0,
                'change_24h' => 0.77,
            ],

            'XAGUSD' => [
                'last_price' => 36.28,
                'bid_price' => 36.27,
                'ask_price' => 36.29,
                'high_24h' => 36.61,
                'low_24h' => 35.90,
                'volume_24h' => 0,
                'change_24h' => 0.54,
            ],

        ];

        foreach ($prices as $symbol => $price) {

            $market = Market::where('symbol', $symbol)->first();

            if (!$market) {
                continue;
            }

            MarketPrice::updateOrCreate(

                [
                    'market_id' => $market->id,
                ],

                array_merge(
                    [
                        'market_id' => $market->id,
                    ],
                    $price,
                    [
                        'price_at' => now(),
                    ]
                )

            );
        }
    }
}