<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    /**
     * Display a listing of the users.
     */
    public function index(Request $request)
    {
        $query = User::query();

        // Search functionality
        if ($request->filled('search')) {
            $search = $request->get('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%");
            });
        }

        // Filter by role
        if ($request->filled('role')) {
            $query->where('role', $request->get('role'));
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('status', $request->get('status'));
        }

        // Filter by verification status
        if ($request->filled('verified')) {
            if ($request->get('verified') === 'yes') {
                $query->whereNotNull('email_verified_at');
            } else {
                $query->whereNull('email_verified_at');
            }
        }

        // Filter by date range
        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->get('date_from'));
        }

        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->get('date_to'));
        }

        // Order by created_at desc
        $users = $query->orderBy('created_at', 'desc')
                      ->paginate(20)
                      ->withQueryString();

        // Get statistics
        $stats = User::getStatistics();

        // Get available roles and statuses
        $roles = User::getRoles();
        $statuses = User::getStatuses();

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
            'roles' => $roles,
            'statuses' => $statuses,
            'stats' => $stats,
            'filters' => $request->only(['search', 'role', 'status', 'verified', 'date_from', 'date_to']),
        ]);
    }

    /**
     * Show the form for creating a new user.
     */
    public function create()
    {
        $roles = User::getRoles();
        $statuses = User::getStatuses();

        return Inertia::render('Admin/Users/Create', [
            'roles' => $roles,
            'statuses' => $statuses,
        ]);
    }

    /**
     * Store a newly created user in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'password' => ['required', 'confirmed', Password::defaults()],
            'role' => 'required|string|in:' . implode(',', array_keys(User::getRoles())),
            'status' => 'required|string|in:' . implode(',', array_keys(User::getStatuses())),
            'phone' => 'nullable|string|max:20',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // 2MB
        ]);

        // Handle avatar upload
        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $avatarName = time() . '_' . $avatar->getClientOriginalName();
            $avatarPath = $avatar->storeAs('avatars', $avatarName, 'public');
            $validated['avatar'] = '/storage/' . $avatarPath;
        }

        // Hash password
        $validated['password'] = Hash::make($validated['password']);

        // Set email verification if user is created by admin
        if ($validated['status'] === 'active') {
            $validated['email_verified_at'] = now();
        }

        User::create($validated);

        return redirect()->route('admin.users.index')
                        ->with('success', 'User created successfully.');
    }

    /**
     * Display the specified user.
     */
    public function show(User $user)
    {
        return Inertia::render('Admin/Users/Show', [
            'user' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified user.
     */
    public function edit(User $user)
    {
        $roles = User::getRoles();
        $statuses = User::getStatuses();

        return Inertia::render('Admin/Users/Edit', [
            'user' => $user,
            'roles' => $roles,
            'statuses' => $statuses,
        ]);
    }

    /**
     * Update the specified user in storage.
     */
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'email', 'max:255', Rule::unique('users', 'email')->ignore($user->id)],
            'password' => ['nullable', 'confirmed', Password::defaults()],
            'role' => 'required|string|in:' . implode(',', array_keys(User::getRoles())),
            'status' => 'required|string|in:' . implode(',', array_keys(User::getStatuses())),
            'phone' => 'nullable|string|max:20',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // 2MB
        ]);

        // Handle avatar upload
        if ($request->hasFile('avatar')) {
            // Delete old avatar if it exists
            if ($user->avatar && str_starts_with($user->avatar, '/storage/')) {
                $oldAvatarPath = str_replace('/storage/', '', $user->avatar);
                if (Storage::disk('public')->exists($oldAvatarPath)) {
                    Storage::disk('public')->delete($oldAvatarPath);
                }
            }

            $avatar = $request->file('avatar');
            $avatarName = time() . '_' . $avatar->getClientOriginalName();
            $avatarPath = $avatar->storeAs('avatars', $avatarName, 'public');
            $validated['avatar'] = '/storage/' . $avatarPath;
        }

        // Hash password if provided
        if (!empty($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        } else {
            unset($validated['password']);
        }

        $user->update($validated);

        return redirect()->route('admin.users.index')
                        ->with('success', 'User updated successfully.');
    }

    /**
     * Remove the specified user from storage.
     */
    public function destroy(User $user)
    {
        // Prevent deleting the current user
        if ($user->id === auth()->id()) {
            return redirect()->back()
                            ->with('error', 'You cannot delete your own account.');
        }

        // Delete avatar if it exists
        if ($user->avatar && str_starts_with($user->avatar, '/storage/')) {
            $avatarPath = str_replace('/storage/', '', $user->avatar);
            if (Storage::disk('public')->exists($avatarPath)) {
                Storage::disk('public')->delete($avatarPath);
            }
        }

        $user->delete();

        return redirect()->route('admin.users.index')
                        ->with('success', 'User deleted successfully.');
    }

    /**
     * Update the status of the user.
     */
    public function updateStatus(Request $request, User $user)
    {
        $validated = $request->validate([
            'status' => 'required|string|in:' . implode(',', array_keys(User::getStatuses())),
        ]);

        $user->update($validated);

        $statusText = ucfirst($validated['status']);
        
        return redirect()->back()
                        ->with('success', "User status updated to {$statusText} successfully.");
    }

    /**
     * Update the role of the user.
     */
    public function updateRole(Request $request, User $user)
    {
        $validated = $request->validate([
            'role' => 'required|string|in:' . implode(',', array_keys(User::getRoles())),
        ]);

        $user->update($validated);

        $roleText = User::getRoles()[$validated['role']];
        
        return redirect()->back()
                        ->with('success', "User role updated to {$roleText} successfully.");
    }

    /**
     * Verify user email.
     */
    public function verifyEmail(User $user)
    {
        if ($user->email_verified_at) {
            return redirect()->back()
                            ->with('error', 'User email is already verified.');
        }

        $user->update(['email_verified_at' => now()]);

        return redirect()->back()
                        ->with('success', 'User email verified successfully.');
    }

    /**
     * Unverify user email.
     */
    public function unverifyEmail(User $user)
    {
        if (!$user->email_verified_at) {
            return redirect()->back()
                            ->with('error', 'User email is already unverified.');
        }

        $user->update(['email_verified_at' => null]);

        return redirect()->back()
                        ->with('success', 'User email unverified successfully.');
    }

    /**
     * Bulk actions for users.
     */
    public function bulkAction(Request $request)
    {
        $validated = $request->validate([
            'action' => 'required|in:activate,deactivate,suspend,verify_email,unverify_email,delete',
            'ids' => 'required|array',
            'ids.*' => 'exists:users,id',
        ]);

        $users = User::whereIn('id', $validated['ids']);

        // Prevent bulk actions on current user
        if (in_array(auth()->id(), $validated['ids'])) {
            return redirect()->back()
                            ->with('error', 'You cannot perform bulk actions on your own account.');
        }

        switch ($validated['action']) {
            case 'activate':
                $users->update(['status' => 'active']);
                $message = 'Users activated successfully.';
                break;
            case 'deactivate':
                $users->update(['status' => 'inactive']);
                $message = 'Users deactivated successfully.';
                break;
            case 'suspend':
                $users->update(['status' => 'suspended']);
                $message = 'Users suspended successfully.';
                break;
            case 'verify_email':
                $users->update(['email_verified_at' => now()]);
                $message = 'Users email verified successfully.';
                break;
            case 'unverify_email':
                $users->update(['email_verified_at' => null]);
                $message = 'Users email unverified successfully.';
                break;
            case 'delete':
                // Delete associated avatars
                foreach ($users->get() as $user) {
                    if ($user->avatar && str_starts_with($user->avatar, '/storage/')) {
                        $avatarPath = str_replace('/storage/', '', $user->avatar);
                        if (Storage::disk('public')->exists($avatarPath)) {
                            Storage::disk('public')->delete($avatarPath);
                        }
                    }
                }
                $users->delete();
                $message = 'Users deleted successfully.';
                break;
        }

        return redirect()->back()->with('success', $message);
    }

    /**
     * Export users data.
     */
    public function export(Request $request)
    {
        $query = User::query();

        // Apply same filters as index
        if ($request->filled('search')) {
            $search = $request->get('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%");
            });
        }

        if ($request->filled('role')) {
            $query->where('role', $request->get('role'));
        }

        if ($request->filled('status')) {
            $query->where('status', $request->get('status'));
        }

        if ($request->filled('verified')) {
            if ($request->get('verified') === 'yes') {
                $query->whereNotNull('email_verified_at');
            } else {
                $query->whereNull('email_verified_at');
            }
        }

        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->get('date_from'));
        }

        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->get('date_to'));
        }

        $users = $query->orderBy('created_at', 'desc')->get();

        $csvData = [];
        $csvData[] = [
            'ID',
            'Name',
            'Email',
            'Phone',
            'Role',
            'Status',
            'Email Verified',
            'Last Login',
            'Created At',
        ];

        foreach ($users as $user) {
            $csvData[] = [
                $user->id,
                $user->name,
                $user->email,
                $user->phone ?? '',
                $user->role_display_name,
                $user->status_display_name,
                $user->email_verified_at ? 'Yes' : 'No',
                $user->last_login_at ? $user->last_login_at->format('Y-m-d H:i:s') : 'Never',
                $user->created_at->format('Y-m-d H:i:s'),
            ];
        }

        $filename = 'users_export_' . now()->format('Y_m_d_H_i_s') . '.csv';
        
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
}
