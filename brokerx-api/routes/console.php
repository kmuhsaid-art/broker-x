<?php

use Illuminate\Support\Facades\Schedule;
use App\Console\Commands\ProcessInvestmentCommand;


Schedule::command(
    ProcessInvestmentCommand::class
)

->everyMinute();