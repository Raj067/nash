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
        Schema::create('feedback', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['general', 'complaint', 'compliment', 'suggestion']);
            $table->string('name', 191);
            $table->string('email', 191);
            $table->string('phone', 20)->nullable();
            $table->string('subject', 191);
            $table->text('message');
            $table->integer('rating')->nullable()->comment('1-5 star rating');
            $table->string('ip_address', 45)->nullable(); // IPv6 max length
            $table->enum('status', ['pending', 'in_progress', 'resolved', 'closed'])->default('pending');
            $table->text('admin_response')->nullable();
            $table->timestamp('responded_at')->nullable();
            $table->timestamps();
            
            // Separate indexes to avoid key length issues
            $table->index('type');
            $table->index('status');
            $table->index('email');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feedback');
    }
};
