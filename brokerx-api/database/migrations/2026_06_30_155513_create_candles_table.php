<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('candles', function (Blueprint $table) {

            $table->id();

            $table->foreignId('market_id')
                ->constrained()
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->string('interval', 20);

            $table->decimal('open', 30, 12);

            $table->decimal('high', 30, 12);

            $table->decimal('low', 30, 12);

            $table->decimal('close', 30, 12);

            $table->decimal('volume', 30, 12);

            $table->timestamp('open_time');

            $table->timestamp('close_time');

            $table->timestamps();

            $table->unique([
                'market_id',
                'interval',
                'open_time'
            ]);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('candles');
    }
};