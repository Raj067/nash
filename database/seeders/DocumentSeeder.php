<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Document;
use Carbon\Carbon;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $documents = [
            // Plans & Strategic Documents
            [
                'title' => 'National HIV/AIDS Strategic Plan (2023-2028)',
                'description' => 'Comprehensive strategic plan outlining Tanzania\'s approach to HIV/AIDS prevention, treatment, and care for the period 2023-2028.',
                'category' => 'plans_strategic',
                'file_type' => 'pdf',
                'file_path' => '/documents/strategic/national-hiv-strategic-plan-2023-2028.pdf',
                'file_size' => 2048000, // 2MB
                'published_date' => Carbon::parse('2023-01-15'),
                'author' => 'Ministry of Health, Community Development, Gender, Elderly and Children',
                'version' => '1.0',
                'tags' => ['strategic plan', 'HIV/AIDS', 'national policy'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'NASHCOP Implementation Framework 2024',
                'description' => 'Implementation framework for the National AIDS Control Programme activities and interventions.',
                'category' => 'plans_strategic',
                'file_type' => 'pdf',
                'file_path' => '/documents/strategic/nashcop-implementation-framework-2024.pdf',
                'file_size' => 1536000, // 1.5MB
                'published_date' => Carbon::parse('2024-03-01'),
                'author' => 'NASHCOP Tanzania',
                'version' => '2.0',
                'tags' => ['implementation', 'framework', 'NASHCOP'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],

            // Policy Documents
            [
                'title' => 'National HIV Testing Services Policy',
                'description' => 'Policy guidelines for HIV testing services implementation across Tanzania.',
                'category' => 'policy',
                'file_type' => 'pdf',
                'file_path' => '/documents/policy/hiv-testing-services-policy.pdf',
                'file_size' => 1024000, // 1MB
                'published_date' => Carbon::parse('2023-06-15'),
                'author' => 'Ministry of Health',
                'version' => '3.1',
                'tags' => ['policy', 'HIV testing', 'healthcare'],
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'PrEP Implementation Policy Guidelines',
                'description' => 'Policy framework for Pre-Exposure Prophylaxis (PrEP) implementation in Tanzania.',
                'category' => 'policy',
                'file_type' => 'pdf',
                'file_path' => '/documents/policy/prep-implementation-policy.pdf',
                'file_size' => 768000, // 768KB
                'published_date' => Carbon::parse('2023-09-20'),
                'author' => 'NASHCOP Tanzania',
                'version' => '1.2',
                'tags' => ['PrEP', 'prevention', 'policy'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],

            // Guidelines
            [
                'title' => 'HIV Counseling and Testing Guidelines',
                'description' => 'Comprehensive guidelines for HIV counseling and testing procedures.',
                'category' => 'guidelines',
                'file_type' => 'pdf',
                'file_path' => '/documents/guidelines/hiv-counseling-testing-guidelines.pdf',
                'file_size' => 2560000, // 2.5MB
                'published_date' => Carbon::parse('2024-01-10'),
                'author' => 'Ministry of Health',
                'version' => '4.0',
                'tags' => ['guidelines', 'counseling', 'testing'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'ARV Treatment Guidelines for Adults',
                'description' => 'Clinical guidelines for antiretroviral treatment in adult patients.',
                'category' => 'guidelines',
                'file_type' => 'pdf',
                'file_path' => '/documents/guidelines/arv-treatment-guidelines-adults.pdf',
                'file_size' => 3072000, // 3MB
                'published_date' => Carbon::parse('2023-11-05'),
                'author' => 'National AIDS Control Programme',
                'version' => '5.2',
                'tags' => ['ARV', 'treatment', 'adults', 'clinical'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],

            // Reports
            [
                'title' => 'Tanzania HIV/AIDS Annual Report 2023',
                'description' => 'Comprehensive annual report on HIV/AIDS situation and response in Tanzania for 2023.',
                'category' => 'reports',
                'file_type' => 'pdf',
                'file_path' => '/documents/reports/tanzania-hiv-annual-report-2023.pdf',
                'file_size' => 4096000, // 4MB
                'published_date' => Carbon::parse('2024-02-28'),
                'author' => 'NASHCOP Tanzania',
                'version' => '1.0',
                'tags' => ['annual report', 'statistics', '2023'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Semi-Annual HIV Program Review - Q1-Q2 2024',
                'description' => 'Mid-year review of HIV program implementation and achievements.',
                'category' => 'reports',
                'file_type' => 'pdf',
                'file_path' => '/documents/reports/semi-annual-review-q1-q2-2024.pdf',
                'file_size' => 2048000, // 2MB
                'published_date' => Carbon::parse('2024-07-15'),
                'author' => 'NASHCOP Tanzania',
                'version' => '1.0',
                'tags' => ['semi-annual', 'review', '2024'],
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 2,
            ],

            // Manuals, Forms, Tools and SOPs
            [
                'title' => 'HIV Testing Services Standard Operating Procedures',
                'description' => 'Standard operating procedures for HIV testing services implementation.',
                'category' => 'manuals_sops',
                'file_type' => 'pdf',
                'file_path' => '/documents/sops/hiv-testing-services-sop.pdf',
                'file_size' => 1536000, // 1.5MB
                'published_date' => Carbon::parse('2023-08-12'),
                'author' => 'Ministry of Health',
                'version' => '2.1',
                'tags' => ['SOP', 'testing', 'procedures'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Patient Registration Forms and Tools',
                'description' => 'Collection of patient registration forms and data collection tools.',
                'category' => 'manuals_sops',
                'file_type' => 'zip',
                'file_path' => '/documents/tools/patient-registration-forms.zip',
                'file_size' => 512000, // 512KB
                'published_date' => Carbon::parse('2024-01-20'),
                'author' => 'NASHCOP Tanzania',
                'version' => '3.0',
                'tags' => ['forms', 'registration', 'tools'],
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 2,
            ],

            // Frameworks
            [
                'title' => 'HIV Prevention Framework for Key Populations',
                'description' => 'Framework for HIV prevention interventions targeting key populations.',
                'category' => 'frameworks',
                'file_type' => 'pdf',
                'file_path' => '/documents/frameworks/hiv-prevention-key-populations.pdf',
                'file_size' => 1792000, // 1.75MB
                'published_date' => Carbon::parse('2023-10-30'),
                'author' => 'NASHCOP Tanzania',
                'version' => '1.5',
                'tags' => ['framework', 'prevention', 'key populations'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],

            // IEC/SBC Materials
            [
                'title' => 'HIV Prevention Communication Materials Package',
                'description' => 'Information, Education and Communication materials for HIV prevention.',
                'category' => 'iec_sbc',
                'file_type' => 'zip',
                'file_path' => '/documents/iec/hiv-prevention-communication-package.zip',
                'file_size' => 10240000, // 10MB
                'published_date' => Carbon::parse('2024-04-05'),
                'author' => 'NASHCOP Communication Unit',
                'version' => '2.0',
                'tags' => ['IEC', 'communication', 'prevention'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],

            // Databases
            [
                'title' => 'National HIV Database User Manual',
                'description' => 'User manual for accessing and using the national HIV surveillance database.',
                'category' => 'databases',
                'file_type' => 'pdf',
                'file_path' => '/documents/databases/national-hiv-database-manual.pdf',
                'file_size' => 2048000, // 2MB
                'published_date' => Carbon::parse('2024-05-15'),
                'author' => 'NASHCOP IT Unit',
                'version' => '1.3',
                'tags' => ['database', 'manual', 'surveillance'],
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 1,
            ],
        ];

        foreach ($documents as $document) {
            Document::create($document);
        }
    }
}
