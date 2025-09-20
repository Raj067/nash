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
        Schema::table('blogs', function (Blueprint $table) {
            // Drop the problematic indexes if they exist
            try {
                $table->dropIndex(['category', 'is_published']);
            } catch (Exception $e) {
                // Index might not exist, ignore
            }
            
            try {
                $table->dropIndex(['is_featured', 'is_published']);
            } catch (Exception $e) {
                // Index might not exist, ignore
            }
            
            // Modify category column to have a shorter length
            $table->string('category', 50)->change();
            $table->string('author', 100)->nullable()->change();
            
            // Re-create the indexes with shorter keys
            $table->index(['category', 'is_published'], 'blogs_category_published_idx');
            $table->index(['is_featured', 'is_published'], 'blogs_featured_published_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('blogs', function (Blueprint $table) {
            // Drop the new indexes
            $table->dropIndex('blogs_category_published_idx');
            $table->dropIndex('blogs_featured_published_idx');
            
            // Revert column changes
            $table->string('category', 255)->change();
            $table->string('author', 255)->nullable()->change();
        });
    }
};
