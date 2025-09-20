<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Inertia\Inertia;

class BlogController extends Controller
{
    // Get all blogs with filtering and pagination
    public function index(Request $request)
    {
        $query = Blog::published()->ordered();
        
        // Filter by category if provided
        if ($request->has('category') && $request->category !== 'all') {
            $query->byCategory($request->category);
        }
        
        // Search functionality
        if ($request->has('search') && $request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('excerpt', 'like', '%' . $request->search . '%')
                  ->orWhere('content', 'like', '%' . $request->search . '%');
            });
        }
        
        $blogs = $query->paginate(12)->through(function ($blog) {
            return [
                'id' => $blog->id,
                'title' => $blog->title,
                'slug' => $blog->slug,
                'excerpt' => $blog->excerpt,
                'category' => $blog->category,
                'category_display' => Blog::getCategoryDisplayName($blog->category),
                'category_icon' => Blog::getCategoryIcon($blog->category),
                'featured_image' => $blog->featured_image,
                'author' => $blog->author,
                'published_date' => $blog->formatted_published_date,
                'reading_time' => $blog->reading_time,
                'tags' => $blog->tags ?? [],
                'is_featured' => $blog->is_featured,
                'views_count' => $blog->views_count,
            ];
        });
        
        return Inertia::render('News/Index', [
            'blogs' => $blogs,
            'categories' => Blog::getCategories(),
            'currentCategory' => $request->category ?? 'all',
            'searchTerm' => $request->search ?? '',
        ]);
    }
    
    // Get blogs by category
    public function getByCategory($category)
    {
        $blogs = Blog::published()
            ->byCategory($category)
            ->ordered()
            ->paginate(12)
            ->through(function ($blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'slug' => $blog->slug,
                    'excerpt' => $blog->excerpt,
                    'category' => $blog->category,
                    'category_display' => Blog::getCategoryDisplayName($blog->category),
                    'category_icon' => Blog::getCategoryIcon($blog->category),
                    'featured_image' => $blog->featured_image,
                    'author' => $blog->author,
                    'published_date' => $blog->formatted_published_date,
                    'reading_time' => $blog->reading_time,
                    'tags' => $blog->tags ?? [],
                    'is_featured' => $blog->is_featured,
                    'views_count' => $blog->views_count,
                ];
            });
            
        $categoryName = Blog::getCategoryDisplayName($category);
        
        // Convert category to proper component name
        $componentName = match($category) {
            'news' => 'News',
            'press_releases' => 'PressReleases',
            'speeches' => 'Speeches',
            'events' => 'Events',
            'newsletter' => 'Newsletter',
            'photo_gallery' => 'PhotoGallery',
            default => ucfirst(str_replace('_', '', $category))
        };
        
        return Inertia::render('News/' . $componentName, [
            'blogs' => $blogs,
            'category' => $category,
            'categoryName' => $categoryName,
        ]);
    }
    
    // Get featured blogs
    public function getFeatured()
    {
        $blogs = Blog::published()
            ->featured()
            ->ordered()
            ->limit(6)
            ->get()
            ->map(function ($blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'slug' => $blog->slug,
                    'excerpt' => $blog->excerpt,
                    'category' => $blog->category,
                    'category_display' => Blog::getCategoryDisplayName($blog->category),
                    'category_icon' => Blog::getCategoryIcon($blog->category),
                    'featured_image' => $blog->featured_image,
                    'author' => $blog->author,
                    'published_date' => $blog->formatted_published_date,
                    'reading_time' => $blog->reading_time,
                    'tags' => $blog->tags ?? [],
                    'is_featured' => $blog->is_featured,
                    'views_count' => $blog->views_count,
                ];
            });
            
        return response()->json($blogs);
    }
    
    // Show single blog
    public function show($slug)
    {
        $blog = Blog::published()->where('slug', $slug)->firstOrFail();
        
        // Increment views count
        $blog->incrementViews();
        
        // Get related blogs (same category, excluding current)
        $relatedBlogs = Blog::published()
            ->byCategory($blog->category)
            ->where('id', '!=', $blog->id)
            ->ordered()
            ->limit(3)
            ->get()
            ->map(function ($relatedBlog) {
                return [
                    'id' => $relatedBlog->id,
                    'title' => $relatedBlog->title,
                    'slug' => $relatedBlog->slug,
                    'excerpt' => $relatedBlog->excerpt,
                    'featured_image' => $relatedBlog->featured_image,
                    'published_date' => $relatedBlog->formatted_published_date,
                    'reading_time' => $relatedBlog->reading_time,
                ];
            });
        
        return Inertia::render('News/BlogDetail', [
            'blog' => [
                'id' => $blog->id,
                'title' => $blog->title,
                'slug' => $blog->slug,
                'excerpt' => $blog->excerpt,
                'content' => $blog->content,
                'category' => $blog->category,
                'category_display' => Blog::getCategoryDisplayName($blog->category),
                'category_icon' => Blog::getCategoryIcon($blog->category),
                'featured_image' => $blog->featured_image,
                'author' => $blog->author,
                'published_date' => $blog->formatted_published_date,
                'reading_time' => $blog->reading_time,
                'tags' => $blog->tags ?? [],
                'views_count' => $blog->views_count,
                'meta_data' => $blog->meta_data ?? [],
            ],
            'relatedBlogs' => $relatedBlogs,
        ]);
    }
    
    // API endpoints for specific categories
    public function news()
    {
        return $this->getByCategory('news');
    }
    
    public function pressReleases()
    {
        return $this->getByCategory('press_releases');
    }
    
    public function speeches()
    {
        return $this->getByCategory('speeches');
    }
    
    public function events()
    {
        return $this->getByCategory('events');
    }
    
    public function newsletter()
    {
        return $this->getByCategory('newsletter');
    }
    
    public function photoGallery()
    {
        return $this->getByCategory('photo_gallery');
    }
}
