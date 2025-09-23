<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\SeoController;
use App\Http\Controllers\Admin\FaqController as AdminFaqController;
use App\Http\Controllers\Admin\VideoController as AdminVideoController;
use App\Http\Controllers\Admin\NewsletterSubscriberController as AdminNewsletterSubscriberController;
use App\Http\Controllers\Admin\DocumentController as AdminDocumentController;
use App\Http\Controllers\Admin\BlogController as AdminBlogController;
use App\Http\Controllers\Admin\FeedbackController as AdminFeedbackController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Pages - NASHCOP Structure
Route::get('/', [PageController::class, 'index'])->name('home');

// Who We Are
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/about/about-us', [PageController::class, 'aboutUs'])->name('about.about-us');
Route::get('/about/hiv-aids-tanzania', [PageController::class, 'hivAidsTanzania'])->name('about.hiv-aids-tanzania');
Route::get('/about/structure', [PageController::class, 'structure'])->name('about.structure');

// What We Do
Route::get('/services', [PageController::class, 'services'])->name('services');
Route::get('/services/nacp-roles-and-responsibilities', [PageController::class, 'nacpRoles'])->name('services.nacp-roles');
Route::get('/services/division-of-prevention', [PageController::class, 'divisionPrevention'])->name('services.division-prevention');
Route::get('/services/care-treatment-and-support-unit', [PageController::class, 'careSupport'])->name('services.care-support');
Route::get('/services/strategic-information-unit', [PageController::class, 'strategicInfo'])->name('services.strategic-info');
Route::get('/services/division-of-pharmaceuticals-and-laboratory-services', [PageController::class, 'pharmaceuticals'])->name('services.pharmaceuticals');
Route::get('/services/national-strategic-plan-on-90-90-90', [PageController::class, 'strategicPlan'])->name('services.strategic-plan');

// Interventions
Route::get('/interventions', [PageController::class, 'interventions'])->name('interventions');
Route::get('/interventions/hiv-testing-services-linkage', [PageController::class, 'hivTesting'])->name('interventions.hiv-testing');
Route::get('/interventions/prevention-new-hiv-infection', [PageController::class, 'preventionInfection'])->name('interventions.prevention-infection');
Route::get('/interventions/building-resilient-health-systems', [PageController::class, 'healthSystems'])->name('interventions.health-systems');
Route::get('/interventions/decentralized-hiv-care-treatment', [PageController::class, 'decentralizedCare'])->name('interventions.decentralized-care');
Route::get('/interventions/cross-sector-hiv-interventions', [PageController::class, 'crossSector'])->name('interventions.cross-sector');

// Programme Areas
Route::get('/programme-areas', [PageController::class, 'programmeAreas'])->name('programme-areas');
Route::get('/programme-areas/management-coordination', [PageController::class, 'managementCoordination'])->name('programme-areas.management-coordination');
Route::get('/programme-areas/prevention', [PageController::class, 'prevention'])->name('programme-areas.prevention');
Route::get('/programme-areas/care-treatment-support', [PageController::class, 'careTreatmentSupport'])->name('programme-areas.care-treatment-support');
Route::get('/programme-areas/monitoring-evaluation', [PageController::class, 'monitoringEvaluation'])->name('programme-areas.monitoring-evaluation');
Route::get('/programme-areas/pharmaceuticals-laboratory', [PageController::class, 'pharmaceuticalsLaboratory'])->name('programme-areas.pharmaceuticals-laboratory');

// Programme Areas - Prevention sub-pages
Route::get('/programme-areas/prevention/vmmc', [PageController::class, 'preventionVmmc'])->name('programme-areas.prevention.vmmc');
Route::get('/programme-areas/prevention/sbcc', [PageController::class, 'preventionSbcc'])->name('programme-areas.prevention.sbcc');
Route::get('/programme-areas/prevention/condoms', [PageController::class, 'preventionCondoms'])->name('programme-areas.prevention.condoms');
Route::get('/programme-areas/prevention/pmtct', [PageController::class, 'preventionPmtct'])->name('programme-areas.prevention.pmtct');
Route::get('/programme-areas/prevention/prep', [PageController::class, 'preventionPrep'])->name('programme-areas.prevention.prep');
Route::get('/programme-areas/prevention/kvp', [PageController::class, 'preventionKvp'])->name('programme-areas.prevention.kvp');

