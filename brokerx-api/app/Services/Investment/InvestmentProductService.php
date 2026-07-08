<?php

namespace App\Services\Investment;

use App\Models\InvestmentProduct;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class InvestmentProductService
{
    public function all()
    {
        return InvestmentProduct::with('category')
            ->latest()
            ->paginate(20);
    }

    public function active()
    {
        return InvestmentProduct::with('category')
            ->where('status', true)
            ->latest()
            ->get();
    }

    public function create(array $data): InvestmentProduct
    {
        return DB::transaction(function () use ($data) {

            return InvestmentProduct::create([

                'uuid' => (string) Str::uuid(),

                'category_id' => $data['category_id'],

                'title' => $data['title'],

                'slug' => $this->uniqueSlug(

                    Str::slug($data['title'])

                ),

                'description' => $data['description'],

                'currency' => $data['currency'],

                'minimum_amount' => $data['minimum_amount'],

                'maximum_amount' => $data['maximum_amount'],

                'expected_roi' => $data['expected_roi'],

                'roi_type' => $data['roi_type'],

                'duration_value' => $data['duration_value'],

                'duration_unit' => $data['duration_unit'],

                'profit_distribution' => $data['profit_distribution'],

                'risk_level' => $data['risk_level'],

                'featured' => $data['featured'] ?? false,

                'allow_early_withdraw' =>
                    $data['allow_early_withdraw'] ?? false,

                'auto_renew' =>
                    $data['auto_renew'] ?? false,

                'status' =>
                    $data['status'] ?? true,

                'thumbnail' =>
                    $data['thumbnail'] ?? null,

                'banner' =>
                    $data['banner'] ?? null,

                'terms' =>
                    $data['terms'] ?? null,

                'created_by' =>
                    $data['created_by'],

            ]);

        });
    }

    public function update(
        InvestmentProduct $product,
        array $data
    ): InvestmentProduct {

        $product->update([

            'category_id' => $data['category_id'],

            'title' => $data['title'],

            'slug' => $this->uniqueSlug(
                Str::slug($data['title']),
                $product->id
            ),

            'description' => $data['description'],

            'currency' => $data['currency'],

            'minimum_amount' => $data['minimum_amount'],

            'maximum_amount' => $data['maximum_amount'],

            'expected_roi' => $data['expected_roi'],

            'roi_type' => $data['roi_type'],

            'duration_value' => $data['duration_value'],

            'duration_unit' => $data['duration_unit'],

            'profit_distribution' => $data['profit_distribution'],

            'risk_level' => $data['risk_level'],

            'featured' => $data['featured'],

            'allow_early_withdraw' =>
                $data['allow_early_withdraw'],

            'auto_renew' => $data['auto_renew'],

            'status' => $data['status'],

            'thumbnail' => $data['thumbnail'],

            'banner' => $data['banner'],

            'terms' => $data['terms'],

        ]);

        return $product->fresh();
    }

    public function delete(
        InvestmentProduct $product
    ): void {

        if (
            $product->investments()->exists()
        ) {

            throw new \Exception(
                'Product already used.'
            );

        }

        $product->delete();
    }

    protected function uniqueSlug(
        string $slug,
        ?int $ignore = null
    ): string {

        $base = $slug;

        $i = 1;

        while (

            InvestmentProduct::when(

                $ignore,

                fn($q)=>$q->where('id','!=',$ignore)

            )

            ->where('slug',$slug)

            ->exists()

        ){

            $slug = $base.'-'.$i;

            $i++;

        }

        return $slug;
    }
}