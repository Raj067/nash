# Quick cPanel Deployment Checklist

## Pre-Upload Preparation
- [ ] Build frontend assets: `npm run build`
- [ ] Verify `public/build/` folder exists
- [ ] Test application locally
- [ ] Backup your local database

## Server Setup
- [ ] Ensure PHP 8.2+ is enabled in cPanel
- [ ] Create MySQL database in cPanel
- [ ] Create database user and assign to database
- [ ] Note database credentials

## File Upload
- [ ] Upload ALL project files to cPanel (not just public folder)
- [ ] Verify `.htaccess` file is in root directory
- [ ] Verify `public/.htaccess` file exists

## Configuration
- [ ] Copy `.env.example` to `.env`
- [ ] Update database credentials in `.env`
- [ ] Set `APP_ENV=production`
- [ ] Set `APP_DEBUG=false`
- [ ] Update `APP_URL` to your domain
- [ ] Generate and set `APP_KEY`
- [ ] Configure mail settings (if needed)

## Permissions
- [ ] Set `storage/` to 755 (recursive)
- [ ] Set `bootstrap/cache/` to 755
- [ ] Verify web server can write to storage directories

## Database
- [ ] Run migrations or import database
- [ ] Verify database connection works

## Final Testing
- [ ] Visit your website URL
- [ ] Test main functionality
- [ ] Check error logs if issues occur
- [ ] Verify SSL certificate is working

## Optional Optimizations (if SSH available)
- [ ] Run `composer install --optimize-autoloader --no-dev`
- [ ] Run `php artisan config:cache`
- [ ] Run `php artisan route:cache`
- [ ] Run `php artisan view:cache`

---
**Your project is ready for cPanel hosting!** 🚀
