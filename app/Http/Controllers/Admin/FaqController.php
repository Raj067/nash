<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class FaqController extends Controller
{
    /**
     * Display a listing of the FAQs.
     */
    public function index(Request $request)
    {
        $query = Faq::query();

        // Search functionality
        if ($request->filled('search')) {
            $search = $request->get('search');
            $query->where(function ($q) use ($search) {
                $q->where('question', 'like', "%{$search}%")
                  ->orWhere('answer', 'like', "%{$search}%")
                  ->orWhere('category', 'like', "%{$search}%");
            });
        }

        // Filter by category
        if ($request->filled('category')) {
            $query->where('category', $request->get('category'));
        }

        // Filter by status
        if ($request->filled('status')) {
            $status = $request->get('status') === 'active';
            $query->where('is_active', $status);
        }

        // Order by sort_order and id
        $faqs = $query->orderBy('sort_order')
                     ->orderBy('id')
                     ->paginate(10)
                     ->withQueryString();

        // Get unique categories for filter dropdown
        $categories = Faq::distinct()
                         ->pluck('category')
                         ->filter()
                         ->sort()
                         ->values();

        return Inertia::render('Admin/Faqs/Index', [
            'faqs' => $faqs,
            'categories' => $categories,
            'filters' => $request->only(['search', 'category', 'status']),
        ]);
    }

    /**
     * Show the form for creating a new FAQ.
     */
    public function create()
    {
        // Get existing categories for dropdown
        $categories = Faq::distinct()
                         ->pluck('category')
                         ->filter()
                         ->sort()
                         ->values();

        return Inertia::render('Admin/Faqs/Create', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created FAQ in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'question' => 'required|string|max:500',
            'answer' => 'required|string',
            'category' => 'required|string|max:100',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        // If no sort_order provided, set it to the next available number
        if (!isset($validated['sort_order'])) {
            $validated['sort_order'] = Faq::max('sort_order') + 1;
        }

        // Default is_active to true if not provided
        if (!isset($validated['is_active'])) {
            $validated['is_active'] = true;
        }

        Faq::create($validated);

        return redirect()->route('admin.faqs.index')
                        ->with('success', 'FAQ created successfully.');
    }

    /**
     * Display the specified FAQ.
     */
    public function show(Faq $faq)
    {
        return Inertia::render('Admin/Faqs/Show', [
            'faq' => $faq,
        ]);
    }

    /**
     * Show the form for editing the specified FAQ.
     */
    public function edit(Faq $faq)
    {
        // Get existing categories for dropdown
        $categories = Faq::distinct()
                         ->pluck('category')
                         ->filter()
                         ->sort()
                         ->values();

        return Inertia::render('Admin/Faqs/Edit', [
            'faq' => $faq,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified FAQ in storage.
     */
    public function update(Request $request, Faq $faq)
    {
        $validated = $request->validate([
            'question' => 'required|string|max:500',
            'answer' => 'required|string',
            'category' => 'required|string|max:100',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        // Default is_active to true if not provided
        if (!isset($validated['is_active'])) {
            $validated['is_active'] = true;
        }

        $faq->update($validated);

        return redirect()->route('admin.faqs.index')
                        ->with('success', 'FAQ updated successfully.');
    }

    /**
     * Remove the specified FAQ from storage.
     */
    public function destroy(Faq $faq)
    {
        $faq->delete();

        return redirect()->route('admin.faqs.index')
                        ->with('success', 'FAQ deleted successfully.');
    }

    /**
     * Toggle the active status of the FAQ.
     */
    public function toggleStatus(Faq $faq)
    {
        $faq->update([
            'is_active' => !$faq->is_active
        ]);

        $status = $faq->is_active ? 'activated' : 'deactivated';
        
        return redirect()->back()
                        ->with('success', "FAQ {$status} successfully.");
    }

    /**
     * Bulk actions for FAQs.
     */
    public function bulkAction(Request $request)
    {
        $validated = $request->validate([
            'action' => 'required|in:activate,deactivate,delete',
            'ids' => 'required|array',
            'ids.*' => 'exists:faqs,id',
        ]);

        $faqs = Faq::whereIn('id', $validated['ids']);

        switch ($validated['action']) {
            case 'activate':
                $faqs->update(['is_active' => true]);
                $message = 'FAQs activated successfully.';
                break;
            case 'deactivate':
                $faqs->update(['is_active' => false]);
                $message = 'FAQs deactivated successfully.';
                break;
            case 'delete':
                $faqs->delete();
                $message = 'FAQs deleted successfully.';
                break;
        }

        return redirect()->back()->with('success', $message);
    }
}
