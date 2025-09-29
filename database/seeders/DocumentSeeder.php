<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Document;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing documents
        Document::truncate();
        
        echo "Starting document seeding...\n";
        $this->seedActualDocuments();
        $this->seedSampleDocuments();
        echo "Document seeding completed.\n";
    }
    
    private function seedActualDocuments()
    {
        // Try public directory first (where you moved them! 😄)
        $basePath = public_path('documents/seeds');
        echo "Looking for documents in: {$basePath}\n";
        
        if (!File::exists($basePath)) {
            // Fallback to storage path
            $basePath = storage_path('app/public/documents/seeds');
            echo "Not found in public, trying storage: {$basePath}\n";
            
            if (!File::exists($basePath)) {
                echo "❌ Documents directory not found in either location!\n";
                echo "   Tried: " . public_path('documents/seeds') . "\n";
                echo "   Tried: " . storage_path('app/public/documents/seeds') . "\n";
                return;
            }
        }
        
        $categories = [
            'plans_strategic' => 'Plans & Strategic Documents',
            'policy' => 'Policy Documents',
            'guidelines' => 'Guidelines',
            'reports' => 'Reports',
            'manuals_sops' => 'Manuals, Forms, Tools and SOPs',
            'frameworks' => 'Frameworks',
            'iec_sbc' => 'IEC/SBC Materials',
            'databases' => 'Databases'
        ];
        
        $sortOrder = 1;
        $totalDocuments = 0;
        
        foreach ($categories as $categoryKey => $categoryName) {
            $categoryPath = $basePath . '/' . $categoryKey;
            echo "Checking category: {$categoryKey} at {$categoryPath}\n";
            
            if (File::exists($categoryPath)) {
                $files = File::files($categoryPath);
                echo "Found " . count($files) . " files in {$categoryKey}\n";
                
                foreach ($files as $file) {
                    $fileName = $file->getFilename();
                    $fileSize = $file->getSize();
                    $extension = strtolower($file->getExtension());
                    
                    // Generate metadata from filename
                    $metadata = $this->generateMetadataFromFilename($fileName, $categoryKey);
                    
                    // Determine the correct file path based on where files are located
                    $filePath = str_contains($basePath, 'public_html/public') || str_contains($basePath, '/public/') 
                        ? '/documents/seeds/' . $categoryKey . '/' . $fileName  // Public directory
                        : 'documents/seeds/' . $categoryKey . '/' . $fileName;   // Storage directory
                    
                    Document::create([
                        'title' => $metadata['title'],
                        'description' => $metadata['description'],
                        'category' => $this->mapCategory($categoryKey),
                        'file_type' => $extension,
                        'file_path' => $filePath,
                        'file_size' => $fileSize,
                        'published_date' => $metadata['published_date'],
                        'author' => $metadata['author'],
                        'version' => $metadata['version'],
                        'tags' => $metadata['tags'],
                        'is_featured' => $metadata['is_featured'],
                        'is_active' => true,
                        'sort_order' => $sortOrder++,
                    ]);
                    
                    $totalDocuments++;
                    echo "✅ Seeded: {$fileName}\n";
                }
            } else {
                echo "❌ Category directory not found: {$categoryPath}\n";
            }
        }
        
        echo "📊 Total documents seeded: {$totalDocuments}\n";
    }
    
    private function generateMetadataFromFilename($filename, $category)
    {
        // Remove file extension and clean filename
        $cleanName = pathinfo($filename, PATHINFO_FILENAME);
        $cleanName = preg_replace('/\s*\(2023_08_07 17_10_23 UTC\)/', '', $cleanName);
        $cleanName = trim($cleanName);
        
        // Extract year if present
        $year = 2023; // default
        if (preg_match('/(\d{4})/', $cleanName, $matches)) {
            $year = (int)$matches[1];
        }
        
        // Generate title and description based on filename
        $title = $this->generateTitle($cleanName);
        $description = $this->generateDescription($cleanName, $category);
        $tags = $this->generateTags($cleanName, $category);
        $author = $this->generateAuthor($cleanName);
        $isFeatured = $this->shouldBeFeatured($cleanName);
        
        return [
            'title' => $title,
            'description' => $description,
            'published_date' => Carbon::create($year, rand(1, 12), rand(1, 28)),
            'author' => $author,
            'version' => '1.0',
            'tags' => $tags,
            'is_featured' => $isFeatured,
        ];
    }
    
    private function generateTitle($cleanName)
    {
        // Convert common abbreviations and clean up
        $title = str_replace([
            'HSHSP', 'NACP', 'CTC2', 'VMMC', 'EIMC', 'PMD', 'DHIS2', 'TB', 'HIV'
        ], [
            'Health Sector Strategic Plan', 'NATIONAL AIDS, STIs AND HEPATITIS CONTROL PROGRAMME', 'Care and Treatment Center 2', 
            'Voluntary Medical Male Circumcision', 'Early Infant Male Circumcision', 'Program Management Database',
            'District Health Information System 2', 'Tuberculosis', 'HIV'
        ], $cleanName);
        
        // Capitalize properly
        $title = ucwords(strtolower($title));
        
        // Fix specific cases
        $title = str_replace(['Hiv', 'Aids', 'Tb'], ['HIV', 'AIDS', 'TB'], $title);
        
        return $title;
    }
    
    private function generateDescription($cleanName, $category)
    {
        $descriptions = [
            'databases' => [
                'CTC2' => 'Care and Treatment Center database installation and management guide for HIV patient data management.',
                'default' => 'Database system for HIV/AIDS program data management and reporting.'
            ],
            'guidelines' => [
                'THIS' => 'Tanzania HIV Impact Survey comprehensive report providing national HIV surveillance data and epidemiological analysis.',
                'HSHSP' => 'Health Sector Strategic Plan providing framework for health sector development and HIV program implementation.',
                'Health Sector HIV' => 'Strategic plan for HIV, Viral Hepatitis and STI prevention, treatment and care in the health sector.',
                'Tanzania-HIV-QI' => 'Quality improvement guidelines for HIV care and treatment services in Tanzania.',
                'tbhiv policy' => 'National policy guidelines for TB/HIV collaborative activities and integrated service delivery.',
                'default' => 'Clinical and operational guidelines for HIV/AIDS program implementation.'
            ],
            'manuals_sops' => [
                'Brochure' => 'Educational brochure providing information on HIV prevention and awareness.',
                'Poster' => 'Educational poster for HIV prevention and health promotion campaigns.',
                'default' => 'Manual, standard operating procedure, or educational material for HIV program implementation.'
            ],
            'news' => [
                'APP' => 'Mobile application user guide for HIV program management.',
                'Guidelines VMMC' => 'Guidelines for Voluntary Medical Male Circumcision and Early Infant Male Circumcision programs.',
                'Habari za UKIMWI' => 'NACP quarterly newsletter providing updates on HIV program activities and achievements.',
                'NACP News Letter' => 'NACP quarterly newsletter with program updates, achievements, and key information.',
                'REGIONAL MONTHLY' => 'Regional monthly summary reporting form for HIV program data collection.',
                'User manual PMD' => 'User manual for Program Management Database system.',
                'VMMC SURGICAL' => 'Voluntary Medical Male Circumcision surgical summary reporting form.',
                'dhis2_user_manual' => 'User manual for District Health Information System 2 (DHIS2) platform.',
                'hshsp3final' => 'Third Health Sector Strategic Plan final document.',
                'default' => 'Report, newsletter, or documentation related to HIV program activities and outcomes.'
            ]
        ];
        
        $categoryDescriptions = $descriptions[$category] ?? ['default' => 'Document related to HIV/AIDS program implementation.'];
        
        foreach ($categoryDescriptions as $key => $desc) {
            if ($key !== 'default' && stripos($cleanName, $key) !== false) {
                return $desc;
            }
        }
        
        return $categoryDescriptions['default'];
    }
    
    private function generateTags($cleanName, $category)
    {
        $baseTags = ['HIV', 'AIDS', 'NASHCOP'];
        
        $tagMap = [
            'databases' => ['database', 'CTC', 'data management'],
            'guidelines' => ['guidelines', 'clinical', 'policy'],
            'manuals_sops' => ['manual', 'SOP', 'training'],
            'news' => ['report', 'newsletter', 'communication']
        ];
        
        $categoryTags = $tagMap[$category] ?? [];
        
        // Add specific tags based on filename content
        $specificTags = [];
        if (stripos($cleanName, 'strategic') !== false) $specificTags[] = 'strategic plan';
        if (stripos($cleanName, 'quality') !== false) $specificTags[] = 'quality improvement';
        if (stripos($cleanName, 'survey') !== false) $specificTags[] = 'survey';
        if (stripos($cleanName, 'brochure') !== false) $specificTags[] = 'education';
        if (stripos($cleanName, 'poster') !== false) $specificTags[] = 'awareness';
        if (stripos($cleanName, 'newsletter') !== false) $specificTags[] = 'communication';
        if (stripos($cleanName, 'manual') !== false) $specificTags[] = 'training';
        if (stripos($cleanName, 'vmmc') !== false) $specificTags[] = 'male circumcision';
        if (stripos($cleanName, 'tb') !== false) $specificTags[] = 'tuberculosis';
        if (stripos($cleanName, 'hepatitis') !== false) $specificTags[] = 'viral hepatitis';
        if (stripos($cleanName, 'sti') !== false) $specificTags[] = 'sexually transmitted infections';
        
        return array_merge($baseTags, $categoryTags, $specificTags);
    }
    
    private function generateAuthor($cleanName)
    {
        // Determine author based on content
        if (stripos($cleanName, 'nacp') !== false || stripos($cleanName, 'habari') !== false) {
            return 'NATIONAL AIDS, STIs AND HEPATITIS CONTROL PROGRAMME (NACP)';
        }
        if (stripos($cleanName, 'hshsp') !== false || stripos($cleanName, 'health sector') !== false) {
            return 'Ministry of Health, Community Development, Gender, Elderly and Children';
        }
        if (stripos($cleanName, 'this') !== false && stripos($cleanName, 'survey') !== false) {
            return 'Tanzania Commission for AIDS (TACAIDS)';
        }
        if (stripos($cleanName, 'dhis2') !== false) {
            return 'Ministry of Health - Health Information Systems';
        }
        if (stripos($cleanName, 'ctc') !== false) {
            return 'Care and Treatment Center Program';
        }
        
        return 'NASHCOP Tanzania';
    }
    
    private function shouldBeFeatured($cleanName)
    {
        // Make strategic documents and major reports featured
        $featuredKeywords = [
            'strategic', 'hshsp', 'this', 'final report', 'health sector', 
            'national', 'policy', 'guideline', 'framework'
        ];
        
        foreach ($featuredKeywords as $keyword) {
            if (stripos($cleanName, $keyword) !== false) {
                return rand(1, 3) === 1; // 33% chance for featured documents
            }
        }
        
        return rand(1, 10) === 1; // 10% chance for other documents
    }
    
    private function mapCategory($categoryKey)
    {
        $categoryMap = [
            'plans_strategic' => 'plans_strategic',
            'policy' => 'policy',
            'guidelines' => 'guidelines',
            'reports' => 'reports',
            'manuals_sops' => 'manuals_sops',
            'frameworks' => 'frameworks',
            'iec_sbc' => 'iec_sbc',
            'databases' => 'databases',
            'news' => 'reports' // Map news folder to reports category for backward compatibility
        ];
        
        return $categoryMap[$categoryKey] ?? 'guidelines';
    }

    private function seedSampleDocuments()
    {
        echo "Seeding sample documents for missing categories...\n";
        
        $sampleDocuments = [
            // Plans & Strategic Documents
            [
                'title' => 'National Strategic Plan for HIV/AIDS 2023-2028',
                'description' => 'Comprehensive strategic plan outlining Tanzania\'s national response to HIV/AIDS for the period 2023-2028, including prevention, treatment, and care strategies.',
                'category' => 'plans_strategic',
                'file_type' => 'pdf',
                'file_url' => 'https://www.tacaids.go.tz/uploads/NSP_2023_2028.pdf',
                'published_date' => Carbon::create(2023, 6, 15),
                'author' => 'Tanzania Commission for AIDS (TACAIDS)',
                'version' => '1.0',
                'tags' => ['strategic plan', 'HIV', 'AIDS', 'national response', 'prevention', 'treatment'],
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Health Sector Strategic Plan IV (2015-2020)',
                'description' => 'Fourth Health Sector Strategic Plan providing framework for health sector development including HIV/AIDS program implementation.',
                'category' => 'plans_strategic',
                'file_type' => 'pdf',
                'file_url' => 'https://www.moh.go.tz/uploads/HSSP_IV.pdf',
                'published_date' => Carbon::create(2015, 7, 1),
                'author' => 'Ministry of Health, Community Development, Gender, Elderly and Children',
                'version' => '1.0',
                'tags' => ['health sector', 'strategic plan', 'development', 'framework'],
                'is_featured' => true,
                'sort_order' => 2,
            ],
            
            // Policy Documents
            [
                'title' => 'National HIV/AIDS Policy (2022)',
                'description' => 'Updated national policy framework for HIV/AIDS prevention, treatment, care and support in Tanzania.',
                'category' => 'policy',
                'file_type' => 'pdf',
                'file_url' => 'https://www.tacaids.go.tz/uploads/HIV_AIDS_Policy_2022.pdf',
                'published_date' => Carbon::create(2022, 3, 10),
                'author' => 'Ministry of Health, Community Development, Gender, Elderly and Children',
                'version' => '2.0',
                'tags' => ['policy', 'HIV', 'AIDS', 'prevention', 'treatment', 'care'],
                'is_featured' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'TB/HIV Collaborative Activities Policy',
                'description' => 'National policy guidelines for TB/HIV collaborative activities and integrated service delivery.',
                'category' => 'policy',
                'file_type' => 'pdf',
                'file_url' => 'https://www.moh.go.tz/uploads/TB_HIV_Policy.pdf',
                'published_date' => Carbon::create(2021, 9, 20),
                'author' => 'National Tuberculosis and Leprosy Programme',
                'version' => '1.0',
                'tags' => ['TB', 'HIV', 'collaborative', 'policy', 'integrated services'],
                'is_featured' => false,
                'sort_order' => 4,
            ],
            
            // Frameworks
            [
                'title' => 'National HIV Testing Services Framework',
                'description' => 'Comprehensive framework for implementing HIV testing services across Tanzania, including provider-initiated and client-initiated testing.',
                'category' => 'frameworks',
                'file_type' => 'pdf',
                'file_url' => 'https://www.moh.go.tz/uploads/HTS_Framework.pdf',
                'published_date' => Carbon::create(2023, 1, 15),
                'author' => 'NATIONAL AIDS, STIs AND HEPATITIS CONTROL PROGRAMME (NACP)',
                'version' => '2.0',
                'tags' => ['HIV testing', 'framework', 'provider-initiated', 'client-initiated'],
                'is_featured' => true,
                'sort_order' => 5,
            ],
            [
                'title' => 'Quality Improvement Framework for HIV Services',
                'description' => 'Framework for continuous quality improvement in HIV prevention, treatment, and care services.',
                'category' => 'frameworks',
                'file_type' => 'pdf',
                'file_url' => 'https://www.moh.go.tz/uploads/QI_Framework_HIV.pdf',
                'published_date' => Carbon::create(2022, 11, 30),
                'author' => 'NATIONAL AIDS, STIs AND HEPATITIS CONTROL PROGRAMME (NACP)',
                'version' => '1.0',
                'tags' => ['quality improvement', 'HIV services', 'framework', 'continuous improvement'],
                'is_featured' => false,
                'sort_order' => 6,
            ],
            
            // IEC/SBC Materials
            [
                'title' => 'HIV Prevention Communication Strategy',
                'description' => 'Strategic communication plan for HIV prevention campaigns and behavior change interventions.',
                'category' => 'iec_sbc',
                'file_type' => 'pdf',
                'file_url' => 'https://www.tacaids.go.tz/uploads/Communication_Strategy.pdf',
                'published_date' => Carbon::create(2023, 4, 20),
                'author' => 'Tanzania Commission for AIDS (TACAIDS)',
                'version' => '1.0',
                'tags' => ['communication', 'prevention', 'behavior change', 'strategy'],
                'is_featured' => true,
                'sort_order' => 7,
            ],
            [
                'title' => 'Youth HIV Prevention Materials Package',
                'description' => 'Comprehensive package of educational materials for HIV prevention among young people.',
                'category' => 'iec_sbc',
                'file_type' => 'pdf',
                'file_url' => 'https://www.tacaids.go.tz/uploads/Youth_Materials.pdf',
                'published_date' => Carbon::create(2023, 2, 14),
                'author' => 'NATIONAL AIDS, STIs AND HEPATITIS CONTROL PROGRAMME (NACP)',
                'version' => '1.0',
                'tags' => ['youth', 'prevention', 'education', 'materials'],
                'is_featured' => false,
                'sort_order' => 8,
            ],
        ];

        foreach ($sampleDocuments as $document) {
            Document::create($document);
            echo "✅ Created sample document: {$document['title']}\n";
        }
        
        echo "📊 Sample documents seeded successfully.\n";
    }
