<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('wallet_transactions', function (Blueprint $table) {

            $table->id();

            $table->uuid('uuid')->unique();

            $table->foreignId('wallet_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('currency',20);

            $table->enum('type',[

                'DEPOSIT',

                'WITHDRAW',

                'TRANSFER',

                'TRADE_BUY',

                'TRADE_SELL',

                'TRADE_FEE',

                'INVESTMENT_LOCK',

                'INVESTMENT_RELEASE',

                'INVESTMENT_PROFIT',

                'REFERRAL',

                'BONUS',

                'COMMISSION',

                'ADJUSTMENT',

                'REFUND'

            ]);

            $table->enum('direction',[

                'CREDIT',

                'DEBIT'

            ]);

            $table->decimal('amount',30,12);

            $table->decimal('balance_before',30,12);

            $table->decimal('balance_after',30,12);

            $table->decimal('locked_before',30,12)->default(0);

            $table->decimal('locked_after',30,12)->default(0);

            $table->string('reference_type')->nullable();

            $table->unsignedBigInteger('reference_id')->nullable();

            $table->string('reference_no')->nullable();

            $table->text('description')->nullable();

            $table->json('metadata')->nullable();

            $table->foreignId('created_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->timestamps();

            $table->index('wallet_id');

            $table->index('user_id');

            $table->index('type');

            $table->index('reference_type');

            $table->index('reference_id');

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('wallet_transactions');
    }
};