<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class NewsletterController extends Controller
{
    /**
     * Subscribe to newsletter
     */
    public function subscribe(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Please provide a valid email address.',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $email = $request->input('email');
            $ipAddress = $request->ip();

            // Check if already subscribed and active
            $existingSubscriber = NewsletterSubscriber::where('email', $email)
                ->where('is_active', true)
                ->first();

            if ($existingSubscriber) {
                return response()->json([
                    'success' => false,
                    'message' => 'This email is already subscribed to our newsletter.'
                ], 409);
            }

            // Subscribe the email
            $subscriber = NewsletterSubscriber::subscribe($email, $ipAddress);

            return response()->json([
                'success' => true,
                'message' => 'Thank you for subscribing to our newsletter! You will receive updates about our HIV/AIDS programs and initiatives.',
                'data' => [
                    'email' => $subscriber->email,
                    'subscribed_at' => $subscriber->subscribed_at->format('Y-m-d H:i:s')
                ]
            ], 201);

        } catch (\Exception $e) {
            \Log::error('Newsletter subscription failed: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Sorry, we encountered an error while processing your subscription. Please try again later.'
            ], 500);
        }
    }

    /**
     * Unsubscribe from newsletter
     */
    public function unsubscribe(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Please provide a valid email address.',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $email = $request->input('email');
            
            $subscriber = NewsletterSubscriber::where('email', $email)
                ->where('is_active', true)
                ->first();

            if (!$subscriber) {
                return response()->json([
                    'success' => false,
                    'message' => 'This email is not subscribed to our newsletter.'
                ], 404);
            }

            $subscriber->unsubscribe();

            return response()->json([
                'success' => true,
                'message' => 'You have been successfully unsubscribed from our newsletter.'
            ], 200);

        } catch (\Exception $e) {
            \Log::error('Newsletter unsubscription failed: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Sorry, we encountered an error while processing your request. Please try again later.'
            ], 500);
        }
    }
}
