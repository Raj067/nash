<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class NewsletterSubscriberController extends Controller
{
    /**
     * Display a listing of the newsletter subscribers.
     */
    public function index(Request $request)
    {
        $query = NewsletterSubscriber::query();

        // Search functionality
        if ($request->filled('search')) {
            $search = $request->get('search');
            $query->where(function ($q) use ($search) {
                $q->where('email', 'like', "%{$search}%")
                  ->orWhere('ip_address', 'like', "%{$search}%");
            });
        }

        // Filter by status
        if ($request->filled('status')) {
            $status = $request->get('status') === 'active';
            $query->where('is_active', $status);
        }

        // Filter by subscription date range
        if ($request->filled('date_from')) {
            $query->whereDate('subscribed_at', '>=', $request->get('date_from'));
        }

        if ($request->filled('date_to')) {
            $query->whereDate('subscribed_at', '<=', $request->get('date_to'));
        }

        // Order by latest subscriptions first
        $subscribers = $query->orderBy('subscribed_at', 'desc')
                            ->orderBy('id', 'desc')
                            ->paginate(15)
                            ->withQueryString();

        // Get statistics
        $stats = [
            'total' => NewsletterSubscriber::count(),
            'active' => NewsletterSubscriber::active()->count(),
            'inactive' => NewsletterSubscriber::where('is_active', false)->count(),
            'today' => NewsletterSubscriber::whereDate('subscribed_at', today())->count(),
            'this_week' => NewsletterSubscriber::whereBetween('subscribed_at', [
                now()->startOfWeek(),
                now()->endOfWeek()
            ])->count(),
            'this_month' => NewsletterSubscriber::whereMonth('subscribed_at', now()->month)
                                             ->whereYear('subscribed_at', now()->year)
                                             ->count(),
        ];

        return Inertia::render('Admin/NewsletterSubscribers/Index', [
            'subscribers' => $subscribers,
            'stats' => $stats,
            'filters' => $request->only(['search', 'status', 'date_from', 'date_to']),
        ]);
    }

    /**
     * Show the form for creating a new newsletter subscriber.
     */
    public function create()
    {
        return Inertia::render('Admin/NewsletterSubscribers/Create');
    }

    /**
     * Store a newly created newsletter subscriber in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:newsletter_subscribers,email',
            'ip_address' => 'nullable|ip',
            'is_active' => 'boolean',
        ]);

        // Default values
        if (!isset($validated['is_active'])) {
            $validated['is_active'] = true;
        }

        if (!isset($validated['ip_address'])) {
            $validated['ip_address'] = $request->ip();
        }

        // Set subscription date
        $validated['subscribed_at'] = now();
        $validated['unsubscribed_at'] = null;

        NewsletterSubscriber::create($validated);

        return redirect()->route('admin.newsletter-subscribers.index')
                        ->with('success', 'Newsletter subscriber added successfully.');
    }

    /**
     * Display the specified newsletter subscriber.
     */
    public function show(NewsletterSubscriber $newsletterSubscriber)
    {
        return Inertia::render('Admin/NewsletterSubscribers/Show', [
            'subscriber' => $newsletterSubscriber,
        ]);
    }

    /**
     * Show the form for editing the specified newsletter subscriber.
     */
    public function edit(NewsletterSubscriber $newsletterSubscriber)
    {
        return Inertia::render('Admin/NewsletterSubscribers/Edit', [
            'subscriber' => $newsletterSubscriber,
        ]);
    }

    /**
     * Update the specified newsletter subscriber in storage.
     */
    public function update(Request $request, NewsletterSubscriber $newsletterSubscriber)
    {
        $validated = $request->validate([
            'email' => [
                'required',
                'email',
                Rule::unique('newsletter_subscribers', 'email')->ignore($newsletterSubscriber->id)
            ],
            'ip_address' => 'nullable|ip',
            'is_active' => 'boolean',
        ]);

        // Default values
        if (!isset($validated['is_active'])) {
            $validated['is_active'] = true;
        }

        // Handle subscription status change
        if ($validated['is_active'] && !$newsletterSubscriber->is_active) {
            // Reactivating subscription
            $validated['subscribed_at'] = now();
            $validated['unsubscribed_at'] = null;
        } elseif (!$validated['is_active'] && $newsletterSubscriber->is_active) {
            // Deactivating subscription
            $validated['unsubscribed_at'] = now();
        }

        $newsletterSubscriber->update($validated);

        return redirect()->route('admin.newsletter-subscribers.index')
                        ->with('success', 'Newsletter subscriber updated successfully.');
    }

    /**
     * Remove the specified newsletter subscriber from storage.
     */
    public function destroy(NewsletterSubscriber $newsletterSubscriber)
    {
        $newsletterSubscriber->delete();

        return redirect()->route('admin.newsletter-subscribers.index')
                        ->with('success', 'Newsletter subscriber deleted successfully.');
    }

    /**
     * Toggle the active status of the newsletter subscriber.
     */
    public function toggleStatus(NewsletterSubscriber $newsletterSubscriber)
    {
        $newStatus = !$newsletterSubscriber->is_active;
        
        $updateData = ['is_active' => $newStatus];
        
        if ($newStatus) {
            // Reactivating
            $updateData['subscribed_at'] = now();
            $updateData['unsubscribed_at'] = null;
        } else {
            // Deactivating
            $updateData['unsubscribed_at'] = now();
        }

        $newsletterSubscriber->update($updateData);

        $status = $newStatus ? 'activated' : 'deactivated';
        
        return redirect()->back()
                        ->with('success', "Newsletter subscriber {$status} successfully.");
    }

    /**
     * Bulk actions for newsletter subscribers.
     */
    public function bulkAction(Request $request)
    {
        $validated = $request->validate([
            'action' => 'required|in:activate,deactivate,delete',
            'ids' => 'required|array',
            'ids.*' => 'exists:newsletter_subscribers,id',
        ]);

        $subscribers = NewsletterSubscriber::whereIn('id', $validated['ids']);

        switch ($validated['action']) {
            case 'activate':
                $subscribers->update([
                    'is_active' => true,
                    'subscribed_at' => now(),
                    'unsubscribed_at' => null,
                ]);
                $message = 'Newsletter subscribers activated successfully.';
                break;
            case 'deactivate':
                $subscribers->update([
                    'is_active' => false,
                    'unsubscribed_at' => now(),
                ]);
                $message = 'Newsletter subscribers deactivated successfully.';
                break;
            case 'delete':
                $subscribers->delete();
                $message = 'Newsletter subscribers deleted successfully.';
                break;
        }

        return redirect()->back()->with('success', $message);
    }

    /**
     * Export newsletter subscribers to CSV.
     */
    public function export(Request $request)
    {
        $query = NewsletterSubscriber::query();

        // Apply same filters as index
        if ($request->filled('search')) {
            $search = $request->get('search');
            $query->where(function ($q) use ($search) {
                $q->where('email', 'like', "%{$search}%")
                  ->orWhere('ip_address', 'like', "%{$search}%");
            });
        }

        if ($request->filled('status')) {
            $status = $request->get('status') === 'active';
            $query->where('is_active', $status);
        }

        if ($request->filled('date_from')) {
            $query->whereDate('subscribed_at', '>=', $request->get('date_from'));
        }

        if ($request->filled('date_to')) {
            $query->whereDate('subscribed_at', '<=', $request->get('date_to'));
        }

        $subscribers = $query->orderBy('subscribed_at', 'desc')->get();

        $filename = 'newsletter_subscribers_' . now()->format('Y-m-d_H-i-s') . '.csv';

        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename=\"{$filename}\"",
        ];

        $callback = function() use ($subscribers) {
            $file = fopen('php://output', 'w');
            
            // CSV headers
            fputcsv($file, [
                'ID',
                'Email',
                'IP Address',
                'Status',
                'Subscribed At',
                'Unsubscribed At',
                'Created At',
                'Updated At'
            ]);

            // CSV data
            foreach ($subscribers as $subscriber) {
                fputcsv($file, [
                    $subscriber->id,
                    $subscriber->email,
                    $subscriber->ip_address,
                    $subscriber->is_active ? 'Active' : 'Inactive',
                    $subscriber->subscribed_at?->format('Y-m-d H:i:s'),
                    $subscriber->unsubscribed_at?->format('Y-m-d H:i:s'),
                    $subscriber->created_at->format('Y-m-d H:i:s'),
                    $subscriber->updated_at->format('Y-m-d H:i:s'),
                ]);
            }

            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }
}
