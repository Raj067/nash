#!/bin/bash

# Production Seeding Script for NASHCOP
# Run this script to seed all data in production

echo "🚀 Starting NASHCOP Production Seeding..."

# Check if we're in the right directory
if [ ! -f "artisan" ]; then
    echo "❌ Error: artisan file not found. Please run this script from the Laravel root directory."
    exit 1
fi

# Run migrations first (in case there are pending ones)
echo "📋 Running migrations..."
php artisan migrate --force

# Clear any existing cache
echo "🧹 Clearing cache..."
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

# Run all seeders
echo "🌱 Seeding database..."
php artisan db:seed --force

# Optimize for production
echo "⚡ Optimizing for production..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "✅ Production seeding completed successfully!"
echo ""
echo "📊 Seeded Data:"
echo "   - Test user (test@example.com)"
echo "   - Blog posts (news, press releases, speeches, newsletters)"
echo "   - Documents (guidelines, reports, manuals, databases)"
echo ""
echo "🔐 Default Login:"
echo "   Email: test@example.com"
echo "   Password: password"
echo ""
echo "🎉 Your NASHCOP website is ready!"
