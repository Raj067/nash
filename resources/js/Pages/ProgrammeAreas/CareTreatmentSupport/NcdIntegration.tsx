import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Activity,
    ArrowRight,
    Heart,
    CheckCircle,
    TrendingUp,
    Users,
    Stethoscope,
    Target,
    Award,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function NcdIntegration() {
    const stats = [
        {
            label: "HIV Patients with NCDs",
            value: "35%",
            icon: Activity,
            color: "text-blue-600",
        },
        {
            label: "Integrated Service Sites",
            value: "450+",
            icon: Stethoscope,
            color: "text-green-600",
        },
        {
            label: "Healthcare Workers Trained",
            value: "2,500+",
            icon: Users,
            color: "text-red-600",
        },
        {
            label: "Screening Coverage",
            value: "78%",
            icon: Target,
            color: "text-purple-600",
        },
    ];

    const ncdConditions = [
        {
            title: "Diabetes Mellitus",
            description:
                "Screening, diagnosis, and management of diabetes in HIV patients",
            prevalence: "8.2%",
            services: [
                "Blood glucose monitoring",
                "HbA1c testing",
                "Diabetic foot care",
                "Nutritional counseling",
            ],
        },
        {
            title: "Hypertension",
            description:
                "Blood pressure monitoring and cardiovascular risk management",
            prevalence: "22.5%",
            services: [
                "Regular BP monitoring",
                "Cardiovascular risk assessment",
                "Lifestyle counseling",
                "Antihypertensive therapy",
            ],
        },
        {
            title: "Mental Health Disorders",
            description:
                "Depression, anxiety, and other mental health conditions",
            prevalence: "28.7%",
            services: [
                "Mental health screening",
                "Counseling services",
                "Psychiatric care",
                "Peer support groups",
            ],
        },
    ];

    const integrationStrategies = [
        {
            title: "One-Stop Service Delivery",
            description:
                "Providing HIV and NCD services at the same facility during the same visit",
            benefits: [
                "Reduced patient travel costs",
                "Improved treatment adherence",
                "Better health outcomes",
                "Efficient resource utilization",
            ],
        },
        {
            title: "Shared Care Models",
            description:
                "Collaborative care between HIV specialists and NCD healthcare providers",
            benefits: [
                "Comprehensive patient care",
                "Knowledge sharing",
                "Reduced healthcare fragmentation",
                "Improved care coordination",
            ],
        },
        {
            title: "Task Shifting and Sharing",
            description: "Training HIV care providers to manage common NCDs",
            benefits: [
                "Increased service capacity",
                "Reduced specialist burden",
                "Improved access to care",
                "Cost-effective service delivery",
            ],
        },
    ];

    const achievements = [
        "Established NCD screening protocols in 450+ HIV care facilities",
        "Trained 2,500+ healthcare workers on integrated HIV-NCD care",
        "Achieved 78% screening coverage for diabetes and hypertension",
        "Reduced NCD-related hospitalizations by 35% among HIV patients",
        "Implemented electronic health records for integrated care tracking",
        "Developed national guidelines for HIV-NCD integration",
    ];

    return (
        <PublicLayout title="HIV Integration with Other Diseases">
            <Head title="NCD Integration - Care, Treatment & Support" />

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
                                        <Activity className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        HIV Integration with Other Diseases
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Comprehensive integration of
                                        non-communicable disease services within
                                        HIV care to address the growing burden
                                        of comorbidities in people living with
                                        HIV.
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
                                NCD Integration Impact
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Addressing the dual burden of HIV and
                                non-communicable diseases through integrated
                                care models
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
                                Comprehensive Care Approach
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Tanzania has pioneered integrated HIV-NCD care
                                models, reducing healthcare fragmentation and
                                improving outcomes for people living with HIV
                                who have comorbid conditions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* NCD Conditions */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Common NCDs in HIV Patients
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Key non-communicable diseases addressed through
                                integrated HIV care services
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {ncdConditions.map((condition, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                                >
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                                            {condition.title}
                                        </h3>
                                        <div className="text-2xl font-bold text-blue-600 mb-2">
                                            {condition.prevalence}
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            Prevalence in HIV patients
                                        </p>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {condition.description}
                                    </p>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">
                                            Integrated Services:
                                        </h4>
                                        <ul className="space-y-2">
                                            {condition.services.map(
                                                (service, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start space-x-3"
                                                    >
                                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-700 text-sm">
                                                            {service}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Integration Strategies */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Integration Strategies
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Evidence-based approaches to integrating NCD
                                services within HIV care
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {integrationStrategies.map((strategy, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        {strategy.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {strategy.description}
                                    </p>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">
                                            Key Benefits:
                                        </h4>
                                        <ul className="space-y-2">
                                            {strategy.benefits.map(
                                                (benefit, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start space-x-3"
                                                    >
                                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-700 text-sm">
                                                            {benefit}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Achievements */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Key Achievements
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Significant milestones in HIV-NCD
                                    integration in Tanzania
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {achievements.map((achievement, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                                    >
                                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-700 leading-relaxed">
                                            {achievement}
                                        </p>
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
                            Comprehensive HIV-NCD Care
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Access integrated HIV and NCD services designed to
                            provide holistic care for people living with HIV and
                            comorbid conditions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find Integrated Services
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
