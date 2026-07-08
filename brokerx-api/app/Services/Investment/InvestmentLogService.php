<?php

namespace App\Services\Investment;

use App\Models\InvestmentLog;
use App\Models\InvestmentOrder;

class InvestmentLogService
{
    public function create(

        InvestmentOrder $investment,

        string $status,

        ?string $description,

        ?int $userId,

        array $metadata = []

    )
    {

        return InvestmentLog::create([

            'investment_order_id'=>$investment->id,

            'status'=>$status,

            'description'=>$description,

            'created_by'=>$userId,

            'metadata'=>$metadata,

        ]);

    }
}