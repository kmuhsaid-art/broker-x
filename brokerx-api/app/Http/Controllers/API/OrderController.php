<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Market;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([

            'symbol' => ['required','string'],

            'side' => ['required','in:buy,sell'],

            'type' => ['required','in:market,limit'],

            'price' => ['nullable','numeric'],

            'quantity' => ['required','numeric','gt:0'],

        ]);

        $market = Market::where(

            'symbol',

            $validated['symbol']

        )->firstOrFail();

        $order = Order::create([

            'user_id' => $request->user()->id,

            'market_id' => $market->id,

            'side' => $validated['side'],

            'type' => $validated['type'],

            'price' => $validated['price'],

            'quantity' => $validated['quantity'],

            'remaining_quantity' => $validated['quantity'],

            'status' => 'open',

        ]);

        return response()->json($order,201);
    }
}