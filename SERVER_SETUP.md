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

#### LiteSpeed homepage HTTP 500: asset preload headers

On 23 October 2026, the homepage returned LiteSpeed's HTTP 500 page while
Laravel could render the full homepage successfully through its HTTP kernel in
CLI. The normal homepage emitted a 5,165-byte `Link` header containing Vite
asset preload hints. Its Inertia JSON response worked, as did replaying the
same rendered HTML without Laravel's response headers. A temporary standalone
PHP probe reproduced HTTP 500 with a large `Link` header and HTTP 200 with a
smaller one, isolating the failure to the hosting response-header allowance.
The exact server-configured limit was not accessible to the hosting user.

`bootstrap/app.php` now uses
`AddLinkHeadersForPreloadedAssets::using(10)` to bound these optional hints.
Vite's HTML asset tags remain available for normal browser loading. This change
was also applied to the live server, reducing its Link header line to 889 bytes.
The homepage, About page, and Databases page returned HTTP 200, and the homepage
rendered successfully in Chrome. No document records or uploaded files were
changed. Temporary diagnostic endpoints were removed.

The original server bootstrap file was backed up outside the document root at
`/tmp/nacp-bootstrap-app-20261023.*` (a unique mktemp filename). Keep the middleware limit when
redeploying this project. No frontend rebuild is required for this PHP change.

#### DirectAdmin / LiteSpeed (nacp.go.tz)

On 22 October 2026, the live `/admin/system-info` endpoint confirmed
`upload_max_filesize=1024M`, `post_max_size=2048M`, and writable temporary and
storage directories. The domain's LiteSpeed error log recorded:

```text
Request body size: 564829362 is too big!
```

This rejects the approximately 539 MiB request before PHP or Laravel handles it.
Increasing the application's validation limit or PHP settings again will not fix
this web-server rejection. The exact configured LiteSpeed cap was not visible in
the hosting user's DirectAdmin controls.

The hosting administrator must set the effective LiteSpeed request-body limit
for `nacp.go.tz` to `2048M`, matching PHP's request limit. In LiteSpeed WebAdmin,
the setting is **Server Configuration > Tuning > Request/Response > Max Request
Body Size (bytes)** (`2147483648` bytes). Prefer a domain-specific configuration
where supported; LiteSpeed also documents this virtual-host directive:

```apache
<IfModule LiteSpeed>
    MaxReqBodySize 2048M
</IfModule>
```

Apply this in the server's persistent virtual-host configuration, rather than
adding it to the project's `.htaccess`. Validate the configuration, perform a
graceful LiteSpeed restart, and retry the original upload to verify the fix.
The server change and a successful retry have not yet been verified.

Hosting support request:

> Please raise the effective LiteSpeed Max Request Body Size for nacp.go.tz on
> vda7100.is.cc to 2048M and apply the change with a graceful restart. PHP already
> reports upload_max_filesize=1024M and post_max_size=2048M. The domain error log
> rejects our upload with "Request body size: 564829362 is too big!". Please
> check both the server-level cap and any virtual-host override, and preserve
> the change across DirectAdmin configuration rebuilds.

References: [LiteSpeed request-body tuning](https://www.litespeedtech.com/docs/webserver/config/tuning#maxReqBodySize)
and [virtual-host MaxReqBodySize](https://docs.litespeedtech.com/lsws/configuration/#maxreqbodysize).

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
