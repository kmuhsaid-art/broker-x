<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;

class PaymentMethodController extends Controller
{
    public function index()
    {
        return PaymentMethod::where(
            'is_active',
            true
        )
        ->where(
            'deposit_enabled',
            true
        )
        ->orderBy('name')
        ->get();
    }
}