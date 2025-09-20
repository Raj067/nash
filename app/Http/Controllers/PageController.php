<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Document;

class PageController extends Controller
{
    public function index()
    {
        // Fetch featured documents for the home page
        $featuredDocuments = Document::active()
            ->featured()
            ->ordered()
            ->limit(4)
            ->get()
            ->map(function ($document) {
                return [
                    'id' => $document->id,
                    'title' => $document->title,
                    'description' => $document->description,
                    'category' => $document->category,
                    'category_display' => Document::getCategoryDisplayName($document->category),
                    'file_type' => $document->file_type,
                    'file_path' => $document->file_path,
                    'file_url' => $document->file_url,
                    'formatted_file_size' => $document->formatted_file_size,
                    'file_icon' => $document->file_icon,
                    'published_date' => $document->published_date ? $document->published_date->format('M d, Y') : null,
                    'author' => $document->author,
                    'version' => $document->version,
                    'tags' => $document->tags ?? [],
                    'is_featured' => $document->is_featured,
                    'download_count' => $document->download_count ?? 0,
                ];
            });

        return Inertia::render('Home', [
            'featuredDocuments' => $featuredDocuments,
        ]);
    }

    // Who We Are pages
    public function about()
    {
        return Inertia::render('About/Index');
    }

    public function aboutUs()
    {
        return Inertia::render('About/AboutUs');
    }

    public function hivAidsTanzania()
    {
        return Inertia::render('About/HivAidsTanzania');
    }

    public function structure()
    {
        return Inertia::render('About/Structure');
    }

    // What We Do pages
    public function services()
    {
        return Inertia::render('Services/Index');
    }

    public function nacpRoles()
    {
        return Inertia::render('Services/NacpRoles');
    }

    public function divisionPrevention()
    {
        return Inertia::render('Services/DivisionPrevention');
    }

    public function careSupport()
    {
        return Inertia::render('Services/CareSupport');
    }

    public function strategicInfo()
    {
        return Inertia::render('Services/StrategicInfo');
    }

    public function pharmaceuticals()
    {
        return Inertia::render('Services/Pharmaceuticals');
    }

    public function strategicPlan()
    {
        return Inertia::render('Services/StrategicPlan');
    }

    // Interventions pages
    public function interventions()
    {
        return Inertia::render('Interventions/Index');
    }

    public function hivTesting()
    {
        return Inertia::render('Interventions/HivTesting');
    }

    public function preventionInfection()
    {
        return Inertia::render('Interventions/PreventionInfection');
    }

    public function healthSystems()
    {
        return Inertia::render('Interventions/HealthSystems');
    }

    public function decentralizedCare()
    {
        return Inertia::render('Interventions/DecentralizedCare');
    }

    public function crossSector()
    {
        return Inertia::render('Interventions/CrossSector');
    }

    // Resources pages
    public function resources()
    {
        return Inertia::render('Resources/Index');
    }

    public function strategicFramework()
    {
        return Inertia::render('Resources/StrategicFramework');
    }

    public function guidelines()
    {
        return Inertia::render('Resources/Guidelines');
    }

    public function databases()
    {
        return Inertia::render('Resources/Databases');
    }

    public function sopManuals()
    {
        return Inertia::render('Resources/SopManuals');
    }

    // News & Media pages
    public function news()
    {
        return Inertia::render('News/Index');
    }

    public function pressReleases()
    {
        return Inertia::render('News/PressReleases');
    }

    public function speeches()
    {
        return Inertia::render('News/Speeches');
    }

    public function photoGallery()
    {
        return Inertia::render('News/PhotoGallery');
    }

    public function videoLibrary()
    {
        return Inertia::render('News/VideoLibrary');
    }

    // Contact & Support pages
    public function contact()
    {
        return Inertia::render('Contact/Index');
    }

    public function locations()
    {
        return Inertia::render('Contact/Locations');
    }

    public function contactInfo()
    {
        return Inertia::render('Contact/ContactInfo');
    }

    public function feedback()
    {
        return Inertia::render('Contact/Feedback');
    }

    public function help()
    {
        return Inertia::render('Contact/Help');
    }

    // Support pages
    public function supportNacp()
    {
        return Inertia::render('SupportNacp');
    }
}
