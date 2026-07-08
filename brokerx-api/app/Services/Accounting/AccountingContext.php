<?php

namespace App\Services\Accounting;

class AccountingContext
{
    public function __construct(

        public readonly float $amount,

        public readonly string $type,

        public readonly ?string $referenceType = null,

        public readonly ?int $referenceId = null,

        public readonly ?string $description = null,

        public readonly ?int $createdBy = null

    ) {
    }
}