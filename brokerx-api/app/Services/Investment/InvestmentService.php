<?php

namespace App\Services\Investment;

use App\Models\InvestmentOrder;
use App\Models\InvestmentProduct;
use App\Models\Wallet;
use App\Services\Wallet\WalletLockService;
use App\Services\Wallet\WalletService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Exception;

class InvestmentService
{
    public function __construct(

        private InvestmentCalculator $calculator,

        private InvestmentLogService $logs,

        private WalletLockService $walletLock,

        private WalletService $walletService

    ) {
    }

    /*
    |--------------------------------------------------------------------------
    | Create Investment
    |--------------------------------------------------------------------------
    */

    public function create(

        InvestmentProduct $product,

        Wallet $wallet,

        float $amount,

        ?string $userNote,

        int $userId

    ): InvestmentOrder {

        return DB::transaction(function () use (

            $product,

            $wallet,

            $amount,

            $userNote,

            $userId

        ) {

            if (!$product->status) {

                throw new Exception(
                    'Investment product unavailable.'
                );

            }

            if ($wallet->user_id != $userId) {

                throw new Exception(
                    'Wallet not found.'
                );

            }

            if ($wallet->currency != $product->currency) {

                throw new Exception(
                    'Currency mismatch.'
                );

            }

            if ($amount < $product->minimum_amount) {

                throw new Exception(
                    'Below minimum investment.'
                );

            }

            if ($amount > $product->maximum_amount) {

                throw new Exception(
                    'Above maximum investment.'
                );

            }

            $this->walletLock->lock(

                wallet: $wallet,

                amount: $amount,

                type: 'INVESTMENT',

                referenceType: InvestmentOrder::class,

                referenceId: null,

                description: 'Investment Lock',

                createdBy: $userId

            );

            $investment = InvestmentOrder::create([

                'uuid' => Str::uuid(),

                'user_id' => $userId,

                'wallet_id' => $wallet->id,

                'product_id' => $product->id,

                'amount' => $amount,

                'expected_profit' =>

                    $this->calculator->expectedProfit(

                        $product,

                        $amount

                    ),

                'current_profit' => 0,

                'status' => 'PENDING',

                'user_note' => $userNote

            ]);

            $this->logs->create(

                $investment,

                'PENDING',

                'Investment created.',

                $userId

            );

            return $investment->fresh();

        });

    }

    /*
    |--------------------------------------------------------------------------
    | Approve
    |--------------------------------------------------------------------------
    */

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

                throw new Exception(

                    'Investment already processed.'

                );

            }

            $investment->status = 'ACTIVE';

            $investment->approved_by = $adminId;

            $investment->approved_at = now();

            $investment->started_at = now();

            $investment->ended_at =

                $this->calculator->endDate(

                    $investment->product

                );

            $investment->admin_note = $note;

            $investment->save();

            $this->logs->create(

                $investment,

                'ACTIVE',

                'Investment approved.',

                $adminId

            );

            return $investment;

        });

    }

    /*
    |--------------------------------------------------------------------------
    | Reject
    |--------------------------------------------------------------------------
    */

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

            if ($investment->status != 'PENDING') {

                throw new Exception(

                    'Cannot reject.'

                );

            }

            $this->walletLock->unlock(

                wallet: $investment->wallet,

                amount: $investment->amount,

                type: 'INVESTMENT_REJECT',

                referenceType: InvestmentOrder::class,

                referenceId: $investment->id,

                description: 'Investment rejected.',

                createdBy: $adminId

            );

            $investment->status = 'REJECTED';

            $investment->approved_by = $adminId;

            $investment->approved_at = now();

            $investment->admin_note = $note;

            $investment->save();

            $this->logs->create(

                $investment,

                'REJECTED',

                'Investment rejected.',

                $adminId

            );

            return $investment;

        });

    }

    /*
    |--------------------------------------------------------------------------
    | Complete
    |--------------------------------------------------------------------------
    */

    public function complete(

        InvestmentOrder $investment

    ): InvestmentOrder {

        return DB::transaction(function () use (

            $investment

        ) {

            if ($investment->status != 'ACTIVE') {

                throw new Exception(

                    'Investment not active.'

                );

            }

            $this->walletLock->unlock(

                wallet: $investment->wallet,

                amount: $investment->amount,

                type: 'INVESTMENT_RELEASE',

                referenceType: InvestmentOrder::class,

                referenceId: $investment->id,

                description: 'Principal released.',

                createdBy: null

            );

            $this->walletService->credit(

                wallet: $investment->wallet,

                amount: $investment->expected_profit,

                type: 'INVESTMENT_PROFIT',

                referenceType: InvestmentOrder::class,

                referenceId: $investment->id,

                description: 'Investment Profit',

                createdBy: null

            );

            $investment->current_profit =

                $investment->expected_profit;

            $investment->completed_at = now();

            $investment->status = 'COMPLETED';

            $investment->save();

            $this->logs->create(

                $investment,

                'COMPLETED',

                'Investment completed.',

                null

            );

            return $investment;

        });

    }

    /*
    |--------------------------------------------------------------------------
    | Cancel
    |--------------------------------------------------------------------------
    */

    public function cancel(

        InvestmentOrder $investment

    ): InvestmentOrder {

        return DB::transaction(function () use (

            $investment

        ) {

            if ($investment->status != 'PENDING') {

                throw new Exception(

                    'Cannot cancel.'

                );

            }

            $this->walletLock->unlock(

                wallet: $investment->wallet,

                amount: $investment->amount,

                type: 'INVESTMENT_CANCEL',

                referenceType: InvestmentOrder::class,

                referenceId: $investment->id,

                description: 'Investment cancelled.',

                createdBy: $investment->user_id

            );

            $investment->status = 'CANCELLED';

            $investment->save();

            $this->logs->create(

                $investment,

                'CANCELLED',

                'Investment cancelled.',

                $investment->user_id

            );

            return $investment;

        });

    }
}