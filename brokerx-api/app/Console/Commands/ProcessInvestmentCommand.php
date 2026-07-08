<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\InvestmentOrder;
use App\Services\Investment\InvestmentCompleteService;

class ProcessInvestmentCommand extends Command
{
    protected $signature = 'investment:process';

    protected $description = 'Process completed investment orders';


    public function handle(): int
    {

        InvestmentOrder::where('status', 'ACTIVE')

            ->where(
                'ended_at',
                '<=',
                now()
            )

            ->chunkById(
                50,
                function ($orders) {

                    $service = app(
                        InvestmentCompleteService::class
                    );


                    foreach ($orders as $order) {

                        try {

                            $service->complete(
                                $order
                            );

                        } catch (\Throwable $e) {

                            report($e);

                        }

                    }

                }
            );


        return self::SUCCESS;

    }
}