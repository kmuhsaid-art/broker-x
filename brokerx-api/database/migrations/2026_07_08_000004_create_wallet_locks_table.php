Schema::create('wallet_locks', function (Blueprint $table) {

    $table->id();


    $table->foreignId('wallet_id')
        ->constrained()
        ->cascadeOnDelete();


    $table->decimal(
        'amount',
        20,
        8
    );


    $table->string(
        'type'
    );


    $table->string(
    'status',
    30
)->default('ACTIVE')->index();


    $table->nullableMorphs(
        'reference'
    );


    $table->text(
        'description'
    )->nullable();


    $table->unsignedBigInteger(
        'created_by'
    )->nullable();


    $table->timestamp(
        'released_at'
    )->nullable();


    $table->text(
        'release_note'
    )->nullable();


    $table->unsignedBigInteger(
        'released_by'
    )->nullable();


    $table->timestamps();

});