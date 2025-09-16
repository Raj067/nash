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
            label: "People Living with HIV",
            value: "1.7M",
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
            label: "New HIV Infections (2020)",
            value: "72,000",
            trend: "down",
            icon: TrendingDown,
            color: "text-blue-600",
        },
        {
            label: "AIDS-Related Deaths (2020)",
            value: "32,000",
            trend: "down",
            icon: Heart,
            color: "text-purple-600",
        },
    ];

    const regionalData = [
        {
            region: "Iringa",
            prevalence: "9.1%",
            population: "45,000",
            status: "High",
        },
        {
            region: "Njombe",
            prevalence: "8.3%",
            population: "38,000",
            status: "High",
        },
        {
            region: "Tabora",
            prevalence: "7.5%",
            population: "52,000",
            status: "High",
        },
        {
            region: "Mbeya",
            prevalence: "7.2%",
            population: "78,000",
            status: "High",
        },
        {
            region: "Dar es Salaam",
            prevalence: "4.6%",
            population: "285,000",
            status: "Medium",
        },
        {
            region: "Dodoma",
            prevalence: "4.1%",
            population: "48,000",
            status: "Medium",
        },
    ];

    const keyPopulations = [
        {
            title: "Female Sex Workers",
            prevalence: "15.5%",
            population: "150,000",
            description:
                "Higher risk due to multiple sexual partnerships and limited access to prevention services",
            icon: Users,
            color: "from-red-400 to-red-600",
        },
        {
            title: "Men who have Sex with Men",
            prevalence: "12.4%",
            population: "45,000",
            description:
                "Stigma and discrimination limit access to HIV testing and treatment services",
            icon: UserCheck,
            color: "from-blue-400 to-blue-600",
        },
        {
            title: "People who Inject Drugs",
            prevalence: "18.3%",
            population: "35,000",
            description:
                "Sharing of injection equipment increases HIV transmission risk",
            icon: Syringe,
            color: "from-purple-400 to-purple-600",
        },
        {
            title: "Adolescent Girls & Young Women",
            prevalence: "3.8%",
            population: "2.1M",
            description:
                "Age 15-24 years, vulnerable due to gender inequality and limited economic opportunities",
            icon: Baby,
            color: "from-pink-400 to-pink-600",
        },
    ];

    const trends = [
        {
            title: "Declining New Infections",
            description: "New HIV infections have decreased by 35% since 2010",
            value: "35%",
            icon: TrendingDown,
            color: "text-green-600",
        },
        {
            title: "Improved Treatment Coverage",
            description: "88% of people living with HIV know their status",
            value: "88%",
            icon: Eye,
            color: "text-blue-600",
        },
        {
            title: "Reduced AIDS Deaths",
            description: "50% reduction in AIDS-related deaths since 2010",
            value: "50%",
            icon: Shield,
            color: "text-purple-600",
        },
        {
            title: "Viral Suppression",
            description:
                "95% of those on treatment have suppressed viral loads",
            value: "95%",
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
                            backgroundImage: `url(/images/arvsImages.jpeg)`,
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
                                    Understanding the HIV/AIDS epidemic through
                                    comprehensive data and insights
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
                                Current state of HIV/AIDS in Tanzania based on latest available data
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
                                Progress in Tanzania's fight against HIV/AIDS showing encouraging improvements
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

                {/* Regional Distribution */}
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
                                <MapPin className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
                                Regional Distribution
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                HIV prevalence varies significantly across Tanzania's regions, requiring targeted interventions
                            </p>
                        </div>

                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white relative overflow-hidden rounded-2xl shadow-lg">
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="p-8 relative z-10">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b-2 border-gradient-to-r from-red-200 to-orange-200">
                                                <th className="text-left py-4 px-6 font-bold text-gray-800 text-lg">
                                                    Region
                                                </th>
                                                <th className="text-left py-4 px-6 font-bold text-gray-800 text-lg">
                                                    HIV Prevalence
                                                </th>
                                                <th className="text-left py-4 px-6 font-bold text-gray-800 text-lg">
                                                    PLHIV Population
                                                </th>
                                                <th className="text-left py-4 px-6 font-bold text-gray-800 text-lg">
                                                    Priority Level
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {regionalData.map((region, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-red-50/50 hover:to-orange-50/50 transition-all duration-300"
                                                >
                                                    <td className="py-4 px-6 font-semibold text-gray-800">
                                                        {region.region}
                                                    </td>
                                                    <td className="py-4 px-6 text-gray-700 font-medium">
                                                        {region.prevalence}
                                                    </td>
                                                    <td className="py-4 px-6 text-gray-700 font-medium">
                                                        {region.population}
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <span
                                                            className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md ${
                                                                region.status === "High"
                                                                    ? "bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-300"
                                                                    : "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border border-orange-300"
                                                            }`}
                                                        >
                                                            {region.status} Priority
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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
                                Populations at higher risk of HIV infection requiring targeted interventions and support
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
                                                    ({population.population} people)
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
                                                        style={{ width: population.prevalence }}
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
                                    Learn more about our interventions and how you can contribute to Tanzania's HIV/AIDS response
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
