import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Button } from "@/Components/ui/button";
import {
    Activity,
    Baby,
    Eye,
    Globe,
    Heart,
    MapPin,
    Shield,
    Stethoscope,
    Syringe,
    Target,
    TrendingDown,
    TrendingUp,
    UserCheck,
    Users,
} from "lucide-react";

export default function HivAidsTanzania() {
    const keyStatistics = [
        {
            label: "Adults Living with HIV",
            value: "1.548M",
            trend: "stable",
            icon: Users,
            color: "text-red-600",
        },
        {
            label: "Adult HIV Prevalence",
            value: "4.4%",
            trend: "down",
            icon: Activity,
            color: "text-orange-600",
        },
        {
            label: "Women HIV Prevalence",
            value: "5.6%",
            trend: "stable",
            icon: UserCheck,
            color: "text-pink-600",
        },
        {
            label: "Men HIV Prevalence",
            value: "3.0%",
            trend: "stable",
            icon: Users,
            color: "text-blue-600",
        },
    ];

    const transmissionData = [
        {
            route: "Heterosexual Sex",
            percentage: "80%",
            description:
                "Commonest route for HIV transmission in Tanzania Mainland",
            icon: Heart,
            color: "from-red-400 to-red-600",
        },
        {
            route: "Other Routes",
            percentage: "20%",
            description:
                "Including mother-to-child transmission and other modes",
            icon: Activity,
            color: "from-blue-400 to-blue-600",
        },
    ];

    const ageGroupData = [
        {
            group: "Young People (15-19 years)",
            prevalence: "1.0%",
            details: "Girls: 1.3%, Boys: 0.8%",
            icon: Baby,
            color: "from-green-400 to-green-600",
        },
        {
            group: "Young Adults (20-24 years)",
            prevalence: "Higher in women",
            details: "Women: 4.4%, Men: 1.7%",
            icon: Users,
            color: "from-purple-400 to-purple-600",
        },
    ];

    const keyPopulations = [
        {
            title: "People who Inject Drugs (PWID)",
            prevalence: "16-51%",
            population: "High-risk group",
            description:
                "Significantly higher prevalence due to sharing of injection equipment",
            icon: Syringe,
            color: "from-red-400 to-red-600",
        },
        {
            title: "Men who have Sex with Men (MSM)",
            prevalence: "22-42%",
            population: "High-risk group",
            description:
                "Higher prevalence with limited access to services due to stigma",
            icon: UserCheck,
            color: "from-blue-400 to-blue-600",
        },
        {
            title: "Mobile Populations and Sex Workers",
            prevalence: "14-35%",
            population: "High-risk group",
            description: "Higher risk due to mobility and occupational factors",
            icon: Users,
            color: "from-purple-400 to-purple-600",
        },
    ];

    const trends = [
        {
            title: "Declining HIV Incidence",
            description:
                "HIV incidence dropped from 1.34% in 1992 to 0.07% among 15-24 year-olds in 2017",
            value: "0.07%",
            icon: TrendingDown,
            color: "text-green-600",
        },
        {
            title: "Adult Incidence Reduction",
            description:
                "HIV incidence among adults (15-64) reduced to 0.25% in 2017",
            value: "0.25%",
            icon: TrendingDown,
            color: "text-blue-600",
        },
        {
            title: "90-90-90 Target Progress",
            description:
                "Attainment will lead to 90% reduction in new HIV infections by 2030",
            value: "90%",
            icon: Target,
            color: "text-purple-600",
        },
        {
            title: "Test and Treat Strategy",
            description:
                "Recent adoption of Treat All strategy to scale up services",
            value: "100%",
            icon: Stethoscope,
            color: "text-indigo-600",
        },
    ];
    return (
        <PublicLayout title="HIV/AIDS in Tanzania">
            <Head title="HIV/AIDS in Tanzania" />

            <div className="min-h-screen">
                {/* Hero Section with Background Image */}
                <div className="relative h-[500px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(/images/hiv/arvs.jpg)`,
                        }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <MapPin className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    HIV/AIDS in Tanzania
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Tanzania mainland experiences a generalised
                                    HIV epidemic with significant heterogeneity
                                    across demographics and geography
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Statistics */}
                <section className="py-20 bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mb-6">
                                <Activity className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
                                Key Statistics 2022 - 2023
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Key statistics showing HIV prevalence and
                                demographic patterns (THIS 2022 - 2023)
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {keyStatistics.map((stat, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg"
                                >
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="text-center relative z-10">
                                        <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                            <stat.icon className="h-10 w-10 text-white" />
                                        </div>
                                        <div className="flex items-center justify-center mb-2">
                                            <div className="text-3xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                                                {stat.value}
                                            </div>
                                            <div className="ml-2">
                                                {stat.trend === "down" && (
                                                    <TrendingDown className="h-5 w-5 text-green-600" />
                                                )}
                                                {stat.trend === "up" && (
                                                    <TrendingUp className="h-5 w-5 text-red-600" />
                                                )}
                                                {stat.trend === "stable" && (
                                                    <div className="w-5 h-1 bg-gray-400 rounded"></div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-600 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Background */}
                <section className="py-20 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6">
                                <Globe className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
                                Background
                            </h2>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-8 shadow-lg">
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    Tanzania has made substantial progress in
                                    the fight against HIV, STIs, and Hepatitis
                                    through the implementation of its National
                                    Care, Treatment, and Prevention Program.
                                    This effort is aligned with national
                                    priorities and global targets including the
                                    UNAIDS 95-95-95 goals and the Sustainable
                                    Development Goals (SDGs). Adult HIV
                                    prevalence stands at <strong>4.4%</strong>{" "}
                                    (THIS 2022–2023), with gains in ART coverage
                                    and viral suppression.
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    However, the burden remains high in specific
                                    populations and geographic regions, calling
                                    for sustained, data-driven, and
                                    equity-focused interventions. This
                                    comprehensive overview of the
                                    implementation, progress, and outcomes of
                                    the National HIV, STI, and Hepatitis Care,
                                    Treatment, and Prevention Program outlines
                                    key interventions across priority areas,
                                    including case finding, prevention, care and
                                    treatment in addition to screening and
                                    management of co-morbidities.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">
                                        91%
                                    </div>
                                    <div className="text-gray-800 font-semibold mb-2">
                                        HIV Status Awareness
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        PLHIV who know their status (2024)
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                                    <div className="text-3xl font-bold text-green-600 mb-2">
                                        99%
                                    </div>
                                    <div className="text-gray-800 font-semibold mb-2">
                                        On Treatment
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Diagnosed with HIV on ART
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">
                                        98%
                                    </div>
                                    <div className="text-gray-800 font-semibold mb-2">
                                        Viral Suppression
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        People on ART with suppressed viral load
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Overview */}
                <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6">
                                <Target className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
                                Overview of HIV, STI, and Hepatitis Programming
                            </h2>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    The health sector HIV, STI, and Hepatitis
                                    response in Tanzania is guided by the{" "}
                                    <strong>
                                        HIV, STI, and Hepatitis Strategic Plan I
                                        (2022-2026)
                                    </strong>
                                    . This five-year plan is reviewed
                                    periodically to integrate new evidence-based
                                    approaches, emerging technologies, and
                                    innovations aimed at enhancing the national
                                    HIV, STI, and Hepatitis response.
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    The current implementation phase focuses on
                                    reducing new HIV, STI, and Hepatitis
                                    infections across all population groups,
                                    delivering high-quality HIV care and
                                    treatment to People Living with HIV (PLHIV),
                                    and achieving epidemic control in alignment
                                    with the UNAIDS 95-95-95 targets by 2025.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Program Areas */}
                <section className="py-20 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                                <Stethoscope className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                                Key Program Areas (2021-2024)
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Testing and Case Identification */}
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                        <Eye className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        Testing & Case Identification
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                    <li>
                                        • Index testing for partners and
                                        children
                                    </li>
                                    <li>• Provider-Initiated Testing (PITC)</li>
                                    <li>• Social Network Strategy (SNS)</li>
                                    <li>• HIV self-testing expansion</li>
                                    <li>• Lowered testing age to 15 years</li>
                                </ul>
                            </div>

                            {/* PMTCT */}
                            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                                        <Baby className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        PMTCT
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                    <li>
                                        • HIV transmission rate: 8.1% (2024)
                                    </li>
                                    <li>• Target: &lt;4% by 2025</li>
                                    <li>• Improved ANC quality</li>
                                    <li>• Enhanced EID services</li>
                                    <li>• Mother-baby pair monitoring</li>
                                </ul>
                            </div>

                            {/* Population at High Risk */}
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        High-Risk Populations
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Pre-Exposure Prophylaxis (PrEP)</li>
                                    <li>• Methadone Assisted Treatment</li>
                                    <li>• AGYW social protection</li>
                                    <li>• Integrated SRH services</li>
                                    <li>• Stigma reduction programs</li>
                                </ul>
                            </div>

                            {/* VMMC */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        VMMC Program
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• 60% HIV risk reduction</li>
                                    <li>• 17 regions coverage</li>
                                    <li>• 90% circumcision target</li>
                                    <li>• Multiple service delivery models</li>
                                    <li>• Cultural integration approach</li>
                                </ul>
                            </div>

                            {/* Blood Safety */}
                            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                                        <Heart className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        Blood Safety
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Multi-stage screening process</li>
                                    <li>• Pre-donation counselling</li>
                                    <li>• TTI screening (HIV, HBV, HCV)</li>
                                    <li>• Standardized questionnaires</li>
                                    <li>• Risk behavior assessment</li>
                                </ul>
                            </div>

                            {/* HIV Care & Treatment */}
                            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                                        <Stethoscope className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        Care & Treatment
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• 7,450 ART service points</li>
                                    <li>• 1.53M people on ART (2024)</li>
                                    <li>• 93% linked to care</li>
                                    <li>
                                        • 99% initiated on ART within 7 days
                                    </li>
                                    <li>• 98% viral suppression rate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
                        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-10"></div>
                    </div>

                    <div className="container mx-auto px-4 text-center relative z-10">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                            <Heart className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Achieving 95-95-95 Targets by 2025
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Tanzania remains strongly committed to achieving
                            epidemic control through comprehensive,
                            evidence-based interventions and sustained
                            partnerships.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                Learn More About Our Programs
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                Get Involved
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
