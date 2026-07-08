<?php

namespace App\Services\Investment;

use App\Models\InvestmentProduct;

class InvestmentCalculator
{
    public function expectedProfit(
        InvestmentProduct $product,
        float $amount
    ): float {

        if ($product->roi_type === 'FIXED') {

            return $product->expected_roi;

        }

        return round(

            $amount * ($product->expected_roi / 100),

            8

        );
    }

    public function endDate(
        InvestmentProduct $product
    ) {

        return match ($product->duration_unit) {

            'MINUTE' => now()->addMinutes(
                $product->duration_value
            ),

            'HOUR' => now()->addHours(
                $product->duration_value
            ),

            'DAY' => now()->addDays(
                $product->duration_value
            ),

            'WEEK' => now()->addWeeks(
                $product->duration_value
            ),

            'MONTH' => now()->addMonths(
                $product->duration_value
            ),

            'YEAR' => now()->addYears(
                $product->duration_value
            ),

        };

    }
}