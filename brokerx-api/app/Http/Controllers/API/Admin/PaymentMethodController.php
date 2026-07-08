<?php

namespace App\Http\Controllers\API\Admin;

use App\Models\PaymentMethod;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;

class PaymentMethodController extends Controller
{
    public function index()
    {
        return response()->json(
            PaymentMethod::latest()->get()
        );
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'code' => 'required|string|max:50|unique:payment_methods',
            'type' => 'required|in:BANK,EWALLET,CRYPTO,PAYMENT_GATEWAY,OTHER',
            'logo' => 'nullable|string',
            'deposit_enabled' => 'boolean',
            'withdraw_enabled' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $validated['uuid'] = Str::uuid();

        $method = PaymentMethod::create($validated);

        return response()->json($method, 201);
    }

    public function show(PaymentMethod $paymentMethod)
    {
        return response()->json($paymentMethod);
    }

    public function update(Request $request, PaymentMethod $paymentMethod)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'code' => 'required|string|max:50|unique:payment_methods,code,' . $paymentMethod->id,
            'type' => 'required|in:BANK,EWALLET,CRYPTO,PAYMENT_GATEWAY,OTHER',
            'logo' => 'nullable|string',
            'deposit_enabled' => 'boolean',
            'withdraw_enabled' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $paymentMethod->update($validated);

        return response()->json($paymentMethod);
    }

    public function destroy(PaymentMethod $paymentMethod)
    {
        $paymentMethod->delete();

        return response()->json([
            'message' => 'Deleted successfully'
        ]);
    }
}