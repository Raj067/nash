import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/Components/ui/card";
import {
    MessageSquare,
    AlertCircle,
    ThumbsUp,
    Flag,
    User,
    Mail,
    Phone,
    Star,
    Send,
    CheckCircle,
    Loader2,
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";

export default function Feedback() {
    const [feedbackType, setFeedbackType] = useState("general");
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    // Form data state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.subject.trim() ||
            !formData.message.trim()
        ) {
            setMessage({
                type: "error",
                text: "Please fill in all required fields.",
            });
            return;
        }

        setIsLoading(true);
        setMessage(null);

        try {
            const response = await fetch("/api/feedback/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-CSRF-TOKEN":
                        document
                            .querySelector('meta[name="csrf-token"]')
                            ?.getAttribute("content") || "",
                },
                body: JSON.stringify({
                    type: feedbackType,
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    phone: formData.phone.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim(),
                    rating: rating > 0 ? rating : null,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setMessage({ type: "success", text: data.message });
                setSubmitted(true);
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
                setRating(0);
            } else {
                setMessage({ type: "error", text: data.message });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const feedbackTypes = [
        {
            id: "general",
            label: "General Feedback",
            icon: MessageSquare,
            color: "blue",
        },
        {
            id: "complaint",
            label: "Complaint",
            icon: AlertCircle,
            color: "red",
        },
        {
            id: "compliment",
            label: "Compliment",
            icon: ThumbsUp,
            color: "green",
        },
        {
            id: "suggestion",
            label: "Suggestion",
            icon: Flag,
            color: "purple",
        },
    ];

    return (
        <PublicLayout title="Feedback & Complaints">
            <Head title="Feedback & Complaints" />

            <div className="min-h-screen">
                {/* Hero Section with Background Image */}
                <div className="relative h-[500px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(/images/arvsImages.jpeg)`,
                        }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <MessageSquare className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Feedback & Complaints
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Your voice matters. Share your feedback to
                                    help us improve our HIV/AIDS services
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feedback Type Selection */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                                <MessageSquare className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Feedback Type Selection
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Select the category that best describes your
                                feedback
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg">
                                {/* Card Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                        What type of feedback do you have?
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {feedbackTypes.map((type) => (
                                            <button
                                                key={type.id}
                                                onClick={() =>
                                                    setFeedbackType(type.id)
                                                }
                                                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                                                    feedbackType === type.id
                                                        ? `border-blue-500 bg-blue-50`
                                                        : "border-gray-200 hover:border-gray-300"
                                                }`}
                                            >
                                                <type.icon
                                                    className={`w-8 h-8 mx-auto mb-2 ${
                                                        feedbackType === type.id
                                                            ? `text-blue-600`
                                                            : "text-gray-400"
                                                    }`}
                                                />
                                                <p
                                                    className={`text-sm font-medium ${
                                                        feedbackType === type.id
                                                            ? `text-blue-800`
                                                            : "text-gray-600"
                                                    }`}
                                                >
                                                    {type.label}
                                                </p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feedback Form */}
                <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                                <Send className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                                Share Your Feedback
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                {feedbackType === "complaint" &&
                                    "We take all complaints seriously and will investigate promptly"}
                                {feedbackType === "compliment" &&
                                    "We love hearing about positive experiences!"}
                                {feedbackType === "suggestion" &&
                                    "Your suggestions help us improve our services"}
                                {feedbackType === "general" &&
                                    "Tell us about your experience with NACP services"}
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg">
                                {/* Card Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        {/* Personal Information */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    <User className="w-4 h-4 inline mr-2" />
                                                    Full Name *
                                                </label>
                                                <Input
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    disabled={isLoading}
                                                    placeholder="Enter your full name"
                                                    className="bg-white/50 border-gray-300 disabled:opacity-50"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    <Mail className="w-4 h-4 inline mr-2" />
                                                    Email Address *
                                                </label>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    disabled={isLoading}
                                                    placeholder="Enter your email"
                                                    className="bg-white/50 border-gray-300 disabled:opacity-50"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                <Phone className="w-4 h-4 inline mr-2" />
                                                Phone Number (Optional)
                                            </label>
                                            <Input
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                disabled={isLoading}
                                                placeholder="Enter your phone number"
                                                className="bg-white/50 border-gray-300 disabled:opacity-50"
                                            />
                                        </div>

                                        {/* Rating Section */}
                                        {(feedbackType === "general" ||
                                            feedbackType === "compliment") && (
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Rate Your Experience
                                                </label>
                                                <div className="flex space-x-2">
                                                    {[1, 2, 3, 4, 5].map(
                                                        (star) => (
                                                            <button
                                                                key={star}
                                                                type="button"
                                                                onClick={() =>
                                                                    setRating(
                                                                        star
                                                                    )
                                                                }
                                                                className="focus:outline-none"
                                                            >
                                                                <Star
                                                                    className={`w-8 h-8 ${
                                                                        star <=
                                                                        rating
                                                                            ? "text-yellow-400 fill-current"
                                                                            : "text-gray-300"
                                                                    }`}
                                                                />
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Service Category */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Subject *
                                            </label>
                                            <Input
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isLoading}
                                                placeholder="Brief subject of your feedback"
                                                className="bg-white/50 border-gray-300 disabled:opacity-50"
                                            />
                                        </div>

                                        {/* Feedback Details */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Please provide details *
                                            </label>
                                            <Textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isLoading}
                                                rows={6}
                                                placeholder={
                                                    feedbackType === "complaint"
                                                        ? "Please describe your complaint in detail. Include dates, locations, and any relevant information..."
                                                        : feedbackType ===
                                                          "suggestion"
                                                        ? "What improvements or new services would you like to see? How would this benefit you and others?"
                                                        : "Share your experience, thoughts, or feedback..."
                                                }
                                                className="bg-white/50 border-gray-300 disabled:opacity-50"
                                            />
                                        </div>

                                        {/* Urgency Level for Complaints */}
                                        {feedbackType === "complaint" && (
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Urgency Level
                                                </label>
                                                <select className="w-full p-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                                                    <option value="low">
                                                        Low - General concern
                                                    </option>
                                                    <option value="medium">
                                                        Medium - Needs attention
                                                    </option>
                                                    <option value="high">
                                                        High - Urgent matter
                                                    </option>
                                                    <option value="critical">
                                                        Critical - Immediate
                                                        action required
                                                    </option>
                                                </select>
                                            </div>
                                        )}

                                        {/* Follow-up Preference */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                How would you like us to follow
                                                up?
                                            </label>
                                            <div className="space-y-2">
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="followup"
                                                        value="email"
                                                        className="mr-2"
                                                        defaultChecked
                                                    />
                                                    Email response
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="followup"
                                                        value="phone"
                                                        className="mr-2"
                                                    />
                                                    Phone call
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="followup"
                                                        value="none"
                                                        className="mr-2"
                                                    />
                                                    No follow-up needed
                                                </label>
                                            </div>
                                        </div>

                                        {/* Privacy Notice */}
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <p className="text-sm text-blue-800">
                                                <strong>Privacy Notice:</strong>{" "}
                                                Your feedback will be treated
                                                confidentially and used solely
                                                for improving our services. We
                                                may contact you for
                                                clarification or to provide
                                                updates on your feedback.
                                            </p>
                                        </div>

                                        {/* Success/Error Messages */}
                                        {message && (
                                            <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                                                message.type === 'success' 
                                                    ? 'bg-green-50 text-green-800 border border-green-200' 
                                                    : 'bg-red-50 text-red-800 border border-red-200'
                                            }`}>
                                                {message.type === 'success' ? (
                                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                                ) : (
                                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                                )}
                                                <span className="text-sm">{message.text}</span>
                                            </div>
                                        )}

                                        {/* Submit Button */}
                                        <div className="text-center">
                                            <Button
                                                type="submit"
                                                disabled={isLoading}
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isLoading ? (
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                ) : (
                                                    <Send className="w-4 h-4 mr-2" />
                                                )}
                                                {isLoading ? 'Submitting...' : 'Submit Feedback'}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Alternative Contact Methods */}
                <section className="py-20 bg-gradient-to-br from-green-50 via-white to-cyan-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full mb-6">
                                <Phone className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                                Other Ways to Reach Us
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Multiple contact options for your convenience
                            </p>
                        </div>

                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Phone className="w-8 h-8 text-white" />
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            Call Us
                                        </h4>
                                        <p className="text-gray-600 mb-1">
                                            +255-22-2120276
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Mon-Fri: 8AM-5PM
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Mail className="w-8 h-8 text-white" />
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            Email Us
                                        </h4>
                                        <p className="text-gray-600 mb-1">
                                            feedback@nacp.go.tz
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Response within 24hrs
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <MessageSquare className="w-8 h-8 text-white" />
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            WhatsApp
                                        </h4>
                                        <p className="text-gray-600 mb-1">
                                            +255-754-500-900
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Quick responses
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
