<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Video;
use Inertia\Inertia;

class VideoController extends Controller
{
    /**
     * Get featured videos for homepage (limit 3)
     */
    public function getFeaturedVideos()
    {
        $videos = Video::active()
            ->featured()
            ->orderBy('sort_order')
            ->limit(3)
            ->get()
            ->map(function ($video) {
                return [
                    'id' => $video->id,
                    'title' => $video->title,
                    'description' => $video->description,
                    'youtube_url' => $video->youtube_url,
                    'youtube_id' => $video->youtube_id,
                    'thumbnail' => $video->thumbnail,
                    'embed_url' => $video->embed_url,
                    'category' => $video->category,
                    'duration' => $video->duration,
                ];
            });

        return response()->json($videos);
    }

    /**
     * Get all videos for video library page
     */
    public function index()
    {
        $videos = Video::active()
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($video) {
                return [
                    'id' => $video->id,
                    'title' => $video->title,
                    'description' => $video->description,
                    'youtube_url' => $video->youtube_url,
                    'youtube_id' => $video->youtube_id,
                    'thumbnail' => $video->thumbnail,
                    'embed_url' => $video->embed_url,
                    'category' => $video->category,
                    'duration' => $video->duration,
                    'is_featured' => $video->is_featured,
                ];
            });

        return Inertia::render('News/VideoLibrary', [
            'videos' => $videos
        ]);
    }

    /**
     * Get videos by category
     */
    public function getByCategory($category)
    {
        $videos = Video::active()
            ->where('category', $category)
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($video) {
                return [
                    'id' => $video->id,
                    'title' => $video->title,
                    'description' => $video->description,
                    'youtube_url' => $video->youtube_url,
                    'youtube_id' => $video->youtube_id,
                    'thumbnail' => $video->thumbnail,
                    'embed_url' => $video->embed_url,
                    'category' => $video->category,
                    'duration' => $video->duration,
                ];
            });

        return response()->json($videos);
    }

    /**
     * Format duration from seconds to readable format
     */
    private function formatDuration($seconds)
    {
        if (!$seconds) return null;
        
        $minutes = floor($seconds / 60);
        $remainingSeconds = $seconds % 60;
        
        return sprintf('%d:%02d', $minutes, $remainingSeconds);
    }
}
