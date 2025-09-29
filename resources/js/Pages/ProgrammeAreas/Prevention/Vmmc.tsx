import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Shield,
    Users,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Award,
    Target,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Vmmc() {
    const stats = [
        {
            label: "HIV Risk Reduction",
            value: "60%",
            icon: Shield,
            color: "text-blue-600",
        },
        {
            label: "National MC Prevalence (THIS 2022-23)",
            value: "87%",
            icon: TrendingUp,
            color: "text-green-600",
        },
        {
            label: "Adverse Events Rate",
            value: "<2%",
            icon: CheckCircle,
            color: "text-red-600",
        },
        {
            label: "WHO Recommended Threshold",
            value: "Met",
            icon: Award,
            color: "text-purple-600",
        },
    ];

    const priorityStrategies = [
        "Mobilise domestic resources for VMMC/EIMC services",
        "Operationalize the National Operational Manual for Sustainable Voluntary Medical Male Circumcision (2020-2024) at all levels",
        "Expand VMMC services to high-risk groups and locations and increase focus on priority regions that have not yet attained 90% prevalence",
        "Strengthen VMMC/EIMC service integration",
        "Scale-up EIMC services to all hospitals and 50% of Health Centres in 17 priority regions",
        "Develop and implement a cost-effective, shortened, modularized on-job training package for the utilisation of the VMMC and EIMC Sustainability Operational Manual",
        "Strengthen the involvement of traditional circumcisers in demand generation to mobilize clients, especially adults, to uptake services",
        "Strengthen continuous quality improvement of VMMC and EIMC services by ensuring the safety and cultural acceptability of the services, and tracking/surveillance for adverse events resulting from the procedures",
        "Strengthen community engagement, structures, and communication channels to promote VMMC among older males",
    ];

    const benefits = [
        "60% reduction in HIV infection risk from female to male",
        "Can be performed at any age, including early infancy (EIMC)",
        "Delivered with comprehensive minimum service package",
        "Mature, best-practice intervention with quality services",
        "Low adverse events rate maintained below WHO threshold",
        "Combined with condom use, safe sex education, HTS, STI management",
    ];

    return (
        <PublicLayout title="Voluntary Medical Male Circumcision (VMMC)">
            <Head title="VMMC - Prevention Programme" />

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
                                        <Shield className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Voluntary Medical Male Circumcision
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        One of the most effective biomedical
                                        interventions for preventing HIV
                                        infection, offering 60% reduction in HIV
                                        transmission risk.
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
                                VMMC Program Overview
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Tanzania's mature, best-practice VMMC program
                                with excellence in reach and quality services
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
                                WHO Recommended Prevention Strategy
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                VMMC is recognized by WHO as one of the most
                                effective biomedical HIV prevention
                                interventions for heterosexual men.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Program Description Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Tanzania's VMMC Program
                                </h2>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        Program Overview
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Voluntary Medical Male circumcision
                                        remains one of the most effective
                                        biomedical interventions for preventing
                                        HIV infection to date. Evidence suggests
                                        that medical male circumcision offers a
                                        60% reduction in the risk of HIV
                                        infection from female to male. This
                                        procedure can be carried out at any age,
                                        including in early infancy, henceforth
                                        described as Early Infant Male
                                        Circumcision.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        According to the THIS 2022-23, the
                                        national male circumcision (MC)
                                        prevalence was estimated to be
                                        approximately 87%.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        Comprehensive Service Package
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        In line with the national guidelines, MC
                                        is delivered in combination with other
                                        interventions like condom use, safe sex
                                        education, HTS, STI screening and
                                        management (all together defining the
                                        minimum service package) to ensure
                                        maximum protection from HIV during
                                        sexual intercourse.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Tanzania's VMMC program is a mature,
                                        best-practice intervention with
                                        excellence in reach and quality
                                        services. Continuous quality assurance
                                        conducted quarterly as part of
                                        programming shows that Tanzania has
                                        maintained a low level of adverse events
                                        (below 2%) as per the WHO-recommended
                                        threshold.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Health Benefits
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Multiple health benefits of voluntary
                                    medical male circumcision
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                                    >
                                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-700 leading-relaxed">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Priority Strategies Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Priority Strategies
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Strategic priorities for scaling up and
                                    sustaining VMMC and EIMC services
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {priorityStrategies.map((strategy, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700 leading-relaxed flex-1">
                                                {strategy}
                                            </p>
                                        </div>
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
                            Access VMMC Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Find quality VMMC services at health facilities
                            across Tanzania. Protect yourself and your
                            community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Users className="mr-2 h-5 w-5" />
                                    Find VMMC Services
                                </Button>
                            </a>
                            <a href="/programme-areas/prevention">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    // className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                                >
                                    <ArrowRight className="mr-2 h-5 w-5" />
                                    Back to Prevention
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
