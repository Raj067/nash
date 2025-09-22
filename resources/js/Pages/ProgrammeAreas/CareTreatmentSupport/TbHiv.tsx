import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Stethoscope,
    ArrowRight,
    Heart,
    CheckCircle,
    Users,
    Target,
    Award,
    Shield,
    TrendingUp,
    Activity,
    AlertTriangle,
    Pill,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function TbHiv() {
    const stats = [
        {
            label: "TB/HIV Co-infection Rate",
            value: "32%",
            icon: Activity,
            color: "text-blue-600",
        },
        {
            label: "Integrated Service Sites",
            value: "3,500+",
            icon: Stethoscope,
            color: "text-green-600",
        },
        {
            label: "Patients on Co-treatment",
            value: "85,000+",
            icon: Users,
            color: "text-red-600",
        },
        {
            label: "Treatment Success Rate",
            value: "82%",
            icon: Target,
            color: "text-purple-600",
        },
    ];

    const coInfectionChallenges = [
        {
            title: "Increased Mortality Risk",
            description: "TB is the leading cause of death among people living with HIV",
            impact: "5x higher mortality risk",
            interventions: [
                "Early TB screening and diagnosis",
                "Prompt initiation of TB treatment",
                "Immediate ART initiation",
                "Close monitoring and follow-up",
            ],
        },
        {
            title: "Drug Interactions",
            description: "Complex interactions between TB and HIV medications",
            impact: "Treatment complications",
            interventions: [
                "Careful drug selection and dosing",
                "Regular monitoring for side effects",
                "Dose adjustments as needed",
                "Alternative regimen options",
            ],
        },
        {
            title: "Immune Reconstitution",
            description: "IRIS (Immune Reconstitution Inflammatory Syndrome) risk",
            impact: "15-20% of co-infected patients",
            interventions: [
                "Delayed ART initiation in some cases",
                "Corticosteroid treatment",
                "Close clinical monitoring",
                "Patient education and support",
            ],
        },
    ];

    const integratedServices = [
        {
            title: "One-Stop Service Delivery",
            description: "TB and HIV services provided at the same facility",
            components: [
                "Joint TB/HIV clinics",
                "Shared healthcare providers",
                "Coordinated appointment scheduling",
                "Integrated patient records",
            ],
            coverage: "Available at 3,500+ sites",
        },
        {
            title: "Collaborative Activities",
            description: "Coordinated TB and HIV prevention, diagnosis, and treatment",
            components: [
                "HIV testing for TB patients",
                "TB screening for HIV patients",
                "Co-trimoxazole preventive therapy",
                "Isoniazid preventive therapy",
            ],
            coverage: "Implemented nationwide",
        },
        {
            title: "Joint Monitoring Systems",
            description: "Unified data collection and reporting for TB/HIV",
            components: [
                "Integrated patient monitoring",
                "Joint treatment outcomes tracking",
                "Shared quality indicators",
                "Combined reporting systems",
            ],
            coverage: "Electronic systems in use",
        },
    ];

    const treatmentApproaches = [
        {
            phase: "Diagnosis Phase",
            duration: "0-2 weeks",
            activities: [
                "Comprehensive TB screening (symptoms, chest X-ray, sputum)",
                "HIV testing and counseling for TB patients",
                "CD4 count and viral load testing",
                "Assessment for opportunistic infections",
            ],
            outcomes: "Early detection and staging",
        },
        {
            phase: "Treatment Initiation",
            duration: "2-8 weeks",
            activities: [
                "Start TB treatment immediately",
                "Initiate ART within 2-8 weeks of TB treatment",
                "Begin co-trimoxazole preventive therapy",
                "Nutritional assessment and support",
            ],
            outcomes: "Dual therapy establishment",
        },
        {
            phase: "Intensive Monitoring",
            duration: "2-6 months",
            activities: [
                "Monthly clinical assessments",
                "Drug adherence monitoring",
                "Side effect management",
                "Treatment response evaluation",
            ],
            outcomes: "Treatment optimization",
        },
        {
            phase: "Continuation Phase",
            duration: "4-18 months",
            activities: [
                "Continued TB treatment (6 months total)",
                "Lifelong ART continuation",
                "Regular viral load monitoring",
                "Long-term care planning",
            ],
            outcomes: "Sustained treatment success",
        },
    ];

    const preventiveInterventions = [
        {
            intervention: "Isoniazid Preventive Therapy (IPT)",
            target: "HIV patients without active TB",
            effectiveness: "60-90% reduction in TB risk",
            implementation: "Scaled up to 450+ sites",
        },
        {
            intervention: "Co-trimoxazole Preventive Therapy",
            target: "All HIV patients with CD4 <350",
            effectiveness: "40% reduction in mortality",
            implementation: "Universal coverage achieved",
        },
        {
            intervention: "Infection Control Measures",
            target: "Healthcare facilities and communities",
            effectiveness: "Reduced transmission risk",
            implementation: "Implemented in all HIV care sites",
        },
        {
            intervention: "Nutritional Support",
            target: "Malnourished TB/HIV patients",
            effectiveness: "Improved treatment outcomes",
            implementation: "Available at 80% of sites",
        },
    ];

    const achievements = [
        "Integrated TB/HIV services in all 3,500+ HIV care facilities",
        "Achieved 95% HIV testing coverage among TB patients",
        "Reached 85% TB screening coverage among HIV patients",
        "Reduced TB/HIV mortality by 45% since 2010",
        "Scaled up IPT to 450+ sites serving 120,000+ patients",
        "Established joint TB/HIV monitoring systems nationwide",
    ];

    return (
        <PublicLayout title="TB/HIV Co-infection">
            <Head title="TB/HIV - Care, Treatment & Support" />

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
                                        <Stethoscope className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        TB/HIV Co-infection
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Comprehensive integrated services for patients with tuberculosis and HIV 
                                        co-infection to improve treatment outcomes and reduce mortality.
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
                                TB/HIV Integration Impact
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Addressing the dual burden of tuberculosis and HIV through integrated care services
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
                                Integrated TB/HIV Care Excellence
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Tanzania has achieved remarkable success in integrating TB and HIV services, 
                                reducing mortality and improving treatment outcomes for co-infected patients.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Co-infection Challenges */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Co-infection Management Challenges
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Key challenges in managing patients with both tuberculosis and HIV infection
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {coInfectionChallenges.map((challenge, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                                >
                                    <div className="flex items-center mb-6">
                                        <AlertTriangle className="h-8 w-8 text-red-500 mr-4" />
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800">{challenge.title}</h3>
                                            <p className="text-red-600 font-medium">{challenge.impact}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6">{challenge.description}</p>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">Management Strategies:</h4>
                                        <ul className="space-y-2">
                                            {challenge.interventions.map((intervention, idx) => (
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

                {/* Integrated Services */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Integrated Service Delivery
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive integration models for TB and HIV service delivery
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {integratedServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Key Components:</h4>
                                        <ul className="space-y-2">
                                            {service.components.map((component, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{component}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <p className="text-blue-800 font-medium text-sm">{service.coverage}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Treatment Timeline */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Treatment Timeline
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Coordinated approach to TB/HIV co-infection treatment phases
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {treatmentApproaches.map((phase, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 relative"
                                >
                                    <div className="absolute -top-4 left-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Phase {index + 1}
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{phase.phase}</h3>
                                        <p className="text-blue-600 font-medium text-sm mb-4">{phase.duration}</p>
                                        <ul className="space-y-2 mb-4">
                                            {phase.activities.map((activity, idx) => (
                                                <li key={idx} className="flex items-start space-x-2">
                                                    <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0 mt-1" />
                                                    <span className="text-gray-700 text-xs">{activity}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="bg-white rounded-lg p-3">
                                            <p className="text-gray-800 font-medium text-sm">{phase.outcomes}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Preventive Interventions */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Preventive Interventions
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Evidence-based interventions to prevent TB in HIV patients and improve outcomes
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {preventiveInterventions.map((intervention, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-center mb-4">
                                        <Shield className="h-8 w-8 text-green-600 mr-4" />
                                        <h3 className="text-xl font-bold text-gray-800">{intervention.intervention}</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Target Population:</p>
                                            <p className="text-gray-800 font-medium">{intervention.target}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Effectiveness:</p>
                                            <p className="text-green-600 font-medium">{intervention.effectiveness}</p>
                                        </div>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <p className="text-blue-800 font-medium text-sm">
                                            Implementation: {intervention.implementation}
                                        </p>
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
                                    Significant milestones in TB/HIV integration in Tanzania
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {achievements.map((achievement, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
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
                            Integrated TB/HIV Care
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Access comprehensive integrated services for tuberculosis and HIV co-infection 
                            management at healthcare facilities nationwide.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Pill className="mr-2 h-5 w-5" />
                                    Find TB/HIV Services
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
