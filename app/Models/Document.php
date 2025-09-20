<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon\Carbon;

class Document extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'category',
        'file_type',
        'file_path',
        'file_url',
        'file_size',
        'published_date',
        'author',
        'version',
        'tags',
        'is_featured',
        'is_active',
        'download_count',
        'sort_order',
    ];

    protected $casts = [
        'published_date' => 'date',
        'tags' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
        'download_count' => 'integer',
        'sort_order' => 'integer',
        'file_size' => 'integer',
    ];

    // Scope for active documents
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    // Scope for featured documents
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    // Scope for ordering
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('published_date', 'desc')->orderBy('id', 'desc');
    }

    // Get formatted file size
    public function getFormattedFileSizeAttribute()
    {
        if (!$this->file_size) return null;
        
        $bytes = $this->file_size;
        $units = ['B', 'KB', 'MB', 'GB'];
        
        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, 2) . ' ' . $units[$i];
    }

    // Get file icon based on file type
    public function getFileIconAttribute()
    {
        switch (strtolower($this->file_type)) {
            case 'pdf':
                return '📄';
            case 'doc':
            case 'docx':
                return '📝';
            case 'xls':
            case 'xlsx':
                return '📊';
            case 'ppt':
            case 'pptx':
                return '📋';
            case 'zip':
            case 'rar':
                return '📦';
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
                return '🖼️';
            default:
                return '📁';
        }
    }

    // Get category display name
    public static function getCategoryDisplayName($category)
    {
        $categories = [
            'plans_strategic' => 'Plans & Strategic Documents',
            'policy' => 'Policy Documents',
            'guidelines' => 'Guidelines',
            'reports' => 'Reports (Semi Annual and Annual Reports etc)',
            'manuals_sops' => 'Manuals, Forms, Tools and SOPs',
            'frameworks' => 'Frameworks',
            'iec_sbc' => 'IEC/SBC Materials',
            'databases' => 'Databases',
        ];

        return $categories[$category] ?? ucfirst(str_replace('_', ' ', $category));
    }

    // Get all available categories
    public static function getCategories()
    {
        return [
            'plans_strategic' => 'Plans & Strategic Documents',
            'policy' => 'Policy Documents',
            'guidelines' => 'Guidelines',
            'reports' => 'Reports (Semi Annual and Annual Reports etc)',
            'manuals_sops' => 'Manuals, Forms, Tools and SOPs',
            'frameworks' => 'Frameworks',
            'iec_sbc' => 'IEC/SBC Materials',
            'databases' => 'Databases',
        ];
    }
}
