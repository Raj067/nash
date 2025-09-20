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
        
        $this->seedActualDocuments();
    }
    
    private function seedActualDocuments()
    {
        $basePath = storage_path('app/public/documents/seeds');
        $categories = [
            'databases' => 'Databases',
            'guidelines' => 'Guidelines', 
            'manuals_sops' => 'Manuals, Forms, Tools and SOPs',
            'news' => 'Reports'
        ];
        
        $sortOrder = 1;
        
        foreach ($categories as $categoryKey => $categoryName) {
            $categoryPath = $basePath . '/' . $categoryKey;
            
            if (File::exists($categoryPath)) {
                $files = File::files($categoryPath);
                
                foreach ($files as $file) {
                    $fileName = $file->getFilename();
                    $fileSize = $file->getSize();
                    $extension = strtolower($file->getExtension());
                    
                    // Generate metadata from filename
                    $metadata = $this->generateMetadataFromFilename($fileName, $categoryKey);
                    
                    Document::create([
                        'title' => $metadata['title'],
                        'description' => $metadata['description'],
                        'category' => $this->mapCategory($categoryKey),
                        'file_type' => $extension,
                        'file_path' => '/documents/seeds/' . $categoryKey . '/' . $fileName,
                        'file_size' => $fileSize,
                        'published_date' => $metadata['published_date'],
                        'author' => $metadata['author'],
                        'version' => $metadata['version'],
                        'tags' => $metadata['tags'],
                        'is_featured' => $metadata['is_featured'],
                        'is_active' => true,
                        'sort_order' => $sortOrder++,
                    ]);
                }
            }
        }
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
            'Health Sector Strategic Plan', 'National AIDS Control Programme', 'Care and Treatment Center 2', 
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
            return 'National AIDS Control Programme (NACP)';
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
            'databases' => 'databases',
            'guidelines' => 'guidelines', 
            'manuals_sops' => 'manuals_sops',
            'news' => 'reports' // Map news folder to reports category
        ];
        
        return $categoryMap[$categoryKey] ?? 'guidelines';
    }
}
