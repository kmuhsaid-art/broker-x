<?php

namespace Database\Seeders;

use App\Models\Asset;
use App\Models\AssetCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class AssetSeeder extends Seeder
{
    public function run(): void
    {
        $crypto = AssetCategory::where('code', 'CRYPTO')->first();
        $forex = AssetCategory::where('code', 'FOREX')->first();
        $metal = AssetCategory::where('code', 'METAL')->first();

        $assets = [

            // =======================
            // Crypto
            // =======================

            ['category'=>$crypto,'symbol'=>'BTC','name'=>'Bitcoin'],
            ['category'=>$crypto,'symbol'=>'ETH','name'=>'Ethereum'],
            ['category'=>$crypto,'symbol'=>'BNB','name'=>'BNB'],
            ['category'=>$crypto,'symbol'=>'SOL','name'=>'Solana'],
            ['category'=>$crypto,'symbol'=>'XRP','name'=>'Ripple'],
            ['category'=>$crypto,'symbol'=>'ADA','name'=>'Cardano'],
            ['category'=>$crypto,'symbol'=>'DOGE','name'=>'Dogecoin'],
            ['category'=>$crypto,'symbol'=>'USDT','name'=>'Tether'],
            ['category'=>$crypto,'symbol'=>'USDC','name'=>'USD Coin'],

            // =======================
            // Forex
            // =======================

            ['category'=>$forex,'symbol'=>'USD','name'=>'US Dollar'],
            ['category'=>$forex,'symbol'=>'EUR','name'=>'Euro'],
            ['category'=>$forex,'symbol'=>'GBP','name'=>'British Pound'],
            ['category'=>$forex,'symbol'=>'JPY','name'=>'Japanese Yen'],

            // =======================
            // Precious Metal
            // =======================

            ['category'=>$metal,'symbol'=>'XAU','name'=>'Gold'],
            ['category'=>$metal,'symbol'=>'XAG','name'=>'Silver'],

        ];

        foreach ($assets as $asset) {

            Asset::updateOrCreate(

    [
        'symbol' => $asset['symbol'],
    ],

    [
        'uuid' => Str::uuid(),

        'asset_category_id' => $asset['category']->id,

        'name' => $asset['name'],

        'slug' => strtolower($asset['symbol']),

        'icon' => null,

        'precision' => 8,

        'display_precision' => 2,

        'is_tradeable' => true,

        'is_depositable' => true,

        'is_withdrawable' => true,

        'is_active' => true,
    ]

);

        }
    }
}