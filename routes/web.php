<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
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
Route::get('/resources', [PageController::class, 'resources'])->name('resources');
Route::get('/resources/strategic-framework', [PageController::class, 'strategicFramework'])->name('resources.strategic-framework');
Route::get('/resources/guidelines', [PageController::class, 'guidelines'])->name('resources.guidelines');
Route::get('/resources/databases', [PageController::class, 'databases'])->name('resources.databases');
Route::get('/resources/sop-manuals', [PageController::class, 'sopManuals'])->name('resources.sop-manuals');

// News & Media
Route::get('/news', [PageController::class, 'news'])->name('news');
Route::get('/news/press-releases', [PageController::class, 'pressReleases'])->name('news.press-releases');
Route::get('/news/speeches', [PageController::class, 'speeches'])->name('news.speeches');
Route::get('/news/photo-gallery', [PageController::class, 'photoGallery'])->name('news.photo-gallery');
Route::get('/news/video-library', [PageController::class, 'videoLibrary'])->name('news.video-library');

// Contact & Support
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/contact/locations', [PageController::class, 'locations'])->name('contact.locations');
Route::get('/contact/info', [PageController::class, 'contactInfo'])->name('contact.info');
Route::get('/contact/feedback', [PageController::class, 'feedback'])->name('contact.feedback');
Route::get('/contact/help', [PageController::class, 'help'])->name('contact.help');

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
