<?php

namespace App\Traits;

use App\Services\Accounting\AccountingEngine;

trait UsesAccountingEngine
{
    protected AccountingEngine $accounting;

    protected function accounting(): AccountingEngine
    {
        return $this->accounting ??= app(AccountingEngine::class);
    }
}