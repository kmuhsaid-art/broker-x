<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Deposit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class DepositController extends Controller
{
    public function index(Request $request)
    {
        return Deposit::with([
            'wallet.asset',
            'paymentMethod',
            'paymentAccount'
        ])
        ->where('user_id', $request->user()->id)
        ->latest()
        ->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([

            'wallet_id' => 'required|exists:wallets,id',

            'payment_method_id' => 'required|exists:payment_methods,id',

            'payment_account_id' => 'required|exists:payment_accounts,id',

            'amount' => 'required|numeric|min:1',

            'sender_name' => 'nullable|string|max:255',

            'reference_number' => 'nullable|string|max:255',

            'proof_image' => 'required|image|max:4096',

        ]);

        $path = $request
            ->file('proof_image')
            ->store('deposits', 'public');

        $deposit = Deposit::create([

            'uuid' => Str::uuid(),

            'transaction_number' =>
                'DEP-' . now()->format('YmdHis'),

            'user_id' => $request->user()->id,

            'wallet_id' => $validated['wallet_id'],

            'payment_method_id' =>
                $validated['payment_method_id'],

            'payment_account_id' =>
                $validated['payment_account_id'],

            'amount' => $validated['amount'],

            'sender_name' =>
                $validated['sender_name'] ?? null,

            'reference_number' =>
                $validated['reference_number'] ?? null,

            'proof_image' => $path,

            'status' => 'PENDING',

        ]);

        return response()->json([
            'success' => true,
            'message' => 'Deposit submitted.',
            'data' => $deposit
        ], 201);
    }

    public function show(Deposit $deposit)
    {
        return $deposit->load([
            'wallet.asset',
            'paymentMethod',
            'paymentAccount'
        ]);
    }
}