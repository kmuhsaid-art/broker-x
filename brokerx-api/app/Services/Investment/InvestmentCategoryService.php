<?php

namespace App\Services\Investment;

use App\Models\InvestmentCategory;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Collection;

class InvestmentCategoryService
{
    public function all(): Collection
    {
        return InvestmentCategory::query()
            ->latest()
            ->get();
    }

    public function active(): Collection
    {
        return InvestmentCategory::query()
            ->where('status', true)
            ->orderBy('name')
            ->get();
    }

    public function create(array $data): InvestmentCategory
    {
        $data['slug'] = Str::slug($data['name']);

        return InvestmentCategory::create([
            'name'        => $data['name'],
            'slug'        => $this->uniqueSlug($data['slug']),
            'description' => $data['description'] ?? null,
            'icon'        => $data['icon'] ?? null,
            'color'       => $data['color'] ?? '#FACC15',
            'status'      => $data['status'] ?? true,
        ]);
    }

    public function update(
        InvestmentCategory $category,
        array $data
    ): InvestmentCategory {

        $slug = Str::slug($data['name']);

        $category->update([
            'name'        => $data['name'],
            'slug'        => $this->uniqueSlug(
                $slug,
                $category->id
            ),
            'description' => $data['description'] ?? null,
            'icon'        => $data['icon'] ?? null,
            'color'       => $data['color'] ?? '#FACC15',
            'status'      => $data['status'] ?? true,
        ]);

        return $category->fresh();
    }

    public function delete(
        InvestmentCategory $category
    ): void {

        if ($category->products()->exists()) {

            throw new \Exception(
                'Category still has products.'
            );

        }

        $category->delete();
    }

    protected function uniqueSlug(
        string $slug,
        ?int $ignoreId = null
    ): string {

        $original = $slug;

        $i = 1;

        while (
            InvestmentCategory::when(
                $ignoreId,
                fn ($q) => $q->where('id', '!=', $ignoreId)
            )
            ->where('slug', $slug)
            ->exists()
        ) {

            $slug = "{$original}-{$i}";

            $i++;

        }

        return $slug;
    }
}