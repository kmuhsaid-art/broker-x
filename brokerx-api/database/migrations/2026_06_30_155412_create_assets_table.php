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
    Schema::create('assets', function (Blueprint $table) {

        $table->id();

        $table->uuid('uuid')->unique();

        $table->foreignId('asset_category_id')
              ->constrained()
              ->cascadeOnUpdate()
              ->restrictOnDelete();

        $table->string('symbol',20)->unique();

        $table->string('name',100);

        $table->string('slug',120)->unique();

        $table->string('icon')->nullable();

        $table->unsignedTinyInteger('precision')->default(8);

        $table->unsignedTinyInteger('display_precision')->default(2);

        $table->boolean('is_tradeable')->default(true);

        $table->boolean('is_depositable')->default(true);

        $table->boolean('is_withdrawable')->default(true);

        $table->boolean('is_active')->default(true);

        $table->timestamps();

    });
}
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assets');
    }
};
