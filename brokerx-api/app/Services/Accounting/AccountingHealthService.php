<?php

namespace App\Services\Accounting;

use App\Models\Wallet;

class AccountingHealthService
{
    public function check(
        Wallet $wallet
    ): void {

        if (

            bccomp(

                $wallet->balance,

                '0',

                8

            ) < 0

        ) {

            throw new \RuntimeException(
                'Negative wallet balance detected.'
            );

        }


        if (

            bccomp(

                $wallet->locked_balance,

                '0',

                8

            ) < 0

        ) {

            throw new \RuntimeException(
                'Negative locked balance detected.'
            );

        }


        if (

            bccomp(

                $wallet->locked_balance,

                $wallet->balance,

                8

            ) > 0

        ) {

            throw new \RuntimeException(
                'Locked balance exceeds wallet balance.'
            );

        }

    }
}