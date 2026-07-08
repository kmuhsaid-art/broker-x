<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\InvestmentOrder;
use App\Services\Investment\InvestmentService;
use Illuminate\Http\Request;

class AdminInvestmentController extends Controller
{
    public function __construct(

        private InvestmentService $investmentService

    ){}

    /*
    |--------------------------------------------------------------------------
    | Dashboard
    |--------------------------------------------------------------------------
    */

    public function dashboard()
    {

        return response()->json([

            'statistics'=>[

                'products'=>\App\Models\InvestmentProduct::count(),

                'pending'=>InvestmentOrder::where('status','PENDING')->count(),

                'active'=>InvestmentOrder::where('status','ACTIVE')->count(),

                'completed'=>InvestmentOrder::where('status','COMPLETED')->count(),

                'cancelled'=>InvestmentOrder::where('status','CANCELLED')->count(),

                'rejected'=>InvestmentOrder::where('status','REJECTED')->count(),

                'total_amount'=>

                    InvestmentOrder::sum('amount'),

                'total_profit'=>

                    InvestmentOrder::sum('expected_profit')

            ]

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | All Investments
    |--------------------------------------------------------------------------
    */

    public function index(Request $request)
    {

        $query=InvestmentOrder::with([

            'user',

            'wallet',

            'product.category',

            'admin'

        ]);

        if($request->filled('status')){

            $query->where(

                'status',

                $request->status

            );

        }

        if($request->filled('user')){

            $query->where(

                'user_id',

                $request->user

            );

        }

        return response()->json([

            'success'=>true,

            'data'=>$query

                ->latest()

                ->paginate(20)

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | Detail
    |--------------------------------------------------------------------------
    */

    public function show(

        InvestmentOrder $investment

    ){

        return response()->json([

            'success'=>true,

            'data'=>$investment->load([

                'user',

                'wallet',

                'product.category',

                'logs',

                'payouts',

                'admin'

            ])

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | Approve
    |--------------------------------------------------------------------------
    */

    public function approve(

        Request $request,

        InvestmentOrder $investment

    ){

        $request->validate([

            'admin_note'=>[
                'nullable',
                'string',
                'max:1000'
            ]

        ]);

        $investment=

            $this->investmentService->approve(

                investment:$investment,

                adminId:auth()->id(),

                note:$request->admin_note

            );

        return response()->json([

            'success'=>true,

            'message'=>'Investment approved.',

            'data'=>$investment

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | Reject
    |--------------------------------------------------------------------------
    */

    public function reject(

        Request $request,

        InvestmentOrder $investment

    ){

        $request->validate([

            'admin_note'=>[
                'required',
                'string',
                'max:1000'
            ]

        ]);

        $investment=

            $this->investmentService->reject(

                investment:$investment,

                adminId:auth()->id(),

                note:$request->admin_note

            );

        return response()->json([

            'success'=>true,

            'message'=>'Investment rejected.',

            'data'=>$investment

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | Complete
    |--------------------------------------------------------------------------
    */

    public function complete(

        InvestmentOrder $investment

    ){

        $investment=

            $this->investmentService->complete(

                $investment

            );

        return response()->json([

            'success'=>true,

            'message'=>'Investment completed.',

            'data'=>$investment

        ]);

    }

    /*
    |--------------------------------------------------------------------------
    | Pending
    |--------------------------------------------------------------------------
    */

    public function pending()
    {

        return response()->json(

            InvestmentOrder::with([

                'user',

                'product'

            ])

            ->where(

                'status',

                'PENDING'

            )

            ->latest()

            ->get()

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Active
    |--------------------------------------------------------------------------
    */

    public function active()
    {

        return response()->json(

            InvestmentOrder::with([

                'user',

                'product'

            ])

            ->where(

                'status',

                'ACTIVE'

            )

            ->latest()

            ->get()

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Completed
    |--------------------------------------------------------------------------
    */

    public function completed()
    {

        return response()->json(

            InvestmentOrder::with([

                'user',

                'product'

            ])

            ->where(

                'status',

                'COMPLETED'

            )

            ->latest()

            ->get()

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Cancelled
    |--------------------------------------------------------------------------
    */

    public function cancelled()
    {

        return response()->json(

            InvestmentOrder::with([

                'user',

                'product'

            ])

            ->where(

                'status',

                'CANCELLED'

            )

            ->latest()

            ->get()

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Rejected
    |--------------------------------------------------------------------------
    */

    public function rejected()
    {

        return response()->json(

            InvestmentOrder::with([

                'user',

                'product'

            ])

            ->where(

                'status',

                'REJECTED'

            )

            ->latest()

            ->get()

        );

    }
}