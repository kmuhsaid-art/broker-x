<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::statement("
            ALTER TABLE wallet_locks
            MODIFY status ENUM(
                'ACTIVE',
                'RELEASED',
                'CAPTURED'
            ) NOT NULL DEFAULT 'ACTIVE'
        ");
    }

    public function down(): void
    {
        DB::statement("
            ALTER TABLE wallet_locks
            MODIFY status ENUM(
                'ACTIVE',
                'RELEASED'
            ) NOT NULL DEFAULT 'ACTIVE'
        ");
    }
};