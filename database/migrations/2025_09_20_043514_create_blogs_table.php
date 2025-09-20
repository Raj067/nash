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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug', 191)->unique(); // 191 chars for utf8mb4 compatibility
            $table->text('excerpt')->nullable();
            $table->longText('content'); // Rich text content
            $table->string('category', 50); // news, press_releases, speeches, events, newsletter, photo_gallery
            $table->string('featured_image')->nullable();
            $table->string('author', 100)->nullable();
            $table->date('published_date')->nullable();
            $table->json('tags')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_published')->default(true);
            $table->integer('views_count')->default(0);
            $table->integer('sort_order')->default(0);
            $table->json('meta_data')->nullable(); // For SEO and additional metadata
            $table->timestamps();
            
            $table->index(['category', 'is_published']);
            $table->index(['is_featured', 'is_published']);
            $table->index('published_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
