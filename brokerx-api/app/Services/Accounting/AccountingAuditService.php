<?php

namespace App\Services\Accounting;

use App\Models\LedgerEntry;
use App\Models\Transaction;
use App\Models\Wallet;

class AccountingAuditService
{
    public function verifyWallet(
        Wallet $wallet
    ): array {

        $credit = LedgerEntry::query()

            ->where('wallet_id', $wallet->id)

            ->where('type', 'CREDIT')

            ->sum('amount');


        $debit = LedgerEntry::query()

            ->whereIn('type', [

                'DEBIT',

                'CAPTURE'

            ])

            ->sum('amount');


        $calculatedBalance = bcsub(

            $credit,

            $debit,

            8

        );


        $transactionBalance = Transaction::query()

            ->where('wallet_id', $wallet->id)

            ->latest('id')

            ->value('balance_after');


        return [

            'wallet_id' => $wallet->id,

            'actual_balance' => $wallet->balance,

            'ledger_balance' => $calculatedBalance,

            'transaction_balance' => $transactionBalance,

            'locked_balance' => $wallet->locked_balance,

            'matched' => bccomp(

                $wallet->balance,

                $calculatedBalance,

                8

            ) === 0

        ];

    }
}