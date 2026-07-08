<?php

namespace App\Services\Withdraw;

use App\Models\Withdrawal;
use Illuminate\Support\Facades\DB;
use App\Services\Accounting\AccountingEngine;

class WithdrawRejectService
{
    public function __construct(

        private AccountingEngine $accounting,

        private WithdrawLogService $logs

    ) {
    }


    public function reject(

        Withdrawal $withdraw,

        int $adminId,

        string $reason

    ): Withdrawal {

        return DB::transaction(function () use (

            $withdraw,

            $adminId,

            $reason

        ) {

            $withdraw = Withdrawal::lockForUpdate()
                ->findOrFail($withdraw->id);


            if ($withdraw->status !== 'PENDING') {

                throw new \Exception(
                    'Withdrawal already processed.'
                );

            }


            /*
            |--------------------------------------------------------------------------
            | Release Locked Balance
            |--------------------------------------------------------------------------
            */

            $lock = $withdraw
                ->walletLocks()
                ->where('status', 'ACTIVE')
                ->first();

            if ($lock) {

                $this->accounting->unlock(

                    lock: $lock,

                    description: 'Withdrawal rejected.',

                    createdBy: $adminId

                );

            }


            /*
            |--------------------------------------------------------------------------
            | Reject
            |--------------------------------------------------------------------------
            */

            $withdraw->status = 'REJECTED';

            $withdraw->approved_by = $adminId;

            $withdraw->approved_at = now();

            $withdraw->note = $reason;

            $withdraw->save();


            $this->logs->create(

                withdraw: $withdraw,

                status: 'REJECTED',

                message: $reason,

                createdBy: $adminId

            );


            return $withdraw;

        });

    }
}