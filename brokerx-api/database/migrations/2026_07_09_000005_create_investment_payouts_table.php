<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('investment_payouts', function (Blueprint $table) {

            $table->id();

            $table->foreignId('investment_order_id')
                ->constrained('investment_orders')
                ->cascadeOnDelete();

            $table->decimal('amount', 24, 8);

            $table->enum('status', [
                'PENDING',
                'SUCCESS',
                'FAILED'
            ])->default('PENDING');

            $table->string('method')->nullable();

            $table->string('transaction_reference')
                ->nullable()
                ->unique();

            $table->foreignId('paid_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->timestamp('paid_at')->nullable();

            $table->text('note')->nullable();

            $table->timestamps();

            $table->index([
                'investment_order_id',
                'status'
            ]);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('investment_payouts');
    }
};