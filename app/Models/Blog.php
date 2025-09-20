<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;
use Carbon\Carbon;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'category',
        'featured_image',
        'author',
        'published_date',
        'tags',
        'is_featured',
        'is_published',
        'views_count',
        'sort_order',
        'meta_data',
    ];

    protected $casts = [
        'published_date' => 'date',
        'tags' => 'array',
        'is_featured' => 'boolean',
        'is_published' => 'boolean',
        'views_count' => 'integer',
        'sort_order' => 'integer',
        'meta_data' => 'array',
    ];

    // Automatically generate slug from title
    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($blog) {
            if (empty($blog->slug)) {
                $blog->slug = Str::slug($blog->title);
            }
        });
        
        static::updating(function ($blog) {
            if ($blog->isDirty('title') && empty($blog->getOriginal('slug'))) {
                $blog->slug = Str::slug($blog->title);
            }
        });
    }

    // Scope for published blogs
    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }

    // Scope for featured blogs
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    // Scope for ordering
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('published_date', 'desc')->orderBy('id', 'desc');
    }

    // Scope for category filtering
    public function scopeByCategory($query, $category)
    {
        return $query->where('category', $category);
    }

    // Get formatted published date
    public function getFormattedPublishedDateAttribute()
    {
        return $this->published_date ? $this->published_date->format('M d, Y') : null;
    }

    // Get reading time estimate
    public function getReadingTimeAttribute()
    {
        $wordCount = str_word_count(strip_tags($this->content));
        $readingTime = ceil($wordCount / 200); // Average reading speed: 200 words per minute
        return $readingTime . ' min read';
    }

    // Get excerpt or generate from content
    public function getExcerptAttribute($value)
    {
        if ($value) {
            return $value;
        }
        
        // Generate excerpt from content if not provided
        $plainText = strip_tags($this->content);
        return Str::limit($plainText, 150);
    }

    // Get category display name
    public static function getCategoryDisplayName($category)
    {
        $categories = [
            'news' => 'News',
            'press_releases' => 'Press Releases',
            'speeches' => 'Speeches',
            'events' => 'NASHCOP Events',
            'newsletter' => 'Newsletter',
            'photo_gallery' => 'Photo Gallery',
        ];

        return $categories[$category] ?? ucfirst(str_replace('_', ' ', $category));
    }

    // Get all available categories
    public static function getCategories()
    {
        return [
            'news' => 'News',
            'press_releases' => 'Press Releases',
            'speeches' => 'Speeches',
            'events' => 'NASHCOP Events',
            'newsletter' => 'Newsletter',
            'photo_gallery' => 'Photo Gallery',
        ];
    }

    // Get category icon
    public static function getCategoryIcon($category)
    {
        $icons = [
            'news' => '📰',
            'press_releases' => '📄',
            'speeches' => '🎤',
            'events' => '📅',
            'newsletter' => '📧',
            'photo_gallery' => '📸',
        ];

        return $icons[$category] ?? '📝';
    }

    // Increment views count
    public function incrementViews()
    {
        $this->increment('views_count');
    }
}
