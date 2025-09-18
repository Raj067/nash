<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class NewsletterSubscriber extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'ip_address',
        'is_active',
        'subscribed_at',
        'unsubscribed_at',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'subscribed_at' => 'datetime',
        'unsubscribed_at' => 'datetime',
    ];

    /**
     * Scope to get only active subscribers
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Subscribe a new email
     */
    public static function subscribe(string $email, string $ipAddress = null): self
    {
        return self::updateOrCreate(
            ['email' => $email],
            [
                'ip_address' => $ipAddress,
                'is_active' => true,
                'subscribed_at' => now(),
                'unsubscribed_at' => null,
            ]
        );
    }

    /**
     * Unsubscribe an email
     */
    public function unsubscribe(): bool
    {
        return $this->update([
            'is_active' => false,
            'unsubscribed_at' => now(),
        ]);
    }
}
