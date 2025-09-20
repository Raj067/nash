<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Document;
use Inertia\Inertia;

class DocumentController extends Controller
{
    /**
     * Get documents by category for resource pages
     */
    public function getByCategory($category)
    {
        $documents = Document::active()
            ->where('category', $category)
            ->ordered()
            ->get()
            ->map(function ($document) {
                return [
                    'id' => $document->id,
                    'title' => $document->title,
                    'description' => $document->description,
                    'category' => $document->category,
                    'file_type' => $document->file_type,
                    'file_path' => $document->file_path,
                    'file_url' => $document->file_url,
                    'file_size' => $document->file_size,
                    'formatted_file_size' => $document->formatted_file_size,
                    'file_icon' => $document->file_icon,
                    'published_date' => $document->published_date?->format('Y-m-d'),
                    'author' => $document->author,
                    'version' => $document->version,
                    'tags' => $document->tags,
                    'is_featured' => $document->is_featured,
                    'download_count' => $document->download_count,
                ];
            });

        return response()->json($documents);
    }

    /**
     * Get all documents for general resources page
     */
    public function index()
    {
        $documents = Document::active()
            ->ordered()
            ->get()
            ->map(function ($document) {
                return [
                    'id' => $document->id,
                    'title' => $document->title,
                    'description' => $document->description,
                    'category' => $document->category,
                    'category_display' => Document::getCategoryDisplayName($document->category),
                    'file_type' => $document->file_type,
                    'file_path' => $document->file_path,
                    'file_url' => $document->file_url,
                    'file_size' => $document->file_size,
                    'formatted_file_size' => $document->formatted_file_size,
                    'file_icon' => $document->file_icon,
                    'published_date' => $document->published_date?->format('Y-m-d'),
                    'author' => $document->author,
                    'version' => $document->version,
                    'tags' => $document->tags,
                    'is_featured' => $document->is_featured,
                    'download_count' => $document->download_count,
                ];
            });

        return response()->json($documents);
    }

    /**
     * Get featured documents
     */
    public function getFeatured()
    {
        $documents = Document::active()
            ->featured()
            ->ordered()
            ->limit(6)
            ->get()
            ->map(function ($document) {
                return [
                    'id' => $document->id,
                    'title' => $document->title,
                    'description' => $document->description,
                    'category' => $document->category,
                    'category_display' => Document::getCategoryDisplayName($document->category),
                    'file_type' => $document->file_type,
                    'file_path' => $document->file_path,
                    'file_url' => $document->file_url,
                    'formatted_file_size' => $document->formatted_file_size,
                    'file_icon' => $document->file_icon,
                    'published_date' => $document->published_date?->format('Y-m-d'),
                    'author' => $document->author,
                    'version' => $document->version,
                ];
            });

        return response()->json($documents);
    }

    /**
     * Handle document download and increment counter
     */
    public function download($id)
    {
        $document = Document::findOrFail($id);
        
        // Increment download count
        $document->increment('download_count');
        
        // Return file download or redirect to external URL
        if ($document->file_url) {
            return redirect($document->file_url);
        } else {
            // For actual file downloads, you would implement file serving logic here
            return response()->download(public_path($document->file_path));
        }
    }

    /**
     * Get documents for specific resource pages with Inertia
     */
    public function strategicFramework()
    {
        $documents = Document::active()
            ->whereIn('category', ['plans_strategic', 'frameworks'])
            ->ordered()
            ->get()
            ->map(function ($document) {
                return [
                    'id' => $document->id,
                    'title' => $document->title,
                    'description' => $document->description,
                    'category' => $document->category,
                    'category_display' => Document::getCategoryDisplayName($document->category),
                    'file_type' => $document->file_type,
                    'file_path' => $document->file_path,
                    'file_url' => $document->file_url,
                    'formatted_file_size' => $document->formatted_file_size,
                    'file_icon' => $document->file_icon,
                    'published_date' => $document->published_date?->format('Y-m-d'),
                    'author' => $document->author,
                    'version' => $document->version,
                    'tags' => $document->tags,
                    'is_featured' => $document->is_featured,
                ];
            });

        return Inertia::render('Resources/StrategicFramework', [
            'documents' => $documents
        ]);
    }

    public function guidelines()
    {
        $documents = Document::active()
            ->where('category', 'guidelines')
            ->ordered()
            ->get()
            ->map(function ($document) {
                return [
                    'id' => $document->id,
                    'title' => $document->title,
                    'description' => $document->description,
                    'category' => $document->category,
                    'category_display' => Document::getCategoryDisplayName($document->category),
                    'file_type' => $document->file_type,
                    'file_path' => $document->file_path,
                    'file_url' => $document->file_url,
                    'formatted_file_size' => $document->formatted_file_size,
                    'file_icon' => $document->file_icon,
                    'published_date' => $document->published_date?->format('Y-m-d'),
                    'author' => $document->author,
                    'version' => $document->version,
                    'tags' => $document->tags,
                    'is_featured' => $document->is_featured,
                ];
            });

        return Inertia::render('Resources/Guidelines', [
            'documents' => $documents
        ]);
    }

