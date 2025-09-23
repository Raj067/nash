import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { useState } from "react";
import {
    Shield,
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    AlertTriangle,
    Info,
    Phone,
    MapPin,
    Clock,
    User,
    Activity,
    Heart,
    Pill,
} from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Label } from "@/Components/ui/label";
import { Progress } from "@/Components/ui/progress";

interface Question {
    id: string;
    question: string;
    options: { value: string; label: string; score: number }[];
    category: string;
}

export default function PrepAssessment() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);

    const questions: Question[] = [
        {
            id: "hiv-status",
            question: "What is your current HIV status?",
            category: "HIV Status",
            options: [
                { value: "negative-recent", label: "HIV negative (tested within 3 months)", score: 5 },
                { value: "negative-old", label: "HIV negative (tested more than 3 months ago)", score: 3 },
                { value: "unknown", label: "Unknown/never tested", score: 1 },
                { value: "positive", label: "HIV positive", score: 0 },
            ]
        },
        {
            id: "sexual-partners",
            question: "How many sexual partners have you had in the past 6 months?",
            category: "Sexual Behavior",
            options: [
                { value: "none", label: "None", score: 0 },
                { value: "one-low-risk", label: "One (low risk partner)", score: 1 },
                { value: "one-unknown", label: "One (unknown risk)", score: 2 },
                { value: "multiple", label: "Multiple partners", score: 4 },
            ]
        },
        {
            id: "partner-hiv-positive",
            question: "Do you have a sexual partner who is HIV positive?",
            category: "Partner Risk",
            options: [
                { value: "no", label: "No", score: 0 },
                { value: "yes-undetectable", label: "Yes, but with undetectable viral load", score: 2 },
                { value: "yes-detectable", label: "Yes, with detectable/unknown viral load", score: 5 },
                { value: "unknown", label: "Don't know partner's status", score: 3 },
            ]
        },
        {
            id: "condom-use",
            question: "How consistently do you use condoms during sexual activity?",
            category: "Sexual Behavior",
            options: [
                { value: "always", label: "Always (100% of the time)", score: 0 },
                { value: "most-times", label: "Most of the time (75-99%)", score: 2 },
                { value: "sometimes", label: "Sometimes (25-74%)", score: 4 },
                { value: "rarely-never", label: "Rarely or never (0-24%)", score: 5 },
            ]
        },
        {
            id: "sti-history",
            question: "Have you been diagnosed with an STI in the past 6 months?",
            category: "Medical History",
            options: [
                { value: "no", label: "No", score: 0 },
                { value: "yes-treated", label: "Yes, but fully treated", score: 3 },
                { value: "yes-recent", label: "Yes, recently diagnosed/treating", score: 4 },
                { value: "recurrent", label: "Yes, recurrent STIs", score: 5 },
            ]
        },
        {
            id: "injection-drugs",
            question: "Do you inject drugs or share injection equipment?",
            category: "Risk Behaviors",
            options: [
                { value: "never", label: "Never", score: 0 },
                { value: "past-only", label: "In the past, but not recently", score: 1 },
                { value: "occasionally", label: "Occasionally", score: 4 },
                { value: "regularly", label: "Regularly", score: 5 },
            ]
        },
        {
            id: "pep-history",
            question: "Have you used PEP (Post-Exposure Prophylaxis) in the past year?",
            category: "Prevention History",
            options: [
                { value: "never", label: "Never used PEP", score: 0 },
                { value: "once", label: "Used PEP once", score: 3 },
                { value: "multiple", label: "Used PEP multiple times", score: 5 },
                { value: "recent", label: "Used PEP recently", score: 4 },
            ]
        },
        {
            id: "high-risk-activities",
            question: "Do you engage in high-risk sexual activities?",
            category: "Sexual Behavior",
            options: [
                { value: "no", label: "No high-risk activities", score: 0 },
                { value: "occasionally", label: "Occasionally", score: 2 },
                { value: "frequently", label: "Frequently", score: 4 },
                { value: "very-frequently", label: "Very frequently", score: 5 },
            ]
        },
        {
            id: "alcohol-drugs-sex",
            question: "How often do you use alcohol or drugs before/during sex?",
            category: "Risk Behaviors",
            options: [
                { value: "never", label: "Never", score: 0 },
                { value: "rarely", label: "Rarely", score: 1 },
                { value: "sometimes", label: "Sometimes", score: 2 },
                { value: "often", label: "Often", score: 3 },
            ]
        },
        {
            id: "medical-conditions",
            question: "Do you have any medical conditions that affect PrEP use?",
            category: "Medical History",
            options: [
                { value: "none", label: "No medical conditions", score: 5 },
                { value: "minor", label: "Minor conditions (well controlled)", score: 4 },
                { value: "kidney-mild", label: "Mild kidney problems", score: 2 },
                { value: "kidney-severe", label: "Severe kidney/liver problems", score: 0 },
            ]
        },
        {
            id: "medication-adherence",
            question: "How good are you at taking daily medications?",
            category: "Adherence Assessment",
            options: [
                { value: "excellent", label: "Excellent - rarely miss doses", score: 5 },
                { value: "good", label: "Good - occasionally miss doses", score: 4 },
                { value: "fair", label: "Fair - sometimes forget", score: 2 },
                { value: "poor", label: "Poor - often forget medications", score: 0 },
            ]
        },
        {
            id: "motivation-level",
            question: "How motivated are you to take daily PrEP?",
            category: "Motivation",
            options: [
                { value: "very-high", label: "Very highly motivated", score: 5 },
                { value: "high", label: "Highly motivated", score: 4 },
                { value: "moderate", label: "Moderately motivated", score: 2 },
                { value: "low", label: "Low motivation", score: 0 },
            ]
        },
        {
            id: "healthcare-access",
            question: "Do you have access to regular healthcare and HIV testing?",
            category: "Healthcare Access",
            options: [
                { value: "excellent", label: "Excellent access", score: 5 },
                { value: "good", label: "Good access", score: 4 },
                { value: "limited", label: "Limited access", score: 2 },
                { value: "poor", label: "Poor access", score: 0 },
            ]
        },
        {
            id: "relationship-status",
            question: "What is your relationship status?",
            category: "Relationship Factors",
            options: [
                { value: "single-celibate", label: "Single, not sexually active", score: 0 },
                { value: "monogamous-negative", label: "Monogamous with HIV-negative partner", score: 1 },
                { value: "monogamous-unknown", label: "Monogamous with unknown status partner", score: 2 },
                { value: "non-monogamous", label: "Non-monogamous or multiple partners", score: 4 },
            ]
        },
        {
            id: "future-plans",
            question: "Are you planning to continue high-risk behaviors?",
            category: "Future Risk",
            options: [
                { value: "reducing", label: "Planning to reduce risk behaviors", score: 1 },
                { value: "maintaining", label: "Will maintain current behaviors", score: 3 },
                { value: "increasing", label: "May increase risk behaviors", score: 4 },
                { value: "uncertain", label: "Uncertain about future", score: 2 },
            ]
        },
        {
            id: "support-system",
            question: "Do you have support for taking PrEP?",
            category: "Support System",
            options: [
                { value: "strong", label: "Strong support from family/friends", score: 3 },
                { value: "moderate", label: "Some support", score: 2 },
                { value: "limited", label: "Limited support", score: 1 },
                { value: "none", label: "No support/stigma concerns", score: 0 },
            ]
        },
        {
            id: "cost-concerns",
            question: "Are you able to afford PrEP and related healthcare costs?",
            category: "Financial Factors",
            options: [
                { value: "no-problem", label: "No financial concerns", score: 3 },
                { value: "manageable", label: "Manageable with some effort", score: 2 },
                { value: "difficult", label: "Would be financially difficult", score: 1 },
                { value: "impossible", label: "Cannot afford", score: 0 },
            ]
        },
        {
            id: "side-effects-concern",
            question: "How concerned are you about potential PrEP side effects?",
            category: "Concerns",
            options: [
                { value: "not-concerned", label: "Not concerned", score: 3 },
                { value: "slightly", label: "Slightly concerned", score: 2 },
                { value: "moderately", label: "Moderately concerned", score: 1 },
                { value: "very-concerned", label: "Very concerned", score: 0 },
            ]
        }
    ];

    const calculateSuitability = () => {
        let totalScore = 0;
        let maxPossibleScore = 0;

        questions.forEach(question => {
            const answer = answers[question.id];
            if (answer) {
                const option = question.options.find(opt => opt.value === answer);
                if (option) {
                    totalScore += option.score;
                }
            }
            maxPossibleScore += Math.max(...question.options.map(opt => opt.score));
        });

        const suitabilityPercentage = Math.max(0, Math.min(100, (totalScore / maxPossibleScore) * 100));
        return {
            score: totalScore,
            percentage: suitabilityPercentage,
            level: suitabilityPercentage < 30 ? 'not-suitable' : 
                   suitabilityPercentage < 50 ? 'low-suitability' : 
                   suitabilityPercentage < 70 ? 'moderate-suitability' : 'high-suitability'
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
        const suitability = calculateSuitability();
        
        const getSuitabilityColor = (level: string) => {
            switch (level) {
                case 'high-suitability': return 'text-green-600 bg-green-50 border-green-200';
                case 'moderate-suitability': return 'text-blue-600 bg-blue-50 border-blue-200';
                case 'low-suitability': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
                case 'not-suitable': return 'text-red-600 bg-red-50 border-red-200';
                default: return 'text-gray-600 bg-gray-50 border-gray-200';
            }
        };

        const getSuitabilityIcon = (level: string) => {
            switch (level) {
                case 'high-suitability': return <CheckCircle className="h-8 w-8 text-green-600" />;
                case 'moderate-suitability': return <Shield className="h-8 w-8 text-blue-600" />;
                case 'low-suitability': return <Info className="h-8 w-8 text-yellow-600" />;
                case 'not-suitable': return <AlertTriangle className="h-8 w-8 text-red-600" />;
                default: return <Info className="h-8 w-8 text-gray-600" />;
            }
        };

        const getSuitabilityTitle = (level: string) => {
            switch (level) {
                case 'high-suitability': return 'Highly Suitable for PrEP';
                case 'moderate-suitability': return 'Moderately Suitable for PrEP';
                case 'low-suitability': return 'Low Suitability for PrEP';
                case 'not-suitable': return 'Not Currently Suitable for PrEP';
                default: return 'PrEP Suitability Assessment';
            }
        };

        const getRecommendations = (level: string) => {
            switch (level) {
                case 'high-suitability':
                    return [
                        "You appear to be an excellent candidate for PrEP",
                        "Consult with a healthcare provider to start PrEP",
                        "Ensure regular HIV testing and monitoring",
                        "Discuss daily vs. on-demand PrEP options",
                        "Plan for regular follow-up appointments",
                        "Continue using condoms for additional protection"
                    ];
                case 'moderate-suitability':
                    return [
                        "PrEP may be beneficial for you",
                        "Discuss your risk factors with a healthcare provider",
                        "Address any medical conditions that may affect PrEP use",
                        "Consider improving medication adherence habits",
                        "Evaluate your support system and financial situation",
                        "Explore options for accessing PrEP services"
                    ];
                case 'low-suitability':
                    return [
                        "PrEP may not be the best option for you currently",
                        "Focus on other HIV prevention methods (condoms, reducing risk)",
                        "Address barriers such as adherence concerns or medical conditions",
                        "Consider reassessing in the future if circumstances change",
                        "Discuss alternative prevention strategies with a provider",
                        "Work on building a support system"
                    ];
                case 'not-suitable':
                    return [
                        "PrEP is not recommended for you at this time",
                        "If you're HIV positive, focus on treatment and care",
                        "Address medical conditions that prevent PrEP use",
                        "Consider other HIV prevention methods",
                        "Work with healthcare providers on your overall health",
                        "Reassess if your situation changes significantly"
                    ];
                default:
                    return ["Consult with a healthcare provider for personalized advice"];
            }
        };

        return (
            <PublicLayout title="PrEP Eligibility Assessment Results">
                <Head title="PrEP Eligibility Assessment Results - NASHCOP" />
                
                <div className="min-h-screen bg-gray-50 py-8">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                    <Shield className="w-8 h-8 text-green-600" />
                                </div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">Your PrEP Eligibility Results</h1>
                                <p className="text-gray-600">Based on your responses, here's your PrEP suitability assessment</p>
                            </div>

                            {/* Suitability Level Card */}
                            <Card className={`mb-8 border-2 ${getSuitabilityColor(suitability.level)}`}>
                                <CardHeader className="text-center">
                                    <div className="flex justify-center mb-4">
                                        {getSuitabilityIcon(suitability.level)}
                                    </div>
                                    <CardTitle className="text-2xl font-bold">
                                        {getSuitabilityTitle(suitability.level)}
                                    </CardTitle>
                                    <CardDescription className="text-lg">
                                        Suitability Score: {Math.round(suitability.percentage)}%
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                                        <div 
                                            className={`h-4 rounded-full transition-all duration-500 ${
                                                suitability.level === 'high-suitability' ? 'bg-green-500' :
                                                suitability.level === 'moderate-suitability' ? 'bg-blue-500' :
                                                suitability.level === 'low-suitability' ? 'bg-yellow-500' : 'bg-red-500'
                                            }`}
                                            style={{ width: `${suitability.percentage}%` }}
                                        ></div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Recommendations */}
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <CheckCircle className="h-6 w-6 mr-2 text-blue-600" />
                                        Personalized Recommendations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {getRecommendations(suitability.level).map((recommendation, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{recommendation}</span>
                                            </div>
                                        ))}
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
                                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                                        Find PrEP Providers
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
        <PublicLayout title="PrEP Eligibility Assessment">
            <Head title="PrEP Eligibility Assessment - NASHCOP" />
            
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <Shield className="w-8 h-8 text-green-600" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">PrEP Eligibility Assessment</h1>
                            <p className="text-gray-600">Determine if Pre-Exposure Prophylaxis is right for you</p>
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
                                    <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
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
                                className="bg-green-600 hover:bg-green-700"
                            >
                                {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        {/* Privacy Notice */}
                        <div className="mt-8 p-4 bg-green-50 rounded-lg">
                            <div className="flex items-start space-x-3">
                                <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-green-800 mb-1">Your Privacy is Protected</h4>
                                    <p className="text-green-700 text-sm">
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
