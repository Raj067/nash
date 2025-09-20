<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Video;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $videos = [
            [
                'title' => 'HIV Prevention and Testing - Kuzuia na Kupima VVU',
                'description' => 'Comprehensive guide on HIV prevention methods and the importance of regular testing. Learn about PrEP, safe practices, and where to get tested.',
                'youtube_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                'youtube_id' => 'dQw4w9WgXcQ',
                'category' => 'prevention',
                'duration' => 480,
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Living with HIV - Maisha na VVU',
                'description' => 'Stories of hope and resilience from people living with HIV. Understanding treatment adherence and maintaining a healthy lifestyle.',
                'youtube_url' => 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
                'youtube_id' => 'oHg5SJYRHA0',
                'category' => 'awareness',
                'duration' => 360,
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'ARV Treatment Success - Mafanikio ya Tiba za ARV',
                'description' => 'Understanding antiretroviral therapy and how it helps people with HIV live normal, healthy lives. Treatment as prevention explained.',
                'youtube_url' => 'https://www.youtube.com/watch?v=9bZkp7q19f0',
                'youtube_id' => '9bZkp7q19f0',
                'category' => 'treatment',
                'duration' => 420,
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'Community Support Networks - Mtandao wa Msaada wa Jamii',
                'description' => 'How community support groups help in HIV prevention and care. Building strong support systems for affected individuals and families.',
                'youtube_url' => 'https://www.youtube.com/watch?v=pRpeEdMmmQ0',
                'youtube_id' => 'pRpeEdMmmQ0',
                'category' => 'community',
                'duration' => 300,
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 4,
            ],
            [
                'title' => 'Youth and HIV Education - Vijana na Elimu ya VVU',
                'description' => 'Educational content specifically designed for young people about HIV prevention, testing, and treatment options.',
                'youtube_url' => 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
                'youtube_id' => 'ScMzIvxBSi4',
                'category' => 'education',
                'duration' => 540,
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 5,
            ],
            [
                'title' => 'Healthcare Worker Training - Mafunzo ya Wahudumu wa Afya',
                'description' => 'Training materials for healthcare workers on HIV counseling, testing procedures, and patient care best practices.',
                'youtube_url' => 'https://www.youtube.com/watch?v=astISOttCQ0',
                'youtube_id' => 'astISOttCQ0',
                'category' => 'training',
                'duration' => 720,
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 6,
            ],
        ];

        foreach ($videos as $video) {
            Video::create($video);
        }
    }
}
