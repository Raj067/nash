<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Video extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'youtube_url',
        'youtube_id',
        'thumbnail_url',
        'category',
        'duration',
        'is_featured',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
        'duration' => 'integer',
        'sort_order' => 'integer',
    ];

    // Scope for active videos
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    // Scope for featured videos
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    // Get YouTube embed URL
    public function getEmbedUrlAttribute()
    {
        return "https://www.youtube.com/embed/{$this->youtube_id}";
    }

    // Get YouTube thumbnail URL if not set
    public function getThumbnailAttribute()
    {
        return $this->thumbnail_url ?: "https://img.youtube.com/vi/{$this->youtube_id}/maxresdefault.jpg";
    }

    // Extract YouTube ID from URL
    public static function extractYouTubeId($url)
    {
        preg_match('/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/', $url, $matches);
        return $matches[1] ?? null;
    }
}
