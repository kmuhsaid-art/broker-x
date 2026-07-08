<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Investment\StoreInvestmentCategoryRequest;
use App\Http\Requests\Investment\UpdateInvestmentCategoryRequest;
use App\Models\InvestmentCategory;

class InvestmentCategoryController extends Controller
{
    public function index()
    {
        return response()->json(
            InvestmentCategory::latest()->get()
        );
    }

    public function store(StoreInvestmentCategoryRequest $request)
    {
        $category = InvestmentCategory::create(
            $request->validated()
        );

        return response()->json([
            'success' => true,
            'message' => 'Category created successfully.',
            'data' => $category,
        ], 201);
    }

    public function show(InvestmentCategory $category)
    {
        return response()->json($category);
    }

    public function update(
        UpdateInvestmentCategoryRequest $request,
        InvestmentCategory $category
    ) {
        $category->update(
            $request->validated()
        );

        return response()->json([
            'success' => true,
            'message' => 'Category updated successfully.',
            'data' => $category,
        ]);
    }

    public function destroy(
        InvestmentCategory $category
    ) {
        if ($category->products()->exists()) {

            return response()->json([
                'success' => false,
                'message' => 'Category still has products.'
            ],422);

        }

        $category->delete();

        return response()->json([
            'success' => true,
            'message' => 'Category deleted successfully.',
        ]);
    }
}