<?php

namespace App\Http\Requests\Investment;

use Illuminate\Foundation\Http\FormRequest;

class StoreInvestmentCategoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'name' => 'required|string|max:100',

            'slug' => 'required|string|max:100|unique:investment_categories,slug',

            'description' => 'nullable|string',

            'icon' => 'nullable|string|max:255',

            'color' => 'nullable|string|max:30',

            'status' => 'boolean',

        ];
    }
}