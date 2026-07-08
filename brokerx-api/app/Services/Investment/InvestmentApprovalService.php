<?php

namespace App\Services\Investment;

use App\Models\InvestmentOrder;
use App\Models\WalletLock;
use App\Services\Wallet\WalletCaptureService;
use App\Services\Wallet\WalletUnlockService;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class InvestmentApprovalService
{
    public function __construct(
        protected WalletCaptureService $walletCaptureService,
        protected WalletUnlockService $walletUnlockService,
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
                throw new \Exception('Investment already processed.');
            }

            $lock = WalletLock::query()
                ->where('wallet_id', $investment->wallet_id)
                ->where('reference_type', InvestmentOrder::class)
                ->where('reference_id', $investment->id)
                ->where('status', 'ACTIVE')
                ->lockForUpdate()
                ->first();

            if (!$lock) {
                throw new \RuntimeException('Investment lock not found.');
            }

            $this->walletCaptureService->capture(
                lock: $lock,
                type: 'INVESTMENT',
                description: 'Investment approved.',
                createdBy: $adminId
            );

            $investment->approved_by = $adminId;
            $investment->approved_at = now();
            $investment->started_at = now();
            $investment->ended_at = $this->calculator->endDate(
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
                throw new \Exception('Investment already processed.');
            }

            $lock = WalletLock::query()
                ->where('wallet_id', $investment->wallet_id)
                ->where('reference_type', InvestmentOrder::class)
                ->where('reference_id', $investment->id)
                ->where('status', 'ACTIVE')
                ->lockForUpdate()
                ->first();

            if ($lock) {
                $this->walletUnlockService->unlock(
                    lock: $lock,
                    description: 'Investment rejected.',
                    createdBy: $adminId
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
                throw new \Exception('Investment cannot be cancelled.');
            }

            if ($investment->status === 'PENDING') {

                $lock = WalletLock::query()
                    ->where('wallet_id', $investment->wallet_id)
                    ->where('reference_type', InvestmentOrder::class)
                    ->where('reference_id', $investment->id)
                    ->where('status', 'ACTIVE')
                    ->lockForUpdate()
                    ->first();

                if ($lock) {
                    $this->walletUnlockService->unlock(
                        lock: $lock,
                        description: 'Investment cancelled.',
                        createdBy: $adminId
                    );
                }
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