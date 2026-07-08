<?php

namespace Database\Seeders;

use App\Models\AssetCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class AssetCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [

            [
                'name' => 'Cryptocurrency',
                'code' => 'CRYPTO',
            ],

            [
                'name' => 'Forex',
                'code' => 'FOREX',
            ],

            [
                'name' => 'Precious Metal',
                'code' => 'METAL',
            ],

            [
                'name' => 'Commodity',
                'code' => 'COMMODITY',
            ],

            [
                'name' => 'Stock',
                'code' => 'STOCK',
            ],

            [
                'name' => 'Index',
                'code' => 'INDEX',
            ],

        ];

        foreach ($categories as $category) {

            AssetCategory::updateOrCreate(

                [
                    'code' => $category['code'],
                ],

                [
                    'uuid' => Str::uuid(),

                    'name' => $category['name'],

                    'description' => $category['name'],

                    'is_active' => true,
                ]

            );
        }
    }
}