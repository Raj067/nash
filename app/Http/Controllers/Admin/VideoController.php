<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class VideoController extends Controller
{
    /**
     * Display a listing of the videos.
     */
    public function index(Request $request)
    {
        $query = Video::query();

        // Search functionality
        if ($request->filled('search')) {
            $search = $request->get('search');
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('category', 'like', "%{$search}%");
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

        // Order by sort_order and id
        $videos = $query->orderBy('sort_order')
                       ->orderBy('id')
                       ->paginate(10)
                       ->withQueryString();

        // Get unique categories for filter dropdown
        $categories = Video::distinct()
                          ->pluck('category')
                          ->filter()
                          ->sort()
                          ->values();

        return Inertia::render('Admin/Videos/Index', [
            'videos' => $videos,
            'categories' => $categories,
            'filters' => $request->only(['search', 'category', 'status', 'featured']),
        ]);
    }

    /**
     * Show the form for creating a new video.
     */
    public function create()
    {
        // Get existing categories for dropdown
        $categories = Video::distinct()
                          ->pluck('category')
                          ->filter()
                          ->sort()
                          ->values();

        return Inertia::render('Admin/Videos/Create', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created video in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'youtube_url' => 'required|url',
            'category' => 'required|string|max:100',
            'duration' => 'nullable|integer|min:1',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        // Validate YouTube URL format
        if (!preg_match('/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/i', $validated['youtube_url'])) {
            return back()->withErrors(['youtube_url' => 'Please provide a valid YouTube URL (youtube.com or youtu.be).']);
        }

        // Extract YouTube ID from URL
        $youtubeId = Video::extractYouTubeId($validated['youtube_url']);
        if (!$youtubeId) {
            return back()->withErrors(['youtube_url' => 'Invalid YouTube URL. Please provide a valid YouTube video URL.']);
        }

        $validated['youtube_id'] = $youtubeId;

        // Generate thumbnail URL if not provided
        if (!isset($validated['thumbnail_url'])) {
            $validated['thumbnail_url'] = "https://img.youtube.com/vi/{$youtubeId}/maxresdefault.jpg";
        }

        // If no sort_order provided, set it to the next available number
        if (!isset($validated['sort_order'])) {
            $validated['sort_order'] = Video::max('sort_order') + 1;
        }

        // Default values
        if (!isset($validated['is_active'])) {
            $validated['is_active'] = true;
        }
        if (!isset($validated['is_featured'])) {
            $validated['is_featured'] = false;
        }

        Video::create($validated);

        return redirect()->route('admin.videos.index')
                        ->with('success', 'Video created successfully.');
    }

    /**
     * Display the specified video.
     */
    public function show(Video $video)
    {
        return Inertia::render('Admin/Videos/Show', [
            'video' => $video,
        ]);
    }

    /**
     * Show the form for editing the specified video.
     */
    public function edit(Video $video)
    {
        // Get existing categories for dropdown
        $categories = Video::distinct()
                          ->pluck('category')
                          ->filter()
                          ->sort()
                          ->values();

        return Inertia::render('Admin/Videos/Edit', [
            'video' => $video,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified video in storage.
     */
    public function update(Request $request, Video $video)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'youtube_url' => 'required|url',
            'category' => 'required|string|max:100',
            'duration' => 'nullable|integer|min:1',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        // Validate YouTube URL format
        if (!preg_match('/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/i', $validated['youtube_url'])) {
            return back()->withErrors(['youtube_url' => 'Please provide a valid YouTube URL (youtube.com or youtu.be).']);
        }

        // Extract YouTube ID from URL
        $youtubeId = Video::extractYouTubeId($validated['youtube_url']);
        if (!$youtubeId) {
            return back()->withErrors(['youtube_url' => 'Invalid YouTube URL. Please provide a valid YouTube video URL.']);
        }

        $validated['youtube_id'] = $youtubeId;

        // Update thumbnail URL if YouTube ID changed
        if ($video->youtube_id !== $youtubeId) {
            $validated['thumbnail_url'] = "https://img.youtube.com/vi/{$youtubeId}/maxresdefault.jpg";
        }

        // Default values
        if (!isset($validated['is_active'])) {
            $validated['is_active'] = true;
        }
        if (!isset($validated['is_featured'])) {
            $validated['is_featured'] = false;
        }

        $video->update($validated);

        return redirect()->route('admin.videos.index')
                        ->with('success', 'Video updated successfully.');
    }

    /**
     * Remove the specified video from storage.
     */
    public function destroy(Video $video)
    {
        $video->delete();

        return redirect()->route('admin.videos.index')
                        ->with('success', 'Video deleted successfully.');
    }

    /**
     * Toggle the active status of the video.
     */
    public function toggleStatus(Video $video)
    {
        $video->update([
            'is_active' => !$video->is_active
        ]);

        $status = $video->is_active ? 'activated' : 'deactivated';
        
        return redirect()->back()
                        ->with('success', "Video {$status} successfully.");
    }

    /**
     * Toggle the featured status of the video.
     */
    public function toggleFeatured(Video $video)
    {
        $video->update([
            'is_featured' => !$video->is_featured
        ]);

        $status = $video->is_featured ? 'featured' : 'unfeatured';
        
        return redirect()->back()
                        ->with('success', "Video {$status} successfully.");
    }

    /**
     * Bulk actions for videos.
     */
    public function bulkAction(Request $request)
    {
        $validated = $request->validate([
            'action' => 'required|in:activate,deactivate,feature,unfeature,delete',
            'ids' => 'required|array',
            'ids.*' => 'exists:videos,id',
        ]);

        $videos = Video::whereIn('id', $validated['ids']);

        switch ($validated['action']) {
            case 'activate':
                $videos->update(['is_active' => true]);
                $message = 'Videos activated successfully.';
                break;
            case 'deactivate':
                $videos->update(['is_active' => false]);
                $message = 'Videos deactivated successfully.';
                break;
            case 'feature':
                $videos->update(['is_featured' => true]);
                $message = 'Videos featured successfully.';
                break;
            case 'unfeature':
                $videos->update(['is_featured' => false]);
                $message = 'Videos unfeatured successfully.';
                break;
            case 'delete':
                $videos->delete();
                $message = 'Videos deleted successfully.';
                break;
        }

        return redirect()->back()->with('success', $message);
    }
}
