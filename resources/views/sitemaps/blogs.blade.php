@php echo '<?xml version="1.0" encoding="UTF-8"?>'; @endphp
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
@foreach($blogs as $blog)
    <url>
        <loc>{{ $blog['loc'] }}</loc>
        <lastmod>{{ $blog['lastmod'] }}</lastmod>
        <changefreq>{{ $blog['changefreq'] }}</changefreq>
        <priority>{{ $blog['priority'] }}</priority>
    </url>
@endforeach
</urlset>
