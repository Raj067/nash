<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Document;
use App\Models\Blog;
use App\Models\Faq;

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

        // Fetch featured blogs for the home page
        $featuredBlogs = Blog::published()
            // ->featured()
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

        // Fetch featured FAQs for the home page
        $featuredFaqs = Faq::active()
            ->ordered()
            ->limit(5)
            ->get()
            ->map(function ($faq) {
                return [
                    'id' => $faq->id,
                    'question' => $faq->question,
                    'answer' => $faq->answer,
                    'category' => $faq->category,
                ];
            });

        return Inertia::render('Home', [
            'featuredDocuments' => $featuredDocuments,
            'featuredBlogs' => $featuredBlogs,
            'featuredFaqs' => $featuredFaqs,
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

    public function coreFunctions()
    {
        return Inertia::render('About/CoreFunctions');
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

    // Programme Areas pages
    public function programmeAreas()
    {
        return Inertia::render('ProgrammeAreas/Index');
    }

    public function managementCoordination()
    {
        return Inertia::render('ProgrammeAreas/ManagementCoordination');
    }

    public function prevention()
    {
        return Inertia::render('ProgrammeAreas/Prevention');
    }

    public function careTreatmentSupport()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport');
    }

    public function monitoringEvaluation()
    {
        return Inertia::render('ProgrammeAreas/MonitoringEvaluation');
    }

    public function pharmaceuticalsLaboratory()
    {
        return Inertia::render('ProgrammeAreas/PharmaceuticalsLaboratory');
    }

    // Programme Areas - Prevention sub-pages
    public function preventionVmmc()
    {
        return Inertia::render('ProgrammeAreas/Prevention/Vmmc');
    }

    public function preventionSbcc()
    {
        return Inertia::render('ProgrammeAreas/Prevention/Sbcc');
    }

    public function preventionCondoms()
    {
        return Inertia::render('ProgrammeAreas/Prevention/Condoms');
    }

    public function preventionPmtct()
    {
        return Inertia::render('ProgrammeAreas/Prevention/Pmtct');
    }

    public function preventionPrep()
    {
        return Inertia::render('ProgrammeAreas/Prevention/Prep');
    }

    public function preventionKvp()
    {
        return Inertia::render('ProgrammeAreas/Prevention/Kvp');
    }

    public function preventionPep()
    {
        return Inertia::render('ProgrammeAreas/Prevention/Pep');
    }

    public function preventionStis()
    {
        return Inertia::render('ProgrammeAreas/Prevention/Stis');
    }

    public function preventionGbv()
    {
        return Inertia::render('ProgrammeAreas/Prevention/Gbv');
    }

    // Programme Areas - Care, Treatment & Support sub-pages
    public function careCommunityServices()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport/CommunityServices');
    }

    public function careTbHiv()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport/TbHiv');
    }

    public function careViralHepatitis()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport/ViralHepatitis');
    }

    public function careNcdIntegration()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport/NcdIntegration');
    }

    public function careMentalHealth()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport/MentalHealth');
    }

    public function carePaediatricHiv()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport/PaediatricHiv');
    }

    public function careAdolescentHiv()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport/AdolescentHiv');
    }

    public function careViralHepatitisScreening()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport/ViralHepatitisScreening');
    }

    public function careViralHepatitisCare()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport/ViralHepatitisCare');
    }

    public function careEarlyInfantDiagnosis()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport/EarlyInfantDiagnosis');
    }

    public function careVulnerableAgyw()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport/VulnerableAgyw');
    }

    public function careGeneralPopulation()
    {
        return Inertia::render('ProgrammeAreas/CareTreatmentSupport/GeneralPopulation');
    }

    // Programme Areas - Monitoring & Evaluation sub-pages
    public function meResearch()
    {
        return Inertia::render('ProgrammeAreas/MonitoringEvaluation/Research');
    }

    public function meSurveillance()
    {
        return Inertia::render('ProgrammeAreas/MonitoringEvaluation/Surveillance');
    }

    public function meHis()
    {
        return Inertia::render('ProgrammeAreas/MonitoringEvaluation/His');
    }

    // Programme Areas - Pharmaceuticals & Laboratory sub-pages
    public function pharmaSupplyChain()
    {
        return Inertia::render('ProgrammeAreas/PharmaceuticalsLaboratory/SupplyChain');
    }

    public function pharmaRationalUse()
    {
        return Inertia::render('ProgrammeAreas/PharmaceuticalsLaboratory/RationalUse');
    }

    public function pharmaLaboratoryServices()
    {
        return Inertia::render('ProgrammeAreas/PharmaceuticalsLaboratory/LaboratoryServices');
    }

    // Legal Pages
    public function privacy()
    {
        return Inertia::render('Legal/Privacy');
    }

    public function terms()
    {
        return Inertia::render('Legal/Terms');
    }

    // Risk Assessment Tools
    public function riskAssessment()
    {
        return Inertia::render('Tools/RiskAssessment');
    }

    public function hivRiskAssessment()
    {
        return Inertia::render('Tools/HivRiskAssessment');
    }

    public function tbRiskAssessment()
    {
        return Inertia::render('Tools/TbRiskAssessment');
    }

    public function prepAssessment()
    {
        return Inertia::render('Tools/PrepAssessment');
    }

    public function pepAssessment()
    {
        return Inertia::render('Tools/PepAssessment');
    }

    public function seahReport()
    {
        return Inertia::render('Report/SeahReport');
    }

    public function submitSeahReport(Request $request)
    {
        $validated = $request->validate([
            'report_type' => 'required|string',
            'incident_type' => 'required|string',
            'description' => 'required|string|min:10',
            'incident_date' => 'nullable|date',
            'incident_location' => 'nullable|string|max:255',
            'persons_involved' => 'nullable|string',
            'witnesses' => 'nullable|string',
            'previous_reports' => 'nullable|string',
            'is_anonymous' => 'boolean',
            'reporter_name' => 'nullable|string|max:255',
            'reporter_email' => 'nullable|email|max:255',
            'reporter_phone' => 'nullable|string|max:20',
            'reporter_relationship' => 'nullable|string|max:255',
            'consent_investigation' => 'boolean',
            'consent_contact' => 'boolean',
            'additional_support' => 'nullable|string',
            'attachments.*' => 'nullable|file|max:512000|mimes:pdf,doc,docx,jpg,jpeg,png,mp3,mp4,wav'
        ]);

        // Handle file uploads
        $attachmentPaths = [];
        if ($request->hasFile('attachments')) {
            foreach ($request->file('attachments') as $file) {
                $path = $file->store('seah-reports', 'private');
                $attachmentPaths[] = [
                    'original_name' => $file->getClientOriginalName(),
                    'path' => $path,
                    'size' => $file->getSize(),
                    'mime_type' => $file->getMimeType()
                ];
            }
        }

        // Prepare email data
        $emailData = [
            'report_type' => $validated['report_type'],
            'incident_type' => $validated['incident_type'],
            'description' => $validated['description'],
            'incident_date' => $validated['incident_date'],
            'incident_location' => $validated['incident_location'],
            'persons_involved' => $validated['persons_involved'],
            'witnesses' => $validated['witnesses'],
            'previous_reports' => $validated['previous_reports'],
            'is_anonymous' => $validated['is_anonymous'],
            'reporter_name' => $validated['is_anonymous'] ? 'Anonymous' : $validated['reporter_name'],
            'reporter_email' => $validated['is_anonymous'] ? 'Anonymous' : $validated['reporter_email'],
            'reporter_phone' => $validated['is_anonymous'] ? 'Anonymous' : $validated['reporter_phone'],
            'reporter_relationship' => $validated['reporter_relationship'],
            'consent_investigation' => $validated['consent_investigation'],
            'consent_contact' => $validated['consent_contact'],
            'additional_support' => $validated['additional_support'],
            'attachments' => $attachmentPaths,
            'submitted_at' => now()->format('Y-m-d H:i:s'),
            'report_id' => 'SEAH-' . now()->format('Ymd') . '-' . strtoupper(substr(md5(uniqid()), 0, 6))
        ];

        // Send email to administration
        try {
            \Mail::send('emails.seah-report', $emailData, function ($message) use ($emailData) {
                $message->to('nacp@afya.go.tz')
                    ->subject('SEAH Report - ' . $emailData['report_id'] . ' - ' . ucfirst(str_replace('_', ' ', $emailData['incident_type'])));
                
                // Attach files if any
                foreach ($emailData['attachments'] as $attachment) {
                    $message->attach(storage_path('app/private/' . $attachment['path']), [
                        'as' => $attachment['original_name'],
                        'mime' => $attachment['mime_type']
                    ]);
                }
            });

            return redirect()->back()->with('success', 'Your SEAH report has been submitted successfully. Report ID: ' . $emailData['report_id'] . '. Thank you for your courage in reporting this matter.');
        } catch (\Exception $e) {
            \Log::error('SEAH Report Email Failed: ' . $e->getMessage());
            return redirect()->back()->with('error', 'There was an error submitting your report. Please try again or contact us directly at nacp@afya.go.tz');
        }
    }
}
