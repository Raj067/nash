<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\BlogController;
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

// Contact & Support
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/contact/locations', [PageController::class, 'locations'])->name('contact.locations');
Route::get('/contact/info', [PageController::class, 'contactInfo'])->name('contact.info');
Route::get('/contact/feedback', [PageController::class, 'feedback'])->name('contact.feedback');
Route::get('/contact/help', [PageController::class, 'help'])->name('contact.help');

// Support
Route::get('/support-nacp', [PageController::class, 'supportNacp'])->name('support-nacp');

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
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
