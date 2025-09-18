# cPanel Deployment Guide for Laravel Project

## Prerequisites

### 1. Server Requirements
- **PHP Version**: 8.2 or higher (Laravel 12 requirement)
- **MySQL**: 5.7+ or MariaDB 10.3+
- **Extensions**: BCMath, Ctype, Fileinfo, JSON, Mbstring, OpenSSL, PDO, Tokenizer, XML, cURL, GD, Zip

### 2. Check PHP Version in cPanel
1. Log into your cPanel
2. Go to "Select PHP Version" or "MultiPHP Manager"
3. Ensure PHP 8.2+ is selected
4. Enable required extensions listed above

## Deployment Steps

### Step 1: Upload Files
1. **Upload all project files** to your cPanel file manager (usually in `public_html` or your domain folder)
2. **Important**: Upload the ENTIRE Laravel project, not just the public folder

### Step 2: Set Up Database
1. Create a MySQL database in cPanel
2. Create a database user and assign it to the database
3. Note down:
   - Database name
   - Database username  
   - Database password
   - Database host (usually `localhost`)

### Step 3: Configure Environment File
1. Copy `.env.example` to `.env`
2. Update the following variables in `.env`:

```env
APP_NAME="Your App Name"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password

# Generate a new APP_KEY (see step 4)
APP_KEY=

# Update mail settings if needed
MAIL_MAILER=smtp
MAIL_HOST=your_smtp_host
MAIL_PORT=587
MAIL_USERNAME=your_email
MAIL_PASSWORD=your_email_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@yourdomain.com
MAIL_FROM_NAME="${APP_NAME}"
```

### Step 4: Generate Application Key
Since you can't run `php artisan key:generate` directly on most shared hosting:

**Option A: Generate locally**
```bash
php artisan key:generate --show
```
Copy the generated key to your `.env` file.

**Option B: Generate online**
Use a Laravel key generator online or use this format:
`base64:` followed by a 32-character random string

### Step 5: Set Directory Permissions
Set the following permissions via cPanel File Manager:

```
storage/ - 755 (recursively)
storage/logs/ - 755
storage/framework/ - 755
storage/framework/cache/ - 755
storage/framework/sessions/ - 755
storage/framework/views/ - 755
bootstrap/cache/ - 755
```

### Step 6: Install Dependencies (If Composer is Available)
If your hosting provider supports Composer:

```bash
composer install --optimize-autoloader --no-dev
```

If Composer is not available, upload the `vendor` folder from your local environment.

### Step 7: Run Database Migrations
If you have SSH access:
```bash
php artisan migrate --force
```

If no SSH access, you can:
1. Export your local database
2. Import it to your cPanel database
3. Or create tables manually

### Step 8: Optimize for Production
If you have SSH access, run:
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Step 9: Build Frontend Assets
Before uploading, make sure to build your assets locally:
```bash
npm run build
```

The built assets should be in `public/build/` directory.

## Security Checklist

✅ **Completed automatically with updated .htaccess:**
- Hide `.env` file
- Hide Laravel directories (app, config, etc.)
- Hide composer files
- Disable directory listing

✅ **Additional security steps:**
- Set `APP_DEBUG=false` in production
- Use strong database passwords
- Keep Laravel and dependencies updated
- Enable HTTPS/SSL certificate

## Troubleshooting

### Common Issues:

1. **500 Internal Server Error**
   - Check error logs in cPanel
   - Verify file permissions
   - Ensure PHP version is 8.2+

2. **Database Connection Error**
   - Verify database credentials in `.env`
   - Check if database user has proper permissions

3. **Missing CSS/JS Files**
   - Ensure `npm run build` was executed
   - Check if `public/build/` folder exists

4. **Storage Permission Errors**
   - Set storage directories to 755 permissions
   - Ensure web server can write to storage folders

### Getting Help
- Check cPanel error logs
- Contact your hosting provider for PHP version/extension issues
- Verify all file paths are correct

## Post-Deployment Verification

1. Visit your website URL
2. Check that all pages load correctly
3. Test database functionality
4. Verify file uploads work (if applicable)
5. Test email functionality (if configured)

---

**Note**: This guide assumes standard cPanel shared hosting. Some steps may vary depending on your hosting provider's specific setup.
