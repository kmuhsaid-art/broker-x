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
        Schema::create('investment_orders', function (Blueprint $table) {

            $table->id();

            $table->uuid('uuid')->unique();

            /*
            |--------------------------------------------------------------------------
            | RELATIONSHIP
            |--------------------------------------------------------------------------
            */

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->foreignId('product_id')
                ->constrained('investment_products')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            $table->foreignId('wallet_id')
                ->constrained()
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            /*
            |--------------------------------------------------------------------------
            | INVESTMENT
            |--------------------------------------------------------------------------
            */

            $table->decimal('amount',24,8);

            $table->decimal('expected_profit',24,8)->default(0);

            $table->decimal('current_profit',24,8)->default(0);

            /*
            |--------------------------------------------------------------------------
            | STATUS
            |--------------------------------------------------------------------------
            */

            $table->enum('status',[

                'PENDING',

                'APPROVED',

                'ACTIVE',

                'COMPLETED',

                'REJECTED',

                'CANCELLED'

            ])->default('PENDING');

            /*
            |--------------------------------------------------------------------------
            | NOTE
            |--------------------------------------------------------------------------
            */

            $table->text('user_note')->nullable();

            $table->text('admin_note')->nullable();

            /*
            |--------------------------------------------------------------------------
            | ADMIN
            |--------------------------------------------------------------------------
            */

            $table->foreignId('approved_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            /*
            |--------------------------------------------------------------------------
            | DATE
            |--------------------------------------------------------------------------
            */

            $table->timestamp('approved_at')->nullable();

            $table->timestamp('started_at')->nullable();

            $table->timestamp('ended_at')->nullable();

            $table->timestamp('completed_at')->nullable();

            $table->timestamps();

            /*
            |--------------------------------------------------------------------------
            | INDEX
            |--------------------------------------------------------------------------
            */

            $table->index('user_id');

            $table->index('product_id');

            $table->index('status');

            $table->index('approved_by');

            $table->index('started_at');

            $table->index('ended_at');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('investment_orders');
    }
};