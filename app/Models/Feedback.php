<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Feedback extends Model
{
    use HasFactory;

    protected $table = 'feedback';

    protected $fillable = [
        'type',
        'name',
        'email',
        'phone',
        'subject',
        'message',
        'rating',
        'ip_address',
        'status',
        'admin_response',
        'responded_at',
    ];

    protected $casts = [
        'rating' => 'integer',
        'responded_at' => 'datetime',
    ];

    /**
     * Scope to get feedback by type
     */
    public function scopeByType($query, $type)
    {
        return $query->where('type', $type);
    }

    /**
     * Scope to get feedback by status
     */
    public function scopeByStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    /**
     * Scope to get pending feedback
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    /**
     * Scope to get resolved feedback
     */
    public function scopeResolved($query)
    {
        return $query->where('status', 'resolved');
    }

    /**
     * Mark feedback as resolved
     */
    public function markAsResolved($adminResponse = null): bool
    {
        return $this->update([
            'status' => 'resolved',
            'admin_response' => $adminResponse,
            'responded_at' => now(),
        ]);
    }

    /**
     * Mark feedback as in progress
     */
    public function markAsInProgress(): bool
    {
        return $this->update([
            'status' => 'in_progress',
        ]);
    }

    /**
     * Get feedback statistics
     */
    public static function getStatistics(): array
    {
        return [
            'total' => self::count(),
            'pending' => self::pending()->count(),
            'resolved' => self::resolved()->count(),
            'complaints' => self::byType('complaint')->count(),
            'compliments' => self::byType('compliment')->count(),
            'suggestions' => self::byType('suggestion')->count(),
            'general' => self::byType('general')->count(),
            'average_rating' => self::whereNotNull('rating')->avg('rating'),
        ];
    }
}
