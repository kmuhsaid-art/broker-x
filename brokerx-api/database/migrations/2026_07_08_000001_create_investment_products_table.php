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
        Schema::create('investment_products', function (Blueprint $table) {

            $table->id();

            $table->uuid('uuid')->unique();

            $table->foreignId('category_id')
                ->constrained('investment_categories')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            /*
            |--------------------------------------------------------------------------
            | BASIC
            |--------------------------------------------------------------------------
            */

            $table->string('title');

            $table->string('slug')->unique();

            $table->longText('description');

            $table->string('currency',20)->default('USDT');

            /*
            |--------------------------------------------------------------------------
            | INVESTMENT
            |--------------------------------------------------------------------------
            */

            $table->decimal('minimum_amount',24,8);

            $table->decimal('maximum_amount',24,8);

            /*
            |--------------------------------------------------------------------------
            | RETURN
            |--------------------------------------------------------------------------
            */

            $table->decimal('expected_roi',10,2);

            $table->enum('roi_type',[
                'PERCENT',
                'FIXED'
            ])->default('PERCENT');

            /*
            |--------------------------------------------------------------------------
            | DURATION
            |--------------------------------------------------------------------------
            */

            $table->unsignedInteger('duration_value');

            $table->enum('duration_unit',[
                'MINUTE',
                'HOUR',
                'DAY',
                'WEEK',
                'MONTH',
                'YEAR'
            ]);

            /*
            |--------------------------------------------------------------------------
            | PROFIT
            |--------------------------------------------------------------------------
            */

            $table->enum('profit_distribution',[
                'END',
                'DAILY',
                'WEEKLY',
                'MONTHLY'
            ])->default('END');

            /*
            |--------------------------------------------------------------------------
            | SETTINGS
            |--------------------------------------------------------------------------
            */

            $table->enum('risk_level',[
                'LOW',
                'MEDIUM',
                'HIGH'
            ]);

            $table->boolean('featured')->default(false);

            $table->boolean('allow_early_withdraw')->default(false);

            $table->boolean('auto_renew')->default(false);

            $table->boolean('status')->default(true);

            /*
            |--------------------------------------------------------------------------
            | MEDIA
            |--------------------------------------------------------------------------
            */

            $table->string('thumbnail')->nullable();

            $table->string('banner')->nullable();

            /*
            |--------------------------------------------------------------------------
            | TERMS
            |--------------------------------------------------------------------------
            */

            $table->longText('terms')->nullable();

            /*
            |--------------------------------------------------------------------------
            | ADMIN
            |--------------------------------------------------------------------------
            */

            $table->foreignId('created_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->timestamps();

            $table->index('status');

            $table->index('featured');

            $table->index('category_id');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('investment_products');
    }
};