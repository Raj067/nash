import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { useState } from "react";
import {
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
    Thermometer,
    Heart,
} from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Label } from "@/Components/ui/label";
import { Progress } from "@/Components/ui/progress";

interface Question {
    id: string;
    question: string;
    options: { value: string; label: string; risk: number }[];
    category: string;
}

export default function TbRiskAssessment() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);

    const questions: Question[] = [
        {
            id: "persistent-cough",
            question:
                "Do you have a persistent cough lasting more than 2-3 weeks?",
            category: "Symptoms",
            options: [
                { value: "no", label: "No cough", risk: 0 },
                {
                    value: "recent",
                    label: "Cough for less than 2 weeks",
                    risk: 1,
                },
                { value: "persistent", label: "Cough for 2-3 weeks", risk: 3 },
                {
                    value: "chronic",
                    label: "Cough for more than 3 weeks",
                    risk: 4,
                },
            ],
        },
        {
            id: "cough-blood",
            question: "Have you coughed up blood or blood-stained sputum?",
            category: "Symptoms",
            options: [
                { value: "no", label: "No", risk: 0 },
                { value: "once", label: "Once or twice", risk: 3 },
                { value: "several", label: "Several times", risk: 5 },
                { value: "regularly", label: "Regularly", risk: 6 },
            ],
        },
        {
            id: "fever-sweats",
            question: "Do you have fever, chills, or night sweats?",
            category: "Symptoms",
            options: [
                { value: "none", label: "None of these symptoms", risk: 0 },
                { value: "occasional", label: "Occasional fever", risk: 2 },
                { value: "night-sweats", label: "Night sweats", risk: 3 },
                {
                    value: "all",
                    label: "Fever, chills, and night sweats",
                    risk: 4,
                },
            ],
        },
        {
            id: "weight-loss",
            question: "Have you experienced unexplained weight loss recently?",
            category: "Symptoms",
            options: [
                { value: "no", label: "No weight loss", risk: 0 },
                {
                    value: "slight",
                    label: "Slight weight loss (2-5 kg)",
                    risk: 2,
                },
                {
                    value: "moderate",
                    label: "Moderate weight loss (5-10 kg)",
                    risk: 3,
                },
                {
                    value: "severe",
                    label: "Severe weight loss (>10 kg)",
                    risk: 4,
                },
            ],
        },
        {
            id: "fatigue-weakness",
            question: "Do you experience unusual fatigue or weakness?",
            category: "Symptoms",
            options: [
                { value: "no", label: "No unusual fatigue", risk: 0 },
                { value: "mild", label: "Mild fatigue", risk: 1 },
                {
                    value: "moderate",
                    label: "Moderate fatigue affecting daily activities",
                    risk: 2,
                },
                { value: "severe", label: "Severe weakness", risk: 3 },
            ],
        },
        {
            id: "chest-pain",
            question:
                "Do you have chest pain or discomfort when breathing or coughing?",
            category: "Symptoms",
            options: [
                { value: "no", label: "No chest pain", risk: 0 },
                { value: "mild", label: "Mild discomfort", risk: 1 },
                {
                    value: "moderate",
                    label: "Moderate pain when coughing",
                    risk: 2,
                },
                { value: "severe", label: "Severe chest pain", risk: 3 },
            ],
        },
        {
            id: "tb-exposure",
            question:
                "Have you been in close contact with someone diagnosed with TB?",
            category: "Exposure History",
            options: [
                { value: "no", label: "No known exposure", risk: 0 },
                { value: "brief", label: "Brief contact", risk: 2 },
                {
                    value: "household",
                    label: "Household member or close contact",
                    risk: 4,
                },
                {
                    value: "workplace",
                    label: "Workplace or frequent contact",
                    risk: 3,
                },
            ],
        },
        {
            id: "hiv-status",
            question: "What is your HIV status?",
            category: "Medical History",
            options: [
                { value: "negative", label: "HIV negative", risk: 0 },
                { value: "unknown", label: "Unknown/never tested", risk: 2 },
                {
                    value: "positive-treated",
                    label: "HIV positive, on treatment",
                    risk: 3,
                },
                {
                    value: "positive-untreated",
                    label: "HIV positive, not on treatment",
                    risk: 5,
                },
            ],
        },
        {
            id: "immune-condition",
            question:
                "Do you have any condition that weakens your immune system?",
            category: "Medical History",
            options: [
                { value: "none", label: "No immune conditions", risk: 0 },
                { value: "diabetes", label: "Diabetes", risk: 2 },
                { value: "kidney-disease", label: "Kidney disease", risk: 2 },
                {
                    value: "cancer",
                    label: "Cancer or cancer treatment",
                    risk: 4,
                },
                {
                    value: "immunosuppressive",
                    label: "Taking immunosuppressive drugs",
                    risk: 3,
                },
            ],
        },
        {
            id: "smoking-alcohol",
            question:
                "Do you smoke tobacco or have a history of heavy alcohol use?",
            category: "Risk Factors",
            options: [
                {
                    value: "neither",
                    label: "Neither smoking nor heavy drinking",
                    risk: 0,
                },
                { value: "former-smoker", label: "Former smoker", risk: 1 },
                { value: "current-smoker", label: "Current smoker", risk: 2 },
                { value: "heavy-drinker", label: "Heavy alcohol use", risk: 2 },
                {
                    value: "both",
                    label: "Both smoking and heavy drinking",
                    risk: 3,
                },
            ],
        },
        {
            id: "living-conditions",
            question: "What are your living conditions?",
            category: "Environmental Factors",
            options: [
                {
                    value: "good",
                    label: "Good ventilation, not crowded",
                    risk: 0,
                },
                { value: "moderate", label: "Moderate conditions", risk: 1 },
                {
                    value: "poor-ventilation",
                    label: "Poor ventilation",
                    risk: 2,
                },
                {
                    value: "overcrowded",
                    label: "Overcrowded living conditions",
                    risk: 3,
                },
            ],
        },
        {
            id: "tb-history",
            question: "Have you ever been treated for TB before?",
            category: "Medical History",
            options: [
                { value: "never", label: "Never had TB", risk: 0 },
                {
                    value: "completed",
                    label: "Yes, completed treatment successfully",
                    risk: 1,
                },
                {
                    value: "incomplete",
                    label: "Yes, but didn't complete treatment",
                    risk: 4,
                },
                {
                    value: "recent",
                    label: "Currently on TB treatment",
                    risk: 0,
                },
            ],
        },
    ];

    const calculateRisk = () => {
        let totalRisk = 0;
        let maxPossibleRisk = 0;

        questions.forEach((question) => {
            const answer = answers[question.id];
            if (answer) {
                const option = question.options.find(
                    (opt) => opt.value === answer
                );
                if (option) {
                    totalRisk += option.risk;
                }
            }
            maxPossibleRisk += Math.max(
                ...question.options.map((opt) => opt.risk)
            );
        });

        const riskPercentage = Math.max(
            0,
            Math.min(100, (totalRisk / maxPossibleRisk) * 100)
        );
        return {
            score: totalRisk,
            percentage: riskPercentage,
            level:
                riskPercentage < 25
                    ? "low"
                    : riskPercentage < 50
                    ? "moderate"
                    : riskPercentage < 75
                    ? "high"
                    : "very-high",
        };
    };

    const handleAnswer = (value: string) => {
        setAnswers((prev) => ({
            ...prev,
            [questions[currentQuestion].id]: value,
        }));
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setShowResults(true);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const currentAnswer = answers[questions[currentQuestion]?.id];

    if (showResults) {
        const risk = calculateRisk();

        const getRiskColor = (level: string) => {
            switch (level) {
                case "low":
                    return "text-green-600 bg-green-50 border-green-200";
                case "moderate":
                    return "text-yellow-600 bg-yellow-50 border-yellow-200";
                case "high":
                    return "text-orange-600 bg-orange-50 border-orange-200";
                case "very-high":
                    return "text-red-600 bg-red-50 border-red-200";
                default:
                    return "text-gray-600 bg-gray-50 border-gray-200";
            }
        };

        const getRiskIcon = (level: string) => {
            switch (level) {
                case "low":
                    return <CheckCircle className="h-8 w-8 text-green-600" />;
                case "moderate":
                    return <Info className="h-8 w-8 text-yellow-600" />;
                case "high":
                    return (
                        <AlertTriangle className="h-8 w-8 text-orange-600" />
                    );
                case "very-high":
                    return <AlertTriangle className="h-8 w-8 text-red-600" />;
                default:
                    return <Info className="h-8 w-8 text-gray-600" />;
            }
        };

        const getRiskTitle = (level: string) => {
            switch (level) {
                case "low":
                    return "Low TB Risk";
                case "moderate":
                    return "Moderate TB Risk";
                case "high":
                    return "High TB Risk";
                case "very-high":
                    return "Very High TB Risk";
                default:
                    return "TB Risk Assessment";
            }
        };

        const getRecommendations = (level: string) => {
            switch (level) {
                case "low":
                    return [
                        "Continue maintaining good health practices",
                        "Be aware of TB symptoms and seek care if they develop",
                        "Get regular health check-ups",
                        "Maintain good nutrition and avoid smoking",
                    ];
                case "moderate":
                    return [
                        "Monitor your symptoms closely",
                        "Consider TB screening with a healthcare provider",
                        "Improve living conditions if possible (ventilation, reduce crowding)",
                        "Maintain good nutrition and avoid smoking and excessive alcohol",
                        "Get tested if you develop persistent cough or other symptoms",
                    ];
                case "high":
                    return [
                        "Seek medical evaluation for TB screening immediately",
                        "Get a chest X-ray and sputum test",
                        "Avoid close contact with others until cleared by a doctor",
                        "Follow up regularly with healthcare providers",
                        "Consider preventive treatment if recommended",
                        "Improve living conditions and avoid risk factors",
                    ];
                case "very-high":
                    return [
                        "Seek immediate medical attention for TB evaluation",
                        "Get comprehensive TB testing (chest X-ray, sputum culture, GeneXpert)",
                        "Isolate yourself until cleared by medical professionals",
                        "Start treatment immediately if TB is confirmed",
                        "Inform close contacts so they can be screened",
                        "Follow strict infection control measures",
                        "Address underlying conditions (HIV, diabetes, etc.)",
                    ];
                default:
                    return [
                        "Consult with a healthcare provider for personalized advice",
                    ];
            }
        };

        return (
            <PublicLayout title="TB Risk Assessment Results">
                <Head title="TB Risk Assessment Results - NASHCOP" />

                <div className="min-h-screen bg-gray-50 py-8">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                    <Heart className="w-8 h-8 text-blue-600" />
                                </div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    Your TB Risk Assessment Results
                                </h1>
                                <p className="text-gray-600">
                                    Based on your responses, here's your
                                    tuberculosis risk evaluation
                                </p>
                            </div>

                            {/* Risk Level Card */}
                            <Card
                                className={`mb-8 border-2 ${getRiskColor(
                                    risk.level
                                )}`}
                            >
                                <CardHeader className="text-center">
                                    <div className="flex justify-center mb-4">
                                        {getRiskIcon(risk.level)}
                                    </div>
                                    <CardTitle className="text-2xl font-bold">
                                        {getRiskTitle(risk.level)}
                                    </CardTitle>
                                    <CardDescription className="text-lg">
                                        Risk Score:{" "}
                                        {Math.round(risk.percentage)}%
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                                        <div
                                            className={`h-4 rounded-full transition-all duration-500 ${
                                                risk.level === "low"
                                                    ? "bg-green-500"
                                                    : risk.level === "moderate"
                                                    ? "bg-yellow-500"
                                                    : risk.level === "high"
                                                    ? "bg-orange-500"
                                                    : "bg-red-500"
                                            }`}
                                            style={{
                                                width: `${risk.percentage}%`,
                                            }}
                                        ></div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Urgent Notice for High Risk */}
                            {(risk.level === "high" ||
                                risk.level === "very-high") && (
                                <Card className="mb-8 border-red-200 bg-red-50">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-red-800 mb-2">
                                                    Urgent Medical Attention
                                                    Needed
                                                </h3>
                                                <p className="text-red-700 mb-2">
                                                    Your responses suggest you
                                                    may be at high risk for
                                                    tuberculosis. Please seek
                                                    immediate medical
                                                    evaluation.
                                                </p>
                                                <p className="text-red-700 font-medium">
                                                    Contact your healthcare
                                                    provider or visit the
                                                    nearest health facility
                                                    today.
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
                                        Personalized Recommendations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {getRecommendations(risk.level).map(
                                            (recommendation, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start space-x-3"
                                                >
                                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">
                                                        {recommendation}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* TB Information */}
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Thermometer className="h-6 w-6 mr-2 text-blue-600" />
                                        About Tuberculosis (TB)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-3">
                                                Key Symptoms to Watch
                                            </h4>
                                            <ul className="space-y-2 text-gray-600">
                                                <li>
                                                    • Persistent cough for 2+
                                                    weeks
                                                </li>
                                                <li>
                                                    • Coughing up blood or
                                                    sputum
                                                </li>
                                                <li>
                                                    • Chest pain when
                                                    breathing/coughing
                                                </li>
                                                <li>
                                                    • Unexplained weight loss
                                                </li>
                                                <li>
                                                    • Fever, chills, night
                                                    sweats
                                                </li>
                                                <li>
                                                    • Unusual fatigue or
                                                    weakness
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-3">
                                                TB Prevention
                                            </h4>
                                            <ul className="space-y-2 text-gray-600">
                                                <li>
                                                    • Maintain good nutrition
                                                </li>
                                                <li>
                                                    • Avoid smoking and
                                                    excessive alcohol
                                                </li>
                                                <li>
                                                    • Ensure good ventilation in
                                                    living spaces
                                                </li>
                                                <li>
                                                    • Get regular health
                                                    check-ups
                                                </li>
                                                <li>
                                                    • Take preventive treatment
                                                    if recommended
                                                </li>
                                                <li>• Practice good hygiene</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Important Notice */}
                            <Card className="mb-8 border-yellow-200 bg-yellow-50">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <Info className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-yellow-800 mb-2">
                                                Important Medical Disclaimer
                                            </h3>
                                            <p className="text-yellow-700 mb-2">
                                                This assessment is for
                                                educational purposes only and
                                                does not replace professional
                                                medical diagnosis. TB can only
                                                be definitively diagnosed
                                                through proper medical testing.
                                            </p>
                                            <p className="text-yellow-700 font-medium">
                                                If you have symptoms or
                                                concerns, please consult with a
                                                qualified healthcare provider
                                                immediately.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Next Steps */}
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle>
                                        Next Steps & Resources
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-gray-800">
                                                Get Tested
                                            </h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className="h-4 w-4 text-blue-600" />
                                                    <span className="text-gray-600">
                                                        Find TB testing centers
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="h-4 w-4 text-blue-600" />
                                                    <span className="text-gray-600">
                                                        Schedule screening
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-gray-800">
                                                Get Support
                                            </h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <Phone className="h-4 w-4 text-blue-600" />
                                                    <span className="text-gray-600">
                                                        TB Helpline: 117
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <User className="h-4 w-4 text-blue-600" />
                                                    <span className="text-gray-600">
                                                        TB treatment support
                                                    </span>
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
                                    <Button
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-700"
                                    >
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
        <PublicLayout title="TB Risk Assessment">
            <Head title="TB Risk Assessment - NASHCOP" />

            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                <Heart className="w-8 h-8 text-blue-600" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                TB Risk Assessment
                            </h1>
                            <p className="text-gray-600">
                                Evaluate your risk for tuberculosis infection
                            </p>
                        </div>

                        {/* Progress */}
                        <Card className="mb-6">
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-600">
                                        Question {currentQuestion + 1} of{" "}
                                        {questions.length}
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
                                    {questions[currentQuestion]?.options.map(
                                        (option) => (
                                            <div
                                                key={option.value}
                                                className="flex items-center space-x-2"
                                            >
                                                <RadioGroupItem
                                                    value={option.value}
                                                    id={option.value}
                                                />
                                                <Label
                                                    htmlFor={option.value}
                                                    className="flex-1 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                                >
                                                    {option.label}
                                                </Label>
                                            </div>
                                        )
                                    )}
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
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                {currentQuestion === questions.length - 1
                                    ? "Get Results"
                                    : "Next"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        {/* Privacy Notice */}
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                            <div className="flex items-start space-x-3">
                                <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-blue-800 mb-1">
                                        Your Privacy is Protected
                                    </h4>
                                    <p className="text-blue-700 text-sm">
                                        This assessment is completely anonymous.
                                        No personal information is collected or
                                        stored.
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
