<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Document;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
{
    /**
     * Display a listing of the documents.
     */
    public function index(Request $request)
    {
        $query = Document::query();

        // Search functionality
        if ($request->filled('search')) {
            $search = $request->get('search');
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('author', 'like', "%{$search}%")
                  ->orWhere('tags', 'like', "%{$search}%");
            });
        }

        // Filter by category
        if ($request->filled('category')) {
            $query->where('category', $request->get('category'));
        }

        // Filter by status
        if ($request->filled('status')) {
            $status = $request->get('status') === 'active';
            $query->where('is_active', $status);
        }

        // Filter by featured
        if ($request->filled('featured')) {
            $featured = $request->get('featured') === 'yes';
            $query->where('is_featured', $featured);
        }

        // Filter by file type
        if ($request->filled('file_type')) {
            $query->where('file_type', $request->get('file_type'));
        }

        // Order by sort_order and published_date
        $documents = $query->orderBy('sort_order')
                          ->orderBy('published_date', 'desc')
                          ->orderBy('id', 'desc')
                          ->paginate(12)
                          ->withQueryString();

        // Get unique categories and file types for filters
        $categories = Document::getCategories();
        $fileTypes = Document::distinct()
                            ->pluck('file_type')
                            ->filter()
                            ->sort()
                            ->values();

        // Get statistics
        $stats = [
            'total' => Document::count(),
            'active' => Document::active()->count(),
            'featured' => Document::featured()->count(),
            'total_downloads' => Document::sum('download_count'),
            'categories_count' => Document::distinct('category')->count(),
            'file_types_count' => Document::distinct('file_type')->count(),
        ];

        return Inertia::render('Admin/Documents/Index', [
            'documents' => $documents,
            'categories' => $categories,
            'fileTypes' => $fileTypes,
            'stats' => $stats,
            'filters' => $request->only(['search', 'category', 'status', 'featured', 'file_type']),
        ]);
    }

    /**
     * Show the form for creating a new document.
     */
    public function create()
    {
        $categories = Document::getCategories();

        return Inertia::render('Admin/Documents/Create', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created document in storage.
     */
    public function store(Request $request)
    {
        try {
            // Check if file upload is enabled
            if (!ini_get('file_uploads')) {
                return back()->withErrors(['file' => 'File uploads are disabled on this server.']);
            }

            // Check for upload errors first
            if ($request->hasFile('file')) {
                $file = $request->file('file');
                
                // Check for upload errors
                if (!$file->isValid()) {
                    $error = $this->getUploadErrorMessage($file->getError());
                    return back()->withErrors(['file' => $error]);
                }

                // Check file size before validation
                $maxSize = $this->getMaxUploadSize();
                if ($file->getSize() > $maxSize) {
                    $maxSizeMB = round($maxSize / 1024 / 1024, 2);
                    return back()->withErrors(['file' => "File size exceeds server limit of {$maxSizeMB}MB."]);
                }
            }

            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'category' => 'required|string|in:' . implode(',', array_keys(Document::getCategories())),
                'file' => 'nullable|file|mimes:pdf,doc,docx,xls,xlsx,ppt,pptx,zip,rar,jpg,jpeg,png,gif|max:512000', // 500MB
                'file_url' => 'nullable|url',
                'published_date' => 'required|date',
                'author' => 'required|string|max:255',
                'version' => 'nullable|string|max:50',
                'tags' => 'nullable|string',
                'is_featured' => 'boolean',
                'is_active' => 'boolean',
                'sort_order' => 'nullable|integer|min:0',
            ]);

            // Validate that either file or file_url is provided
            if (!$request->hasFile('file') && !$request->filled('file_url')) {
                return back()->withErrors(['file' => 'Either upload a file or provide a file URL.']);
            }

            // Handle file upload
            if ($request->hasFile('file')) {
                $file = $request->file('file');
                
                // Ensure storage directory exists and is writable
                $uploadDir = storage_path('app/public/documents/uploads');
                if (!is_dir($uploadDir)) {
                    mkdir($uploadDir, 0755, true);
                }
                
                if (!is_writable($uploadDir)) {
                    return back()->withErrors(['file' => 'Upload directory is not writable. Please contact administrator.']);
                }

                // Generate unique filename
                $fileName = time() . '_' . uniqid() . '_' . $file->getClientOriginalName();
                
                try {
                    $filePath = $file->storeAs('documents/uploads', $fileName, 'public');
                    
                    if (!$filePath) {
                        return back()->withErrors(['file' => 'Failed to store file. Please try again.']);
                    }
                    
                    $validated['file_path'] = $filePath;
                    $validated['file_type'] = strtolower($file->getClientOriginalExtension());
                    $validated['file_size'] = $file->getSize();
                    $validated['file_url'] = null;
                } catch (\Exception $e) {
                    \Log::error('File upload error: ' . $e->getMessage());
                    return back()->withErrors(['file' => 'File upload failed: ' . $e->getMessage()]);
                }
            } else {
                // Using external URL
                $validated['file_path'] = null;
                $validated['file_type'] = 'url';
                $validated['file_size'] = null;
            }

            // Process tags
            if ($validated['tags']) {
                $validated['tags'] = array_map('trim', explode(',', $validated['tags']));
            } else {
                $validated['tags'] = [];
            }

            // Set defaults
            if (!isset($validated['is_active'])) {
                $validated['is_active'] = true;
            }
            if (!isset($validated['is_featured'])) {
                $validated['is_featured'] = false;
            }
            if (!isset($validated['sort_order'])) {
                $validated['sort_order'] = Document::max('sort_order') + 1;
            }

            // Initialize download count
            $validated['download_count'] = 0;

            Document::create($validated);

            return redirect()->route('admin.documents.index')
                            ->with('success', 'Document created successfully.');
                            
        } catch (\Exception $e) {
            \Log::error('Document creation error: ' . $e->getMessage());
            return back()->withErrors(['file' => 'An error occurred while creating the document. Please try again.']);
        }
    }

    /**
     * Get upload error message based on PHP upload error code
     */
    private function getUploadErrorMessage($errorCode)
    {
        switch ($errorCode) {
            case UPLOAD_ERR_INI_SIZE:
                return 'File size exceeds server upload_max_filesize limit.';
            case UPLOAD_ERR_FORM_SIZE:
                return 'File size exceeds form MAX_FILE_SIZE limit.';
            case UPLOAD_ERR_PARTIAL:
                return 'File was only partially uploaded. Please try again.';
            case UPLOAD_ERR_NO_FILE:
                return 'No file was uploaded.';
            case UPLOAD_ERR_NO_TMP_DIR:
                return 'Missing temporary upload directory.';
            case UPLOAD_ERR_CANT_WRITE:
                return 'Failed to write file to disk.';
            case UPLOAD_ERR_EXTENSION:
                return 'File upload stopped by PHP extension.';
            default:
                return 'Unknown upload error occurred.';
        }
    }

    /**
     * Get maximum upload size in bytes
     */
    private function getMaxUploadSize()
    {
        $maxUpload = $this->parseSize(ini_get('upload_max_filesize'));
        $maxPost = $this->parseSize(ini_get('post_max_size'));
        $memoryLimit = $this->parseSize(ini_get('memory_limit'));
        
        return min($maxUpload, $maxPost, $memoryLimit);
    }

    /**
     * Parse size string to bytes
     */
    private function parseSize($size)
    {
        $unit = preg_replace('/[^bkmgtpezy]/i', '', $size);
        $size = preg_replace('/[^0-9\.]/', '', $size);
        
        if ($unit) {
            return round($size * pow(1024, stripos('bkmgtpezy', $unit[0])));
        }
        
        return round($size);
    }

    /**
     * Display the specified document.
     */
    public function show(Document $document)
    {
        return Inertia::render('Admin/Documents/Show', [
            'document' => $document,
        ]);
    }

    /**
     * Show the form for editing the specified document.
     */
    public function edit(Document $document)
    {
        $categories = Document::getCategories();

        return Inertia::render('Admin/Documents/Edit', [
            'document' => $document,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified document in storage.
     */
    public function update(Request $request, Document $document)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string|in:' . implode(',', array_keys(Document::getCategories())),
            'file' => 'nullable|file|mimes:pdf,doc,docx,xls,xlsx,ppt,pptx,zip,rar,jpg,jpeg,png,gif|max:512000', // 500MB
            'file_url' => 'nullable|url',
            'published_date' => 'required|date',
            'author' => 'required|string|max:255',
            'version' => 'nullable|string|max:50',
            'tags' => 'nullable|string',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        // Handle file upload (if new file provided)
        if ($request->hasFile('file')) {
            // Delete old file if it exists
            if ($document->file_path && Storage::disk('public')->exists($document->file_path)) {
                Storage::disk('public')->delete($document->file_path);
            }

            $file = $request->file('file');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('documents/uploads', $fileName, 'public');
            
            $validated['file_path'] = $filePath;
            $validated['file_type'] = strtolower($file->getClientOriginalExtension());
            $validated['file_size'] = $file->getSize();
            $validated['file_url'] = null;
        } elseif ($request->filled('file_url') && $request->get('file_url') !== $document->file_url) {
            // Using new external URL
            if ($document->file_path && Storage::disk('public')->exists($document->file_path)) {
                Storage::disk('public')->delete($document->file_path);
            }
            
            $validated['file_path'] = null;
            $validated['file_type'] = 'url';
            $validated['file_size'] = null;
        }

        // Process tags
        if ($validated['tags']) {
            $validated['tags'] = array_map('trim', explode(',', $validated['tags']));
        } else {
            $validated['tags'] = [];
        }

        // Set defaults
        if (!isset($validated['is_active'])) {
            $validated['is_active'] = true;
        }
        if (!isset($validated['is_featured'])) {
            $validated['is_featured'] = false;
        }

        $document->update($validated);

        return redirect()->route('admin.documents.index')
                        ->with('success', 'Document updated successfully.');
    }

    /**
     * Remove the specified document from storage.
     */
    public function destroy(Document $document)
    {
        // Delete file if it exists
        if ($document->file_path && Storage::disk('public')->exists($document->file_path)) {
            Storage::disk('public')->delete($document->file_path);
        }

        $document->delete();

        return redirect()->route('admin.documents.index')
                        ->with('success', 'Document deleted successfully.');
    }

    /**
     * Toggle the active status of the document.
     */
    public function toggleStatus(Document $document)
    {
        $document->update([
            'is_active' => !$document->is_active
        ]);

        $status = $document->is_active ? 'activated' : 'deactivated';
        
        return redirect()->back()
                        ->with('success', "Document {$status} successfully.");
    }

    /**
     * Toggle the featured status of the document.
     */
    public function toggleFeatured(Document $document)
    {
        $document->update([
            'is_featured' => !$document->is_featured
        ]);

        $status = $document->is_featured ? 'featured' : 'unfeatured';
        
        return redirect()->back()
                        ->with('success', "Document {$status} successfully.");
    }

    /**
     * Bulk actions for documents.
     */
    public function bulkAction(Request $request)
    {
        $validated = $request->validate([
            'action' => 'required|in:activate,deactivate,feature,unfeature,delete',
            'ids' => 'required|array',
            'ids.*' => 'exists:documents,id',
        ]);

        $documents = Document::whereIn('id', $validated['ids']);

        switch ($validated['action']) {
            case 'activate':
                $documents->update(['is_active' => true]);
                $message = 'Documents activated successfully.';
                break;
            case 'deactivate':
                $documents->update(['is_active' => false]);
                $message = 'Documents deactivated successfully.';
                break;
            case 'feature':
                $documents->update(['is_featured' => true]);
                $message = 'Documents featured successfully.';
                break;
            case 'unfeature':
                $documents->update(['is_featured' => false]);
                $message = 'Documents unfeatured successfully.';
                break;
            case 'delete':
                // Delete associated files
                foreach ($documents->get() as $document) {
                    if ($document->file_path && Storage::disk('public')->exists($document->file_path)) {
                        Storage::disk('public')->delete($document->file_path);
                    }
                }
                $documents->delete();
                $message = 'Documents deleted successfully.';
                break;
        }

        return redirect()->back()->with('success', $message);
    }

    /**
     * Download a document file.
     */
    public function download(Document $document)
    {
        // If it's an external URL, redirect to it
        if ($document->file_url && !$document->file_path) {
            $document->increment('download_count');
            return redirect($document->file_url);
        }

        // Check if file path exists
        if (!$document->file_path) {
            return redirect()->back()->with('error', 'No file or URL available for download.');
        }

        // Try different storage locations for seeded files
        $filePath = $document->file_path;
        
        // Check if it's a seeded file (starts with /documents/seeds/)
        if (str_starts_with($filePath, '/documents/seeds/')) {
            // This is a seeded file in public directory
            $publicPath = public_path(ltrim($filePath, '/'));
            
            if (file_exists($publicPath)) {
                $document->increment('download_count');
                return response()->download($publicPath, $document->title . '.' . $document->file_type);
            }
        }
        
        // Check if it's an uploaded file in storage
        if (Storage::disk('public')->exists($filePath)) {
            $document->increment('download_count');
            return Storage::disk('public')->download($filePath, $document->title . '.' . $document->file_type);
        }
        
        // Try without leading slash for storage files
        $cleanPath = ltrim($filePath, '/');
        if (Storage::disk('public')->exists($cleanPath)) {
            $document->increment('download_count');
            return Storage::disk('public')->download($cleanPath, $document->title . '.' . $document->file_type);
        }

        return redirect()->back()->with('error', 'File not found on server. Path: ' . $filePath);
    }
}
