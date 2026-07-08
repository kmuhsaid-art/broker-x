<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PaymentAccount;

class PaymentAccountController extends Controller
{
    public function index()
    {
        return PaymentAccount::with(
            'paymentMethod'
        )
        ->where(
            'is_active',
            true
        )
        ->get();
    }
}