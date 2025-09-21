<?php

return [
    /*
    |--------------------------------------------------------------------------
    | SEO Configuration
    |--------------------------------------------------------------------------
    |
    | This file contains the SEO configuration for the NASHCOP website.
    | These settings are used by the SeoService and SEO components.
    |
    */

    'site' => [
        'name' => 'NASHCOP Tanzania',
        'full_name' => 'National AIDS, STIs and Hepatitis Control Programme',
        'description' => 'The National AIDS, STIs and Hepatitis Control Programme (NASHCOP) is responsible for coordinating the national response to HIV/AIDS, STIs, and Hepatitis in Tanzania.',
        'url' => env('APP_URL', 'https://nashcop.go.tz'),
        'logo' => '/images/nashcop.jpeg',
        'favicon' => '/favicon.ico',
        'theme_color' => '#1e40af',
    ],

    'social' => [
        'facebook' => 'https://www.facebook.com/nashcop.tz',
        'twitter' => 'https://twitter.com/nashcop_tz',
        'instagram' => 'https://www.instagram.com/nashcop_tz',
        'youtube' => 'https://www.youtube.com/@nashcop_tz',
        'linkedin' => 'https://www.linkedin.com/company/nashcop-tz',
        'twitter_handle' => '@nashcop_tz',
    ],

    'contact' => [
        'phone' => '+255-22-2120261',
        'email' => 'info@nashcop.go.tz',
        'address' => [
            'street' => 'Samora Avenue',
            'city' => 'Dar es Salaam',
            'country' => 'Tanzania',
            'postal_code' => '11478',
        ],
        'coordinates' => [
            'latitude' => -6.7924,
            'longitude' => 39.2083,
        ],
    ],

    'organization' => [
        'type' => 'GovernmentOrganization',
        'parent_organization' => [
            'name' => 'Ministry of Health, Community Development, Gender, Elderly and Children',
            'url' => 'https://www.moh.go.tz',
        ],
        'department' => 'Health',
        'founding_date' => '2007',
        'legal_name' => 'National AIDS, STIs and Hepatitis Control Programme',
        'tax_id' => 'TZ-GOV-NASHCOP',
    ],

    'defaults' => [
        'title_suffix' => ' - NASHCOP Tanzania',
        'description_length' => 160,
        'title_length' => 60,
        'keywords' => [
            'HIV AIDS Tanzania',
            'STIs prevention',
            'Hepatitis control',
            'NASHCOP',
            'National AIDS Control Programme',
            'health services Tanzania',
            'HIV testing',
            'AIDS treatment',
            'prevention programs',
            'healthcare Tanzania',
        ],
        'locale' => 'en_US',
        'alternate_locales' => ['sw_TZ'], // Swahili
        'robots' => 'index, follow',
        'image' => '/images/nashcop-og.jpg',
    ],

    'analytics' => [
        'google_analytics_id' => env('GOOGLE_ANALYTICS_ID', 'G-YGTFBTY44B'),
        'google_tag_manager_id' => env('GOOGLE_TAG_MANAGER_ID'),
        'facebook_pixel_id' => env('FACEBOOK_PIXEL_ID'),
        'hotjar_id' => env('HOTJAR_ID'),
    ],

    'verification' => [
        'google_site_verification' => env('GOOGLE_SITE_VERIFICATION'),
        'bing_site_verification' => env('BING_SITE_VERIFICATION'),
        'yandex_verification' => env('YANDEX_VERIFICATION'),
        'pinterest_verification' => env('PINTEREST_VERIFICATION'),
    ],

    'sitemap' => [
        'cache_duration' => 3600, // 1 hour in seconds
        'priorities' => [
            'home' => 1.0,
            'about' => 0.8,
            'services' => 0.9,
            'news' => 0.9,
            'resources' => 0.8,
            'contact' => 0.7,
            'blog_post' => 0.8,
            'document' => 0.7,
            'faq' => 0.6,
        ],
        'changefreq' => [
            'home' => 'weekly',
            'about' => 'monthly',
            'services' => 'weekly',
            'news' => 'daily',
            'resources' => 'weekly',
            'contact' => 'monthly',
            'blog_post' => 'weekly',
            'document' => 'monthly',
            'faq' => 'monthly',
        ],
    ],

    'structured_data' => [
        'enable_organization' => true,
        'enable_website' => true,
        'enable_breadcrumbs' => true,
        'enable_articles' => true,
        'enable_documents' => true,
        'enable_faqs' => true,
        'enable_videos' => true,
    ],

    'open_graph' => [
        'default_type' => 'website',
        'article_type' => 'article',
        'image_width' => 1200,
        'image_height' => 630,
        'enable_twitter_cards' => true,
        'twitter_card_type' => 'summary_large_image',
    ],

    'robots_txt' => [
        'user_agent' => '*',
        'allow' => [
            '/',
        ],
        'disallow' => [
            '/admin/',
            '/api/',
            '/storage/',
            '/vendor/',
            '/*.pdf$',
            '/login',
            '/register',
            '/password/',
        ],
        'crawl_delay' => 1,
        'additional_rules' => [
            '# Additional rules for specific bots',
            'User-agent: Googlebot',
            'Allow: /',
            '',
            'User-agent: Bingbot',
            'Allow: /',
            '',
            'User-agent: facebookexternalhit',
            'Allow: /',
        ],
    ],
];
