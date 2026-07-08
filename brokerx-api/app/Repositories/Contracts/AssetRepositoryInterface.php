<?php

namespace App\Repositories\Contracts;

use App\Models\Asset;
use Illuminate\Support\Collection;

interface AssetRepositoryInterface
{
    public function all(): Collection;

    public function active(): Collection;

    public function find(int $id): ?Asset;

    public function findBySymbol(string $symbol): ?Asset;

    public function create(array $data): Asset;

    public function update(Asset $asset, array $data): bool;

    public function delete(Asset $asset): bool;
}