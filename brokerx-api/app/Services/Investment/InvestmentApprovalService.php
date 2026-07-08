<?php

namespace App\Services\Investment;

use App\Models\InvestmentOrder;
use App\Services\Wallet\WalletLockService;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class InvestmentApprovalService
{
    public function __construct(
        protected WalletLockService $walletLockService,
        protected InvestmentCalculator $calculator,
        protected InvestmentLogService $logService
    ) {
    }

    public function approve(
        InvestmentOrder $investment,
        int $adminId,
        ?string $note = null
    ): InvestmentOrder {

        return DB::transaction(function () use (

            $investment,
            $adminId,
            $note

        ) {

            if ($investment->status !== 'PENDING') {

                throw new \Exception(
                    'Investment already processed.'
                );

            }

            $this->walletLockService->lock(

                wallet: $investment->wallet,

                amount: $investment->amount,

                type: 'INVESTMENT_LOCK',

                referenceType: InvestmentOrder::class,

                referenceId: $investment->id,

                description: 'Investment approved.',

                createdBy: $adminId

            );

            $investment->approved_by = $adminId;

            $investment->approved_at = now();

            $investment->started_at = now();

            $investment->ended_at = $this->calculator
                ->endDate(
                    $investment->product
                );

            $investment->admin_note = $note;

            $investment->status = 'ACTIVE';

            $investment->save();

            $this->logService->create(

                investment: $investment,

                status: 'ACTIVE',

                description: 'Investment approved.',

                userId: $adminId

            );

            return $investment->fresh();

        });

    }

    public function reject(
        InvestmentOrder $investment,
        int $adminId,
        ?string $note = null
    ): InvestmentOrder {

        return DB::transaction(function () use (

            $investment,
            $adminId,
            $note

        ) {

            if ($investment->status !== 'PENDING') {

                throw new \Exception(
                    'Investment already processed.'
                );

            }

            $investment->status = 'REJECTED';

            $investment->approved_by = $adminId;

            $investment->approved_at = Carbon::now();

            $investment->admin_note = $note;

            $investment->save();

            $this->logService->create(

                investment: $investment,

                status: 'REJECTED',

                description: 'Investment rejected.',

                userId: $adminId

            );

            return $investment->fresh();

        });

    }

    public function cancel(
        InvestmentOrder $investment,
        int $adminId,
        ?string $note = null
    ): InvestmentOrder {

        return DB::transaction(function () use (

            $investment,
            $adminId,
            $note

        ) {

            if (!in_array($investment->status, [

                'PENDING',

                'ACTIVE'

            ])) {

                throw new \Exception(
                    'Investment cannot be cancelled.'
                );

            }

            $investment->status = 'CANCELLED';

            $investment->admin_note = $note;

            $investment->save();

            $this->logService->create(

                investment: $investment,

                status: 'CANCELLED',

                description: 'Investment cancelled.',

                userId: $adminId

            );

            return $investment->fresh();

        });

    }
}