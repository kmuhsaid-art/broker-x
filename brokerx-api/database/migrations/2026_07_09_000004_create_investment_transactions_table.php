<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('investment_transactions', function (Blueprint $table) {

            $table->id();

            $table->foreignId('investment_order_id')
                ->constrained('investment_orders')
                ->cascadeOnDelete();

            $table->string('type', 30);

            $table->decimal('amount', 24, 8);

            $table->text('description')->nullable();

            $table->timestamps();

            $table->index([
                'investment_order_id',
                'type'
            ]);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('investment_transactions');
    }
};