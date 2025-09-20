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
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('category'); // plans_strategic, policy, guidelines, reports, manuals_sops, frameworks, iec_sbc, databases
            $table->string('file_type'); // pdf, doc, docx, xls, xlsx, ppt, pptx, etc.
            $table->string('file_path'); // path to the uploaded file
            $table->string('file_url')->nullable(); // external URL if not uploaded
            $table->bigInteger('file_size')->nullable(); // file size in bytes
            $table->date('published_date')->nullable();
            $table->string('author')->nullable();
            $table->string('version')->nullable();
            $table->text('tags')->nullable(); // JSON array of tags
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->integer('download_count')->default(0);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
