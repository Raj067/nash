# Server Setup Instructions for File Uploads

The application accepts files up to 1 GB (1,024 MiB) each. The 2 GB request limit leaves room for multipart overhead and multiple attachments; combined uploads must fit within that request limit. Deploy the rebuilt `public/build` assets and apply the settings below to the active web PHP configuration.

## Common File Upload Issues and Solutions

### 1. PHP Configuration (php.ini)

Add or update these settings in your server's `php.ini` file:

```ini
; File upload settings
file_uploads = On
upload_max_filesize = 1024M
post_max_size = 2048M
max_file_uploads = 20
max_execution_time = 3600
max_input_time = 3600
memory_limit = 1024M

; Temporary directory (ensure it's writable)
upload_tmp_dir = /tmp
```

### 2. Directory Permissions

Ensure these directories exist and are writable (755 or 775):

```bash
# Create directories if they don't exist
mkdir -p storage/app/public/documents/uploads
mkdir -p public/storage

# Set proper permissions
chmod -R 755 storage/
chmod -R 755 public/storage/
chown -R www-data:www-data storage/
chown -R www-data:www-data public/storage/

# Create symbolic link if it doesn't exist
php artisan storage:link
```

### 3. Web Server Configuration

#### Apache (.htaccess)
Both `.htaccess` files include PHP settings for mod_php. For PHP-FPM/CGI, use `public/.user.ini` or the hosting PHP settings instead. Set Apache `LimitRequestBody 2147483648` in the virtual host/directory configuration if the server imposes a smaller request limit.

#### Nginx
Add to your server block:

```nginx
client_max_body_size 2048M;
client_body_timeout 3600s;
client_header_timeout 3600s;
```

### 4. Environment Variables

Add to your `.env` file:

```env
FILESYSTEM_DISK=public
```

### 5. Debugging Steps

1. **Check System Info**: Visit `/admin/system-info` to see current PHP settings
2. **Check Error Logs**: Look at PHP error logs and Laravel logs
3. **Test Upload**: Try uploading a small file first (< 1MB)
4. **Check Disk Space**: Ensure server has sufficient disk space

### 6. Common Error Solutions

#### "The file failed to upload"
- Check PHP upload limits
- Verify directory permissions
- Check disk space
- Ensure `file_uploads = On` in php.ini

#### "File size exceeds limit"
- Increase `upload_max_filesize` and `post_max_size`
- Update `.htaccess` PHP values
- Restart web server

#### "Permission denied"
- Fix directory ownership: `chown -R www-data:www-data storage/`
- Set proper permissions: `chmod -R 755 storage/`

#### "Temporary directory not writable"
- Check `upload_tmp_dir` in php.ini
- Ensure `/tmp` directory is writable
- Set proper permissions on temp directory

### 7. Testing Commands

```bash
# Check PHP configuration
php -i | grep -E "(upload_max_filesize|post_max_size|file_uploads|upload_tmp_dir)"

# Test file permissions
ls -la storage/app/public/
ls -la public/storage

# Check if symbolic link exists
ls -la public/storage

# Create symbolic link if missing
php artisan storage:link

# Clear cache
php artisan config:clear
php artisan cache:clear
```

### 8. Server-Specific Notes

#### Shared Hosting
- Some shared hosts don't allow `.htaccess` PHP directives
- Contact hosting provider to increase PHP limits
- For PHP-FPM/CGI, deploy `public/.user.ini` or set these values in cPanel MultiPHP INI Editor; upload limits cannot be raised with `ini_set()` at runtime.

#### VPS/Dedicated Server
- Edit `/etc/php/8.x/apache2/php.ini` (or appropriate path)
- Restart Apache: `sudo systemctl restart apache2`
- For PHP-FPM, restart the active PHP-FPM service and reload Nginx after configuration changes.
- Confirm `/admin/system-info` reports `upload_max_filesize` of `1024M` and `post_max_size` of `2048M`; CLI PHP settings may differ from web PHP.
- Match any reverse proxy or hosting gateway request limits and timeouts to these settings.

### 9. Security Considerations

- Validate file types and sizes
- Store uploads outside web root when possible
- Scan uploaded files for malware
- Use unique filenames to prevent conflicts
- Implement rate limiting for uploads

### 10. Monitoring

- Monitor disk usage: `df -h`
- Check upload directory size: `du -sh storage/app/public/documents/uploads/`
- Monitor error logs: `tail -f storage/logs/laravel.log`
