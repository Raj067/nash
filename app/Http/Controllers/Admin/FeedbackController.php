<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Feedback;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the feedback.
     */
    public function index(Request $request)
    {
        $query = Feedback::query();

        // Search functionality
        if ($request->filled('search')) {
            $search = $request->get('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('subject', 'like', "%{$search}%")
                  ->orWhere('message', 'like', "%{$search}%")
                  ->orWhere('admin_response', 'like', "%{$search}%");
            });
        }

        // Filter by type
        if ($request->filled('type')) {
            $query->where('type', $request->get('type'));
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('status', $request->get('status'));
        }

        // Filter by rating
        if ($request->filled('rating')) {
            $query->where('rating', $request->get('rating'));
        }

        // Filter by date range
        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->get('date_from'));
        }

        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->get('date_to'));
        }

        // Order by created_at desc
        $feedback = $query->orderBy('created_at', 'desc')
                         ->paginate(20)
                         ->withQueryString();

        // Get statistics
        $stats = Feedback::getStatistics();

        // Get available types and statuses
        $types = [
            'complaint' => 'Complaint',
            'compliment' => 'Compliment',
            'suggestion' => 'Suggestion',
            'general' => 'General Inquiry',
        ];

        $statuses = [
            'pending' => 'Pending',
            'in_progress' => 'In Progress',
            'resolved' => 'Resolved',
        ];

        return Inertia::render('Admin/Feedback/Index', [
            'feedback' => $feedback,
            'types' => $types,
            'statuses' => $statuses,
            'stats' => $stats,
            'filters' => $request->only(['search', 'type', 'status', 'rating', 'date_from', 'date_to']),
        ]);
    }

    /**
     * Show the form for creating a new feedback.
     */
    public function create()
    {
        $types = [
            'complaint' => 'Complaint',
            'compliment' => 'Compliment',
            'suggestion' => 'Suggestion',
            'general' => 'General Inquiry',
        ];

        return Inertia::render('Admin/Feedback/Create', [
            'types' => $types,
        ]);
    }

    /**
     * Store a newly created feedback in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'type' => 'required|string|in:complaint,compliment,suggestion,general',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'rating' => 'nullable|integer|min:1|max:5',
            'ip_address' => 'nullable|ip',
        ]);

        // Set defaults
        $validated['status'] = 'pending';
        if (!isset($validated['ip_address'])) {
            $validated['ip_address'] = $request->ip();
        }

        Feedback::create($validated);

        return redirect()->route('admin.feedback.index')
                        ->with('success', 'Feedback created successfully.');
    }

    /**
     * Display the specified feedback.
     */
    public function show(Feedback $feedback)
    {
        return Inertia::render('Admin/Feedback/Show', [
            'feedback' => $feedback,
        ]);
    }

    /**
     * Show the form for editing the specified feedback.
     */
    public function edit(Feedback $feedback)
    {
        $types = [
            'complaint' => 'Complaint',
            'compliment' => 'Compliment',
            'suggestion' => 'Suggestion',
            'general' => 'General Inquiry',
        ];

        $statuses = [
            'pending' => 'Pending',
            'in_progress' => 'In Progress',
            'resolved' => 'Resolved',
        ];

        return Inertia::render('Admin/Feedback/Edit', [
            'feedback' => $feedback,
            'types' => $types,
            'statuses' => $statuses,
        ]);
    }

    /**
     * Update the specified feedback in storage.
     */
    public function update(Request $request, Feedback $feedback)
    {
        $validated = $request->validate([
            'type' => 'required|string|in:complaint,compliment,suggestion,general',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'rating' => 'nullable|integer|min:1|max:5',
            'status' => 'required|string|in:pending,in_progress,resolved',
            'admin_response' => 'nullable|string',
        ]);

        // Set responded_at if status is resolved and admin_response is provided
        if ($validated['status'] === 'resolved' && !empty($validated['admin_response'])) {
            $validated['responded_at'] = now();
        } elseif ($validated['status'] !== 'resolved') {
            $validated['responded_at'] = null;
        }

        $feedback->update($validated);

        return redirect()->route('admin.feedback.index')
                        ->with('success', 'Feedback updated successfully.');
    }

    /**
     * Remove the specified feedback from storage.
     */
    public function destroy(Feedback $feedback)
    {
        $feedback->delete();

        return redirect()->route('admin.feedback.index')
                        ->with('success', 'Feedback deleted successfully.');
    }

    /**
     * Update the status of the feedback.
     */
    public function updateStatus(Request $request, Feedback $feedback)
    {
        $validated = $request->validate([
            'status' => 'required|string|in:pending,in_progress,resolved',
            'admin_response' => 'nullable|string',
        ]);

        if ($validated['status'] === 'resolved') {
            $feedback->markAsResolved($validated['admin_response'] ?? null);
        } elseif ($validated['status'] === 'in_progress') {
            $feedback->markAsInProgress();
        } else {
            $feedback->update([
                'status' => $validated['status'],
                'admin_response' => $validated['admin_response'] ?? null,
                'responded_at' => null,
            ]);
        }

        $statusText = ucfirst(str_replace('_', ' ', $validated['status']));
        
        return redirect()->back()
                        ->with('success', "Feedback marked as {$statusText} successfully.");
    }

    /**
     * Respond to feedback.
     */
    public function respond(Request $request, Feedback $feedback)
    {
        $validated = $request->validate([
            'admin_response' => 'required|string',
        ]);

        $feedback->markAsResolved($validated['admin_response']);

        return redirect()->back()
                        ->with('success', 'Response sent and feedback marked as resolved.');
    }

    /**
     * Bulk actions for feedback.
     */
    public function bulkAction(Request $request)
    {
        $validated = $request->validate([
            'action' => 'required|in:mark_pending,mark_in_progress,mark_resolved,delete',
            'ids' => 'required|array',
            'ids.*' => 'exists:feedback,id',
            'admin_response' => 'nullable|string',
        ]);

        $feedback = Feedback::whereIn('id', $validated['ids']);

        switch ($validated['action']) {
            case 'mark_pending':
                $feedback->update([
                    'status' => 'pending',
                    'admin_response' => null,
                    'responded_at' => null,
                ]);
                $message = 'Feedback marked as pending successfully.';
                break;
            case 'mark_in_progress':
                $feedback->update(['status' => 'in_progress']);
                $message = 'Feedback marked as in progress successfully.';
                break;
            case 'mark_resolved':
                $updateData = [
                    'status' => 'resolved',
                    'responded_at' => now(),
                ];
                if (!empty($validated['admin_response'])) {
                    $updateData['admin_response'] = $validated['admin_response'];
                }
                $feedback->update($updateData);
                $message = 'Feedback marked as resolved successfully.';
                break;
            case 'delete':
                $feedback->delete();
                $message = 'Feedback deleted successfully.';
                break;
        }

        return redirect()->back()->with('success', $message);
    }

    /**
     * Export feedback data.
     */
    public function export(Request $request)
    {
        $query = Feedback::query();

        // Apply same filters as index
        if ($request->filled('search')) {
            $search = $request->get('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('subject', 'like', "%{$search}%")
                  ->orWhere('message', 'like', "%{$search}%");
            });
        }

        if ($request->filled('type')) {
            $query->where('type', $request->get('type'));
        }

        if ($request->filled('status')) {
            $query->where('status', $request->get('status'));
        }

        if ($request->filled('rating')) {
            $query->where('rating', $request->get('rating'));
        }

        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->get('date_from'));
        }

        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->get('date_to'));
        }

        $feedback = $query->orderBy('created_at', 'desc')->get();

        $csvData = [];
        $csvData[] = [
            'ID',
            'Type',
            'Name',
            'Email',
            'Phone',
            'Subject',
            'Message',
            'Rating',
            'Status',
            'Admin Response',
            'IP Address',
            'Created At',
            'Responded At',
        ];

        foreach ($feedback as $item) {
            $csvData[] = [
                $item->id,
                ucfirst($item->type),
                $item->name,
                $item->email,
                $item->phone ?? '',
                $item->subject,
                $item->message,
                $item->rating ?? '',
                ucfirst(str_replace('_', ' ', $item->status)),
                $item->admin_response ?? '',
                $item->ip_address ?? '',
                $item->created_at->format('Y-m-d H:i:s'),
                $item->responded_at ? $item->responded_at->format('Y-m-d H:i:s') : '',
            ];
        }

        $filename = 'feedback_export_' . now()->format('Y_m_d_H_i_s') . '.csv';
        
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="' . $filename . '"',
        ];

        $callback = function() use ($csvData) {
            $file = fopen('php://output', 'w');
            foreach ($csvData as $row) {
                fputcsv($file, $row);
            }
            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }

    /**
     * Get feedback analytics.
     */
    public function analytics(Request $request)
    {
        $period = $request->get('period', '30'); // days

        $startDate = now()->subDays($period);

        $analytics = [
            'total_feedback' => Feedback::where('created_at', '>=', $startDate)->count(),
            'by_type' => Feedback::where('created_at', '>=', $startDate)
                                ->selectRaw('type, count(*) as count')
                                ->groupBy('type')
                                ->pluck('count', 'type'),
            'by_status' => Feedback::where('created_at', '>=', $startDate)
                                 ->selectRaw('status, count(*) as count')
                                 ->groupBy('status')
                                 ->pluck('count', 'status'),
            'by_rating' => Feedback::where('created_at', '>=', $startDate)
                                 ->whereNotNull('rating')
                                 ->selectRaw('rating, count(*) as count')
                                 ->groupBy('rating')
                                 ->orderBy('rating')
                                 ->pluck('count', 'rating'),
            'daily_feedback' => Feedback::where('created_at', '>=', $startDate)
                                      ->selectRaw('DATE(created_at) as date, count(*) as count')
                                      ->groupBy('date')
                                      ->orderBy('date')
                                      ->get(),
            'average_rating' => Feedback::where('created_at', '>=', $startDate)
                                      ->whereNotNull('rating')
                                      ->avg('rating'),
            'response_time' => Feedback::where('created_at', '>=', $startDate)
                                    ->whereNotNull('responded_at')
                                    ->selectRaw('AVG(TIMESTAMPDIFF(HOUR, created_at, responded_at)) as avg_hours')
                                    ->value('avg_hours'),
        ];

        return response()->json($analytics);
    }
}
