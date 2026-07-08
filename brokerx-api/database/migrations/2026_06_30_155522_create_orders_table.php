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
    Schema::create('orders', function (Blueprint $table) {

        $table->id();

        $table->uuid('uuid')->unique();

        $table->foreignId('user_id')
              ->constrained()
              ->cascadeOnUpdate()
              ->cascadeOnDelete();

        $table->foreignId('market_id')
              ->constrained()
              ->cascadeOnUpdate()
              ->restrictOnDelete();

        $table->string('client_order_id', 100)->nullable()->unique();

        $table->enum('side', [
            'BUY',
            'SELL'
        ]);

        $table->enum('type', [
            'MARKET',
            'LIMIT',
            'STOP',
            'STOP_LIMIT'
        ]);

        $table->decimal('price', 30, 12)->nullable();

        $table->decimal('stop_price', 30, 12)->nullable();

        $table->decimal('quantity', 30, 12);

        $table->decimal('filled_quantity', 30, 12)->default(0);

        $table->decimal('remaining_quantity', 30, 12);

        $table->decimal('average_price', 30, 12)->default(0);

        $table->decimal('fee', 30, 12)->default(0);

        $table->enum('status', [
            'PENDING',
            'OPEN',
            'PARTIALLY_FILLED',
            'FILLED',
            'CANCELLED',
            'REJECTED',
            'EXPIRED'
        ])->default('PENDING');

        $table->timestamps();

        $table->index('user_id');
        $table->index('market_id');
        $table->index('status');
        $table->index(['market_id', 'side', 'status']);

    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
