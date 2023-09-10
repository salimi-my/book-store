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
        Schema::create('books', function (Blueprint $table) {
            $table->id();

            $table->enum('type', ['Fiction', 'Non-Fiction']);

            $table->string('title', 255);
            $table->text('description');
            $table->string('image');
            $table->string('isbn', 255);
            $table->string('author', 255);
            $table->string('publisher', 255);
            $table->unsignedInteger('stocks');
            $table->unsignedInteger('pages');
            $table->unsignedInteger('weight');
            $table->float('price', 10, 2);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
