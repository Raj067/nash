<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Document;
use App\Models\Faq;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Carbon\Carbon;

class SeoController extends Controller
{
    /**
     * Generate main sitemap index
     */
    public function sitemapIndex()
    {
        $sitemaps = [
            [
                'loc' => route('sitemap.pages'),
                'lastmod' => now()->toISOString(),
            ],
            [
                'loc' => route('sitemap.blogs'),
                'lastmod' => Blog::latest('updated_at')->first()?->updated_at->toISOString() ?? now()->toISOString(),
            ],
            [
                'loc' => route('sitemap.documents'),
                'lastmod' => Document::latest('updated_at')->first()?->updated_at->toISOString() ?? now()->toISOString(),
            ],
            [
                'loc' => route('sitemap.faqs'),
                'lastmod' => Faq::latest('updated_at')->first()?->updated_at->toISOString() ?? now()->toISOString(),
            ],
        ];

        return response()->view('sitemaps.index', compact('sitemaps'))
            ->header('Content-Type', 'text/xml');
    }

    /**
     * Generate sitemap for static pages
     */
    public function sitemapPages()
    {
        $pages = [
            [
                'loc' => route('home'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'weekly',
                'priority' => '1.0',
            ],
            [
                'loc' => route('about.index'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'monthly',
                'priority' => '0.8',
            ],
            [
                'loc' => route('about.mission'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'monthly',
                'priority' => '0.7',
            ],
            [
                'loc' => route('about.vision'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'monthly',
                'priority' => '0.7',
            ],
            [
                'loc' => route('services.index'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'weekly',
                'priority' => '0.9',
            ],
            [
                'loc' => route('services.hiv-testing'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'monthly',
                'priority' => '0.8',
            ],
            [
                'loc' => route('services.prevention'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'monthly',
                'priority' => '0.8',
            ],
            [
                'loc' => route('services.treatment'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'monthly',
                'priority' => '0.8',
            ],
            [
                'loc' => route('services.strategic-info'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'monthly',
                'priority' => '0.8',
            ],
            [
                'loc' => route('resources.index'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'weekly',
                'priority' => '0.8',
            ],
            [
                'loc' => route('news.index'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'daily',
                'priority' => '0.9',
            ],
            [
                'loc' => route('contact.locations'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'monthly',
                'priority' => '0.7',
            ],
            [
                'loc' => route('contact.feedback'),
                'lastmod' => now()->toISOString(),
                'changefreq' => 'monthly',
                'priority' => '0.6',
            ],
        ];

        return response()->view('sitemaps.pages', compact('pages'))
            ->header('Content-Type', 'text/xml');
    }

    /**
     * Generate sitemap for blog posts
     */
    public function sitemapBlogs()
    {
        $blogs = Blog::published()
            ->select(['slug', 'updated_at', 'published_date'])
            ->orderBy('updated_at', 'desc')
            ->get()
            ->map(function ($blog) {
                return [
                    'loc' => route('news.show', $blog->slug),
                    'lastmod' => $blog->updated_at->toISOString(),
                    'changefreq' => 'weekly',
                    'priority' => '0.8',
                ];
            });

        return response()->view('sitemaps.blogs', compact('blogs'))
            ->header('Content-Type', 'text/xml');
    }

    /**
     * Generate sitemap for documents
     */
    public function sitemapDocuments()
    {
        $documents = Document::active()
            ->select(['slug', 'updated_at'])
            ->orderBy('updated_at', 'desc')
            ->get()
            ->map(function ($document) {
                return [
                    'loc' => route('resources.show', $document->slug),
                    'lastmod' => $document->updated_at->toISOString(),
                    'changefreq' => 'monthly',
                    'priority' => '0.7',
                ];
            });

        return response()->view('sitemaps.documents', compact('documents'))
            ->header('Content-Type', 'text/xml');
    }

    /**
     * Generate sitemap for FAQs
     */
    public function sitemapFaqs()
    {
        $faqs = Faq::active()
            ->select(['slug', 'updated_at'])
            ->orderBy('updated_at', 'desc')
            ->get()
            ->map(function ($faq) {
                return [
                    'loc' => route('faqs.show', $faq->slug),
                    'lastmod' => $faq->updated_at->toISOString(),
                    'changefreq' => 'monthly',
                    'priority' => '0.6',
                ];
            });

        return response()->view('sitemaps.faqs', compact('faqs'))
            ->header('Content-Type', 'text/xml');
    }

    /**
     * Generate robots.txt
     */
    public function robots()
    {
        $config = config('seo.robots_txt');
        
        $content = "User-agent: {$config['user_agent']}\n";
        
        // Add allow rules
        foreach ($config['allow'] as $path) {
            $content .= "Allow: {$path}\n";
        }
        
        // Add disallow rules
        foreach ($config['disallow'] as $path) {
            $content .= "Disallow: {$path}\n";
        }
        
        $content .= "\n";
        $content .= "Sitemap: " . route('sitemap.index') . "\n";
        $content .= "\n";
        $content .= "# Crawl-delay for all bots\n";
        $content .= "Crawl-delay: {$config['crawl_delay']}\n";
        $content .= "\n";
        
        // Add additional rules
        foreach ($config['additional_rules'] as $rule) {
            $content .= $rule . "\n";
        }

        return response($content, 200)
            ->header('Content-Type', 'text/plain');
    }
}
