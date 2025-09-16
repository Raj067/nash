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
    BarChart3,
    Briefcase,
    CheckCircle,
    Mail,
    Phone,
    Shield,
    Target,
    Users,
} from "lucide-react";

export default function NacpRoles() {
    const coreResponsibilities = [
        {
            icon: Target,
            title: "Strategic Planning & Implementation",
            description:
                "Collaborate with various stakeholders at all levels for planning and implementation of the Health Sector HIV Strategic Plan (HSHSP).",
        },
        {
            icon: Shield,
            title: "Service Integration",
            description:
                "Facilitate the integration of Health Sector HIV Prevention, Care, and Treatment and support Services with other Health Services.",
        },
        {
            icon: CheckCircle,
            title: "Quality Improvement",
            description:
                "Promote quality improvement of Health Sector HIV Prevention, Care, Treatment and Support services at all levels.",
        },
        {
            icon: Users,
            title: "Communication & Advocacy",
            description:
                "Design, develop and implement social and behaviour change communications to promote uptake of health sector HIV and AIDS interventions countrywide.",
        },
        {
            icon: Briefcase,
            title: "Procurement & Distribution",
            description:
                "In collaboration with the procurement unit, facilitate procurement, distribution, monitoring and evaluation of HIV and AIDS commodities.",
        },
        {
            icon: BarChart3,
            title: "Monitoring & Evaluation",
            description:
                "Design and develop a monitoring and evaluation framework and ensure availability of recording and reporting tools for HIV and AIDS Interventions at all levels.",
        },
    ];

    const additionalFunctions = [
        {
            title: "Information Systems",
            description:
                "Facilitate integration of HIV Information System within the national M&E strengthening initiative and strengthen and promote effective and efficient data collection, analysis and utilization of HIV and AIDS information at all levels.",
        },
        {
            title: "Best Practices Promotion",
            description:
                "Organise and coordinate the promotion of Health Sector HIV Prevention, Care and Treatment Services best practices.",
        },
        {
            title: "Operational Research",
            description:
                "Organize and Coordinate Health Sector HIV Prevention, Care, and Treatment and support operational research in collaboration with research institution.",
        },
        {
            title: "Technical Leadership",
            description:
                "Provide overall technical leadership and coordination for Tanzania's national HIV/AIDS response across all sectors and stakeholders.",
        },
    ];
    return (
        <PublicLayout title="NASHCOP Roles & Responsibilities">
            <Head title="NASHCOP Roles & Responsibilities" />

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
                                    <Briefcase className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    NASHCOP Roles & Responsibilities
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Comprehensive overview of NASHCOP's roles and
                                    responsibilities in Tanzania's HIV/AIDS response
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Responsibilities */}
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
                                Core Responsibilities
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                NASHCOP's primary functions in coordinating Tanzania's national HIV/AIDS response
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coreResponsibilities.map((responsibility, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg"
                                >
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="text-center relative z-10">
                                        <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                            <responsibility.icon className="h-10 w-10 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                            {responsibility.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {responsibility.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Additional Key Functions */}
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
                                <BarChart3 className="h-12 w-12 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Additional Key Functions
                            </h2>
                            <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                                Extended responsibilities that support NASHCOP's comprehensive approach to HIV/AIDS response
                                <br />
                                <span className="text-sm text-blue-200 mt-2 block">
                                    Strategic coordination and technical leadership
                                </span>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {additionalFunctions.map((func, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Briefcase className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                                        {func.title}
                                    </h3>
                                    <p className="text-blue-100 leading-relaxed">
                                        {func.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
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
                                    Get in Touch / Wasiliana Nasi
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    For more information about NASHCOP's roles and responsibilities, contact us:
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                                    <div className="flex items-center space-x-2">
                                        <Phone className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-700 font-medium">
                                            +255 (0) 262060148
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Mail className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-700 font-medium">
                                            nacp@afya.go.tz
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
