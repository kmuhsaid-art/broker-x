<?php

namespace App\Services\Accounting;

use App\Models\Wallet;
use App\Models\Transaction;
use App\Models\LedgerEntry;
use Illuminate\Support\Facades\DB;

class LedgerService
{
    public function record(

        Wallet $wallet,

        string $direction,

        float $amount,

        string $type,

        ?string $referenceType = null,

        ?int $referenceId = null,

        ?string $description = null,

        ?int $createdBy = null

    ): LedgerEntry {


        return DB::transaction(function () use (

            $wallet,

            $direction,

            $amount,

            $type,

            $referenceType,

            $referenceId,

            $description,

            $createdBy

        ) {


            $wallet = Wallet::lockForUpdate()
                ->findOrFail($wallet->id);



            $beforeBalance = $wallet->balance;



            if ($direction === 'CREDIT') {


                $wallet->balance = bcadd(

                    $wallet->balance,

                    $amount,

                    8

                );


            } else {


                if (

                    bccomp(

                        $wallet->balance,

                        $amount,

                        8

                    ) < 0

                ) {

                    throw new \Exception(
                        'Insufficient wallet balance.'
                    );

                }



                $wallet->balance = bcsub(

                    $wallet->balance,

                    $amount,

                    8

                );

            }



            $wallet->save();



            $transaction = Transaction::create([

                'wallet_id' => $wallet->id,

                'type' => $type,

                'direction' => strtolower(
                    $direction
                ),

                'amount' => $amount,

                'balance_after' => $wallet->balance,

                'reference_type' => $referenceType,

                'reference_id' => $referenceId,

                'created_by' => $createdBy

            ]);



            return LedgerEntry::create([

                'user_id' => $wallet->user_id,

                'wallet_id' => $wallet->id,

                'transaction_id' => $transaction->id,

                'type' => $direction,

                'amount' => $amount,

                'balance_before' => $beforeBalance,

                'balance_after' => $wallet->balance,

                'reference_type' => $referenceType,

                'reference_id' => $referenceId,

                'description' => $description,

                'created_by' => $createdBy

            ]);

        });

    }
}