<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('withdrawals', function (Blueprint $table) {

            $table->id();

            $table->uuid('uuid')->unique();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('wallet_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('payment_account_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete();

            $table->decimal('amount',30,12);

            $table->decimal('fee',30,12)->default(0);

            $table->decimal('net_amount',30,12);

            $table->string('destination');

            $table->string('reference')->nullable();

            $table->enum('status',[
                'PENDING',
                'PROCESSING',
                'COMPLETED',
                'REJECTED',
                'CANCELLED'
            ])->default('PENDING');

            $table->timestamp('processed_at')->nullable();

            $table->timestamps();

            $table->index([
                'user_id',
                'status'
            ]);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('withdrawals');
    }
};