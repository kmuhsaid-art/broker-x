<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Investment\StoreInvestmentProductRequest;
use App\Http\Requests\Investment\UpdateInvestmentProductRequest;
use App\Models\InvestmentProduct;
use Illuminate\Support\Str;

class InvestmentProductController extends Controller
{
    public function index()
    {
        return response()->json([

            'success' => true,

            'data' => InvestmentProduct::with([
                'category',
                'creator'
            ])
            ->latest()
            ->paginate(20)

        ]);
    }

    public function store(
        StoreInvestmentProductRequest $request
    ) {

        $product = InvestmentProduct::create([

            'uuid' => (string) Str::uuid(),

            ...$request->validated(),

        ]);

        return response()->json([

            'success' => true,

            'message' => 'Investment Product Created.',

            'data' => $product->load([
                'category',
                'creator'
            ])

        ],201);

    }

    public function show(
        InvestmentProduct $product
    ) {

        return response()->json([

            'success'=>true,

            'data'=>$product->load([

                'category',

                'creator',

                'investments'

            ])

        ]);

    }

    public function update(

        UpdateInvestmentProductRequest $request,

        InvestmentProduct $product

    ){

        $product->update(

            $request->validated()

        );

        return response()->json([

            'success'=>true,

            'message'=>'Investment Updated.',

            'data'=>$product->fresh()->load([

                'category',

                'creator'

            ])

        ]);

    }

    public function destroy(

        InvestmentProduct $product

    ){

        if(

            $product->investments()->exists()

        ){

            return response()->json([

                'success'=>false,

                'message'=>'Product already has investments.'

            ],422);

        }

        $product->delete();

        return response()->json([

            'success'=>true,

            'message'=>'Investment deleted.'

        ]);

    }
}