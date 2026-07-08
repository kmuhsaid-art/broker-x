<?php

namespace App\Services\Wallet;

use App\Models\Wallet;
use App\Models\WalletLock;
use Illuminate\Support\Facades\DB;

class WalletLockService
{
    public function lock(

        Wallet $wallet,

        float $amount,

        string $type,

        ?string $referenceType = null,

        ?int $referenceId = null,

        ?string $description = null,

        ?int $createdBy = null

    ): WalletLock {


        return DB::transaction(function () use (

            $wallet,

            $amount,

            $type,

            $referenceType,

            $referenceId,

            $description,

            $createdBy

        ) {


            $wallet = Wallet::lockForUpdate()
                ->findOrFail($wallet->id);



            $available = bcsub(

                $wallet->balance,

                $wallet->locked_balance,

                8

            );



            if (

                bccomp(

                    $available,

                    $amount,

                    8

                ) < 0

            ) {

                throw new \Exception(
                    'Insufficient available balance.'
                );

            }



            $wallet->increment(

                'locked_balance',

                $amount

            );



            return WalletLock::create([

                'wallet_id' => $wallet->id,

                'amount' => $amount,

                'type' => $type,

                'status' => 'ACTIVE',

                'reference_type' => $referenceType,

                'reference_id' => $referenceId,

                'description' => $description,

                'created_by' => $createdBy

            ]);

        });

    }
}