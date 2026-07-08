<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\MarketService;
use Illuminate\Http\Request;

class MarketController extends Controller
{
    public function __construct(
        protected MarketService $marketService
    ) {}

    public function index()
    {
        return response()->json(
            $this->marketService->index()
        );
    }

    public function show(string $symbol)
    {
        return response()->json(
            $this->marketService->show($symbol)
        );
    }

    public function ticker()
    {
        return response()->json(
            $this->marketService->ticker()
        );
    }

    public function candles(
        Request $request,
        string $symbol
    ) {
        return response()->json(

            $this->marketService->candles(

                $symbol,

                $request->get('interval', '1m'),

                $request->get('limit', 200)

            )

        );
    }

    public function orderBook(string $symbol)
    {
        return response()->json(

            $this->marketService->orderBook($symbol)

        );
    }
}