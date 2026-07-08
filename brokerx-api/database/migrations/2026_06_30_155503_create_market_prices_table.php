<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('market_prices', function (Blueprint $table) {

            $table->id();

            $table->foreignId('market_id')
                ->constrained()
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->decimal('last_price', 30, 12);

            $table->decimal('bid_price', 30, 12);

            $table->decimal('ask_price', 30, 12);

            $table->decimal('high_24h', 30, 12);

            $table->decimal('low_24h', 30, 12);

            $table->decimal('volume_24h', 30, 12);

            $table->decimal('change_24h', 20, 8);

            $table->timestamp('price_at');

            $table->timestamps();

            $table->unique('market_id');

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('market_prices');
    }
};