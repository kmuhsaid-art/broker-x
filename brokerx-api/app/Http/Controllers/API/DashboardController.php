<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Wallet;
use App\Models\Order;
use App\Models\Trade;
use App\Models\Deposit;
use App\Models\Withdrawal;
use App\Models\Position;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        /*
        |--------------------------------------------------------------------------
        | Wallet
        |--------------------------------------------------------------------------
        */

        $wallets = Wallet::where('user_id', $user->id)
            ->orderBy('currency')
            ->get();

        $totalBalance = $wallets->sum('balance');

        $walletBalance = $wallets
            ->where('currency', 'USDT')
            ->sum('balance');

        /*
        |--------------------------------------------------------------------------
        | Orders
        |--------------------------------------------------------------------------
        */

        $openOrders = Order::where('user_id', $user->id)
            ->whereIn('status', [
                'PENDING',
                'OPEN',
                'PARTIALLY_FILLED',
            ])
            ->latest()
            ->take(10)
            ->get();

        /*
        |--------------------------------------------------------------------------
        | Positions
        |--------------------------------------------------------------------------
        */

        $openPositions = Position::where('user_id', $user->id)
            ->where('status', 'OPEN')
            ->latest()
            ->take(10)
            ->get();

        /*
        |--------------------------------------------------------------------------
        | Trades
        |--------------------------------------------------------------------------
        */

        $recentTrades = Trade::where(function ($query) use ($user) {

                $query->where('buyer_id', $user->id)
                      ->orWhere('seller_id', $user->id);

            })
            ->latest('executed_at')
            ->take(10)
            ->get();

        /*
        |--------------------------------------------------------------------------
        | Deposits
        |--------------------------------------------------------------------------
        */

        $recentDeposits = Deposit::where('user_id', $user->id)
            ->latest()
            ->take(5)
            ->get();

        /*
        |--------------------------------------------------------------------------
        | Withdrawals
        |--------------------------------------------------------------------------
        */

        $recentWithdrawals = Withdrawal::where('user_id', $user->id)
            ->latest()
            ->take(5)
            ->get();

        return response()->json([

            'user' => [

                'id' => $user->id,

                'name' => $user->name,

                'email' => $user->email,

            ],

            'statistics' => [

                'wallets' => $wallets->count(),

                'orders' => $openOrders->count(),

                'positions' => $openPositions->count(),

                'trades' => $recentTrades->count(),

            ],

            'total_balance' => $totalBalance,

            'wallet_balance' => $walletBalance,

            'today_profit' => 0,

            'today_profit_percent' => 0,

            'wallets' => $wallets,

            'recent_deposits' => $recentDeposits,

            'recent_withdrawals' => $recentWithdrawals,

            'recent_trades' => $recentTrades,

            'open_orders' => $openOrders,

            'open_positions' => $openPositions,

            'notifications' => [],

            'price_alerts' => [],

            'economic_calendar' => [],

            'news' => [],

        ]);
    }
}