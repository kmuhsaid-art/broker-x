<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Accounting\AccountingEngine;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(AccountingEngine::class);
    }

    public function boot(): void
    {
        //
    }
}