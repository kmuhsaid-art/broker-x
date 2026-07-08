<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Repositories\Eloquent\AssetRepository;
use App\Repositories\Contracts\AssetRepositoryInterface;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(

            AssetRepositoryInterface::class,

            AssetRepository::class

        );
    }

    public function boot(): void
    {
    }
}