// Programme Areas - Care, Treatment & Support sub-pages
Route::get('/programme-areas/care-treatment-support/community-services', [PageController::class, 'careCommunityServices'])->name('programme-areas.care-treatment-support.community-services');
Route::get('/programme-areas/care-treatment-support/tb-hiv', [PageController::class, 'careTbHiv'])->name('programme-areas.care-treatment-support.tb-hiv');
Route::get('/programme-areas/care-treatment-support/viral-hepatitis', [PageController::class, 'careViralHepatitis'])->name('programme-areas.care-treatment-support.viral-hepatitis');
Route::get('/programme-areas/care-treatment-support/ncd-integration', [PageController::class, 'careNcdIntegration'])->name('programme-areas.care-treatment-support.ncd-integration');
Route::get('/programme-areas/care-treatment-support/mental-health', [PageController::class, 'careMentalHealth'])->name('programme-areas.care-treatment-support.mental-health');

// Programme Areas - Monitoring & Evaluation sub-pages
Route::get('/programme-areas/monitoring-evaluation/research', [PageController::class, 'meResearch'])->name('programme-areas.monitoring-evaluation.research');
Route::get('/programme-areas/monitoring-evaluation/surveillance', [PageController::class, 'meSurveillance'])->name('programme-areas.monitoring-evaluation.surveillance');
Route::get('/programme-areas/monitoring-evaluation/his', [PageController::class, 'meHis'])->name('programme-areas.monitoring-evaluation.his');

// Programme Areas - Pharmaceuticals & Laboratory sub-pages
Route::get('/programme-areas/pharmaceuticals-laboratory/supply-chain', [PageController::class, 'pharmaSupplyChain'])->name('programme-areas.pharmaceuticals-laboratory.supply-chain');
Route::get('/programme-areas/pharmaceuticals-laboratory/laboratory-services', [PageController::class, 'pharmaLaboratoryServices'])->name('programme-areas.pharmaceuticals-laboratory.laboratory-services');

// Resources
Route::get('/resources', [DocumentController::class, 'resources'])->name('resources');
Route::get('/resources/strategic-framework', [DocumentController::class, 'strategicFramework'])->name('resources.strategic-framework');
Route::get('/resources/guidelines', [DocumentController::class, 'guidelines'])->name('resources.guidelines');
Route::get('/resources/databases', [DocumentController::class, 'databases'])->name('resources.databases');
Route::get('/resources/sop-manuals', [DocumentController::class, 'sopManuals'])->name('resources.sop-manuals');
Route::get('/resources/policy-documents', [DocumentController::class, 'policyDocuments'])->name('resources.policy-documents');
Route::get('/resources/reports', [DocumentController::class, 'reports'])->name('resources.reports');
Route::get('/resources/iec-materials', [DocumentController::class, 'iecMaterials'])->name('resources.iec-materials');

// News & Media
Route::get('/news', [BlogController::class, 'index'])->name('news');
Route::get('/news/news', [BlogController::class, 'news'])->name('news.news');
Route::get('/news/press-releases', [BlogController::class, 'pressReleases'])->name('news.press-releases');
Route::get('/news/speeches', [BlogController::class, 'speeches'])->name('news.speeches');
Route::get('/news/events', [BlogController::class, 'events'])->name('news.events');
Route::get('/news/newsletter', [BlogController::class, 'newsletter'])->name('news.newsletter');
Route::get('/news/photo-gallery', [BlogController::class, 'photoGallery'])->name('news.photo-gallery');
Route::get('/news/video-library', [VideoController::class, 'index'])->name('news.video-library');
Route::get('/news/{slug}', [BlogController::class, 'show'])->name('news.show');

// Search
Route::get('/search', [BlogController::class, 'search'])->name('search');

// Contact & Support
// Route::get('/contact', [PageController::class, 'contact'])->name('contact');
// redirect /contact to /contact/locations
Route::get('/contact', function () {
    return redirect()->route('contact.locations');
})->name('contact');

