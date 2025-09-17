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
    Shield,
    MessageCircle,
    Briefcase,
    Users,
    Heart,
    Network,
    Phone,
    Mail,
    MapPin,
    Target,
    CheckCircle,
} from "lucide-react";

export default function CrossSector() {
    const crossSectorComponents = [
        {
            title: "Stigma, Discrimination and Gender Based Violence",
            description:
                "Addressing stigma and discrimination as core elements in the National HIV response",
            icon: Shield,
            color: "from-red-500 to-pink-500",
        },
        {
            title: "Targeted Social and Behavior Change Communication",
            description:
                "Multiple communication channels including mass media, school-based education, and ICT platforms",
            icon: MessageCircle,
            color: "from-blue-500 to-purple-500",
        },
        {
            title: "Health Sector Workplace Interventions",
            description:
                "Workplace health programs focusing on occupational health and safety across sectors",
            icon: Briefcase,
            color: "from-green-500 to-teal-500",
        },
        {
            title: "Adolescents and Young People",
            description:
                "Targeted interventions for AGYW who face higher HIV risk due to cultural, economic and biological factors",
            icon: Users,
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "Male Involvement",
            description:
                "Engaging men as critical partners in reproductive health and HIV prevention decisions",
            icon: Heart,
            color: "from-orange-500 to-red-500",
        },
    ];

    const stigmaPriorities = [
        "Promote enabling policy environment for HIV prevention, care and treatment",
        "Enhance institutional capacities to reduce stigma and discrimination",
        "Address stigma among community leaders, health care providers and PLHIV",
        "Enhance implementation of MER to track different forms of stigma",
        "Scale up interventions addressing gender inequality and GBV",
    ];

    const sbccApproaches = [
        "Mass media campaigns for broad reach",
        "School-based education programs",
        "Community-based social mobilization",
        "Social media and mobile applications",
        "WhatsApp and text messaging platforms",
        "ICT-based behavior change interventions",
    ];

    const workplacePriorities = [
        "Expand HIV workplace interventions to include NCDs and occupational health",
        "Establish routine combined HTS HIV prevention campaigns in workplaces",
        "Strengthen access to HIV prevention interventions including ART and test kits",
        "Increase sensitization for HIV social protection programs",
        "Strengthen infection prevention, PEP services, and vaccination programs",
        "Improve monitoring of HIV interventions at workplace",
    ];

    const youthPriorities = [
        "Ensure enabling environment for adolescent and youth friendly services",
        "Scale up provision of adolescent friendly health services",
        "Strengthen coordination of adolescent-youth friendly services",
        "Strengthen comprehensive sexuality education at community and school levels",
        "Support adolescent girls with essential packages to keep them in school",
        "Improve coordination among stakeholders working on adolescent services",
        "Expand girl-centered combination HIV prevention approaches",
    ];

    const maleInvolvementPriorities = [
        "Consolidate lessons and best practices on male involvement",
        "Expand workplace programs sensitizing men to participate in health services",
        "Introduce services for men in reproductive and child health services",
        "Engage male community leaders as peer motivators and influencers",
        "Increase services encouraging male participation like joint clinics",
    ];

    const vulnerableGroups = [
        {
            group: "Adolescent Girls and Young Women (AGYW)",
            risk: "Higher HIV prevalence (3.4% vs 0.9% for men aged 20-24)",
        },
        {
            group: "Young Women aged 20-24",
            risk: "Significantly higher prevalence than men same age group",
        },
        {
            group: "Youth Population",
            risk: "Over two thirds (63%) of population below 24 years",
        },
        {
            group: "Women vs Men",
            risk: "Overall higher prevalence (6.2% vs 3.1%)",
        },
    ];

    return (
        <PublicLayout title="Cross-Sector HIV Interventions">
            <Head title="Cross-Sector HIV Interventions" />

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
                                    <Network className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Cross-Sector HIV Interventions
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Multi-sectoral approaches to HIV prevention
                                    and response through innovative partnerships
                                    and community engagement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cross-Sector Components Overview */}
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
                                Cross-Sector Intervention Areas
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive interventions spanning multiple
                                sectors to address HIV through innovative and
                                integrated approaches
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {crossSectorComponents.map((component, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg text-center"
                                >
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div
                                            className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${component.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <component.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            {component.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {component.description}
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
                                <Network className="h-12 w-12 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Implementation Priorities
                            </h2>
                            <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                                Cross-sector intervention priorities addressing
                                stigma, communication, workplace health, youth,
                                and male involvement
                                <br />
                                <span className="text-sm text-blue-200 mt-2 block">
                                    Multi-sectoral approaches for comprehensive
                                    HIV response
                                </span>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Shield className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Anti-Stigma & GBV
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {stigmaPriorities.map((priority, index) => (
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
                                        <MessageCircle className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        SBCC Approaches
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {sbccApproaches.map((approach, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-3"
                                        >
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-blue-100 leading-relaxed">
                                                {approach}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Briefcase className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Workplace Programs
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {workplacePriorities.map(
                                        (priority, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start space-x-3"
                                            >
                                                <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-blue-100 leading-relaxed">
                                                    {priority}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Youth Interventions
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {youthPriorities.map((priority, index) => (
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
                                        <Heart className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Male Involvement
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {maleInvolvementPriorities.map(
                                        (priority, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start space-x-3"
                                            >
                                                <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-blue-100 leading-relaxed">
                                                    {priority}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vulnerability Statistics Section */}
                <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                                <Users className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                                Vulnerability Statistics
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Key statistics highlighting vulnerable
                                populations and HIV prevalence patterns in
                                Tanzania
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {vulnerableGroups.map((item, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg"
                                >
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-start space-x-4">
                                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <Target className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                    {item.group}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {item.risk}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Innovative Investment Approaches */}
                <section className="py-20 bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 relative overflow-hidden">
                    {/* Background Graphics */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-400 rounded-full blur-3xl opacity-10"></div>
                        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-10"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
                                <Target className="h-12 w-12 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Innovative Investment Approaches
                            </h2>
                            <p className="text-indigo-100 max-w-4xl mx-auto text-lg">
                                Cross-sector collaboration and innovative
                                financing mechanisms to maximize impact and
                                sustainability
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <MessageCircle className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-100 transition-colors duration-300">
                                    Communication Innovation
                                </h3>
                                <p className="text-indigo-100 text-sm">
                                    Leveraging ICT platforms and social media
                                    for behavior change
                                </p>
                            </div>

                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Briefcase className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-100 transition-colors duration-300">
                                    Workplace Integration
                                </h3>
                                <p className="text-indigo-100 text-sm">
                                    Integrating HIV services with occupational
                                    health programs
                                </p>
                            </div>

                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-100 transition-colors duration-300">
                                    Community Engagement
                                </h3>
                                <p className="text-indigo-100 text-sm">
                                    Engaging communities and vulnerable
                                    populations as partners
                                </p>
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
                                For more information about cross-sector HIV
                                interventions and innovative investments,
                                contact NACP
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
