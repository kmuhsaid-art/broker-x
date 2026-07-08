<?php

namespace App\Services\Accounting;

class TransactionReferenceGenerator
{
    public function generate(
        string $type
    ): string {

        return strtoupper($type)
            . '-'
            . now()->format('YmdHis')
            . '-'
            . strtoupper(substr(bin2hex(random_bytes(6)), 0, 12));

    }
}