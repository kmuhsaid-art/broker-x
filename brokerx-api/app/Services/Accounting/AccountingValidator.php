<?php

namespace App\Services\Accounting;

use App\Models\Wallet;

class AccountingValidator
{
    public function ensureWalletIsActive(
        Wallet $wallet
    ): void {

        if ($wallet->status !== 'ACTIVE') {

            throw new \RuntimeException(
                'Wallet is not active.'
            );

        }

    }


    public function ensurePositiveAmount(
        float $amount
    ): void {

        if ($amount <= 0) {

            throw new \InvalidArgumentException(
                'Amount must be greater than zero.'
            );

        }

    }


    public function ensureAvailableBalance(
        Wallet $wallet,
        float $amount
    ): void {

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

            throw new \RuntimeException(
                'Insufficient available balance.'
            );

        }

    }


    public function ensureLockedBalance(
        Wallet $wallet,
        float $amount
    ): void {

        if (

            bccomp(

                $wallet->locked_balance,

                $amount,

                8

            ) < 0

        ) {

            throw new \RuntimeException(
                'Insufficient locked balance.'
            );

        }

    }
}