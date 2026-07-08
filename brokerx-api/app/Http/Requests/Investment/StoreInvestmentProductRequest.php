<?php

namespace App\Http\Requests\Investment;

use Illuminate\Foundation\Http\FormRequest;

class StoreInvestmentProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'category_id' => 'required|exists:investment_categories,id',

            'title' => 'required|string|max:255',

            'slug' => 'required|string|max:255|unique:investment_products,slug',

            'description' => 'required|string',

            'currency' => 'required|string|max:20',

            'minimum_amount' => 'required|numeric|min:0',

            'maximum_amount' => 'required|numeric|gte:minimum_amount',

            'expected_roi' => 'required|numeric|min:0',

            'duration' => 'required|integer|min:1',

            'duration_type' => 'required|in:DAY,MONTH,YEAR',

            'risk_level' => 'required|in:LOW,MEDIUM,HIGH',

            'image' => 'nullable|string',

            'featured' => 'boolean',

            'status' => 'boolean',

        ];
    }
}