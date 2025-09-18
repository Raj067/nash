# Newsletter Subscription System

## Overview
A complete newsletter subscription system for the NACP website that allows users to subscribe to updates about HIV/AIDS programs and initiatives.

## Features
- ✅ Email validation and sanitization
- ✅ IP address tracking for analytics
- ✅ Duplicate subscription prevention
- ✅ Success/error message display
- ✅ Loading states and form validation
- ✅ Responsive design
- ✅ Database storage with proper indexing

## Database Schema

### `newsletter_subscribers` table
```sql
- id (bigint, primary key)
- email (string, unique)
- ip_address (string, nullable)
- is_active (boolean, default: true)
- subscribed_at (timestamp)
- unsubscribed_at (timestamp, nullable)
- created_at (timestamp)
- updated_at (timestamp)

Indexes:
- email, is_active (composite)
- subscribed_at
```

## API Endpoints

### Subscribe to Newsletter
```
POST /api/newsletter/subscribe
Content-Type: application/json

Body:
{
  "email": "user@example.com"
}

Success Response (201):
{
  "success": true,
  "message": "Thank you for subscribing to our newsletter!...",
  "data": {
    "email": "user@example.com",
    "subscribed_at": "2025-09-18 18:48:17"
  }
}

Error Responses:
- 422: Invalid email format
- 409: Email already subscribed
- 500: Server error
```

### Unsubscribe from Newsletter
```
POST /api/newsletter/unsubscribe
Content-Type: application/json

Body:
{
  "email": "user@example.com"
}

Success Response (200):
{
  "success": true,
  "message": "You have been successfully unsubscribed from our newsletter."
}

Error Responses:
- 422: Invalid email format
- 404: Email not found
- 500: Server error
```

## Frontend Implementation

### Location
The newsletter subscription form is located in the footer of every page (`NASHCOPFooter.tsx`).

### Features
- Real-time form validation
- Loading spinner during submission
- Success/error message display with icons
- Automatic form reset on successful subscription
- Disabled state during processing

### User Experience
1. User enters email address
2. Form validates email format
3. Loading spinner shows during API call
4. Success message displays with green styling
5. Error messages display with red styling
6. Form resets on successful subscription

## Model Methods

### `NewsletterSubscriber::subscribe($email, $ipAddress)`
Creates or updates a subscription record.

### `NewsletterSubscriber::unsubscribe()`
Marks a subscription as inactive.

### `NewsletterSubscriber::scopeActive($query)`
Query scope to get only active subscribers.

## Security Features
- CSRF token protection
- Email validation and sanitization
- IP address logging for security monitoring
- Duplicate prevention
- Error logging for debugging

## Usage Statistics
Access subscriber data:
```php
// Total active subscribers
$activeCount = NewsletterSubscriber::active()->count();

// Recent subscriptions
$recent = NewsletterSubscriber::active()
    ->where('subscribed_at', '>=', now()->subDays(30))
    ->get();

// All subscribers with their data
$subscribers = NewsletterSubscriber::active()->get();
```

## Testing
The system has been tested for:
- ✅ Valid email subscription
- ✅ Invalid email rejection
- ✅ Duplicate subscription prevention
- ✅ Database storage with IP tracking
- ✅ API response formats
- ✅ Frontend form functionality

## Maintenance
- Monitor subscriber growth
- Clean up inactive subscriptions periodically
- Review IP addresses for security patterns
- Export subscriber lists for email campaigns
