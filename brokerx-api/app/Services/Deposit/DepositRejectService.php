<?php

namespace App\Services\Deposit;

use App\Models\Deposit;
use Illuminate\Support\Facades\DB;

class DepositRejectService
{
    public function __construct(

        private DepositLogService $logs

    ) {
    }


    public function reject(

        Deposit $deposit,

        int $adminId,

        string $reason

    ): Deposit {

        return DB::transaction(function () use (

            $deposit,

            $adminId,

            $reason

        ) {

            $deposit = Deposit::lockForUpdate()
                ->findOrFail($deposit->id);


            if ($deposit->status !== 'PENDING') {

                throw new \Exception(
                    'Deposit already processed.'
                );

            }


            $deposit->status = 'REJECTED';

            $deposit->approved_by = $adminId;

            $deposit->approved_at = now();

            $deposit->note = $reason;

            $deposit->save();


            $this->logs->create(

                deposit: $deposit,

                status: 'REJECTED',

                message: $reason,

                createdBy: $adminId

            );


            return $deposit;

        });

    }
}