Route::get('/contact/locations', [PageController::class, 'locations'])->name('contact.locations');
Route::get('/contact/info', [PageController::class, 'contactInfo'])->name('contact.info');
Route::get('/contact/feedback', [PageController::class, 'feedback'])->name('contact.feedback');
Route::get('/contact/help', [PageController::class, 'help'])->name('contact.help');

// Support
Route::get('/support-nacp', [PageController::class, 'supportNacp'])->name('support-nacp');

// Legal Pages
Route::get('/legal/privacy', [PageController::class, 'privacy'])->name('legal.privacy');
Route::get('/legal/terms', [PageController::class, 'terms'])->name('legal.terms');

// Risk Assessment Tools
Route::get('/tools/risk-assessment', [PageController::class, 'riskAssessment'])->name('tools.risk-assessment');
Route::get('/tools/hiv-risk-assessment', [PageController::class, 'hivRiskAssessment'])->name('tools.hiv-risk-assessment');
Route::get('/tools/tb-risk-assessment', [PageController::class, 'tbRiskAssessment'])->name('tools.tb-risk-assessment');
Route::get('/tools/prep-assessment', [PageController::class, 'prepAssessment'])->name('tools.prep-assessment');
Route::get('/tools/pep-assessment', [PageController::class, 'pepAssessment'])->name('tools.pep-assessment');

// SEAH Reporting
Route::get('/report/seah', [PageController::class, 'seahReport'])->name('report.seah');
Route::post('/report/seah', [PageController::class, 'submitSeahReport'])->name('report.seah.submit');

// SEO Routes
Route::get('/sitemap.xml', [SeoController::class, 'sitemapIndex'])->name('sitemap.index');
Route::get('/sitemap-pages.xml', [SeoController::class, 'sitemapPages'])->name('sitemap.pages');
Route::get('/sitemap-blogs.xml', [SeoController::class, 'sitemapBlogs'])->name('sitemap.blogs');
Route::get('/sitemap-documents.xml', [SeoController::class, 'sitemapDocuments'])->name('sitemap.documents');
Route::get('/sitemap-faqs.xml', [SeoController::class, 'sitemapFaqs'])->name('sitemap.faqs');
Route::get('/robots.txt', [SeoController::class, 'robots'])->name('robots');

// API Routes for Videos
Route::get('/api/videos/featured', [VideoController::class, 'getFeaturedVideos'])->name('api.videos.featured');
Route::get('/api/videos/category/{category}', [VideoController::class, 'getByCategory'])->name('api.videos.category');

// API Routes for FAQs
Route::get('/api/faqs', [FaqController::class, 'index'])->name('api.faqs.index');
Route::get('/api/faqs/category/{category}', [FaqController::class, 'getByCategory'])->name('api.faqs.category');

// API Routes for Documents
Route::get('/api/documents', [DocumentController::class, 'index'])->name('api.documents.index');
Route::get('/api/documents/featured', [DocumentController::class, 'getFeatured'])->name('api.documents.featured');
Route::get('/api/documents/category/{category}', [DocumentController::class, 'getByCategory'])->name('api.documents.category');
Route::get('/documents/download/{id}', [DocumentController::class, 'download'])->name('documents.download');

// API Routes for Blogs
Route::get('/api/blogs', [BlogController::class, 'index'])->name('api.blogs.index');
Route::get('/api/blogs/featured', [BlogController::class, 'getFeatured'])->name('api.blogs.featured');
Route::get('/api/blogs/category/{category}', [BlogController::class, 'getByCategory'])->name('api.blogs.category');

