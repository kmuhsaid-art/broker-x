<?php

namespace App\Services\Accounting;

use App\Models\Wallet;
use App\Models\WalletLock;
use Illuminate\Support\Facades\DB;

class AccountingEngine
{
    public function __construct(

        private LedgerService $ledger,

        private \App\Services\Wallet\WalletLockService $walletLock,

        private \App\Services\Wallet\WalletUnlockService $walletUnlock

    ) {
    }

    public function transaction(callable $callback)
    {
        return DB::transaction($callback);
    }

    public function credit(

        Wallet $wallet,

        float $amount,

        string $type,

        ?string $referenceType = null,

        ?int $referenceId = null,

        ?string $description = null,

        ?int $createdBy = null

    ) {

        return $this->ledger->record(

            wallet: $wallet,

            direction: 'CREDIT',

            amount: $amount,

            type: $type,

            referenceType: $referenceType,

            referenceId: $referenceId,

            description: $description,

            createdBy: $createdBy

        );

    }

    public function debit(

        Wallet $wallet,

        float $amount,

        string $type,

        ?string $referenceType = null,

        ?int $referenceId = null,

        ?string $description = null,

        ?int $createdBy = null

    ) {

        return $this->ledger->record(

            wallet: $wallet,

            direction: 'DEBIT',

            amount: $amount,

            type: $type,

            referenceType: $referenceType,

            referenceId: $referenceId,

            description: $description,

            createdBy: $createdBy

        );

    }

    public function lock(

        Wallet $wallet,

        float $amount,

        string $type,

        ?string $referenceType = null,

        ?int $referenceId = null,

        ?string $description = null,

        ?int $createdBy = null

    ) {

        return $this->walletLock->lock(

            wallet: $wallet,

            amount: $amount,

            type: $type,

            referenceType: $referenceType,

            referenceId: $referenceId,

            description: $description,

            createdBy: $createdBy

        );

    }

    public function unlock(

        WalletLock $lock,

        ?string $description = null,

        ?int $createdBy = null

    ) {

        return $this->walletUnlock->unlock(

            lock: $lock,

            description: $description,

            createdBy: $createdBy

        );

    }

    public function transfer(

        Wallet $from,

        Wallet $to,

        float $amount,

        string $type,

        ?string $referenceType = null,

        ?int $referenceId = null,

        ?string $description = null,

        ?int $createdBy = null

    ) {

        return DB::transaction(function () use (

            $from,

            $to,

            $amount,

            $type,

            $referenceType,

            $referenceId,

            $description,

            $createdBy

        ) {

            $this->debit(

                wallet: $from,

                amount: $amount,

                type: $type,

                referenceType: $referenceType,

                referenceId: $referenceId,

                description: $description,

                createdBy: $createdBy

            );

            $this->credit(

                wallet: $to,

                amount: $amount,

                type: $type,

                referenceType: $referenceType,

                referenceId: $referenceId,

                description: $description,

                createdBy: $createdBy

            );

        });

    }
}