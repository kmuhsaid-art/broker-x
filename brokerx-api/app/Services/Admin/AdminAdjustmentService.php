<?php

namespace App\Services\Admin;

use App\Models\Wallet;
use App\Models\AdminAdjustment;
use App\Services\Accounting\AccountingEngine;

class AdminAdjustmentService
{
    public function __construct(

        private AccountingEngine $accounting

    ) {
    }


    public function credit(

        Wallet $wallet,

        float $amount,

        string $reason,

        int $adminId

    ): AdminAdjustment {

        $adjustment = AdminAdjustment::create([

            'wallet_id' => $wallet->id,

            'admin_id' => $adminId,

            'type' => 'CREDIT',

            'amount' => $amount,

            'reason' => $reason,

            'status' => 'COMPLETED'

        ]);


        $this->accounting->credit(

            wallet: $wallet,

            amount: $amount,

            type: 'ADMIN_ADJUSTMENT',

            referenceType: AdminAdjustment::class,

            referenceId: $adjustment->id,

            description: $reason,

            createdBy: $adminId

        );


        return $adjustment;
    }


    public function debit(

        Wallet $wallet,

        float $amount,

        string $reason,

        int $adminId

    ): AdminAdjustment {

        $adjustment = AdminAdjustment::create([

            'wallet_id' => $wallet->id,

            'admin_id' => $adminId,

            'type' => 'DEBIT',

            'amount' => $amount,

            'reason' => $reason,

            'status' => 'COMPLETED'

        ]);


        $this->accounting->debit(

            wallet: $wallet,

            amount: $amount,

            type: 'ADMIN_ADJUSTMENT',

            referenceType: AdminAdjustment::class,

            referenceId: $adjustment->id,

            description: $reason,

            createdBy: $adminId

        );


        return $adjustment;
    }
}