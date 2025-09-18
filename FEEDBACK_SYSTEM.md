# Feedback & Complaints System

## Overview
A comprehensive feedback and complaints management system for the NACP website that allows users to submit various types of feedback and enables administrators to track and manage responses.

## Features
- ✅ Multiple feedback types (General, Complaint, Compliment, Suggestion)
- ✅ Comprehensive form validation
- ✅ Star rating system (1-5 stars)
- ✅ IP address tracking for security
- ✅ Status management (Pending, In Progress, Resolved, Closed)
- ✅ Admin response system
- ✅ Real-time success/error messaging
- ✅ Loading states and form validation
- ✅ Responsive design
- ✅ Statistics and analytics

## Database Schema

### `feedback` table
```sql
- id (bigint, primary key)
- type (enum: 'general', 'complaint', 'compliment', 'suggestion')
- name (string)
- email (string)
- phone (string, nullable)
- subject (string)
- message (text)
- rating (integer, nullable, 1-5)
- ip_address (string, nullable)
- status (enum: 'pending', 'in_progress', 'resolved', 'closed', default: 'pending')
- admin_response (text, nullable)
- responded_at (timestamp, nullable)
- created_at (timestamp)
- updated_at (timestamp)

Indexes:
- type, status (composite)
- email
- created_at
- status
```

## API Endpoints

### Submit Feedback
```
POST /api/feedback/submit
Content-Type: application/json

Body:
{
  "type": "general|complaint|compliment|suggestion",
  "name": "User Name",
  "email": "user@example.com",
  "phone": "+255123456789", // optional
  "subject": "Feedback Subject",
  "message": "Detailed feedback message",
  "rating": 5 // optional, 1-5 stars
}

Success Response (201):
{
  "success": true,
  "message": "Thank you for your feedback. We value your input...",
  "data": {
    "id": 1,
    "type": "general",
    "status": "pending",
    "submitted_at": "2025-09-18 19:00:00"
  }
}

Error Responses:
- 422: Validation errors
- 500: Server error
```

### Get Feedback Statistics (Admin)
```
GET /api/feedback/statistics

Success Response (200):
{
  "success": true,
  "data": {
    "total": 150,
    "pending": 25,
    "resolved": 120,
    "complaints": 30,
    "compliments": 45,
    "suggestions": 35,
    "general": 40,
    "average_rating": "4.2000"
  }
}
```

### Get Feedback List (Admin)
```
GET /api/feedback?type=complaint&status=pending&per_page=15

Success Response (200):
{
  "success": true,
  "data": {
    "current_page": 1,
    "data": [...feedback items...],
    "total": 100,
    ...pagination data...
  }
}
```

### Update Feedback Status (Admin)
```
PATCH /api/feedback/{id}/status
Content-Type: application/json

Body:
{
  "status": "resolved",
  "admin_response": "Thank you for your feedback. We have addressed this issue."
}

Success Response (200):
{
  "success": true,
  "message": "Feedback status updated successfully.",
  "data": {...updated feedback...}
}
```

## Frontend Implementation

### Location
The feedback form is located at `/contact/feedback` (`Feedback.tsx`).

### Features
- **Feedback Type Selection**: Visual cards for different feedback types
- **Star Rating System**: Interactive 5-star rating for general feedback and compliments
- **Form Validation**: Real-time validation with error messages
- **Loading States**: Spinner and disabled states during submission
- **Success/Error Messages**: Clear feedback with appropriate icons
- **Responsive Design**: Works on all device sizes

### User Experience Flow
1. User selects feedback type (General, Complaint, Compliment, Suggestion)
2. Form adapts with appropriate placeholders and fields
3. User fills in personal information and feedback details
4. Optional star rating for applicable feedback types
5. Form validates input in real-time
6. Loading spinner shows during submission
7. Success message displays with type-specific messaging
8. Form resets on successful submission

## Model Methods

### `Feedback::getStatistics()`
Returns comprehensive statistics including counts by type, status, and average rating.

### `Feedback::markAsResolved($adminResponse)`
Marks feedback as resolved with optional admin response.

### `Feedback::markAsInProgress()`
Updates status to in-progress.

### Scopes
- `scopeByType($query, $type)` - Filter by feedback type
- `scopeByStatus($query, $status)` - Filter by status
- `scopePending($query)` - Get pending feedback
- `scopeResolved($query)` - Get resolved feedback

## Feedback Type Messaging

### Complaint
"Thank you for your complaint. We take all complaints seriously and will investigate this matter promptly. You can expect a response within 48 hours."

### Compliment
"Thank you for your kind words! We really appreciate your positive feedback and will share it with our team."

### Suggestion
"Thank you for your valuable suggestion. We will carefully review it and consider implementing improvements based on your input."

### General
"Thank you for your feedback. We value your input and will use it to improve our HIV/AIDS services and programs."

## Security Features
- CSRF token protection
- Input validation and sanitization
- IP address logging for security monitoring
- Email validation
- Rate limiting (can be implemented)
- XSS protection through proper escaping

## Admin Features
- View all feedback with filtering options
- Update feedback status
- Add admin responses
- View comprehensive statistics
- Export feedback data (can be implemented)

## Testing
The system has been tested for:
- ✅ Valid feedback submission (all types)
- ✅ Form validation and error handling
- ✅ Database storage with all fields
- ✅ API response formats
- ✅ Statistics calculation
- ✅ Status updates
- ✅ Frontend form functionality

## Usage Examples

### Get Feedback Statistics
```php
$stats = Feedback::getStatistics();
// Returns array with counts and averages
```

### Filter Feedback
```php
// Get pending complaints
$complaints = Feedback::byType('complaint')->pending()->get();

// Get resolved feedback from last 30 days
$recent = Feedback::resolved()
    ->where('created_at', '>=', now()->subDays(30))
    ->get();
```

### Update Feedback Status
```php
$feedback = Feedback::find(1);
$feedback->markAsResolved('Thank you for your feedback. Issue resolved.');
```

## Maintenance
- Monitor feedback volume and response times
- Review and categorize feedback regularly
- Export data for analysis
- Clean up old resolved feedback periodically
- Monitor for spam or abuse patterns
