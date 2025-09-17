import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    Mail,
    MapPin,
    Phone,
    Scissors,
    Shield,
    Stethoscope,
    Target,
    Users,
} from "lucide-react";

export default function PreventionInfection() {
    const preventionStrategies = [
        {
            title: "Comprehensive Condom Programming",
            description:
                "National Multi-sectoral Condom Strategy focusing on forecasting, promotion and distribution through total market approach",
            icon: Shield,
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Programming for Key and Vulnerable Populations",
            description:
                "Comprehensive HIV prevention services for SW, MSM, PWUD, PWID, AGYW, and other vulnerable groups",
            icon: Users,
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "Voluntary Male Medical Circumcision",
            description:
                "Scaling up male circumcision among 10-29 year-olds to achieve 80% coverage target",
            icon: Scissors,
            color: "from-green-500 to-blue-500",
        },
        {
            title: "STI Management",
            description:
                "Strengthening STI management services for PLHIV and KVP as part of HIV prevention package",
            icon: Stethoscope,
            color: "from-red-500 to-orange-500",
        },
    ];

    const condomPriorities = [
        "Strengthening quantification, forecasting and procurement of condoms",
        "Improve supply chain for adequate and equitable distribution",
        "Strengthen condom promotion through mass media and social media",
        "Expand distribution using community-based outlets and workplaces",
        "Strengthen oversight and support for social marketing systems",
        "Increase targeted distribution to high risk groups and hotspots",
        "Establish national M&E system for condom programming",
    ];

    const kvpPriorities = [
        "Scale up comprehensive HIV prevention services to KVP groups",
        "Strengthen M&E system and operational research for KVP",
        "Integrate HIV/AIDS programs within treatment clinics",
        "Strengthen coordination structures for regular data review",
        "Coordinate public-private partnerships with KVP stakeholders",
        "Advocate for enabling environment to facilitate access to services",
    ];

    const vmcPriorities = [
        "Focus on priority regions to attain 80% VMMC coverage",
        "Ensure sustainability through integration in health facilities",
        "Mobilize resources for VMMC and EIMC services",
        "Expand services for high risk groups and workplaces",
        "Scale up EIMC services in regions near 80% coverage",
        "Create demand through age-appropriate SBCC materials",
        "Strengthen continuous quality improvement of services",
    ];

    const stiPriorities = [
        "Strengthen STI management services for PLHIV and KVP",
        "Strengthen integration into HIV care and KVP programming",
        "Improve quality of STI services in RMNCAH",
        "Ensure availability of medical and pharmaceutical supplies",
        "Mobilize resources to support STI management services",
        "Scale up KVP and youth-friendly STI services",
        "Strengthen STI M&E, research and surveillance services",
    ];

    return (
        <PublicLayout title="Prevention of New HIV Infection">
            <Head title="Prevention of New HIV Infection" />

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
                                    <Shield className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Prevention of New HIV Infection
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Comprehensive HIV prevention strategies focusing on
                                    condom programming, male circumcision, and targeted
                                    programs for key and vulnerable populations
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Prevention Strategies Overview */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                                <Target className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                HIV Prevention Strategies
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Evidence-based prevention approaches identified
                                in the Tanzania Investment Case as effective
                                strategies to prevent HIV transmission
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {preventionStrategies.map((strategy, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg text-center"
                                >
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${strategy.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <strategy.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            {strategy.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {strategy.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Implementation Priorities */}
                <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
                    {/* Background Graphics */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
                        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-10"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
                                <Shield className="h-12 w-12 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Implementation Priorities
                            </h2>
                            <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                                Key priority areas for implementing comprehensive
                                HIV prevention strategies
                                <br />
                                <span className="text-sm text-blue-200 mt-2 block">
                                    Evidence-based approaches for maximum impact
                                </span>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Shield className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Condom Programming
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {condomPriorities.map((priority, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-3"
                                        >
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-blue-100 leading-relaxed">
                                                {priority}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Key & Vulnerable Populations
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {kvpPriorities.map((priority, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-3"
                                        >
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-blue-100 leading-relaxed">
                                                {priority}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Scissors className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Male Medical Circumcision
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {vmcPriorities.map((priority, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-3"
                                        >
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-blue-100 leading-relaxed">
                                                {priority}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Stethoscope className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        STI Management
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {stiPriorities.map((priority, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-3"
                                        >
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-blue-100 leading-relaxed">
                                                {priority}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-20 bg-gradient-to-br from-green-50 via-white to-cyan-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full mb-6">
                                <Mail className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                                Get More Information
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                For more information about HIV prevention programs
                                and services, contact NACP
                            </p>
                        </div>

                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Phone className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            Phone
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            +255 22 2120261
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Mail className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            Email
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            info@nacp.go.tz
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <MapPin className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            Location
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Dar es Salaam, Tanzania
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
