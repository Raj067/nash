import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { useState } from "react";
import {
    AlertTriangle,
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    Info,
    Shield,
    Phone,
    MapPin,
    Clock,
    User,
    Activity,
    Zap,
} from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Label } from "@/Components/ui/label";
import { Progress } from "@/Components/ui/progress";

interface Question {
    id: string;
    question: string;
    options: { value: string; label: string; urgency: number }[];
    category: string;
}

export default function PepAssessment() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);

    const questions: Question[] = [
        {
            id: "exposure-type",
            question: "What type of potential HIV exposure occurred?",
            category: "Exposure Details",
            options: [
                { value: "no-exposure", label: "No actual exposure occurred", urgency: 0 },
                { value: "sexual-protected", label: "Protected sexual contact (condom broke/slipped)", urgency: 3 },
                { value: "sexual-unprotected", label: "Unprotected sexual contact", urgency: 5 },
                { value: "needle-stick", label: "Needle stick or sharp object injury", urgency: 4 },
                { value: "blood-contact", label: "Direct blood or body fluid contact", urgency: 4 },
                { value: "shared-needles", label: "Shared injection equipment", urgency: 5 },
            ]
        },
        {
            id: "time-since-exposure",
            question: "How long ago did the potential exposure occur?",
            category: "Timing",
            options: [
                { value: "within-2-hours", label: "Within 2 hours", urgency: 6 },
                { value: "2-24-hours", label: "2-24 hours ago", urgency: 5 },
                { value: "1-3-days", label: "1-3 days ago", urgency: 4 },
                { value: "3-7-days", label: "3-7 days ago (still within 72 hours)", urgency: 2 },
                { value: "over-72-hours", label: "More than 72 hours ago", urgency: 0 },
            ]
        },
        {
            id: "source-hiv-status",
            question: "What is the HIV status of the source person (if known)?",
            category: "Source Risk",
            options: [
                { value: "negative", label: "HIV negative (recent test)", urgency: 0 },
                { value: "positive-undetectable", label: "HIV positive with undetectable viral load", urgency: 2 },
                { value: "positive-detectable", label: "HIV positive with detectable viral load", urgency: 5 },
                { value: "positive-unknown-viral-load", label: "HIV positive, viral load unknown", urgency: 4 },
                { value: "unknown-high-risk", label: "Unknown status, high-risk person", urgency: 4 },
                { value: "unknown-general", label: "Unknown status, general population", urgency: 3 },
            ]
        },
        {
            id: "your-hiv-status",
            question: "What is your current HIV status?",
            category: "Your Status",
            options: [
                { value: "negative-recent", label: "HIV negative (tested within 3 months)", urgency: 3 },
                { value: "negative-old", label: "HIV negative (tested more than 3 months ago)", urgency: 3 },
                { value: "unknown", label: "Unknown/never tested", urgency: 3 },
                { value: "positive", label: "HIV positive", urgency: 0 },
            ]
        },
        {
            id: "exposure-severity",
            question: "How would you describe the severity of the exposure?",
            category: "Exposure Severity",
            options: [
                { value: "minimal", label: "Minimal exposure (brief, superficial)", urgency: 1 },
                { value: "moderate", label: "Moderate exposure", urgency: 3 },
                { value: "high", label: "High-risk exposure (deep penetration, blood visible)", urgency: 5 },
                { value: "very-high", label: "Very high-risk exposure (multiple factors)", urgency: 6 },
            ]
        },
        {
            id: "symptoms",
            question: "Are you experiencing any symptoms that could be related to HIV?",
            category: "Symptoms",
            options: [
                { value: "none", label: "No symptoms", urgency: 0 },
                { value: "mild", label: "Mild flu-like symptoms", urgency: 2 },
                { value: "moderate", label: "Moderate symptoms (fever, fatigue)", urgency: 3 },
                { value: "severe", label: "Severe symptoms", urgency: 4 },
            ]
        },
        {
            id: "previous-pep",
            question: "Have you taken PEP before?",
            category: "Medical History",
            options: [
                { value: "never", label: "Never taken PEP", urgency: 0 },
                { value: "once-completed", label: "Yes, completed course successfully", urgency: 0 },
                { value: "multiple-times", label: "Yes, multiple times", urgency: 1 },
                { value: "incomplete", label: "Yes, but didn't complete the course", urgency: 1 },
            ]
        },
        {
            id: "medical-conditions",
            question: "Do you have any medical conditions that might affect PEP use?",
            category: "Medical History",
            options: [
                { value: "none", label: "No medical conditions", urgency: 0 },
                { value: "minor", label: "Minor conditions", urgency: 0 },
                { value: "kidney-liver", label: "Kidney or liver problems", urgency: -1 },
                { value: "serious", label: "Serious medical conditions", urgency: -1 },
            ]
        },
        {
            id: "current-medications",
            question: "Are you currently taking any medications?",
            category: "Medications",
            options: [
                { value: "none", label: "No medications", urgency: 0 },
                { value: "few", label: "A few medications", urgency: 0 },
                { value: "many", label: "Many medications", urgency: -1 },
                { value: "hiv-meds", label: "HIV medications", urgency: -2 },
            ]
        },
        {
            id: "pregnancy-status",
            question: "Are you pregnant or breastfeeding? (if applicable)",
            category: "Special Considerations",
            options: [
                { value: "not-applicable", label: "Not applicable", urgency: 0 },
                { value: "no", label: "No", urgency: 0 },
                { value: "pregnant", label: "Yes, pregnant", urgency: 1 },
                { value: "breastfeeding", label: "Yes, breastfeeding", urgency: 1 },
            ]
        }
    ];

    const calculateUrgency = () => {
        let totalUrgency = 0;
        let maxPossibleUrgency = 0;

        questions.forEach(question => {
            const answer = answers[question.id];
            if (answer) {
                const option = question.options.find(opt => opt.value === answer);
                if (option) {
                    totalUrgency += option.urgency;
                }
            }
            maxPossibleUrgency += Math.max(...question.options.map(opt => opt.urgency));
        });

        const urgencyPercentage = Math.max(0, Math.min(100, (totalUrgency / maxPossibleUrgency) * 100));
        return {
            score: totalUrgency,
            percentage: urgencyPercentage,
            level: urgencyPercentage < 20 ? 'no-pep' : 
                   urgencyPercentage < 40 ? 'low-priority' : 
                   urgencyPercentage < 70 ? 'moderate-priority' : 'high-priority'
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
        const urgency = calculateUrgency();
        
        const getUrgencyColor = (level: string) => {
            switch (level) {
                case 'high-priority': return 'text-red-600 bg-red-50 border-red-200';
                case 'moderate-priority': return 'text-orange-600 bg-orange-50 border-orange-200';
                case 'low-priority': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
                case 'no-pep': return 'text-green-600 bg-green-50 border-green-200';
                default: return 'text-gray-600 bg-gray-50 border-gray-200';
            }
        };

        const getUrgencyIcon = (level: string) => {
            switch (level) {
                case 'high-priority': return <AlertTriangle className="h-8 w-8 text-red-600" />;
                case 'moderate-priority': return <Clock className="h-8 w-8 text-orange-600" />;
                case 'low-priority': return <Info className="h-8 w-8 text-yellow-600" />;
                case 'no-pep': return <CheckCircle className="h-8 w-8 text-green-600" />;
                default: return <Info className="h-8 w-8 text-gray-600" />;
            }
        };

        const getUrgencyTitle = (level: string) => {
            switch (level) {
                case 'high-priority': return 'URGENT: Seek Immediate Medical Care';
                case 'moderate-priority': return 'Seek Medical Care Soon';
                case 'low-priority': return 'Consider Medical Consultation';
                case 'no-pep': return 'PEP May Not Be Necessary';
                default: return 'PEP Assessment Results';
            }
        };

        const getRecommendations = (level: string) => {
            switch (level) {
                case 'high-priority':
                    return [
                        "Seek emergency medical care IMMEDIATELY - within hours if possible",
                        "Go to the nearest hospital emergency department or HIV clinic",
                        "PEP is most effective when started within 2 hours of exposure",
                        "Bring information about the exposure and source person if available",
                        "Do not delay - time is critical for PEP effectiveness",
                        "Call ahead to inform them you need PEP evaluation"
                    ];
                case 'moderate-priority':
                    return [
                        "Seek medical care within 24-48 hours",
                        "Contact an HIV specialist or your healthcare provider",
                        "PEP can still be effective if started within 72 hours",
                        "Prepare details about the exposure for the consultation",
                        "Consider going to an HIV clinic or emergency department",
                        "Don't wait - effectiveness decreases with time"
                    ];
                case 'low-priority':
                    return [
                        "Consider consulting with a healthcare provider",
                        "Discuss the exposure and your concerns with a medical professional",
                        "PEP may still be considered depending on specific circumstances",
                        "Focus on HIV testing and future prevention strategies",
                        "Get tested for HIV and other STIs",
                        "Discuss ongoing prevention methods"
                    ];
                case 'no-pep':
                    return [
                        "PEP is likely not necessary based on your responses",
                        "Consider HIV testing for peace of mind",
                        "Focus on prevention strategies for the future",
                        "Use condoms and practice safer behaviors",
                        "Get regular HIV testing as appropriate",
                        "Consult a healthcare provider if you have concerns"
                    ];
                default:
                    return ["Consult with a healthcare provider for personalized advice"];
            }
        };

        return (
            <PublicLayout title="PEP Assessment Results">
                <Head title="PEP Assessment Results - NASHCOP" />
                
                <div className="min-h-screen bg-gray-50 py-8">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                                    <AlertTriangle className="w-8 h-8 text-orange-600" />
                                </div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">Your PEP Assessment Results</h1>
                                <p className="text-gray-600">Based on your responses, here's your PEP urgency evaluation</p>
                            </div>

                            {/* Urgency Level Card */}
                            <Card className={`mb-8 border-2 ${getUrgencyColor(urgency.level)}`}>
                                <CardHeader className="text-center">
                                    <div className="flex justify-center mb-4">
                                        {getUrgencyIcon(urgency.level)}
                                    </div>
                                    <CardTitle className="text-2xl font-bold">
                                        {getUrgencyTitle(urgency.level)}
                                    </CardTitle>
                                    <CardDescription className="text-lg">
                                        Urgency Score: {Math.round(urgency.percentage)}%
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                                        <div 
                                            className={`h-4 rounded-full transition-all duration-500 ${
                                                urgency.level === 'high-priority' ? 'bg-red-500' :
                                                urgency.level === 'moderate-priority' ? 'bg-orange-500' :
                                                urgency.level === 'low-priority' ? 'bg-yellow-500' : 'bg-green-500'
                                            }`}
                                            style={{ width: `${urgency.percentage}%` }}
                                        ></div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Emergency Notice for High Priority */}
                            {urgency.level === 'high-priority' && (
                                <Card className="mb-8 border-red-200 bg-red-50">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <Zap className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-red-800 mb-2">EMERGENCY: Time-Sensitive Situation</h3>
                                                <p className="text-red-700 mb-2">
                                                    Based on your responses, you may need PEP immediately. PEP is most effective when started within 2 hours of exposure and must be started within 72 hours.
                                                </p>
                                                <p className="text-red-700 font-medium">
                                                    Go to the nearest hospital emergency department or HIV clinic NOW.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            {/* Recommendations */}
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Shield className="h-6 w-6 mr-2 text-blue-600" />
                                        Immediate Action Steps
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {getRecommendations(urgency.level).map((recommendation, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{recommendation}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* About PEP */}
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Info className="h-6 w-6 mr-2 text-blue-600" />
                                        About PEP (Post-Exposure Prophylaxis)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-3">What is PEP?</h4>
                                            <p className="text-gray-600 mb-4">
                                                PEP is a 28-day course of HIV medicines taken after potential exposure to HIV. 
                                                It can prevent HIV infection if started quickly after exposure.
                                            </p>
                                            <ul className="space-y-2 text-gray-600">
                                                <li>• Must be started within 72 hours</li>
                                                <li>• Most effective within 2 hours</li>
                                                <li>• 28-day treatment course</li>
                                                <li>• Requires medical supervision</li>
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-3">Time is Critical</h4>
                                            <div className="space-y-3">
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="h-4 w-4 text-red-600" />
                                                    <span className="text-gray-600">0-2 hours: Most effective</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="h-4 w-4 text-orange-600" />
                                                    <span className="text-gray-600">2-24 hours: Still very effective</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="h-4 w-4 text-yellow-600" />
                                                    <span className="text-gray-600">24-72 hours: Less effective but still beneficial</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="h-4 w-4 text-gray-600" />
                                                    <span className="text-gray-600">After 72 hours: Not recommended</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Emergency Contacts */}
                            <Card className="mb-8 border-blue-200 bg-blue-50">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-blue-800">
                                        <Phone className="h-6 w-6 mr-2" />
                                        Emergency Contacts & Resources
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-blue-800">Immediate Help</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <Phone className="h-4 w-4 text-blue-600" />
                                                    <span className="text-blue-700">HIV Emergency Hotline: <strong>117</strong></span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className="h-4 w-4 text-blue-600" />
                                                    <span className="text-blue-700">Nearest Hospital Emergency Dept.</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-blue-800">HIV Clinics</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <User className="h-4 w-4 text-blue-600" />
                                                    <span className="text-blue-700">Find HIV specialists</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="h-4 w-4 text-blue-600" />
                                                    <span className="text-blue-700">24/7 PEP services</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Medical Disclaimer */}
                            <Card className="mb-8 border-yellow-200 bg-yellow-50">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-yellow-800 mb-2">Important Medical Disclaimer</h3>
                                            <p className="text-yellow-700 mb-2">
                                                This assessment is for guidance only and does not replace professional medical evaluation. 
                                                Only a qualified healthcare provider can determine if PEP is appropriate for your situation.
                                            </p>
                                            <p className="text-yellow-700 font-medium">
                                                If you believe you may have been exposed to HIV, seek immediate medical attention regardless of this assessment.
                                            </p>
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
                                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                                        Find Emergency Care
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
        <PublicLayout title="PEP Assessment">
            <Head title="PEP Assessment - NASHCOP" />
            
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                                <AlertTriangle className="w-8 h-8 text-orange-600" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">PEP Assessment</h1>
                            <p className="text-gray-600">Evaluate need for Post-Exposure Prophylaxis</p>
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
                                    <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
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
                                className="bg-orange-600 hover:bg-orange-700"
                            >
                                {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        {/* Privacy Notice */}
                        <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                            <div className="flex items-start space-x-3">
                                <Shield className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-orange-800 mb-1">Your Privacy is Protected</h4>
                                    <p className="text-orange-700 text-sm">
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
