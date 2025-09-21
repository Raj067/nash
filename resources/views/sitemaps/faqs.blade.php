@php echo '<?xml version="1.0" encoding="UTF-8"?>'; @endphp
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
@foreach($faqs as $faq)
    <url>
        <loc>{{ $faq['loc'] }}</loc>
        <lastmod>{{ $faq['lastmod'] }}</lastmod>
        <changefreq>{{ $faq['changefreq'] }}</changefreq>
        <priority>{{ $faq['priority'] }}</priority>
    </url>
@endforeach
</urlset>
