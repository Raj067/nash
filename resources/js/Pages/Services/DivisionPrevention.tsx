import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Activity,
    Calendar,
    CheckCircle,
    FileText,
    Mail,
    Phone,
    Settings,
    Shield,
    Target,
    Users,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

export default function DivisionPrevention() {
    const coreFunctions = [
        {
            icon: Calendar,
            title: "Assessment & Management",
            description:
                "To assess, manage, coordinate, supervise, monitor and evaluate the implementation of HIV Prevention interventions.",
        },
        {
            icon: Target,
            title: "Advocacy Strategies",
            description:
                "To develop advocacy strategies for HIV Prevention and carry out HIV combination prevention campaigns.",
        },
        {
            icon: FileText,
            title: "Policy Development",
            description:
                "To develop HIV/AIDS Policy guidelines and Standard Operating Procedures (SOPs) for HIV Prevention Interventions.",
        },
        {
            icon: Users,
            title: "Partner Coordination",
            description:
                "To coordinate all Implementing Partners under each HIV Prevention intervention in line with Regional and Council Comprehensive Health Plans (R/CCHP).",
        },
        {
            icon: Settings,
            title: "Technical Support",
            description:
                "To provide technical support on HIV Prevention services in Regions and Councils.",
        },
        {
            icon: CheckCircle,
            title: "Gender Integration",
            description:
                "To collaborate with other Sectors in the implementation of Gender related HIV interventions.",
        },
    ];

    const biomedicalServices = [
        "HIV Testing Services",
        "Voluntary Medical Male Circumcision (VMMC)",
        "Early Infancy Male Circumcision",
        "STI/RTI Management",
        "Key and Vulnerable Populations interventions",
    ];

    const behavioralServices = [
        "IEC/SBCC (Information, Education, Communication/Social and Behavior Change Communication)",
        "Condom Programming",
        "Gender-based interventions",
        "Adolescents Reproductive Health (ARH)",
        "HIV advocacy and behavior change campaigns",
    ];
    return (
        <PublicLayout title="Division of Prevention">
            <Head title="Division of Prevention" />

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
                                    Division of Prevention
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Leading HIV prevention efforts through
                                    biomedical and behavioral interventions
                                    across Tanzania
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Objectives */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                                <Target className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Objectives
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Our primary mission in leading Tanzania's HIV
                                prevention efforts
                            </p>
                        </div>

                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="text-center relative z-10">
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                                    <Target className="h-12 w-12 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                                    Primary Objective
                                </h3>
                                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                                    To provide overall leadership and advocacy
                                    to HIV prevention services including
                                    Bio-medical and Behavioral interventions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Functions */}
                <section className="py-20 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6">
                                <Settings className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Core Functions
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Essential functions that drive our HIV
                                prevention initiatives across Tanzania
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coreFunctions.map((func, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg"
                                >
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="text-center relative z-10">
                                        <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                            <func.icon className="h-10 w-10 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                            {func.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {func.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Division Sections */}
                <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6">
                                <Activity className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
                                Division Sections
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Two specialized sections working together to
                                deliver comprehensive HIV prevention services
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Biomedical Section */}
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg">
                                {/* Card Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="text-center relative z-10">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                        <Activity className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-green-600 transition-colors duration-300">
                                        Biomedical Section
                                    </h3>
                                    <div className="space-y-4 text-left">
                                        {biomedicalServices.map(
                                            (service, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start space-x-3"
                                                >
                                                    <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0 group-hover:bg-green-700 transition-colors duration-300"></div>
                                                    <p className="text-gray-700 leading-relaxed">
                                                        {service}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Behavioral Section */}
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg">
                                {/* Card Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="text-center relative z-10">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                        <Users className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                                        Behavioral Section
                                    </h3>
                                    <div className="space-y-4 text-left">
                                        {behavioralServices.map(
                                            (service, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start space-x-3"
                                                >
                                                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:bg-purple-700 transition-colors duration-300"></div>
                                                    <p className="text-gray-700 leading-relaxed">
                                                        {service}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-12 shadow-lg text-center max-w-2xl mx-auto">
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                                    <Mail className="h-10 w-10 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    Contact Prevention Division
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    For more information about HIV prevention
                                    services and programs:
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                                    <div className="flex items-center space-x-2">
                                        <Mail className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-700 font-medium">
                                            prevention@nacp.go.tz
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Phone className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-700 font-medium">
                                            +255-22-2120270
                                        </span>
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
