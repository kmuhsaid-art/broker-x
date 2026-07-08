<?php

namespace App\Repositories\Eloquent;

use App\Models\Asset;
use Illuminate\Support\Collection;
use App\Repositories\Contracts\AssetRepositoryInterface;

class AssetRepository implements AssetRepositoryInterface
{
    public function all(): Collection
    {
        return Asset::all();
    }

    public function active(): Collection
    {
        return Asset::where('is_active', true)->get();
    }

    public function find(int $id): ?Asset
    {
        return Asset::find($id);
    }

    public function findBySymbol(string $symbol): ?Asset
    {
        return Asset::where('symbol', $symbol)->first();
    }

    public function create(array $data): Asset
    {
        return Asset::create($data);
    }

    public function update(Asset $asset, array $data): bool
    {
        return $asset->update($data);
    }

    public function delete(Asset $asset): bool
    {
        return $asset->delete();
    }
}