<?php

namespace App\Services\Withdraw;

use App\Models\Withdrawal;
use Illuminate\Support\Facades\DB;
use App\Services\Accounting\AccountingEngine;

class WithdrawApprovalService
{
    public function __construct(

        private AccountingEngine $accounting,

        private WithdrawLogService $logs

    ) {
    }


    public function approve(

        Withdrawal $withdraw,

        int $adminId,

        ?string $note = null

    ): Withdrawal {

        return DB::transaction(function () use (

            $withdraw,

            $adminId,

            $note

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
            | Release Lock
            |--------------------------------------------------------------------------
            */

            $lock = $withdraw
                ->walletLocks()
                ->where('status', 'ACTIVE')
                ->first();

            if (!$lock) {

                throw new \Exception(
                    'Locked balance not found.'
                );

            }

            $this->accounting->unlock(

                lock: $lock,

                description: 'Withdrawal approved.',

                createdBy: $adminId

            );


            /*
            |--------------------------------------------------------------------------
            | Deduct Wallet
            |--------------------------------------------------------------------------
            */

            $this->accounting->debit(

                wallet: $withdraw->wallet,

                amount: $withdraw->amount,

                type: 'WITHDRAW',

                referenceType: Withdrawal::class,

                referenceId: $withdraw->id,

                description: 'Withdrawal approved.',

                createdBy: $adminId

            );


            /*
            |--------------------------------------------------------------------------
            | Complete
            |--------------------------------------------------------------------------
            */

            $withdraw->status = 'COMPLETED';

            $withdraw->approved_by = $adminId;

            $withdraw->approved_at = now();

            $withdraw->note = $note;

            $withdraw->save();


            $this->logs->create(

                withdraw: $withdraw,

                status: 'COMPLETED',

                message: 'Withdrawal approved.',

                createdBy: $adminId

            );


            return $withdraw;

        });

    }
}