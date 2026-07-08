<?php

namespace App\Services\Wallet;

use App\Models\Wallet;
use App\Models\WalletLock;
use App\Services\Accounting\LedgerService;
use Illuminate\Support\Facades\DB;

class WalletCaptureService
{
    public function __construct(

        private LedgerService $ledger

    ) {
    }

    public function capture(

        WalletLock $lock,

        string $type,

        ?string $description = null,

        ?int $createdBy = null

    ): WalletLock {

        return DB::transaction(function () use (

            $lock,

            $type,

            $description,

            $createdBy

        ) {

            $lock = WalletLock::lockForUpdate()
                ->findOrFail($lock->id);

            if ($lock->status !== 'ACTIVE') {

                throw new \RuntimeException(
                    'Wallet lock already processed.'
                );

            }

            $wallet = Wallet::lockForUpdate()
                ->findOrFail($lock->wallet_id);

            if (

                bccomp(

                    $wallet->locked_balance,

                    $lock->amount,

                    8

                ) < 0

            ) {

                throw new \RuntimeException(
                    'Invalid locked balance.'
                );

            }

            $wallet->locked_balance = bcsub(

                $wallet->locked_balance,

                $lock->amount,

                8

            );

            $wallet->balance = bcsub(

                $wallet->balance,

                $lock->amount,

                8

            );

            $wallet->save();

            $this->ledger->record(

                wallet: $wallet,

                direction: 'CAPTURE',

                amount: $lock->amount,

                type: $type,

                referenceType: $lock->reference_type,

                referenceId: $lock->reference_id,

                description: $description,

                createdBy: $createdBy

            );

            $lock->status = 'CAPTURED';

            $lock->released_at = now();

            $lock->released_by = $createdBy;

            $lock->release_note = $description;

            $lock->save();

            return $lock;

        });

    }
}