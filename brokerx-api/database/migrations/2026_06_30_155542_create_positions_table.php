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
    Schema::create('positions', function (Blueprint $table) {

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

        $table->enum('side', [
            'LONG',
            'SHORT'
        ]);

        $table->decimal('quantity', 30, 12);

        $table->decimal('entry_price', 30, 12);

        $table->decimal('mark_price', 30, 12);

        $table->decimal('liquidation_price', 30, 12)->nullable();

        $table->unsignedSmallInteger('leverage')->default(1);

        $table->decimal('margin', 30, 12);

        $table->decimal('unrealized_pnl', 30, 12)->default(0);

        $table->decimal('realized_pnl', 30, 12)->default(0);

        $table->enum('status', [
            'OPEN',
            'CLOSED',
            'LIQUIDATED'
        ])->default('OPEN');

        $table->timestamp('opened_at');

        $table->timestamp('closed_at')->nullable();

        $table->timestamps();

        $table->index('user_id');
        $table->index('market_id');
        $table->index('status');
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('positions');
    }
};
