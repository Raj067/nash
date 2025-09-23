import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { useState } from "react";
import {
    Heart,
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    AlertTriangle,
    Info,
    Shield,
    Phone,
    MapPin,
    Clock,
    User,
    Activity,
} from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Label } from "@/Components/ui/label";
import { Progress } from "@/Components/ui/progress";

interface Question {
    id: string;
    question: string;
    options: { value: string; label: string; risk: number }[];
    category: string;
}

export default function HivRiskAssessment() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);

    const questions: Question[] = [
        {
            id: "age",
            question: "What is your age group?",
            category: "Demographics",
            options: [
                { value: "under-18", label: "Under 18", risk: 1 },
                { value: "18-24", label: "18-24", risk: 3 },
                { value: "25-34", label: "25-34", risk: 2 },
                { value: "35-44", label: "35-44", risk: 2 },
                { value: "45-54", label: "45-54", risk: 1 },
                { value: "over-55", label: "Over 55", risk: 1 },
            ]
        },
        {
            id: "sexual-partners",
            question: "How many sexual partners have you had in the past 6 months?",
            category: "Sexual Behavior",
            options: [
                { value: "none", label: "None", risk: 0 },
                { value: "one", label: "One", risk: 1 },
                { value: "two-three", label: "2-3", risk: 2 },
                { value: "four-plus", label: "4 or more", risk: 4 },
            ]
        },
        {
            id: "condom-use",
            question: "How often do you use condoms during sexual activity?",
            category: "Sexual Behavior",
            options: [
                { value: "always", label: "Always", risk: 0 },
                { value: "most-times", label: "Most of the time", risk: 1 },
                { value: "sometimes", label: "Sometimes", risk: 3 },
                { value: "rarely", label: "Rarely", risk: 4 },
                { value: "never", label: "Never", risk: 5 },
            ]
        },
        {
            id: "partner-status",
            question: "Do you know the HIV status of your sexual partner(s)?",
            category: "Sexual Behavior",
            options: [
                { value: "all-negative", label: "Yes, all are HIV negative", risk: 0 },
                { value: "some-negative", label: "Some are HIV negative", risk: 2 },
                { value: "unknown", label: "I don't know", risk: 3 },
                { value: "some-positive", label: "Some are HIV positive", risk: 4 },
            ]
        },
        {
            id: "injection-drugs",
            question: "Have you used injection drugs in the past year?",
            category: "Risk Behaviors",
            options: [
                { value: "never", label: "Never", risk: 0 },
                { value: "once", label: "Once or twice", risk: 3 },
                { value: "occasionally", label: "Occasionally", risk: 5 },
                { value: "regularly", label: "Regularly", risk: 6 },
            ]
        },
        {
            id: "needle-sharing",
            question: "Have you shared needles or injection equipment?",
            category: "Risk Behaviors",
            options: [
                { value: "never", label: "Never used injection drugs", risk: 0 },
                { value: "never-shared", label: "Used but never shared", risk: 1 },
                { value: "once", label: "Shared once or twice", risk: 5 },
                { value: "multiple", label: "Shared multiple times", risk: 6 },
            ]
        },
        {
            id: "sti-history",
            question: "Have you been diagnosed with an STI in the past year?",
            category: "Medical History",
            options: [
                { value: "no", label: "No", risk: 0 },
                { value: "yes-treated", label: "Yes, but treated", risk: 2 },
                { value: "yes-untreated", label: "Yes, not fully treated", risk: 4 },
                { value: "unsure", label: "Unsure", risk: 2 },
            ]
        },
        {
            id: "blood-transfusion",
            question: "Have you received a blood transfusion in the past 5 years?",
            category: "Medical History",
            options: [
                { value: "no", label: "No", risk: 0 },
                { value: "yes-screened", label: "Yes, in a medical facility", risk: 1 },
                { value: "yes-unscreened", label: "Yes, unsure of screening", risk: 3 },
            ]
        },
        {
            id: "tattoo-piercing",
            question: "Have you gotten tattoos or piercings with unsterilized equipment?",
            category: "Risk Behaviors",
            options: [
                { value: "no", label: "No", risk: 0 },
                { value: "professional", label: "Yes, at professional facilities", risk: 0 },
                { value: "informal", label: "Yes, at informal/home settings", risk: 2 },
                { value: "unsure", label: "Unsure about sterilization", risk: 1 },
            ]
        },
        {
            id: "partner-risk",
            question: "Do any of your partners engage in high-risk behaviors?",
            category: "Partner Risk",
            options: [
                { value: "no-partners", label: "I have no sexual partners", risk: 0 },
                { value: "low-risk", label: "No, they are low risk", risk: 0 },
                { value: "unsure", label: "I'm not sure", risk: 2 },
                { value: "yes", label: "Yes, some engage in high-risk behaviors", risk: 4 },
            ]
        },
        {
            id: "alcohol-drugs",
            question: "How often do you use alcohol or drugs before sexual activity?",
            category: "Risk Behaviors",
            options: [
                { value: "never", label: "Never", risk: 0 },
                { value: "rarely", label: "Rarely", risk: 1 },
                { value: "sometimes", label: "Sometimes", risk: 2 },
                { value: "often", label: "Often", risk: 3 },
            ]
        },
        {
            id: "testing-history",
            question: "When was your last HIV test?",
            category: "Testing History",
            options: [
                { value: "never", label: "Never tested", risk: 2 },
                { value: "within-3months", label: "Within 3 months", risk: 0 },
                { value: "3-6months", label: "3-6 months ago", risk: 1 },
                { value: "6-12months", label: "6-12 months ago", risk: 1 },
                { value: "over-year", label: "Over a year ago", risk: 2 },
            ]
        },
        {
            id: "prep-use",
            question: "Are you currently taking PrEP (Pre-Exposure Prophylaxis)?",
            category: "Prevention",
            options: [
                { value: "yes-consistent", label: "Yes, consistently", risk: -2 },
                { value: "yes-inconsistent", label: "Yes, but inconsistently", risk: 0 },
                { value: "no", label: "No", risk: 1 },
                { value: "unsure", label: "I don't know what PrEP is", risk: 1 },
            ]
        },
        {
            id: "occupational-risk",
            question: "Do you work in healthcare or have occupational HIV exposure risk?",
            category: "Occupational Risk",
            options: [
                { value: "no", label: "No", risk: 0 },
                { value: "healthcare-safe", label: "Yes, healthcare with safety protocols", risk: 0 },
                { value: "healthcare-risk", label: "Yes, healthcare with exposure risk", risk: 1 },
                { value: "other-risk", label: "Yes, other high-risk occupation", risk: 1 },
            ]
        },
        {
            id: "symptoms",
            question: "Have you experienced any HIV-related symptoms recently?",
            category: "Symptoms",
            options: [
                { value: "none", label: "No symptoms", risk: 0 },
                { value: "mild", label: "Mild flu-like symptoms", risk: 2 },
                { value: "moderate", label: "Persistent symptoms", risk: 3 },
                { value: "severe", label: "Severe or multiple symptoms", risk: 4 },
            ]
        }
    ];

    const calculateRisk = () => {
        let totalRisk = 0;
        let maxPossibleRisk = 0;

        questions.forEach(question => {
            const answer = answers[question.id];
            if (answer) {
                const option = question.options.find(opt => opt.value === answer);
                if (option) {
                    totalRisk += option.risk;
                }
            }
            maxPossibleRisk += Math.max(...question.options.map(opt => opt.risk));
        });

        const riskPercentage = Math.max(0, Math.min(100, (totalRisk / maxPossibleRisk) * 100));
        return {
            score: totalRisk,
            percentage: riskPercentage,
            level: riskPercentage < 20 ? 'low' : riskPercentage < 50 ? 'moderate' : riskPercentage < 75 ? 'high' : 'very-high'
        };
    };

    const handleAnswer = (value: string) => {
        setAnswers(prev => ({
            ...prev,
            [questions[currentQuestion].id]: value
        }));
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setShowResults(true);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const currentAnswer = answers[questions[currentQuestion]?.id];

    if (showResults) {
        const risk = calculateRisk();
        
        const getRiskColor = (level: string) => {
            switch (level) {
                case 'low': return 'text-green-600 bg-green-50 border-green-200';
                case 'moderate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
                case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
                case 'very-high': return 'text-red-600 bg-red-50 border-red-200';
                default: return 'text-gray-600 bg-gray-50 border-gray-200';
            }
        };

        const getRiskIcon = (level: string) => {
            switch (level) {
                case 'low': return <CheckCircle className="h-8 w-8 text-green-600" />;
                case 'moderate': return <Info className="h-8 w-8 text-yellow-600" />;
                case 'high': return <AlertTriangle className="h-8 w-8 text-orange-600" />;
                case 'very-high': return <AlertTriangle className="h-8 w-8 text-red-600" />;
                default: return <Info className="h-8 w-8 text-gray-600" />;
            }
        };

        const getRiskTitle = (level: string) => {
            switch (level) {
                case 'low': return 'Low Risk';
                case 'moderate': return 'Moderate Risk';
                case 'high': return 'High Risk';
                case 'very-high': return 'Very High Risk';
                default: return 'Risk Assessment';
            }
        };

        const getRecommendations = (level: string) => {
            switch (level) {
                case 'low':
                    return [
                        "Continue practicing safe sex with consistent condom use",
                        "Get tested for HIV every 6-12 months",
                        "Stay informed about HIV prevention methods",
                        "Consider discussing PrEP with your healthcare provider if circumstances change"
                    ];
                case 'moderate':
                    return [
                        "Get tested for HIV every 3-6 months",
                        "Always use condoms during sexual activity",
                        "Discuss PrEP (Pre-Exposure Prophylaxis) with a healthcare provider",
                        "Get tested and treated for other STIs",
                        "Reduce number of sexual partners or ensure they are tested"
                    ];
                case 'high':
                    return [
                        "Get tested for HIV immediately and every 3 months",
                        "Strongly consider PrEP (Pre-Exposure Prophylaxis)",
                        "Always use condoms and practice safer sex",
                        "Get comprehensive STI testing and treatment",
                        "Avoid sharing needles or injection equipment",
                        "Seek counseling and support services"
                    ];
                case 'very-high':
                    return [
                        "Seek immediate HIV testing and medical consultation",
                        "Start PrEP (Pre-Exposure Prophylaxis) as soon as possible",
                        "Use condoms consistently and correctly",
                        "Get immediate treatment for any STIs",
                        "Stop sharing needles - seek harm reduction services",
                        "Consider intensive counseling and support programs",
                        "Regular follow-up with healthcare providers"
                    ];
                default:
                    return ["Consult with a healthcare provider for personalized advice"];
            }
        };

        return (
            <PublicLayout title="HIV Risk Assessment Results">
                <Head title="HIV Risk Assessment Results - NASHCOP" />
                
                <div className="min-h-screen bg-gray-50 py-8">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                    <Heart className="w-8 h-8 text-blue-600" />
                                </div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">Your HIV Risk Assessment Results</h1>
                                <p className="text-gray-600">Based on your responses, here's your personalized risk assessment</p>
                            </div>

                            {/* Risk Level Card */}
                            <Card className={`mb-8 border-2 ${getRiskColor(risk.level)}`}>
                                <CardHeader className="text-center">
                                    <div className="flex justify-center mb-4">
                                        {getRiskIcon(risk.level)}
                                    </div>
                                    <CardTitle className="text-2xl font-bold">
                                        {getRiskTitle(risk.level)}
                                    </CardTitle>
                                    <CardDescription className="text-lg">
                                        Risk Score: {Math.round(risk.percentage)}%
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                                        <div 
                                            className={`h-4 rounded-full transition-all duration-500 ${
                                                risk.level === 'low' ? 'bg-green-500' :
                                                risk.level === 'moderate' ? 'bg-yellow-500' :
                                                risk.level === 'high' ? 'bg-orange-500' : 'bg-red-500'
                                            }`}
                                            style={{ width: `${risk.percentage}%` }}
                                        ></div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Recommendations */}
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Shield className="h-6 w-6 mr-2 text-blue-600" />
                                        Personalized Recommendations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {getRecommendations(risk.level).map((recommendation, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{recommendation}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Important Notice */}
                            <Card className="mb-8 border-yellow-200 bg-yellow-50">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <Info className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
                                            <p className="text-yellow-700 mb-2">
                                                This assessment is for educational purposes only and does not replace professional medical advice. 
                                                Please consult with a qualified healthcare provider to discuss your results and get appropriate care.
                                            </p>
                                            <p className="text-yellow-700 font-medium">
                                                If you believe you may have been recently exposed to HIV, seek immediate medical attention.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Next Steps */}
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle>Next Steps & Resources</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-gray-800">Get Tested</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className="h-4 w-4 text-blue-600" />
                                                    <span className="text-gray-600">Find testing centers near you</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="h-4 w-4 text-blue-600" />
                                                    <span className="text-gray-600">Schedule regular testing</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-gray-800">Get Support</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <Phone className="h-4 w-4 text-blue-600" />
                                                    <span className="text-gray-600">HIV Hotline: 117</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <User className="h-4 w-4 text-blue-600" />
                                                    <span className="text-gray-600">Counseling services</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/tools/risk-assessment">
                                    <Button variant="outline" size="lg">
                                        <ArrowLeft className="mr-2 h-5 w-5" />
                                        Back to Assessment Tools
                                    </Button>
                                </a>
                                <a href="/contact">
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                        Find Healthcare Providers
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </PublicLayout>
        );
    }

    return (
        <PublicLayout title="HIV Risk Assessment">
            <Head title="HIV Risk Assessment - NASHCOP" />
            
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                                <Heart className="w-8 h-8 text-red-600" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">HIV Risk Assessment</h1>
                            <p className="text-gray-600">Answer honestly for an accurate risk evaluation</p>
                        </div>

                        {/* Progress */}
                        <Card className="mb-6">
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-600">
                                        Question {currentQuestion + 1} of {questions.length}
                                    </span>
                                    <span className="text-sm font-medium text-gray-600">
                                        {Math.round(progress)}% Complete
                                    </span>
                                </div>
                                <Progress value={progress} className="w-full" />
                            </CardContent>
                        </Card>

                        {/* Question Card */}
                        <Card className="mb-6">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                                        {questions[currentQuestion]?.category}
                                    </span>
                                    <Activity className="h-5 w-5 text-gray-400" />
                                </div>
                                <CardTitle className="text-xl">
                                    {questions[currentQuestion]?.question}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <RadioGroup 
                                    value={currentAnswer || ""} 
                                    onValueChange={handleAnswer}
                                    className="space-y-3"
                                >
                                    {questions[currentQuestion]?.options.map((option) => (
                                        <div key={option.value} className="flex items-center space-x-2">
                                            <RadioGroupItem value={option.value} id={option.value} />
                                            <Label 
                                                htmlFor={option.value} 
                                                className="flex-1 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                            >
                                                {option.label}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </CardContent>
                        </Card>

                        {/* Navigation */}
                        <div className="flex justify-between">
                            <Button 
                                variant="outline" 
                                onClick={prevQuestion}
                                disabled={currentQuestion === 0}
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Previous
                            </Button>
                            
                            <Button 
                                onClick={nextQuestion}
                                disabled={!currentAnswer}
                                className="bg-red-600 hover:bg-red-700"
                            >
                                {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        {/* Privacy Notice */}
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                            <div className="flex items-start space-x-3">
                                <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-blue-800 mb-1">Your Privacy is Protected</h4>
                                    <p className="text-blue-700 text-sm">
                                        This assessment is completely anonymous. No personal information is collected or stored.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
