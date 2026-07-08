<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\PaymentAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PaymentAccountController extends Controller
{
    public function index()
    {
        return response()->json(
            PaymentAccount::with('paymentMethod')
                ->latest()
                ->get()
        );
    }

    public function store(Request $request)
    {
        $validated = $request->validate([

            'payment_method_id' => 'required|exists:payment_methods,id',

            'account_name' => 'required|string|max:255',

            'account_number' => 'nullable|string|max:255',

            'bank_name' => 'nullable|string|max:255',

            'branch' => 'nullable|string|max:255',

            'network' => 'nullable|string|max:255',

            'wallet_address' => 'nullable|string',

            'qr_image' => 'nullable|string',

            'is_active' => 'boolean',

        ]);

        $validated['uuid'] = Str::uuid();

        $account = PaymentAccount::create($validated);

        return response()->json($account, 201);
    }

    public function show(PaymentAccount $paymentAccount)
    {
        return response()->json(

            $paymentAccount->load('paymentMethod')

        );
    }

    public function update(Request $request, PaymentAccount $paymentAccount)
    {
        $validated = $request->validate([

            'payment_method_id' => 'required|exists:payment_methods,id',

            'account_name' => 'required|string|max:255',

            'account_number' => 'nullable|string|max:255',

            'bank_name' => 'nullable|string|max:255',

            'branch' => 'nullable|string|max:255',

            'network' => 'nullable|string|max:255',

            'wallet_address' => 'nullable|string',

            'qr_image' => 'nullable|string',

            'is_active' => 'boolean',

        ]);

        $paymentAccount->update($validated);

        return response()->json($paymentAccount);
    }

    public function destroy(PaymentAccount $paymentAccount)
    {
        $paymentAccount->delete();

        return response()->json([
            'message' => 'Deleted successfully'
        ]);
    }
}