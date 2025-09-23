import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Calculator,
    Heart,
    Shield,
    AlertTriangle,
    ChevronRight,
    Users,
    Clock,
    CheckCircle,
    Info,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

export default function RiskAssessment() {
    const assessmentTools = [
        {
            id: "hiv-risk",
            title: "HIV Risk Assessment",
            description:
                "Evaluate your risk factors for HIV infection and get personalized recommendations",
            icon: Heart,
            color: "from-red-500 to-pink-500",
            bgColor: "bg-red-50",
            textColor: "text-red-700",
            borderColor: "border-red-200",
            href: "/tools/hiv-risk-assessment",
            duration: "5-7 minutes",
            questions: 15,
            features: [
                "Behavioral risk factors",
                "Medical history assessment",
                "Partner risk evaluation",
                "Prevention recommendations",
            ],
        },
        {
            id: "tb-risk",
            title: "TB Risk Assessment",
            description:
                "Assess your tuberculosis risk based on symptoms, exposure, and health conditions",
            icon: Heart,
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50",
            textColor: "text-blue-700",
            borderColor: "border-blue-200",
            href: "/tools/tb-risk-assessment",
            duration: "4-6 minutes",
            questions: 12,
            features: [
                "Symptom evaluation",
                "Exposure history",
                "Immune system status",
                "Screening recommendations",
            ],
        },
        {
            id: "prep-eligibility",
            title: "PrEP Eligibility Assessment",
            description:
                "Determine if Pre-Exposure Prophylaxis (PrEP) is right for you",
            icon: Shield,
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50",
            textColor: "text-green-700",
            borderColor: "border-green-200",
            href: "/tools/prep-assessment",
            duration: "6-8 minutes",
            questions: 18,
            features: [
                "Risk behavior analysis",
                "Medical contraindications",
                "Lifestyle assessment",
                "PrEP suitability score",
            ],
        },
        {
            id: "pep-eligibility",
            title: "PEP Eligibility Assessment",
            description:
                "Evaluate need for Post-Exposure Prophylaxis after potential HIV exposure",
            icon: AlertTriangle,
            color: "from-orange-500 to-red-500",
            bgColor: "bg-orange-50",
            textColor: "text-orange-700",
            borderColor: "border-orange-200",
            href: "/tools/pep-assessment",
            duration: "3-5 minutes",
            questions: 10,
            features: [
                "Exposure type evaluation",
                "Time since exposure",
                "Source risk assessment",
                "Urgency recommendations",
            ],
        },
    ];

    return (
        <PublicLayout title="Risk Assessment Tools">
            <Head title="Risk Assessment Tools - NASHCOP" />

            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(/images/about.png)` }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Calculator className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Risk Assessment Tools
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Interactive tools to help you understand
                                        your health risks and make informed
                                        decisions about HIV, TB, PrEP, and PEP.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Notice */}
                <section className="py-8 bg-yellow-50 border-b border-yellow-200">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-start space-x-4 p-6 bg-yellow-100 rounded-lg border border-yellow-300">
                                <Info className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                                        Important Medical Disclaimer
                                    </h3>
                                    <p className="text-yellow-700 mb-2">
                                        These assessment tools are for
                                        educational purposes only and do not
                                        replace professional medical advice.
                                        Results should be discussed with a
                                        qualified healthcare provider.
                                    </p>
                                    <p className="text-yellow-700 font-medium">
                                        For immediate medical concerns or
                                        emergencies, contact your healthcare
                                        provider or call the HIV Hotline:{" "}
                                        <strong>117</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Assessment Tools Grid */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                    Choose Your Assessment Tool
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Select the appropriate assessment tool based
                                    on your needs. Each tool provides
                                    personalized recommendations and guidance
                                    for next steps.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {assessmentTools.map((tool) => {
                                    const IconComponent = tool.icon;
                                    return (
                                        <Card
                                            key={tool.id}
                                            className={`${tool.borderColor} border-2 hover:shadow-xl transition-all duration-300 group`}
                                        >
                                            <CardHeader
                                                className={`${tool.bgColor} rounded-t-lg`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div
                                                        className={`p-3 bg-gradient-to-r ${tool.color} rounded-xl`}
                                                    >
                                                        <IconComponent className="h-8 w-8 text-white" />
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                                                            <Clock className="h-4 w-4" />
                                                            <span>
                                                                {tool.duration}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                            <Users className="h-4 w-4" />
                                                            <span>
                                                                {tool.questions}{" "}
                                                                questions
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <CardTitle className="text-2xl font-bold text-gray-800 mt-4">
                                                    {tool.title}
                                                </CardTitle>
                                                <CardDescription className="text-gray-600 text-base">
                                                    {tool.description}
                                                </CardDescription>
                                            </CardHeader>

                                            <CardContent className="p-6">
                                                <div className="space-y-4 mb-6">
                                                    <h4 className="font-semibold text-gray-800 mb-3">
                                                        Assessment includes:
                                                    </h4>
                                                    <div className="space-y-2">
                                                        {tool.features.map(
                                                            (
                                                                feature,
                                                                index
                                                            ) => (
                                                                <div
                                                                    key={index}
                                                                    className="flex items-center space-x-2"
                                                                >
                                                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                                                    <span className="text-gray-600">
                                                                        {
                                                                            feature
                                                                        }
                                                                    </span>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                <a href={tool.href}>
                                                    <Button
                                                        className={`w-full bg-gradient-to-r ${tool.color} hover:opacity-90 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                                                        size="lg"
                                                    >
                                                        Start Assessment
                                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                                    </Button>
                                                </a>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                    How Risk Assessment Works
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Our evidence-based assessment tools follow
                                    international guidelines to provide accurate
                                    risk evaluation.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                                        <span className="text-2xl font-bold text-blue-600">
                                            1
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        Answer Questions
                                    </h3>
                                    <p className="text-gray-600">
                                        Complete a series of confidential
                                        questions about your health, behavior,
                                        and risk factors.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                                        <span className="text-2xl font-bold text-green-600">
                                            2
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        Get Results
                                    </h3>
                                    <p className="text-gray-600">
                                        Receive an immediate risk assessment
                                        based on current medical guidelines and
                                        research.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                                        <span className="text-2xl font-bold text-purple-600">
                                            3
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        Take Action
                                    </h3>
                                    <p className="text-gray-600">
                                        Follow personalized recommendations and
                                        connect with healthcare providers for
                                        next steps.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy & Confidentiality */}
                <section className="py-16 bg-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <Shield className="h-8 w-8 text-blue-600 mr-4" />
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        Your Privacy is Protected
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                            Confidential & Anonymous
                                        </h3>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>
                                                    No personal information
                                                    required
                                                </span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>
                                                    Results are not stored or
                                                    tracked
                                                </span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>
                                                    Completely anonymous
                                                    assessment
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                            Secure & Private
                                        </h3>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>
                                                    Encrypted data transmission
                                                </span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>
                                                    No cookies or tracking
                                                </span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>GDPR compliant</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Need Professional Support?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Our assessment tools complement professional
                            healthcare. Connect with qualified providers for
                            comprehensive care.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Find Healthcare Providers
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </Button>
                            </a>
                            <a href="/services">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                                >
                                    Our Services
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </Button>
                            </a>
                        </div>

                        <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg inline-block">
                            <p className="text-blue-100 font-medium">
                                Emergency HIV Hotline:{" "}
                                <span className="text-white font-bold text-xl">
                                    117
                                </span>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
