import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Brain,
    ArrowRight,
    Heart,
    CheckCircle,
    Users,
    Stethoscope,
    Target,
    Award,
    MessageCircle,
    Shield,
    TrendingUp,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function MentalHealth() {
    const stats = [
        {
            label: "HIV Patients with Mental Health Issues",
            value: "42%",
            icon: Brain,
            color: "text-blue-600",
        },
        {
            label: "Mental Health Screening Sites",
            value: "380+",
            icon: Stethoscope,
            color: "text-green-600",
        },
        {
            label: "Counselors Trained",
            value: "1,800+",
            icon: Users,
            color: "text-red-600",
        },
        {
            label: "Treatment Success Rate",
            value: "73%",
            icon: Target,
            color: "text-purple-600",
        },
    ];

    const mentalHealthConditions = [
        {
            title: "Depression",
            description: "Major depressive disorder and persistent depressive symptoms",
            prevalence: "28.4%",
            symptoms: [
                "Persistent sadness or low mood",
                "Loss of interest in activities",
                "Fatigue and low energy",
                "Sleep disturbances",
                "Difficulty concentrating",
            ],
            interventions: [
                "Cognitive Behavioral Therapy (CBT)",
                "Antidepressant medication",
                "Peer support groups",
                "Psychoeducation",
            ],
        },
        {
            title: "Anxiety Disorders",
            description: "Generalized anxiety, panic disorders, and HIV-related anxiety",
            prevalence: "22.1%",
            symptoms: [
                "Excessive worry or fear",
                "Restlessness and agitation",
                "Physical symptoms (palpitations)",
                "Avoidance behaviors",
                "Sleep problems",
            ],
            interventions: [
                "Relaxation techniques",
                "Exposure therapy",
                "Anti-anxiety medication",
                "Mindfulness-based interventions",
            ],
        },
        {
            title: "Substance Use Disorders",
            description: "Alcohol and drug use disorders affecting HIV treatment adherence",
            prevalence: "18.7%",
            symptoms: [
                "Inability to control substance use",
                "Neglecting responsibilities",
                "Continued use despite problems",
                "Withdrawal symptoms",
                "Tolerance development",
            ],
            interventions: [
                "Motivational interviewing",
                "Addiction counseling",
                "Medication-assisted treatment",
                "Support group participation",
            ],
        },
    ];

    const integrationApproaches = [
        {
            title: "Collaborative Care Model",
            description: "Integration of mental health specialists within HIV care teams",
            components: [
                "On-site psychiatrists and psychologists",
                "Regular case consultations",
                "Shared treatment planning",
                "Coordinated medication management",
            ],
        },
        {
            title: "Task-Shifting Approach",
            description: "Training HIV care providers to deliver basic mental health services",
            components: [
                "Mental health screening training",
                "Basic counseling skills",
                "Medication monitoring",
                "Referral protocols",
            ],
        },
        {
            title: "Peer Support Programs",
            description: "Utilizing trained peer counselors for ongoing mental health support",
            components: [
                "Peer counselor training",
                "Support group facilitation",
                "Treatment adherence support",
                "Community outreach",
            ],
        },
    ];

    const services = [
        {
            title: "Mental Health Screening",
            description: "Routine screening for depression, anxiety, and other mental health conditions",
            tools: ["PHQ-9 Depression Scale", "GAD-7 Anxiety Scale", "AUDIT Alcohol Screening"],
        },
        {
            title: "Psychosocial Counseling",
            description: "Individual and group counseling services for HIV patients",
            approaches: ["Cognitive Behavioral Therapy", "Problem-solving therapy", "Interpersonal therapy"],
        },
        {
            title: "Psychiatric Care",
            description: "Specialized psychiatric evaluation and medication management",
            services: ["Psychiatric assessment", "Medication prescription", "Treatment monitoring"],
        },
        {
            title: "Crisis Intervention",
            description: "Emergency mental health support and suicide prevention services",
            components: ["24/7 crisis hotline", "Emergency counseling", "Safety planning"],
        },
    ];

    const achievements = [
        "Integrated mental health screening in 380+ HIV care facilities",
        "Trained 1,800+ healthcare workers in basic mental health care",
        "Achieved 73% treatment success rate for depression in HIV patients",
        "Reduced suicide rates by 45% among people living with HIV",
        "Established 150+ peer support groups nationwide",
        "Developed culturally adapted mental health interventions",
    ];

    return (
        <PublicLayout title="Integration of Mental Health Services">
            <Head title="Mental Health - Care, Treatment & Support" />

            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(/images/about.png)`,
                        }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Brain className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Integration of Mental Health Services
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Comprehensive mental health services integrated within HIV care to address 
                                        the psychosocial needs and improve quality of life for people living with HIV.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Mental Health Integration Impact
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Addressing the mental health needs of people living with HIV through integrated care services
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg text-center"
                                >
                                    <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                        <stat.icon className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Achievement Highlight */}
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
                                <Award className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Holistic HIV Care Approach
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Tanzania has successfully integrated mental health services into HIV care, 
                                recognizing that mental wellness is essential for optimal HIV treatment outcomes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mental Health Conditions */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Common Mental Health Conditions
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Key mental health conditions addressed in integrated HIV care settings
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {mentalHealthConditions.map((condition, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                                >
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{condition.title}</h3>
                                        <div className="text-2xl font-bold text-blue-600 mb-2">
                                            {condition.prevalence}
                                        </div>
                                        <p className="text-gray-600 text-sm">Prevalence in HIV patients</p>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6">{condition.description}</p>
                                    
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Common Symptoms:</h4>
                                        <ul className="space-y-2">
                                            {condition.symptoms.slice(0, 3).map((symptom, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{symptom}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">Interventions:</h4>
                                        <ul className="space-y-2">
                                            {condition.interventions.map((intervention, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{intervention}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Integration Approaches */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Integration Approaches
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Evidence-based models for integrating mental health services within HIV care
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {integrationApproaches.map((approach, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{approach.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{approach.description}</p>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">Key Components:</h4>
                                        <ul className="space-y-2">
                                            {approach.components.map((component, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{component}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Mental Health Services
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive mental health services available within HIV care settings
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                                    <div>
                                        <ul className="space-y-2">
                                            {(service.tools || service.approaches || service.services || service.components).map((item, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Achievements */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Key Achievements
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Significant milestones in mental health integration within HIV care in Tanzania
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {achievements.map((achievement, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg"
                                    >
                                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Comprehensive Mental Health Support
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Access integrated mental health services designed to support the psychological 
                            wellbeing of people living with HIV throughout their care journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Find Mental Health Services
                                </Button>
                            </a>
                            <a href="/programme-areas/care-treatment-support">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                                >
                                    <ArrowRight className="mr-2 h-5 w-5" />
                                    Back to Care & Treatment
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
