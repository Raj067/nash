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
    Activity,
    CheckCircle,
    Heart,
    Mail,
    Phone,
    Shield,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";

export default function StrategicPlan() {
    const strategicObjectives = [
        {
            title: "HIV Prevention",
            description:
                "To reduce HIV incidence by implementing interventions that target major sources of new infections, namely heterosexual relationships, casual heterosexual sex, and KVP and STI management.",
            icon: Shield,
            color: "from-blue-600 to-cyan-600",
            strategies: [
                "Sustaining gains in condom distribution to ensure availability and accessibility",
                "Enhanced male involvement in HIV prevention interventions",
                "Enhancing prevention strategies that reduce risk of HIV exposure",
                "Rigorous SBCC to address societal causes of HIV risk and vulnerability",
                "Secondary prevention through ART including PMTCT, PEP and PrEP",
            ],
        },
        {
            title: "Care, Treatment and Support",
            description:
                "Ensure universal coverage of CTC services in all public, faith based and private health facilities.",
            icon: Heart,
            color: "from-red-600 to-pink-600",
            strategies: [
                "Strengthen mechanisms for linkage from HIV testing services to care",
                "Strengthen community level follow-up and treatment support mechanisms",
                "Enhance early initiation into ART and adherence support services",
                "Intensified action to enhance EID targeting children with perinatal HIV",
                "Reduce barriers to provision of ART to key populations",
            ],
        },
        {
            title: "Health Systems Strengthening",
            description:
                "Rectifying weaknesses in health care delivery systems that are slowing the scale-up of HIV treatment programmes.",
            icon: Activity,
            color: "from-green-600 to-emerald-600",
            strategies: [
                "Mobilize resources to support universal access to HIV/AIDS services",
                "Continue providing community-based care and support",
                "M&E to ensure evidence-informed programming and decision making",
                "Mobilization of financial and human resources",
                "Strengthen health care infrastructure and systems",
            ],
        },
    ];

    const targets909090 = [
        {
            target: "90%",
            description: "Of people living with HIV know their HIV status",
            icon: Users,
            progress: 88,
            status: "Near Target",
        },
        {
            target: "90%",
            description:
                "Of people who know their HIV-positive status are accessing treatment",
            icon: Heart,
            progress: 97,
            status: "Target Achieved",
        },
        {
            target: "90%",
            description: "Of people on treatment have suppressed viral loads",
            icon: TrendingUp,
            progress: 95,
            status: "Target Achieved",
        },
    ];

    const keyAchievements = [
        "Significant progress towards 95-95-95 targets with innovative approaches and partnerships",
        "AIDS-related deaths declined by 50% from 2010 to 2020",
        "Large-scale rollout of ART treatment transforming HIV from fatal to manageable condition",
        "Establishment of comprehensive prevention programs targeting all populations",
        "Integration of HIV services with other health services for improved efficiency",
    ];

    return (
        <PublicLayout title="National Strategic Plan 90-90-90">
            <Head title="National Strategic Plan 90-90-90" />

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
                                    <Target className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    National Strategic Plan 90-90-90
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Tanzania's strategic framework for achieving 90-90-90 targets
                                    and ending AIDS by 2030
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 90-90-90 Targets Progress */}
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
                                90-90-90 Targets Progress
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Our progress towards achieving the UNAIDS 90-90-90 targets
                                for ending AIDS as a public health threat
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {targets909090.map((target, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg text-center"
                                >
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <target.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-blue-600 mb-4">
                                            {target.target}
                                        </h3>
                                        <p className="text-gray-700 font-medium mb-6 leading-relaxed">
                                            {target.description}
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">
                                                    Current Progress
                                                </span>
                                                <span className="text-sm font-semibold text-gray-800">
                                                    {target.progress}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div
                                                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                                                    style={{
                                                        width: `${target.progress}%`,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="text-center">
                                                <span
                                                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                                        target.progress >= 90
                                                            ? "bg-green-100 text-green-800"
                                                            : "bg-yellow-100 text-yellow-800"
                                                    }`}
                                                >
                                                    {target.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Strategic Objectives */}
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
                                Strategic Objectives
                            </h2>
                            <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                                Three key strategic objectives that guide our
                                comprehensive approach to HIV/AIDS response
                                <br />
                                <span className="text-sm text-blue-200 mt-2 block">
                                    Achieving 90-90-90 targets across Tanzania
                                </span>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                            {strategicObjectives.map((objective, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <objective.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                                        {objective.title}
                                    </h3>
                                    <p className="text-blue-100 leading-relaxed mb-6">
                                        {objective.description}
                                    </p>
                                    <div className="space-y-3">
                                        {objective.strategies.map(
                                            (strategy, strategyIndex) => (
                                                <div
                                                    key={strategyIndex}
                                                    className="flex items-start space-x-3 text-left"
                                                >
                                                    <CheckCircle className="w-4 h-4 text-green-300 mt-1 flex-shrink-0" />
                                                    <p className="text-blue-100 text-sm leading-relaxed">
                                                        {strategy}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Achievements */}
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
                                <TrendingUp className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                                Key Achievements
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Significant milestones achieved in Tanzania's
                                fight against HIV/AIDS
                            </p>
                        </div>

                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="space-y-6">
                                    {keyAchievements.map((achievement, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-4"
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                                <CheckCircle className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                {achievement}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <div className="text-center"></div>
            </div>
        </PublicLayout>
    );
}