// Admin/Auth Routes
Route::get('/admin/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::redirect('/dashboard', '/admin/dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/profile/settings', [ProfileController::class, 'settings'])->name('profile.settings');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::patch('/profile/password', [ProfileController::class, 'updatePassword'])->name('profile.password.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Admin Management Routes
    Route::prefix('admin')->name('admin.')->group(function () {
        // FAQ Management
        Route::resource('faqs', AdminFaqController::class);
        Route::patch('faqs/{faq}/toggle-status', [AdminFaqController::class, 'toggleStatus'])->name('faqs.toggle-status');
        Route::post('faqs/bulk-action', [AdminFaqController::class, 'bulkAction'])->name('faqs.bulk-action');
        
        // Video Management
        Route::resource('videos', AdminVideoController::class);
        Route::patch('videos/{video}/toggle-status', [AdminVideoController::class, 'toggleStatus'])->name('videos.toggle-status');
        Route::patch('videos/{video}/toggle-featured', [AdminVideoController::class, 'toggleFeatured'])->name('videos.toggle-featured');
        Route::post('videos/bulk-action', [AdminVideoController::class, 'bulkAction'])->name('videos.bulk-action');
        
        // Newsletter Subscriber Management
        Route::resource('newsletter-subscribers', AdminNewsletterSubscriberController::class);
        Route::patch('newsletter-subscribers/{newsletter_subscriber}/toggle-status', [AdminNewsletterSubscriberController::class, 'toggleStatus'])->name('newsletter-subscribers.toggle-status');
        Route::post('newsletter-subscribers/bulk-action', [AdminNewsletterSubscriberController::class, 'bulkAction'])->name('newsletter-subscribers.bulk-action');
        Route::get('newsletter-subscribers-export', [AdminNewsletterSubscriberController::class, 'export'])->name('newsletter-subscribers.export');
        
        // Document Management
        Route::resource('documents', AdminDocumentController::class);
        Route::patch('documents/{document}/toggle-status', [AdminDocumentController::class, 'toggleStatus'])->name('documents.toggle-status');
        Route::patch('documents/{document}/toggle-featured', [AdminDocumentController::class, 'toggleFeatured'])->name('documents.toggle-featured');
        Route::post('documents/bulk-action', [AdminDocumentController::class, 'bulkAction'])->name('documents.bulk-action');
        Route::get('documents/{document}/download', [AdminDocumentController::class, 'download'])->name('documents.download');
        
        // Blog Management
        Route::resource('blogs', AdminBlogController::class);
        Route::patch('blogs/{blog}/toggle-status', [AdminBlogController::class, 'toggleStatus'])->name('blogs.toggle-status');
        Route::patch('blogs/{blog}/toggle-featured', [AdminBlogController::class, 'toggleFeatured'])->name('blogs.toggle-featured');
        Route::post('blogs/bulk-action', [AdminBlogController::class, 'bulkAction'])->name('blogs.bulk-action');
        Route::post('blogs/upload-image', [AdminBlogController::class, 'uploadImage'])->name('blogs.upload-image');
        
        // Feedback Management
        Route::resource('feedback', AdminFeedbackController::class);
        Route::patch('feedback/{feedback}/update-status', [AdminFeedbackController::class, 'updateStatus'])->name('feedback.update-status');
        Route::patch('feedback/{feedback}/respond', [AdminFeedbackController::class, 'respond'])->name('feedback.respond');
        Route::post('feedback/bulk-action', [AdminFeedbackController::class, 'bulkAction'])->name('feedback.bulk-action');
        Route::get('feedback-export', [AdminFeedbackController::class, 'export'])->name('feedback.export');
        Route::get('feedback-analytics', [AdminFeedbackController::class, 'analytics'])->name('feedback.analytics');
        
        // User Management
        Route::resource('users', AdminUserController::class);
        Route::patch('users/{user}/update-status', [AdminUserController::class, 'updateStatus'])->name('users.update-status');
        Route::patch('users/{user}/update-role', [AdminUserController::class, 'updateRole'])->name('users.update-role');
        Route::patch('users/{user}/verify-email', [AdminUserController::class, 'verifyEmail'])->name('users.verify-email');
        Route::patch('users/{user}/unverify-email', [AdminUserController::class, 'unverifyEmail'])->name('users.unverify-email');
        Route::post('users/bulk-action', [AdminUserController::class, 'bulkAction'])->name('users.bulk-action');
        Route::get('users-export', [AdminUserController::class, 'export'])->name('users.export');
    });
});

require __DIR__.'/auth.php';
