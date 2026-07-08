<?php

namespace App\Services\Wallet;

use App\Models\Wallet;

use Illuminate\Support\Facades\DB;

class WalletService
{
    public function __construct(

        private WalletTransactionService $transactions

    ){}

    public function debit(

        Wallet $wallet,

        float $amount,

        string $type,

        ?string $referenceType,

        ?int $referenceId,

        ?string $description,

        ?int $createdBy

    )
    {

        return DB::transaction(function() use(

            $wallet,

            $amount,

            $type,

            $referenceType,

            $referenceId,

            $description,

            $createdBy

        ){

            $wallet=Wallet::lockForUpdate()->find($wallet->id);

            if($wallet->balance < $amount){

                throw new \Exception('Insufficient balance.');

            }

            $before=$wallet->balance;

            $lockedBefore=$wallet->locked_balance;

            $wallet->balance-=$amount;

            $wallet->save();

            $this->transactions->create(

                $wallet,

                $type,

                'DEBIT',

                $amount,

                $before,

                $wallet->balance,

                $lockedBefore,

                $wallet->locked_balance,

                $referenceType,

                $referenceId,

                null,

                $description,

                $createdBy

            );

            return $wallet;

        });

    }

    public function credit(

        Wallet $wallet,

        float $amount,

        string $type,

        ?string $referenceType,

        ?int $referenceId,

        ?string $description,

        ?int $createdBy

    )
    {

        return DB::transaction(function() use(

            $wallet,

            $amount,

            $type,

            $referenceType,

            $referenceId,

            $description,

            $createdBy

        ){

            $wallet=Wallet::lockForUpdate()->find($wallet->id);

            $before=$wallet->balance;

            $lockedBefore=$wallet->locked_balance;

            $wallet->balance+=$amount;

            $wallet->save();

            $this->transactions->create(

                $wallet,

                $type,

                'CREDIT',

                $amount,

                $before,

                $wallet->balance,

                $lockedBefore,

                $wallet->locked_balance,

                $referenceType,

                $referenceId,

                null,

                $description,

                $createdBy

            );

            return $wallet;

        });

    }
}