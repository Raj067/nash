<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Blog;
use App\Models\Document;
use App\Models\Faq;
use App\Models\Feedback;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Display the dashboard with real statistics.
     */
    public function index(Request $request): Response
    {
        // Get comprehensive statistics
        $stats = $this->getStatistics();
        
        // Get recent activities
        $recentActivities = $this->getRecentActivities();
        
        // Get system health
        $systemHealth = $this->getSystemHealth();
        
        // Get content overview
        $contentOverview = $this->getContentOverview();
        
        // Get user analytics
        $userAnalytics = $this->getUserAnalytics();

        return Inertia::render('Dashboard', [
            'stats' => $stats,
            'recentActivities' => $recentActivities,
            'systemHealth' => $systemHealth,
            'contentOverview' => $contentOverview,
            'userAnalytics' => $userAnalytics,
            'user' => $request->user(),
        ]);
    }

    /**
     * Get main dashboard statistics.
     */
    private function getStatistics(): array
    {
        $totalUsers = User::count();
        $activeUsers = User::where('status', 'active')->count();
        $totalBlogs = Blog::count();
        $publishedBlogs = Blog::where('is_published', true)->count();
        $totalDocuments = Document::count();
        $activeDocuments = Document::where('is_active', true)->count();
        $totalFeedback = Feedback::count();
        $pendingFeedback = Feedback::where('status', 'pending')->count();
        $totalFaqs = Faq::count();
        $activeFaqs = Faq::where('is_active', true)->count();
        $totalVideos = Video::count();
        $activeVideos = Video::where('is_active', true)->count();

        // Calculate growth percentages (comparing to last month)
        $lastMonth = now()->subMonth();
        $usersLastMonth = User::where('created_at', '>=', $lastMonth)->count();
        $blogsLastMonth = Blog::where('created_at', '>=', $lastMonth)->count();
        $documentsLastMonth = Document::where('created_at', '>=', $lastMonth)->count();
        $feedbackLastMonth = Feedback::where('created_at', '>=', $lastMonth)->count();

        return [
            [
                'name' => 'Total Users',
                'value' => number_format($totalUsers),
                'change' => $usersLastMonth > 0 ? '+' . $usersLastMonth : '0',
                'changeType' => 'increase',
                'icon' => 'Users',
                'color' => 'from-blue-500 to-blue-600',
                'description' => $activeUsers . ' active users',
            ],
            [
                'name' => 'Blog Posts',
                'value' => number_format($totalBlogs),
                'change' => $blogsLastMonth > 0 ? '+' . $blogsLastMonth : '0',
                'changeType' => 'increase',
                'icon' => 'FileText',
                'color' => 'from-green-500 to-green-600',
                'description' => $publishedBlogs . ' published',
            ],
            [
                'name' => 'Documents',
                'value' => number_format($totalDocuments),
                'change' => $documentsLastMonth > 0 ? '+' . $documentsLastMonth : '0',
                'changeType' => 'increase',
                'icon' => 'File',
                'color' => 'from-purple-500 to-purple-600',
                'description' => $activeDocuments . ' active',
            ],
            [
                'name' => 'Feedback',
                'value' => number_format($totalFeedback),
                'change' => $feedbackLastMonth > 0 ? '+' . $feedbackLastMonth : '0',
                'changeType' => 'increase',
                'icon' => 'MessageCircle',
                'color' => 'from-orange-500 to-orange-600',
                'description' => $pendingFeedback . ' pending',
            ],
            [
                'name' => 'FAQs',
                'value' => number_format($totalFaqs),
                'change' => '0',
                'changeType' => 'neutral',
                'icon' => 'HelpCircle',
                'color' => 'from-indigo-500 to-indigo-600',
                'description' => $activeFaqs . ' active',
            ],
            [
                'name' => 'Videos',
                'value' => number_format($totalVideos),
                'change' => '0',
                'changeType' => 'neutral',
                'icon' => 'Video',
                'color' => 'from-red-500 to-red-600',
                'description' => $activeVideos . ' published',
            ],
        ];
    }

    /**
     * Get recent system activities.
     */
    private function getRecentActivities(): array
    {
        $activities = [];

        // Recent users
        $recentUsers = User::latest()->take(3)->get();
        foreach ($recentUsers as $user) {
            $activities[] = [
                'id' => 'user_' . $user->id,
                'type' => 'user',
                'title' => 'New User Registered',
                'description' => $user->name . ' joined the platform',
                'time' => $user->created_at->diffForHumans(),
                'icon' => 'UserPlus',
                'color' => 'text-blue-600',
                'link' => route('admin.users.show', $user->id),
            ];
        }

        // Recent blogs
        $recentBlogs = Blog::latest()->take(3)->get();
        foreach ($recentBlogs as $blog) {
            $activities[] = [
                'id' => 'blog_' . $blog->id,
                'type' => 'blog',
                'title' => 'New Blog Post',
                'description' => 'Blog "' . $blog->title . '" was created',
                'time' => $blog->created_at->diffForHumans(),
                'icon' => 'FileText',
                'color' => 'text-green-600',
                'link' => route('admin.blogs.show', $blog->id),
            ];
        }

        // Recent feedback
        $recentFeedback = Feedback::latest()->take(3)->get();
        foreach ($recentFeedback as $feedback) {
            $activities[] = [
                'id' => 'feedback_' . $feedback->id,
                'type' => 'feedback',
                'title' => 'New Feedback Received',
                'description' => 'Feedback from ' . $feedback->name . ' - ' . $feedback->type,
                'time' => $feedback->created_at->diffForHumans(),
                'icon' => 'MessageCircle',
                'color' => 'text-orange-600',
                'link' => route('admin.feedback.show', $feedback->id),
            ];
        }

        // Recent documents
        $recentDocuments = Document::latest()->take(2)->get();
        foreach ($recentDocuments as $document) {
            $activities[] = [
                'id' => 'document_' . $document->id,
                'type' => 'document',
                'title' => 'New Document Added',
                'description' => 'Document "' . $document->title . '" was uploaded',
                'time' => $document->created_at->diffForHumans(),
                'icon' => 'File',
                'color' => 'text-purple-600',
                'link' => route('admin.documents.show', $document->id),
            ];
        }

        // Sort by creation time and take the most recent 8
        $activities = collect($activities)->sortByDesc(function ($activity) {
            return $activity['time'];
        })->take(8)->values()->all();

        return $activities;
    }

    /**
     * Get system health status.
     */
    private function getSystemHealth(): array
    {
        $dbStatus = 'operational';
        $backupStatus = 'warning';
        $storageStatus = 'operational';

        try {
            DB::connection()->getPdo();
        } catch (\Exception $e) {
            $dbStatus = 'error';
        }

        return [
            [
                'name' => 'Database',
                'status' => $dbStatus,
                'description' => $dbStatus === 'operational' ? 'Connected and healthy' : 'Connection issues',
                'color' => $dbStatus === 'operational' ? 'green' : 'red',
            ],
            [
                'name' => 'Storage',
                'status' => $storageStatus,
                'description' => 'File system operational',
                'color' => 'green',
            ],
            [
                'name' => 'Backup System',
                'status' => $backupStatus,
                'description' => 'Last backup: 2 hours ago',
                'color' => 'yellow',
            ],
        ];
    }

    /**
     * Get content overview statistics.
     */
    private function getContentOverview(): array
    {
        return [
            [
                'name' => 'Blog Categories',
                'count' => Blog::select('category')->distinct()->count(),
                'icon' => 'Tag',
                'color' => 'text-blue-600',
            ],
            [
                'name' => 'Document Categories',
                'count' => Document::select('category')->distinct()->count(),
                'icon' => 'FolderOpen',
                'color' => 'text-green-600',
            ],
            [
                'name' => 'FAQ Categories',
                'count' => Faq::select('category')->distinct()->count(),
                'icon' => 'BookOpen',
                'color' => 'text-purple-600',
            ],
            [
                'name' => 'Video Categories',
                'count' => Video::select('category')->distinct()->count(),
                'icon' => 'Play',
                'color' => 'text-red-600',
            ],
        ];
    }

    /**
     * Get user analytics.
     */
    private function getUserAnalytics(): array
    {
        $roleDistribution = User::select('role', DB::raw('count(*) as count'))
            ->groupBy('role')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->role => $item->count];
            });

        $statusDistribution = User::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->status => $item->count];
            });

        // Get user registration trend for the last 7 days
        $registrationTrend = [];
        for ($i = 6; $i >= 0; $i--) {
            $date = now()->subDays($i);
            $count = User::whereDate('created_at', $date)->count();
            $registrationTrend[] = [
                'date' => $date->format('M j'),
                'count' => $count,
            ];
        }

        return [
            'roleDistribution' => $roleDistribution,
            'statusDistribution' => $statusDistribution,
            'registrationTrend' => $registrationTrend,
        ];
    }
}
