<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\InvestmentProduct;
use App\Services\Investment\InvestmentService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InvestmentController extends Controller
{
    protected InvestmentService $investmentService;

    public function __construct(
        InvestmentService $investmentService
    ) {
        $this->investmentService = $investmentService;
    }


    /**
     * List investment products
     */
    public function products()
    {
        $products = InvestmentProduct::query()
            ->where('status', true)
            ->with('category')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $products
        ]);
    }


    /**
     * Create investment order
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => [
                'required',
                'exists:investment_products,id'
            ],
            'amount' => [
                'required',
                'numeric',
                'min:1'
            ],
        ]);


        $user = Auth::user();


        $investment = $this->investmentService->createInvestment(
            user: $user,
            productId: $request->product_id,
            amount: $request->amount
        );


        return response()->json([
            'success' => true,
            'message' => 'Investment created successfully',
            'data' => $investment
        ], 201);
    }



    /**
     * User investment portfolio
     */
    public function myInvestments()
    {
        $user = Auth::user();


        $investments = $this->investmentService
            ->getUserInvestments($user);


        return response()->json([
            'success' => true,
            'data' => $investments
        ]);
    }



    /**
     * Investment detail
     */
    public function show($id)
    {
        $investment = $this->investmentService
            ->getInvestmentDetail(
                Auth::user(),
                $id
            );


        return response()->json([
            'success' => true,
            'data' => $investment
        ]);
    }
}