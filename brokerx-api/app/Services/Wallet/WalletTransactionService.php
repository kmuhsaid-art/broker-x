<?php

namespace App\Services\Wallet;

use App\Models\Wallet;
use App\Models\WalletTransaction;

use Illuminate\Support\Str;

class WalletTransactionService
{
    public function create(

        Wallet $wallet,

        string $type,

        string $direction,

        float $amount,

        float $before,

        float $after,

        float $lockedBefore,

        float $lockedAfter,

        ?string $referenceType,

        ?int $referenceId,

        ?string $referenceNo,

        ?string $description,

        ?int $createdBy,

        array $metadata=[]

    )
    {

        return WalletTransaction::create([

            'uuid'=>Str::uuid(),

            'wallet_id'=>$wallet->id,

            'user_id'=>$wallet->user_id,

            'currency'=>$wallet->currency,

            'type'=>$type,

            'direction'=>$direction,

            'amount'=>$amount,

            'balance_before'=>$before,

            'balance_after'=>$after,

            'locked_before'=>$lockedBefore,

            'locked_after'=>$lockedAfter,

            'reference_type'=>$referenceType,

            'reference_id'=>$referenceId,

            'reference_no'=>$referenceNo,

            'description'=>$description,

            'created_by'=>$createdBy,

            'metadata'=>$metadata

        ]);

    }
}