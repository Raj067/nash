<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Feedback;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class FeedbackController extends Controller
{
    /**
     * Submit feedback
     */
    public function submit(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required|in:general,complaint,compliment,suggestion',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:2000',
            'rating' => 'nullable|integer|min:1|max:5',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Please check your input and try again.',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $feedback = Feedback::create([
                'type' => $request->input('type'),
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'phone' => $request->input('phone'),
                'subject' => $request->input('subject'),
                'message' => $request->input('message'),
                'rating' => $request->input('rating'),
                'ip_address' => $request->ip(),
                'status' => 'pending',
            ]);

            // Customize response message based on feedback type
            $messages = [
                'complaint' => 'Thank you for your complaint. We take all complaints seriously and will investigate this matter promptly. You can expect a response within 48 hours.',
                'compliment' => 'Thank you for your kind words! We really appreciate your positive feedback and will share it with our team.',
                'suggestion' => 'Thank you for your valuable suggestion. We will carefully review it and consider implementing improvements based on your input.',
                'general' => 'Thank you for your feedback. We value your input and will use it to improve our HIV/AIDS services and programs.',
            ];

            return response()->json([
                'success' => true,
                'message' => $messages[$feedback->type],
                'data' => [
                    'id' => $feedback->id,
                    'type' => $feedback->type,
                    'status' => $feedback->status,
                    'submitted_at' => $feedback->created_at->format('Y-m-d H:i:s')
                ]
            ], 201);

        } catch (\Exception $e) {
            \Log::error('Feedback submission failed: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Sorry, we encountered an error while processing your feedback. Please try again later.'
            ], 500);
        }
    }

    /**
     * Get feedback statistics (for admin use)
     */
    public function statistics(): JsonResponse
    {
        try {
            $stats = Feedback::getStatistics();
            
            return response()->json([
                'success' => true,
                'data' => $stats
            ], 200);

        } catch (\Exception $e) {
            \Log::error('Failed to get feedback statistics: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve statistics.'
            ], 500);
        }
    }

    /**
     * Get feedback list (for admin use)
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Feedback::query();

            // Filter by type if provided
            if ($request->has('type')) {
                $query->byType($request->input('type'));
            }

            // Filter by status if provided
            if ($request->has('status')) {
                $query->byStatus($request->input('status'));
            }

            // Order by creation date (newest first)
            $feedback = $query->orderBy('created_at', 'desc')
                            ->paginate($request->input('per_page', 15));

            return response()->json([
                'success' => true,
                'data' => $feedback
            ], 200);

        } catch (\Exception $e) {
            \Log::error('Failed to get feedback list: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve feedback.'
            ], 500);
        }
    }

    /**
     * Update feedback status (for admin use)
     */
    public function updateStatus(Request $request, $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'status' => 'required|in:pending,in_progress,resolved,closed',
            'admin_response' => 'nullable|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid input provided.',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $feedback = Feedback::findOrFail($id);
            
            $updateData = [
                'status' => $request->input('status'),
            ];

            if ($request->has('admin_response')) {
                $updateData['admin_response'] = $request->input('admin_response');
                $updateData['responded_at'] = now();
            }

            $feedback->update($updateData);

            return response()->json([
                'success' => true,
                'message' => 'Feedback status updated successfully.',
                'data' => $feedback->fresh()
            ], 200);

        } catch (\Exception $e) {
            \Log::error('Failed to update feedback status: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Failed to update feedback status.'
            ], 500);
        }
    }
}
