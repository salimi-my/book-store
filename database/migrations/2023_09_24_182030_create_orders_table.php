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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();

            $table->string('order_no', 50)->nullable();

            $table->string('shipping_name');
            $table->string('shipping_phone', 50);
            $table->string('shipping_address');
            $table->string('shipping_city', 100);
            $table->string('shipping_postal_code', 100);
            $table->string('shipping_state');
            $table->string('shipping_country');

            $table->float('subtotal', 10, 2);
            $table->float('shipping', 10, 2);
            $table->float('total', 10, 2);

            $table->timestamp('paid_at')->nullable();
            $table->timestamp('shipped_at')->nullable();
            $table->timestamp('delivered_at')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
