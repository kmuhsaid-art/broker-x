<?php

namespace App\Services\Investment;

use App\Models\InvestmentOrder;
use App\Models\InvestmentPayout;
use App\Models\WalletTransaction;
use App\Services\Wallet\WalletUnlockService;
use App\Services\Wallet\WalletService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class InvestmentCompleteService
{
    public function __construct(

        protected WalletUnlockService $walletUnlock,

        protected WalletService $walletService,

        protected InvestmentLogService $logService

    ) {
    }

    /**
     * Complete Investment
     */
    public function complete(
        InvestmentOrder $investment
    ): InvestmentOrder {

        return DB::transaction(function () use ($investment) {

            if ($investment->status !== 'ACTIVE') {

                throw new \Exception(
                    'Investment is not active.'
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Release Principal
            |--------------------------------------------------------------------------
            */

            $this->walletUnlock->unlock(

                wallet: $investment->wallet,

                amount: $investment->amount,

                type: 'INVESTMENT_RELEASE',

                referenceType: InvestmentOrder::class,

                referenceId: $investment->id,

                description: 'Investment principal released.',

                createdBy: null

            );

            /*
            |--------------------------------------------------------------------------
            | Credit Profit
            |--------------------------------------------------------------------------
            */

            if ($investment->expected_profit > 0) {

                $this->walletService->credit(

                    wallet: $investment->wallet,

                    amount: $investment->expected_profit,

                    type: 'INVESTMENT_PROFIT',

                    referenceType: InvestmentOrder::class,

                    referenceId: $investment->id,

                    description: 'Investment profit.',

                    createdBy: null

                );

            }

            /*
            |--------------------------------------------------------------------------
            | Save Payout
            |--------------------------------------------------------------------------
            */

            InvestmentPayout::create([

                'investment_order_id' => $investment->id,

                'amount' => $investment->expected_profit,

                'status' => 'PAID',

                'method' => 'AUTO',

                'transaction_reference' => (string) Str::uuid(),

                'paid_by' => null,

                'paid_at' => now(),

                'note' => 'Automatic investment payout.'

            ]);

            /*
            |--------------------------------------------------------------------------
            | Update Investment
            |--------------------------------------------------------------------------
            */

            $investment->current_profit =

                $investment->expected_profit;

            $investment->status = 'COMPLETED';

            $investment->completed_at = now();

            $investment->save();

            /*
            |--------------------------------------------------------------------------
            | Investment Log
            |--------------------------------------------------------------------------
            */

            $this->logService->create(

                investment: $investment,

                status: 'COMPLETED',

                description: 'Investment completed automatically.',

                userId: null

            );

            return $investment->fresh();

        });

    }

    /**
     * Manual Complete
     */
    public function manualComplete(

        InvestmentOrder $investment,

        int $adminId,

        ?string $note = null

    ): InvestmentOrder {

        return DB::transaction(function () use (

            $investment,

            $adminId,

            $note

        ) {

            $completed = $this->complete(

                $investment

            );

            $completed->admin_note = $note;

            $completed->approved_by = $adminId;

            $completed->save();

            $this->logService->create(

                investment: $completed,

                status: 'COMPLETED',

                description: 'Completed manually by admin.',

                userId: $adminId

            );

            return $completed;

        });

    }

    /**
     * Force Complete
     */
    public function forceComplete(
        InvestmentOrder $investment
    ): InvestmentOrder {

        if (

            $investment->status === 'COMPLETED'

        ) {

            return $investment;

        }

        return $this->complete(

            $investment

        );

    }
}