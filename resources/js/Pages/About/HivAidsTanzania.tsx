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
            label: "People Living with HIV (2017)",
            value: "1.4M",
            trend: "stable",
            icon: Users,
            color: "text-red-600",
        },
        {
            label: "Adult HIV Prevalence",
            value: "4.7%",
            trend: "down",
            icon: Activity,
            color: "text-orange-600",
        },
        {
            label: "Women HIV Prevalence",
            value: "6.3%",
            trend: "stable",
            icon: UserCheck,
            color: "text-pink-600",
        },
        {
            label: "Men HIV Prevalence",
            value: "3.9%",
            trend: "stable",
            icon: Users,
            color: "text-blue-600",
        },
    ];

    const transmissionData = [
        {
            route: "Heterosexual Sex",
            percentage: "80%",
            description: "Commonest route for HIV transmission in Tanzania Mainland",
            icon: Heart,
            color: "from-red-400 to-red-600",
        },
        {
            route: "Other Routes",
            percentage: "20%",
            description: "Including mother-to-child transmission and other modes",
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
            description:
                "Higher risk due to mobility and occupational factors",
            icon: Users,
            color: "from-purple-400 to-purple-600",
        },
    ];

    const trends = [
        {
            title: "Declining HIV Incidence",
            description: "HIV incidence dropped from 1.34% in 1992 to 0.07% among 15-24 year-olds in 2017",
            value: "0.07%",
            icon: TrendingDown,
            color: "text-green-600",
        },
        {
            title: "Adult Incidence Reduction",
            description: "HIV incidence among adults (15-64) reduced to 0.25% in 2017",
            value: "0.25%",
            icon: TrendingDown,
            color: "text-blue-600",
        },
        {
            title: "90-90-90 Target Progress",
            description: "Attainment will lead to 90% reduction in new HIV infections by 2030",
            value: "90%",
            icon: Target,
            color: "text-purple-600",
        },
        {
            title: "Test and Treat Strategy",
            description: "Recent adoption of Treat All strategy to scale up services",
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
                                    Tanzania mainland experiences a generalised HIV epidemic with significant heterogeneity across demographics and geography
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
                                Key Statistics (2020)
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Key statistics showing HIV prevalence and demographic patterns (THMIS 2011-12)
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

                {/* Positive Trends */}
                <section className="py-20 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6">
                                <TrendingUp className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
                                Positive Trends
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Progress in Tanzania's fight against HIV/AIDS
                                showing encouraging improvements
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {trends.map((trend, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg"
                                >
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="text-center relative z-10">
                                        <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                            <trend.icon className="h-10 w-10 text-white" />
                                        </div>
                                        <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                                            {trend.value}
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                            {trend.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {trend.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HIV Transmission Routes */}
                <section className="py-20 bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mb-6">
                                <Heart className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
                                HIV Transmission Routes
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Understanding how HIV is transmitted in Tanzania mainland
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {transmissionData.map((item, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg text-center"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                                            {item.route}
                                        </h3>
                                        <div className="text-3xl font-bold text-red-600 mb-4">
                                            {item.percentage}
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Age Group Analysis */}
                <section className="py-20 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                                <Baby className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                                Age Group Analysis
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                HIV prevalence patterns across different age groups showing gender disparities
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {ageGroupData.map((item, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-start space-x-4 mb-6">
                                            <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800 mb-2">
                                                    {item.group}
                                                </h3>
                                                <div className="text-2xl font-bold text-purple-600 mb-2">
                                                    {item.prevalence}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.details}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Populations */}
                <section className="py-20 bg-gradient-to-r from-red-900 via-red-800 to-orange-900 relative overflow-hidden">
                    {/* Background Graphics */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="absolute top-20 right-20 w-64 h-64 bg-red-400 rounded-full blur-3xl opacity-10"></div>
                        <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-400 rounded-full blur-3xl opacity-10"></div>
                        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-400 rounded-full blur-2xl opacity-10"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
                                <Users className="h-12 w-12 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Key Populations at Risk
                            </h2>
                            <p className="text-red-100 max-w-3xl mx-auto text-lg">
                                Populations at higher risk of HIV infection
                                requiring targeted interventions and support
                                <br />
                                <span className="text-sm text-red-200 mt-2 block">
                                    Source: Tanzania HIV Impact Survey 2020
                                </span>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {keyPopulations.map((population, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20"
                                >
                                    <div className="flex items-start space-x-6">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                            <population.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                                                {population.title}
                                            </h4>
                                            <div className="flex items-center space-x-4 mb-3">
                                                <div className="text-3xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                                    {population.prevalence}
                                                </div>
                                                <div className="text-sm text-red-200 font-medium">
                                                    ({population.population}{" "}
                                                    people)
                                                </div>
                                            </div>
                                            <p className="text-red-100 leading-relaxed mb-4">
                                                {population.description}
                                            </p>

                                            {/* Progress Bar */}
                                            <div className="mt-4">
                                                <div className="w-full bg-white/20 rounded-full h-2">
                                                    <div
                                                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                                        style={{
                                                            width: population.prevalence,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Context Summary */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                                <Globe className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                HIV Epidemic Context
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Understanding Tanzania's HIV epidemic characteristics and progress towards ending AIDS by 2030
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-start space-x-4 mb-6">
                                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <MapPin className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                                Generalised Epidemic
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            Tanzania mainland experiences a generalised HIV epidemic with significant heterogeneity across age, gender, socioeconomic status, and geographic location, implying differentials in the risk of transmission.
                                        </p>
                                    </div>
                                </div>

                                <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-start space-x-4 mb-6">
                                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <Target className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                                                90-90-90 Target Impact
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            Attainment of global 90-90-90 targets will lead to reduction of new HIV infections by 90%, providing an opportunity for ending the AIDS epidemic by 2030.
                                        </p>
                                    </div>
                                </div>

                                <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-start space-x-4 mb-6">
                                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <TrendingDown className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                                                Incidence Goal Achievement
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            The country's goal was to reduce HIV incidence in the general population to less than 0.16% by 2017, with significant progress made through scaled-up prevention and treatment services.
                                        </p>
                                    </div>
                                </div>

                                <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-start space-x-4 mb-6">
                                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <Users className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                                                Gender Disparities
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            Women are disproportionally more affected, with HIV prevalence of 6.3% versus 3.9% among men, with particularly high rates among young women aged 20-24 (4.4% vs 1.7% for men).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-12 shadow-lg text-center max-w-4xl mx-auto">
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mb-6">
                                    <Heart className="h-10 w-10 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                                    Together We Can End HIV/AIDS
                                </h2>
                                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                    Learn more about our interventions and how
                                    you can contribute to Tanzania's HIV/AIDS
                                    response
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <Target className="mr-2 h-5 w-5" />
                                        View Interventions
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-red-500/50 hover:bg-red-500/10 backdrop-blur-sm"
                                    >
                                        <Globe className="mr-2 h-5 w-5" />
                                        Get Involved
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
