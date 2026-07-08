<?php

namespace Database\Seeders;

use App\Models\Asset;
use App\Models\Market;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class MarketSeeder extends Seeder
{
    public function run(): void
    {
        $markets = [

            // ==========================
            // Crypto
            // ==========================

            ['BTC','USDT'],
            ['ETH','USDT'],
            ['BNB','USDT'],
            ['SOL','USDT'],
            ['XRP','USDT'],
            ['ADA','USDT'],
            ['DOGE','USDT'],

            // ==========================
            // Forex
            // ==========================

            ['EUR','USD'],
            ['GBP','USD'],
            ['USD','JPY'],

            // ==========================
            // Metals
            // ==========================

            ['XAU','USD'],
            ['XAG','USD'],

        ];

        foreach ($markets as [$base,$quote]) {

            $baseAsset = Asset::where('symbol',$base)->first();

            $quoteAsset = Asset::where('symbol',$quote)->first();

            if (!$baseAsset || !$quoteAsset) {
                continue;
            }

            Market::updateOrCreate(

                [
                    'symbol' => "{$base}{$quote}",
                ],

                [
    'uuid' => Str::uuid(),

    'base_asset_id' => $baseAsset->id,

    'quote_asset_id' => $quoteAsset->id,

    'symbol' => "{$base}{$quote}",

    'display_name' => "{$base} / {$quote}",

    'engine' => 'SPOT',

    'price_precision' => 2,

    'quantity_precision' => 8,

    'tick_size' => 0.01,

    'step_size' => 0.00000001,

    'min_quantity' => 0.00000001,

    'max_quantity' => 1000000,

    'maker_fee' => 0.10,

    'taker_fee' => 0.10,

    'is_active' => true,
]

            );

        }
    }
}