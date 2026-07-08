<?php

namespace App\Services\Accounting;

class AccountingReferenceService
{
    public function make(

        string $prefix

    ): string {

        return sprintf(

            '%s-%s-%s',

            strtoupper($prefix),

            now()->format('YmdHis'),

            strtoupper(substr(

                md5(

                    uniqid(

                        mt_rand(),

                        true

                    )

                ),

                0,

                10

            ))

        );

    }
}