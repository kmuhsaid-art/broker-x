<?php

namespace App\Services;

use App\Models\Asset;
use Illuminate\Support\Collection;
use App\Repositories\Contracts\AssetRepositoryInterface;

class AssetService
{
    public function __construct(

        protected AssetRepositoryInterface $repository

    ) {}

    public function all(): Collection
    {
        return $this->repository->all();
    }

    public function active(): Collection
    {
        return $this->repository->active();
    }

    public function create(array $data): Asset
    {
        return $this->repository->create($data);
    }
}