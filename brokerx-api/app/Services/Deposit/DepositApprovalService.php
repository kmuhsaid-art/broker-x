<?php

namespace App\Services\Deposit;

use App\Models\Deposit;
use Illuminate\Support\Facades\DB;
use App\Services\Accounting\AccountingEngine;

class DepositApprovalService
{
    public function __construct(

        private AccountingEngine $accounting,

        private DepositLogService $logs

    ) {
    }


    public function approve(

        Deposit $deposit,

        int $adminId,

        ?string $note = null

    ): Deposit {

        return DB::transaction(function () use (

            $deposit,

            $adminId,

            $note

        ) {

            $deposit = Deposit::lockForUpdate()
                ->findOrFail($deposit->id);


            if ($deposit->status !== 'PENDING') {

                throw new \Exception(
                    'Deposit already processed.'
                );

            }


            $this->accounting->credit(

                wallet: $deposit->wallet,

                amount: $deposit->amount,

                type: 'DEPOSIT',

                referenceType: Deposit::class,

                referenceId: $deposit->id,

                description: 'Deposit approved.',

                createdBy: $adminId

            );


            $deposit->status = 'COMPLETED';

            $deposit->approved_by = $adminId;

            $deposit->approved_at = now();

            $deposit->note = $note;

            $deposit->save();


            $this->logs->create(

                deposit: $deposit,

                status: 'COMPLETED',

                message: 'Deposit approved.',

                createdBy: $adminId

            );


            return $deposit;

        });

    }
}