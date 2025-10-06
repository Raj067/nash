<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SystemInfoController extends Controller
{
    /**
     * Get system information for debugging file uploads
     */
    public function getUploadInfo()
    {
        $uploadInfo = [
            'max_file_uploads' => ini_get('max_file_uploads'),
            'upload_max_filesize' => ini_get('upload_max_filesize'),
            'post_max_size' => ini_get('post_max_size'),
            'memory_limit' => ini_get('memory_limit'),
            'max_execution_time' => ini_get('max_execution_time'),
            'max_input_time' => ini_get('max_input_time'),
            'file_uploads' => ini_get('file_uploads') ? 'On' : 'Off',
            'upload_tmp_dir' => ini_get('upload_tmp_dir') ?: sys_get_temp_dir(),
            'temp_dir_writable' => is_writable(ini_get('upload_tmp_dir') ?: sys_get_temp_dir()),
            'storage_writable' => is_writable(storage_path('app/public')),
            'storage_exists' => is_dir(storage_path('app/public')),
            'public_link_exists' => is_link(public_path('storage')),
            'disk_free_space' => disk_free_space(storage_path()),
            'php_version' => PHP_VERSION,
        ];

        return response()->json($uploadInfo);
    }
}