    public function databases()
    {
        $documents = Document::active()
            ->where('category', 'databases')
            ->ordered()
            ->get()
            ->map(function ($document) {
                return [
                    'id' => $document->id,
                    'title' => $document->title,
                    'description' => $document->description,
                    'category' => $document->category,
                    'category_display' => Document::getCategoryDisplayName($document->category),
                    'file_type' => $document->file_type,
                    'file_path' => $document->file_path,
                    'file_url' => $document->file_url,
                    'formatted_file_size' => $document->formatted_file_size,
                    'file_icon' => $document->file_icon,
                    'published_date' => $document->published_date?->format('Y-m-d'),
                    'author' => $document->author,
                    'version' => $document->version,
                    'tags' => $document->tags,
                    'is_featured' => $document->is_featured,
                ];
            });

        return Inertia::render('Resources/Databases', [
            'documents' => $documents
        ]);
    }

    public function sopManuals()
    {
        $documents = Document::active()
            ->where('category', 'manuals_sops')
            ->ordered()
            ->get()
            ->map(function ($document) {
                return [
                    'id' => $document->id,
                    'title' => $document->title,
                    'description' => $document->description,
                    'category' => $document->category,
                    'category_display' => Document::getCategoryDisplayName($document->category),
                    'file_type' => $document->file_type,
                    'file_path' => $document->file_path,
                    'file_url' => $document->file_url,
                    'formatted_file_size' => $document->formatted_file_size,
                    'file_icon' => $document->file_icon,
                    'published_date' => $document->published_date?->format('Y-m-d'),
                    'author' => $document->author,
                    'version' => $document->version,
                    'tags' => $document->tags,
                    'is_featured' => $document->is_featured,
                ];
            });

        return Inertia::render('Resources/SopManuals', [
            'documents' => $documents
        ]);
    }

    public function resources()
    {
        $documents = Document::active()
            ->ordered()
            ->get()
            ->map(function ($document) {
                return [
                    'id' => $document->id,
                    'title' => $document->title,
                    'description' => $document->description,
                    'category' => $document->category,
                    'category_display' => Document::getCategoryDisplayName($document->category),
                    'file_type' => $document->file_type,
                    'file_path' => $document->file_path,
                    'file_url' => $document->file_url,
                    'formatted_file_size' => $document->formatted_file_size,
                    'file_icon' => $document->file_icon,
                    'published_date' => $document->published_date?->format('Y-m-d'),
                    'author' => $document->author,
                    'version' => $document->version,
                    'tags' => $document->tags,
                    'is_featured' => $document->is_featured,
                ];
            });

        return Inertia::render('Resources/Index', [
            'documents' => $documents
        ]);
    }

    public function policyDocuments()
    {
        $documents = Document::active()
            ->where('category', 'policy')
            ->ordered()
            ->get()
            ->map(function ($document) {
                return [
                    'id' => $document->id,
                    'title' => $document->title,
                    'description' => $document->description,
                    'category' => $document->category,
                    'category_display' => Document::getCategoryDisplayName($document->category),
                    'file_type' => $document->file_type,
                    'file_path' => $document->file_path,
                    'file_url' => $document->file_url,
                    'formatted_file_size' => $document->formatted_file_size,
                    'file_icon' => $document->file_icon,
                    'published_date' => $document->published_date?->format('Y-m-d'),
                    'author' => $document->author,
                    'version' => $document->version,
                    'tags' => $document->tags,
                    'is_featured' => $document->is_featured,
                ];
            });

        return Inertia::render('Resources/PolicyDocuments', [
            'documents' => $documents
        ]);
    }

    public function reports()
    {
        $documents = Document::active()
            ->where('category', 'reports')
            ->ordered()
            ->get()
            ->map(function ($document) {
                return [
                    'id' => $document->id,
                    'title' => $document->title,
                    'description' => $document->description,
                    'category' => $document->category,
                    'category_display' => Document::getCategoryDisplayName($document->category),
                    'file_type' => $document->file_type,
                    'file_path' => $document->file_path,
                    'file_url' => $document->file_url,
                    'formatted_file_size' => $document->formatted_file_size,
                    'file_icon' => $document->file_icon,
                    'published_date' => $document->published_date?->format('Y-m-d'),
                    'author' => $document->author,
                    'version' => $document->version,
                    'tags' => $document->tags,
                    'is_featured' => $document->is_featured,
                ];
            });

        return Inertia::render('Resources/Reports', [
            'documents' => $documents
        ]);
    }

    public function iecMaterials()
    {
        $documents = Document::active()
            ->where('category', 'iec_sbc')
            ->ordered()
            ->get()
            ->map(function ($document) {
                return [
                    'id' => $document->id,
                    'title' => $document->title,
                    'description' => $document->description,
                    'category' => $document->category,
                    'category_display' => Document::getCategoryDisplayName($document->category),
                    'file_type' => $document->file_type,
                    'file_path' => $document->file_path,
                    'file_url' => $document->file_url,
                    'formatted_file_size' => $document->formatted_file_size,
                    'file_icon' => $document->file_icon,
                    'published_date' => $document->published_date?->format('Y-m-d'),
                    'author' => $document->author,
                    'version' => $document->version,
                    'tags' => $document->tags,
                    'is_featured' => $document->is_featured,
                ];
            });

        return Inertia::render('Resources/IecMaterials', [
            'documents' => $documents
        ]);
    }
}
