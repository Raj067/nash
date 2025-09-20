<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faq;

class FaqController extends Controller
{
    /**
     * Get all active FAQs for homepage
     */
    public function index()
    {
        $faqs = Faq::active()
            ->ordered()
            ->get()
            ->map(function ($faq) {
                return [
                    'id' => $faq->id,
                    'question' => $faq->question,
                    'answer' => $faq->answer,
                    'category' => $faq->category,
                ];
            });

        return response()->json($faqs);
    }

    /**
     * Get FAQs by category
     */
    public function getByCategory($category)
    {
        $faqs = Faq::active()
            ->where('category', $category)
            ->ordered()
            ->get()
            ->map(function ($faq) {
                return [
                    'id' => $faq->id,
                    'question' => $faq->question,
                    'answer' => $faq->answer,
                    'category' => $faq->category,
                ];
            });

        return response()->json($faqs);
    }
}
