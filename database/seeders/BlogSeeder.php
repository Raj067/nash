<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Blog;
use Carbon\Carbon;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $blogs = [
            // News
            [
                'title' => 'NASHCOP Launches New Community Policing Initiative in Dar es Salaam',
                'slug' => 'nashcop-launches-new-community-policing-initiative-dar-es-salaam',
                'excerpt' => 'A comprehensive community policing program aimed at strengthening police-community relationships and reducing crime rates in urban areas.',
                'content' => '<p>The National AIDS Control Programme (NASHCOP) has officially launched a groundbreaking community policing initiative in Dar es Salaam, marking a significant milestone in Tanzania\'s approach to community safety and HIV/AIDS prevention.</p>

<p>This innovative program brings together law enforcement officers, community leaders, and health workers to create a unified approach to addressing both security concerns and public health challenges in urban communities.</p>

<h3>Key Features of the Initiative</h3>
<ul>
<li>Regular community meetings between police and residents</li>
<li>Joint patrols in high-risk areas</li>
<li>HIV/AIDS awareness campaigns integrated with security briefings</li>
<li>Youth engagement programs focusing on crime prevention</li>
<li>Women\'s safety initiatives in collaboration with local organizations</li>
</ul>

<p>The program is expected to reach over 50,000 residents across five districts in Dar es Salaam, with plans for expansion to other regions based on initial results.</p>

<p>"This initiative represents a paradigm shift in how we approach community safety and public health," said Dr. Sarah Mwalimu, NASHCOP Director. "By integrating HIV prevention with community policing, we\'re addressing the root causes of both crime and disease transmission."</p>',
                'category' => 'news',
                'featured_image' => '/images/blog/community-policing-launch.jpg',
                'author' => 'NASHCOP Communications Team',
                'published_date' => Carbon::now()->subDays(2),
                'tags' => ['community policing', 'Dar es Salaam', 'HIV prevention', 'public safety'],
                'is_featured' => true,
                'is_published' => true,
                'sort_order' => 1,
            ],
            
            // Press Release
            [
                'title' => 'NASHCOP Receives International Recognition for HIV Prevention Programs',
                'slug' => 'nashcop-receives-international-recognition-hiv-prevention',
                'excerpt' => 'The World Health Organization acknowledges Tanzania\'s innovative approach to community-based HIV prevention and control.',
                'content' => '<p>The National AIDS Control Programme (NASHCOP) has been recognized by the World Health Organization (WHO) for its outstanding contribution to HIV prevention and community health initiatives in East Africa.</p>

<p>The recognition comes following a comprehensive evaluation of NASHCOP\'s community policing and health integration programs, which have shown remarkable success in reducing HIV transmission rates while improving community safety.</p>

<h3>Award Highlights</h3>
<p>The WHO commended NASHCOP for:</p>
<ul>
<li>Innovative integration of health services with community policing</li>
<li>Significant reduction in new HIV infections (23% decrease over two years)</li>
<li>Improved community trust and engagement</li>
<li>Sustainable program design and implementation</li>
<li>Effective use of technology in health monitoring</li>
</ul>

<p>This recognition positions Tanzania as a leader in community-based health interventions and serves as a model for other African nations.</p>',
                'category' => 'press_releases',
                'featured_image' => '/images/blog/who-recognition.jpg',
                'author' => 'NASHCOP Press Office',
                'published_date' => Carbon::now()->subDays(5),
                'tags' => ['WHO recognition', 'HIV prevention', 'international award'],
                'is_featured' => true,
                'is_published' => true,
                'sort_order' => 2,
            ],
            
            // Speech
            [
                'title' => 'Director\'s Address: Building Stronger Communities Through Partnership',
                'slug' => 'directors-address-building-stronger-communities-partnership',
                'excerpt' => 'Key remarks from NASHCOP Director at the Annual Community Health Conference on the importance of collaborative approaches.',
                'content' => '<p>Delivered at the Annual Community Health Conference, Dodoma - March 15, 2024</p>

<p>Distinguished guests, community leaders, and fellow health workers,</p>

<p>Today, I stand before you to discuss one of the most critical challenges of our time: building resilient communities that can effectively address both health and security concerns.</p>

<h3>The Power of Partnership</h3>
<p>Over the past three years, NASHCOP has demonstrated that when health workers, law enforcement, and community members work together, we can achieve remarkable results. Our integrated approach has not only reduced HIV transmission rates but has also strengthened the social fabric of our communities.</p>

<h3>Key Achievements</h3>
<ul>
<li>Establishment of 150 community health and safety committees</li>
<li>Training of over 2,000 community volunteers</li>
<li>Implementation of mobile health clinics in remote areas</li>
<li>Development of youth leadership programs</li>
</ul>

<p>As we look to the future, we must continue to innovate and adapt our strategies to meet the evolving needs of our communities. The challenges we face require not just medical solutions, but comprehensive approaches that address social, economic, and security factors.</p>

<p>Together, we can build a Tanzania where every community is empowered to protect and promote the health and safety of its members.</p>

<p>Thank you.</p>',
                'category' => 'speeches',
                'featured_image' => '/images/blog/director-speech.jpg',
                'author' => 'Dr. Sarah Mwalimu, NASHCOP Director',
                'published_date' => Carbon::now()->subDays(10),
                'tags' => ['director speech', 'community health', 'partnership'],
                'is_featured' => false,
                'is_published' => true,
                'sort_order' => 3,
            ],
            
            // Events
            [
                'title' => 'Annual NASHCOP Community Health Fair 2024',
                'slug' => 'annual-nashcop-community-health-fair-2024',
                'excerpt' => 'Join us for a three-day health fair featuring free HIV testing, health education, and community engagement activities.',
                'content' => '<p>NASHCOP is proud to announce the Annual Community Health Fair 2024, scheduled for April 20-22, 2024, at the Uhuru Stadium in Dar es Salaam.</p>

<h3>Event Highlights</h3>
<p>This year\'s health fair will feature:</p>
<ul>
<li>Free HIV testing and counseling services</li>
<li>Health education workshops</li>
<li>Community policing demonstrations</li>
<li>Youth engagement activities</li>
<li>Women\'s health screenings</li>
<li>Mental health awareness sessions</li>
<li>Traditional and modern medicine exhibitions</li>
</ul>

<h3>Schedule of Activities</h3>
<p><strong>Day 1 (April 20):</strong> Opening ceremony and health screenings</p>
<p><strong>Day 2 (April 21):</strong> Educational workshops and community dialogues</p>
<p><strong>Day 3 (April 22):</strong> Youth activities and closing ceremony</p>

<h3>Registration Information</h3>
<p>The event is free and open to all community members. Pre-registration is encouraged but not required. Special transportation will be provided from major bus stations.</p>

<p>For more information, contact our community outreach team at 0755-123-456 or visit our registration desk at any NASHCOP office.</p>',
                'category' => 'events',
                'featured_image' => '/images/blog/health-fair-2024.jpg',
                'author' => 'NASHCOP Events Team',
                'published_date' => Carbon::now()->subDays(7),
                'tags' => ['health fair', 'community event', 'HIV testing', 'health education'],
                'is_featured' => true,
                'is_published' => true,
                'sort_order' => 4,
            ],
            
            // Newsletter
            [
                'title' => 'NASHCOP Monthly Newsletter - March 2024',
                'slug' => 'nashcop-monthly-newsletter-march-2024',
                'excerpt' => 'Monthly updates on program activities, success stories, and upcoming initiatives across Tanzania.',
                'content' => '<h2>NASHCOP Monthly Newsletter</h2>
<p><em>March 2024 Edition</em></p>

<h3>Program Updates</h3>
<p>This month has been marked by significant progress in our community policing and health integration initiatives. We are pleased to report the following achievements:</p>

<ul>
<li>Successful completion of training for 150 new community health volunteers</li>
<li>Launch of mobile health clinics in three new regions</li>
<li>Implementation of digital health monitoring systems</li>
<li>Establishment of five new community health centers</li>
</ul>

<h3>Success Stories</h3>
<p><strong>Mwanza Region:</strong> The community policing program in Mwanza has resulted in a 40% reduction in crime rates and a 30% increase in HIV testing uptake.</p>

<p><strong>Arusha Region:</strong> Local women\'s groups have successfully integrated health education into their regular meetings, reaching over 1,000 women monthly.</p>

<h3>Upcoming Events</h3>
<ul>
<li>April 20-22: Annual Community Health Fair, Dar es Salaam</li>
<li>May 5: Regional Coordinators Meeting, Dodoma</li>
<li>May 15: Youth Leadership Workshop, Mbeya</li>
</ul>

<h3>Health Tips</h3>
<p>As we enter the dry season, remember to:</p>
<ul>
<li>Maintain good hygiene practices</li>
<li>Stay hydrated</li>
<li>Attend regular health check-ups</li>
<li>Participate in community health activities</li>
</ul>',
                'category' => 'newsletter',
                'featured_image' => '/images/blog/newsletter-march-2024.jpg',
                'author' => 'NASHCOP Editorial Team',
                'published_date' => Carbon::now()->subDays(15),
                'tags' => ['newsletter', 'monthly update', 'program activities'],
                'is_featured' => false,
                'is_published' => true,
                'sort_order' => 5,
            ],
            
            // Photo Gallery
            [
                'title' => 'Community Engagement Activities - Photo Gallery',
                'slug' => 'community-engagement-activities-photo-gallery',
                'excerpt' => 'Visual highlights from recent community policing and health education activities across Tanzania.',
                'content' => '<p>Explore our latest collection of photos showcasing the vibrant community engagement activities conducted by NASHCOP teams across Tanzania.</p>

<h3>Featured Photo Collections</h3>

<h4>Community Health Workshops</h4>
<p>Recent workshops conducted in rural communities, focusing on HIV prevention, family planning, and general health education. These sessions have reached over 5,000 community members in the past month.</p>

<h4>Youth Engagement Programs</h4>
<p>Dynamic youth programs combining sports, education, and health awareness. Our youth ambassadors continue to make significant impact in their communities.</p>

<h4>Women\'s Empowerment Sessions</h4>
<p>Empowering women through health education, economic opportunities, and leadership development. These sessions have been particularly successful in rural areas.</p>

<h4>Community Policing Activities</h4>
<p>Joint activities between police officers and community members, including safety walks, community meetings, and collaborative problem-solving sessions.</p>

<h3>Impact Highlights</h3>
<ul>
<li>Over 10,000 community members reached through various activities</li>
<li>150 new community volunteers trained and deployed</li>
<li>25 new community health committees established</li>
<li>Significant improvement in police-community relations</li>
</ul>

<p>These photos represent the dedication and commitment of our teams and community partners in building healthier, safer communities across Tanzania.</p>',
                'category' => 'photo_gallery',
                'featured_image' => '/images/blog/community-activities-gallery.jpg',
                'author' => 'NASHCOP Photography Team',
                'published_date' => Carbon::now()->subDays(3),
                'tags' => ['photo gallery', 'community activities', 'engagement'],
                'is_featured' => false,
                'is_published' => true,
                'sort_order' => 6,
            ],
        ];

        foreach ($blogs as $blogData) {
            Blog::create($blogData);
        }
    }
}
