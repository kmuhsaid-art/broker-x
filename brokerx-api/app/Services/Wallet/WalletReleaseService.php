<?php

namespace App\Services\Wallet;

use App\Models\Wallet;
use App\Models\WalletLock;
use Illuminate\Support\Facades\DB;

class WalletReleaseService
{
    public function release(

        WalletLock $lock,

        ?string $description = null,

        ?int $createdBy = null

    ): WalletLock {

        return DB::transaction(function () use (

            $lock,

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

            $wallet->locked_balance = bcsub(

                $wallet->locked_balance,

                $lock->amount,

                8

            );

            $wallet->save();

            $lock->status = 'RELEASED';

            $lock->released_at = now();

            $lock->released_by = $createdBy;

            $lock->release_note = $description;

            $lock->save();

            return $lock;

        });

    }
}