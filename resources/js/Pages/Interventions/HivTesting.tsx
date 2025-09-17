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
    Heart,
    Mail,
    MapPin,
    Phone,
    Shield,
    Target,
    TestTube,
    Users,
} from "lucide-react";

export default function HivTesting() {
    const testingModalities = [
        {
            title: "Client Initiated Testing and Counselling (CITC)",
            description:
                "Voluntary testing services initiated by clients seeking to know their HIV status",
            icon: Users,
        },
        {
            title: "Community Based HIV Testing Services (CBHTS)",
            description:
                "Testing services provided in community settings to reach populations with limited access to health facilities",
            icon: Heart,
        },
        {
            title: "Index Client Testing and Partner Notification",
            description:
                "Testing services for partners and contacts of people diagnosed with HIV",
            icon: Shield,
        },
        {
            title: "Provider-Initiated Testing and Counselling (PITC)",
            description:
                "Testing services initiated by healthcare providers in both health facilities and community settings",
            icon: TestTube,
        },
    ];

    const priorities = [
        "Intensify existing and/or identify new alternative service delivery models for HTS",
        "Scale up targeted HIV testing",
        "Strengthen health systems to support HTS",
        "Address human resource needs for the scaling up",
        "Service delivery models that have proved to and/or can increase uptake of HIV testing services and improve yield",
    ];

    const linkagePriorities = [
        "Enhance post-test counselling to ensure effective referral to care and treatment services",
        "Establish effective referral and linkage to prevention and care, treatment and support services",
        "Improve integration of data between testing and treatment centre",
        "Strengthen post-testing clubs",
    ];
    return (
        <PublicLayout title="HIV Testing Services & Linkage">
            <Head title="HIV Testing Services & Linkage" />

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
                                    <TestTube className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    HIV Testing Services & Linkage
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Comprehensive HIV testing services and linkage to
                                    prevention, care, treatment and support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testing Modalities Section */}
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
                                HIV Testing Service Modalities
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                HTS are provided through a mix of modalities to
                                ensure comprehensive coverage and accessibility
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {testingModalities.map((modality, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg text-center"
                                >
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <modality.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            {modality.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {modality.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HTS Priorities Section */}
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
                                <TestTube className="h-12 w-12 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                HTS Implementation Priorities
                            </h2>
                            <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                                Strategic priorities to achieve the fast track
                                target for HIV testing (first 90)
                                <br />
                                <span className="text-sm text-blue-200 mt-2 block">
                                    Ensuring comprehensive coverage and accessibility
                                </span>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <TestTube className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        HIV Testing Services Priorities
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {priorities.map((priority, index) => (
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
                                        Linkage to Care Priorities
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {linkagePriorities.map((priority, index) => (
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

                {/* Linkage Process Section */}
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
                                <Heart className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                                Linkage to Prevention, Care, Treatment and Support
                            </h2>
                            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                                HIV testing presents an opportunity to identify
                                client's HIV status and link them to appropriate
                                services through comprehensive post-test
                                counselling and effective referral systems
                            </p>
                        </div>

                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <TestTube className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            HIV Testing
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Comprehensive testing through multiple
                                            modalities
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            Post-Test Counselling
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Comprehensive counselling for all
                                            clients regardless of results
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Heart className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            Linkage to Services
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Referral to prevention, care, treatment
                                            and support services
                                        </p>
                                    </div>
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
