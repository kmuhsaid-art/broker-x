<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('trades', function (Blueprint $table) {

        $table->id();

        $table->uuid('uuid')->unique();

        $table->foreignId('market_id')
              ->constrained()
              ->cascadeOnUpdate()
              ->restrictOnDelete();

        $table->foreignId('buy_order_id')
              ->constrained('orders')
              ->cascadeOnUpdate()
              ->restrictOnDelete();

        $table->foreignId('sell_order_id')
              ->constrained('orders')
              ->cascadeOnUpdate()
              ->restrictOnDelete();

        $table->foreignId('buyer_id')
              ->constrained('users')
              ->cascadeOnUpdate()
              ->restrictOnDelete();

        $table->foreignId('seller_id')
              ->constrained('users')
              ->cascadeOnUpdate()
              ->restrictOnDelete();

        $table->decimal('price', 30, 12);

        $table->decimal('quantity', 30, 12);

        $table->decimal('buyer_fee', 30, 12)->default(0);

        $table->decimal('seller_fee', 30, 12)->default(0);

        $table->enum('liquidity', [
            'MAKER',
            'TAKER',
        ]);

        $table->boolean('buyer_is_maker')->default(false);

        $table->timestamp('executed_at');

        $table->timestamps();

        $table->index('market_id');
        $table->index('buyer_id');
        $table->index('seller_id');
        $table->index('executed_at');

    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trades');
    }
};
