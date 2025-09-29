<?php

namespace App\Services;

use Illuminate\Support\Facades\URL;

class SeoService
{
    /**
     * Generate meta tags for a page
     */
    public static function generateMetaTags(array $data = []): array
    {
        $config = config('seo');
        
        $defaults = [
            'title' => $config['site']['full_name'],
            'description' => $config['site']['description'],
            'keywords' => implode(', ', $config['defaults']['keywords']),
            'image' => asset($config['defaults']['image']),
            'url' => URL::current(),
            'type' => $config['open_graph']['default_type'],
            'site_name' => $config['site']['name'],
            'locale' => $config['defaults']['locale'],
            'author' => $config['site']['name'],
            'robots' => $config['defaults']['robots'],
            'canonical' => URL::current(),
        ];

        $meta = array_merge($defaults, $data);

        // Add title suffix if not already present
        if (!str_contains($meta['title'], $config['defaults']['title_suffix'])) {
            $meta['title'] .= $config['defaults']['title_suffix'];
        }

        // Ensure title is not too long
        $titleLength = $config['defaults']['title_length'];
        if (strlen($meta['title']) > $titleLength) {
            $meta['title'] = substr($meta['title'], 0, $titleLength - 3) . '...';
        }

        // Ensure description is not too long
        $descLength = $config['defaults']['description_length'];
        if (strlen($meta['description']) > $descLength) {
            $meta['description'] = substr($meta['description'], 0, $descLength - 3) . '...';
        }

        return $meta;
    }

    /**
     * Generate structured data (JSON-LD) for organization
     */
    public static function generateOrganizationStructuredData(): array
    {
        return [
            '@context' => 'https://schema.org',
            '@type' => 'GovernmentOrganization',
            'name' => 'National AIDS, STIs and Hepatitis Control Programme',
            'alternateName' => 'NASHCOP',
            'url' => config('app.url'),
            'logo' => asset('images/NASHCOP LOGO.png'),
            'description' => 'The National AIDS, STIs and Hepatitis Control Programme (NASHCOP) is responsible for coordinating the national response to HIV/AIDS, STIs, and Hepatitis in Tanzania.',
            'address' => [
                '@type' => 'PostalAddress',
                'streetAddress' => 'Samora Avenue',
                'addressLocality' => 'Dodoma',
                'addressCountry' => 'Tanzania',
            ],
            'contactPoint' => [
                '@type' => 'ContactPoint',
                'telephone' => '+255-22-2120261',
                'contactType' => 'customer service',
                'availableLanguage' => ['English', 'Swahili'],
            ],
            'sameAs' => [
                'https://www.facebook.com/nashcop.tz',
                'https://twitter.com/nashcop_tz',
                'https://www.instagram.com/nashcop_tz',
            ],
            'parentOrganization' => [
                '@type' => 'GovernmentOrganization',
                'name' => 'Ministry of Health, Community Development, Gender, Elderly and Children',
                'url' => 'https://www.moh.go.tz',
            ],
        ];
    }

    /**
     * Generate structured data for a blog post/article
     */
    public static function generateArticleStructuredData($blog): array
    {
        return [
            '@context' => 'https://schema.org',
            '@type' => 'Article',
            'headline' => $blog->title,
            'description' => $blog->excerpt ?: strip_tags(substr($blog->content, 0, 160)),
            'image' => $blog->featured_image ? asset($blog->featured_image) : asset('images/nashcop-og.jpg'),
            'author' => [
                '@type' => 'Organization',
                'name' => $blog->author ?: 'NASHCOP Tanzania',
            ],
            'publisher' => [
                '@type' => 'Organization',
                'name' => 'NASHCOP Tanzania',
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => asset('images/NASHCOP LOGO.png'),
                ],
            ],
            'datePublished' => $blog->published_date,
            'dateModified' => $blog->updated_at->toISOString(),
            'mainEntityOfPage' => [
                '@type' => 'WebPage',
                '@id' => route('news.show', $blog->slug),
            ],
            'keywords' => is_array($blog->tags) ? implode(', ', $blog->tags) : $blog->tags,
            'articleSection' => ucfirst(str_replace('_', ' ', $blog->category)),
            'wordCount' => str_word_count(strip_tags($blog->content)),
        ];
    }

    /**
     * Generate structured data for a document
     */
    public static function generateDocumentStructuredData($document): array
    {
        return [
            '@context' => 'https://schema.org',
            '@type' => 'DigitalDocument',
            'name' => $document->title,
            'description' => $document->description,
            'author' => [
                '@type' => 'Organization',
                'name' => $document->author ?: 'NASHCOP Tanzania',
            ],
            'publisher' => [
                '@type' => 'Organization',
                'name' => 'NASHCOP Tanzania',
            ],
            'datePublished' => $document->published_date,
            'dateModified' => $document->updated_at->toISOString(),
            'url' => route('resources.show', $document->slug),
            'fileFormat' => strtoupper($document->file_type),
            'contentSize' => $document->formatted_file_size,
            'downloadUrl' => $document->file_path ? route('documents.download', $document->id) : $document->file_url,
            'genre' => ucfirst(str_replace('_', ' ', $document->category)),
            'version' => $document->version,
        ];
    }

    /**
     * Generate structured data for FAQ page
     */
    public static function generateFAQStructuredData($faqs): array
    {
        $faqItems = [];
        
        foreach ($faqs as $faq) {
            $faqItems[] = [
                '@type' => 'Question',
                'name' => $faq->question,
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => strip_tags($faq->answer),
                ],
            ];
        }

        return [
            '@context' => 'https://schema.org',
            '@type' => 'FAQPage',
            'mainEntity' => $faqItems,
        ];
    }

    /**
     * Generate breadcrumb structured data
     */
    public static function generateBreadcrumbStructuredData(array $breadcrumbs): array
    {
        $items = [];
        
        foreach ($breadcrumbs as $index => $breadcrumb) {
            $items[] = [
                '@type' => 'ListItem',
                'position' => $index + 1,
                'name' => $breadcrumb['name'],
                'item' => $breadcrumb['url'],
            ];
        }

        return [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => $items,
        ];
    }

    /**
     * Generate website structured data
     */
    public static function generateWebsiteStructuredData(): array
    {
        return [
            '@context' => 'https://schema.org',
            '@type' => 'WebSite',
            'name' => 'NASHCOP Tanzania',
            'alternateName' => 'National AIDS, STIs and Hepatitis Control Programme',
            'url' => config('app.url'),
            'description' => 'Official website of the National AIDS, STIs and Hepatitis Control Programme (NASHCOP) Tanzania',
            'publisher' => [
                '@type' => 'Organization',
                'name' => 'NASHCOP Tanzania',
                'logo' => asset('images/NASHCOP LOGO.png'),
            ],
            'potentialAction' => [
                '@type' => 'SearchAction',
                'target' => [
                    '@type' => 'EntryPoint',
                    'urlTemplate' => route('search') . '?q={search_term_string}',
                ],
                'query-input' => 'required name=search_term_string',
            ],
        ];
    }
}
