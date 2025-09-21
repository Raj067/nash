<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    /**
     * Display a listing of the blogs.
     */
    public function index(Request $request)
    {
        $query = Blog::query();

        // Search functionality
        if ($request->filled('search')) {
            $search = $request->get('search');
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%")
                  ->orWhere('content', 'like', "%{$search}%")
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
            $status = $request->get('status') === 'published';
            $query->where('is_published', $status);
        }

        // Filter by featured
        if ($request->filled('featured')) {
            $featured = $request->get('featured') === 'yes';
            $query->where('is_featured', $featured);
        }

        // Filter by date range
        if ($request->filled('date_from')) {
            $query->whereDate('published_date', '>=', $request->get('date_from'));
        }

        if ($request->filled('date_to')) {
            $query->whereDate('published_date', '<=', $request->get('date_to'));
        }

        // Order by sort_order and published_date
        $blogs = $query->orderBy('sort_order')
                      ->orderBy('published_date', 'desc')
                      ->orderBy('id', 'desc')
                      ->paginate(15)
                      ->withQueryString();

        // Get unique categories for filters
        $categories = Blog::getCategories();

        // Get statistics
        $stats = [
            'total' => Blog::count(),
            'published' => Blog::published()->count(),
            'featured' => Blog::featured()->count(),
            'total_views' => Blog::sum('views_count'),
            'categories_count' => Blog::distinct('category')->count(),
            'this_month' => Blog::whereMonth('published_date', now()->month)
                               ->whereYear('published_date', now()->year)
                               ->count(),
        ];

        return Inertia::render('Admin/Blogs/Index', [
            'blogs' => $blogs,
            'categories' => $categories,
            'stats' => $stats,
            'filters' => $request->only(['search', 'category', 'status', 'featured', 'date_from', 'date_to']),
        ]);
    }

    /**
     * Show the form for creating a new blog.
     */
    public function create()
    {
        $categories = Blog::getCategories();

        return Inertia::render('Admin/Blogs/Create', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created blog in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:blogs,slug',
            'excerpt' => 'nullable|string|max:500',
            'content' => 'required|string',
            'category' => 'required|string|in:' . implode(',', array_keys(Blog::getCategories())),
            'featured_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120', // 5MB
            'author' => 'required|string|max:255',
            'published_date' => 'required|date',
            'tags' => 'nullable|string',
            'is_featured' => 'boolean',
            'is_published' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
            'meta_data' => 'nullable|array',
        ]);

        // Generate slug if not provided
        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        // Ensure slug is unique
        $originalSlug = $validated['slug'];
        $counter = 1;
        while (Blog::where('slug', $validated['slug'])->exists()) {
            $validated['slug'] = $originalSlug . '-' . $counter;
            $counter++;
        }

        // Handle featured image upload
        if ($request->hasFile('featured_image')) {
            $image = $request->file('featured_image');
            $imageName = time() . '_' . Str::slug($validated['title']) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('blog/featured', $imageName, 'public');
            $validated['featured_image'] = '/storage/' . $imagePath;
        }

        // Process tags
        if ($validated['tags']) {
            $validated['tags'] = array_map('trim', explode(',', $validated['tags']));
        } else {
            $validated['tags'] = [];
        }

        // Set defaults
        if (!isset($validated['is_published'])) {
            $validated['is_published'] = false;
        }
        if (!isset($validated['is_featured'])) {
            $validated['is_featured'] = false;
        }
        if (!isset($validated['sort_order'])) {
            $validated['sort_order'] = Blog::max('sort_order') + 1;
        }

        // Initialize views count
        $validated['views_count'] = 0;

        Blog::create($validated);

        return redirect()->route('admin.blogs.index')
                        ->with('success', 'Blog post created successfully.');
    }

    /**
     * Display the specified blog.
     */
    public function show(Blog $blog)
    {
        return Inertia::render('Admin/Blogs/Show', [
            'blog' => $blog,
        ]);
    }

    /**
     * Show the form for editing the specified blog.
     */
    public function edit(Blog $blog)
    {
        $categories = Blog::getCategories();

        return Inertia::render('Admin/Blogs/Edit', [
            'blog' => $blog,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified blog in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        // Debug: Log incoming request data
        \Log::info('Blog update request received', [
            'request_data' => $request->all(),
            'files' => $request->allFiles(),
            'blog_id' => $blog->id,
            'method' => $request->method(),
            'content_type' => $request->header('Content-Type')
        ]);

        try {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'slug' => ['nullable', 'string', 'max:255', Rule::unique('blogs', 'slug')->ignore($blog->id)],
                'excerpt' => 'nullable|string|max:500',
                'content' => 'required|string',
                'category' => 'required|string|in:' . implode(',', array_keys(Blog::getCategories())),
                'featured_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120', // 5MB
                'author' => 'required|string|max:255',
                'published_date' => 'required|date',
                'tags' => 'nullable|string',
                'is_featured' => 'sometimes|boolean',
                'is_published' => 'sometimes|boolean',
                'sort_order' => 'nullable|integer|min:0',
                'meta_data' => 'nullable|array',
                'meta_data.seo_title' => 'nullable|string|max:255',
                'meta_data.seo_description' => 'nullable|string|max:500',
                'meta_data.seo_keywords' => 'nullable|string|max:255',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Log validation errors for debugging
            \Log::error('Blog update validation failed', [
                'errors' => $e->errors(),
                'request_data' => $request->all(),
                'blog_id' => $blog->id
            ]);
            throw $e;
        }

        // Generate slug if not provided
        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        // Ensure slug is unique (excluding current blog)
        $originalSlug = $validated['slug'];
        $counter = 1;
        while (Blog::where('slug', $validated['slug'])->where('id', '!=', $blog->id)->exists()) {
            $validated['slug'] = $originalSlug . '-' . $counter;
            $counter++;
        }

        // Handle featured image upload
        if ($request->hasFile('featured_image')) {
            // Delete old image if it exists
            if ($blog->featured_image && str_starts_with($blog->featured_image, '/storage/')) {
                $oldImagePath = str_replace('/storage/', '', $blog->featured_image);
                if (Storage::disk('public')->exists($oldImagePath)) {
                    Storage::disk('public')->delete($oldImagePath);
                }
            }

            $image = $request->file('featured_image');
            $imageName = time() . '_' . Str::slug($validated['title']) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('blog/featured', $imageName, 'public');
            $validated['featured_image'] = '/storage/' . $imagePath;
        }

        // Process tags
        if (isset($validated['tags']) && $validated['tags']) {
            $validated['tags'] = array_map('trim', explode(',', $validated['tags']));
        } else {
            $validated['tags'] = [];
        }

        // Set defaults for boolean fields if not provided
        if (!array_key_exists('is_published', $validated)) {
            $validated['is_published'] = $blog->is_published; // Keep existing value
        }
        if (!array_key_exists('is_featured', $validated)) {
            $validated['is_featured'] = $blog->is_featured; // Keep existing value
        }

        $blog->update($validated);

        return redirect()->route('admin.blogs.index')
                        ->with('success', 'Blog post updated successfully.');
    }

    /**
     * Remove the specified blog from storage.
     */
    public function destroy(Blog $blog)
    {
        // Delete featured image if it exists
        if ($blog->featured_image && str_starts_with($blog->featured_image, '/storage/')) {
            $imagePath = str_replace('/storage/', '', $blog->featured_image);
            if (Storage::disk('public')->exists($imagePath)) {
                Storage::disk('public')->delete($imagePath);
            }
        }

        $blog->delete();

        return redirect()->route('admin.blogs.index')
                        ->with('success', 'Blog post deleted successfully.');
    }

    /**
     * Toggle the published status of the blog.
     */
    public function toggleStatus(Blog $blog)
    {
        $blog->update([
            'is_published' => !$blog->is_published
        ]);

        $status = $blog->is_published ? 'published' : 'unpublished';
        
        return redirect()->back()
                        ->with('success', "Blog post {$status} successfully.");
    }

    /**
     * Toggle the featured status of the blog.
     */
    public function toggleFeatured(Blog $blog)
    {
        $blog->update([
            'is_featured' => !$blog->is_featured
        ]);

        $status = $blog->is_featured ? 'featured' : 'unfeatured';
        
        return redirect()->back()
                        ->with('success', "Blog post {$status} successfully.");
    }

    /**
     * Bulk actions for blogs.
     */
    public function bulkAction(Request $request)
    {
        $validated = $request->validate([
            'action' => 'required|in:publish,unpublish,feature,unfeature,delete',
            'ids' => 'required|array',
            'ids.*' => 'exists:blogs,id',
        ]);

        $blogs = Blog::whereIn('id', $validated['ids']);

        switch ($validated['action']) {
            case 'publish':
                $blogs->update(['is_published' => true]);
                $message = 'Blog posts published successfully.';
                break;
            case 'unpublish':
                $blogs->update(['is_published' => false]);
                $message = 'Blog posts unpublished successfully.';
                break;
            case 'feature':
                $blogs->update(['is_featured' => true]);
                $message = 'Blog posts featured successfully.';
                break;
            case 'unfeature':
                $blogs->update(['is_featured' => false]);
                $message = 'Blog posts unfeatured successfully.';
                break;
            case 'delete':
                // Delete associated images
                foreach ($blogs->get() as $blog) {
                    if ($blog->featured_image && str_starts_with($blog->featured_image, '/storage/')) {
                        $imagePath = str_replace('/storage/', '', $blog->featured_image);
                        if (Storage::disk('public')->exists($imagePath)) {
                            Storage::disk('public')->delete($imagePath);
                        }
                    }
                }
                $blogs->delete();
                $message = 'Blog posts deleted successfully.';
                break;
        }

        return redirect()->back()->with('success', $message);
    }

    /**
     * Upload images for rich text editor.
     */
    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5120', // 5MB
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . Str::random(10) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('blog/content', $imageName, 'public');
            
            return response()->json([
                'success' => true,
                'url' => '/storage/' . $imagePath,
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Image upload failed.',
        ], 400);
    }
}
