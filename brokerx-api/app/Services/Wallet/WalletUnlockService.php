<?php

namespace App\Services\Wallet;

use App\Models\WalletLock;
use Illuminate\Support\Facades\DB;

class WalletUnlockService
{
    public function unlock(

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

                throw new \Exception(
                    'Wallet lock already processed.'
                );

            }



            $wallet = $lock
                ->wallet()
                ->lockForUpdate()
                ->first();



            $wallet->decrement(

                'locked_balance',

                $lock->amount

            );



            $lock->status = 'RELEASED';

            $lock->released_at = now();

            $lock->release_note = $description;

            $lock->released_by = $createdBy;

            $lock->save();



            return $lock;

        });

    }
}