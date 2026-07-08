<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {

            $table->id();

            $table->foreignId('wallet_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->enum('type', [
                'deposit',
                'withdraw',
                'trade_buy',
                'trade_sell',
                'fee',
                'transfer'
            ]);

            $table->enum('direction', [
                'credit',
                'debit'
            ]);

            $table->decimal(
                'amount',
                20,
                8
            );

            $table->decimal(
                'balance_after',
                20,
                8
            );

            $table->string(
                'reference'
            )->nullable();

            $table->json(
                'metadata'
            )->nullable();

            $table->timestamps();

            $table->index([
                'wallet_id',
                'type'
            ]);
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};