<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Services\SeoService;
use Inertia\Inertia;

class SeoMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Only apply SEO data to Inertia responses
        if ($response instanceof \Inertia\Response) {
            // Get current route name
            $routeName = $request->route()->getName();
            
            // Generate default SEO data
            $seoData = $this->generateSeoData($routeName, $request);
            
            // Add SEO data to Inertia props
            Inertia::share('seo', $seoData);
        }

        return $response;
    }

    /**
     * Generate SEO data based on route
     */
    private function generateSeoData(string $routeName, Request $request): array
    {
        $seoData = [
            'meta' => SeoService::generateMetaTags(),
            'structuredData' => [
                'organization' => SeoService::generateOrganizationStructuredData(),
                'website' => SeoService::generateWebsiteStructuredData(),
            ],
        ];

        // Customize SEO data based on route
        switch ($routeName) {
            case 'home':
                $seoData['meta'] = SeoService::generateMetaTags([
                    'title' => 'NACP Tanzania - National AIDS, STIs and Hepatitis Control Programme',
                    'description' => 'Official website of NACP Tanzania. Leading the national response to HIV/AIDS, STIs, and Hepatitis through prevention, treatment, care, and support services.',
                    'keywords' => 'NACP, HIV AIDS Tanzania, STIs prevention, Hepatitis control, national health programme, HIV testing, treatment, care support',
                ]);
                break;

            case 'about.index':
                $seoData['meta'] = SeoService::generateMetaTags([
                    'title' => 'About NACP - National AIDS, STIs and Hepatitis Control Programme',
                    'description' => 'Learn about NACP Tanzania, our mission, vision, and commitment to combating HIV/AIDS, STIs, and Hepatitis in Tanzania.',
                    'keywords' => 'about NACP, mission vision, HIV AIDS control Tanzania, health organization',
                ]);
                break;

            case 'services.index':
                $seoData['meta'] = SeoService::generateMetaTags([
                    'title' => 'Our Services - NACP Tanzania',
                    'description' => 'Discover NACP\'s comprehensive services including HIV testing, prevention programs, treatment, care, and support services across Tanzania.',
                    'keywords' => 'HIV services Tanzania, AIDS prevention, testing services, treatment programs, healthcare services',
                ]);
                break;

            case 'news':
                $seoData['meta'] = SeoService::generateMetaTags([
                    'title' => 'News & Updates - NACP Tanzania',
                    'description' => 'Stay updated with the latest news, press releases, events, and developments in HIV/AIDS, STIs, and Hepatitis control in Tanzania.',
                    'keywords' => 'HIV news Tanzania, AIDS updates, health news, NACP announcements, press releases',
                ]);
                break;

            case 'resources.index':
                $seoData['meta'] = SeoService::generateMetaTags([
                    'title' => 'Resources & Documents - NACP Tanzania',
                    'description' => 'Access comprehensive resources including guidelines, policies, reports, manuals, and educational materials on HIV/AIDS, STIs, and Hepatitis.',
                    'keywords' => 'HIV guidelines Tanzania, AIDS resources, health documents, policy papers, educational materials',
                ]);
                break;

            case 'contact.locations':
                $seoData['meta'] = SeoService::generateMetaTags([
                    'title' => 'Contact Us - NACP Tanzania Office Locations',
                    'description' => 'Find NACP office locations, contact information, and get in touch with our team for HIV/AIDS, STIs, and Hepatitis related inquiries.',
                    'keywords' => 'NACP contact, office locations Tanzania, HIV AIDS support contact, health services contact',
                ]);
                break;
        }

        return $seoData;
    }
}
