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
    Schema::create('markets', function (Blueprint $table) {

        $table->id();

        $table->uuid('uuid')->unique();

        $table->foreignId('base_asset_id')
              ->constrained('assets')
              ->cascadeOnUpdate()
              ->restrictOnDelete();

        $table->foreignId('quote_asset_id')
              ->constrained('assets')
              ->cascadeOnUpdate()
              ->restrictOnDelete();

        $table->string('symbol', 30)->unique();

        $table->string('display_name', 50);

        $table->enum('engine', [
            'SPOT',
            'CFD',
            'FUTURES',
            'MARGIN'
        ]);

        $table->unsignedTinyInteger('price_precision')->default(2);

        $table->unsignedTinyInteger('quantity_precision')->default(8);

        $table->decimal('tick_size', 20, 10)->default(0.01);

        $table->decimal('step_size', 20, 10)->default(0.00000001);

        $table->decimal('min_quantity', 30, 12)->default(0);

        $table->decimal('max_quantity', 30, 12)->default(999999999);

        $table->decimal('maker_fee', 8, 4)->default(0.1000);

        $table->decimal('taker_fee', 8, 4)->default(0.1000);

        $table->boolean('is_active')->default(true);

        $table->timestamps();

    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('markets');
    }
};
