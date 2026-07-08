<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\InvestmentOrder;
use App\Models\InvestmentProduct;
use App\Models\Wallet;
use App\Services\Investment\InvestmentService;
use Illuminate\Http\Request;

class InvestmentController extends Controller
{
    public function __construct(

        private InvestmentService $investmentService

    ) {
    }

    /*
    |--------------------------------------------------------------------------
    | Investment Products
    |--------------------------------------------------------------------------
    */

    public function index()
    {

        return response()->json([

            'success' => true,

            'data' => InvestmentProduct::with('category')

                ->where('status', true)

                ->orderByDesc('featured')

                ->latest()

                ->get()

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | Product Detail
    |--------------------------------------------------------------------------
    */

    public function show(
        InvestmentProduct $product
    ) {

        return response()->json([

            'success' => true,

            'data' => $product->load('category')

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | My Investments
    |--------------------------------------------------------------------------
    */

    public function myInvestments(
        Request $request
    ) {

        return response()->json([

            'success' => true,

            'data' => InvestmentOrder::with([

                'product.category',

                'wallet',

                'logs',

                'payouts'

            ])

            ->where(

                'user_id',

                $request->user()->id

            )

            ->latest()

            ->get()

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | Investment Detail
    |--------------------------------------------------------------------------
    */

    public function detail(

        InvestmentOrder $investment

    ) {

        if (

            auth()->id() != $investment->user_id

        ) {

            abort(403);

        }

        return response()->json([

            'success' => true,

            'data' => $investment->load([

                'product.category',

                'wallet',

                'logs',

                'payouts'

            ])

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | Create Investment
    |--------------------------------------------------------------------------
    */

    public function invest(

        Request $request,

        InvestmentProduct $product

    ) {

        $request->validate([

            'wallet_id' => [

                'required',

                'exists:wallets,id'

            ],

            'amount' => [

                'required',

                'numeric'

            ],

            'user_note' => [

                'nullable',

                'string',

                'max:1000'

            ]

        ]);

        $wallet = Wallet::where(

            'id',

            $request->wallet_id

        )

        ->where(

            'user_id',

            auth()->id()

        )

        ->firstOrFail();

        $investment =

            $this->investmentService->create(

                product: $product,

                wallet: $wallet,

                amount: $request->amount,

                userNote: $request->user_note,

                userId: auth()->id()

            );

        return response()->json([

            'success' => true,

            'message' =>

                'Investment successfully created.',

            'data' =>

                $investment->load([

                    'product.category',

                    'wallet'

                ])

        ], 201);

    }

    /*
    |--------------------------------------------------------------------------
    | Cancel Investment
    |--------------------------------------------------------------------------
    */

    public function cancel(

        InvestmentOrder $investment

    ) {

        if (

            auth()->id() !=

            $investment->user_id

        ) {

            abort(403);

        }

        $investment =

            $this->investmentService

            ->cancel(

                $investment

            );

        return response()->json([

            'success' => true,

            'message' =>

                'Investment cancelled.',

            'data' => $investment

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | Active Investments
    |--------------------------------------------------------------------------
    */

    public function active()

    {

        return response()->json([

            'success' => true,

            'data' => InvestmentOrder::with(

                'product'

            )

            ->where(

                'user_id',

                auth()->id()

            )

            ->where(

                'status',

                'ACTIVE'

            )

            ->latest()

            ->get()

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | Completed Investments
    |--------------------------------------------------------------------------
    */

    public function completed()

    {

        return response()->json([

            'success' => true,

            'data' => InvestmentOrder::with(

                'product'

            )

            ->where(

                'user_id',

                auth()->id()

            )

            ->where(

                'status',

                'COMPLETED'

            )

            ->latest()

            ->get()

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | Pending Investments
    |--------------------------------------------------------------------------
    */

    public function pending()

    {

        return response()->json([

            'success' => true,

            'data' => InvestmentOrder::with(

                'product'

            )

            ->where(

                'user_id',

                auth()->id()

            )

            ->where(

                'status',

                'PENDING'

            )

            ->latest()

            ->get()

        ]);

    }
}