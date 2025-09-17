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
    Database,
    Mail,
    Phone,
    Pill,
    Settings,
    Target,
    Truck,
    Users,
} from "lucide-react";

export default function Pharmaceuticals() {
    const divisionObjectives = [
        "To provide vision and leadership on HIV Pharmaceuticals and Laboratory Services issues",
        "To be the overall advisor on HIV Logistic, supply chain system and commodities matters to the NACP and the Ministry",
        "To lead the quantification/forecasting of HIV medicines and other HIV related commodities",
        "To assess and evaluate the performance for short and long-term government and donor-funded operational plans for improving supply chain management",
    ];

    const sections = [
        {
            title: "Pharmaceutical Services",
            icon: Pill,
            color: "from-blue-600 to-cyan-600",
            description:
                "Leading HIV medicines quantification, supply chain management and rational use of medicines.",
            functions: [
                "Lead quantification/forecasting of HIV medicines and commodities",
                "Overall advisor on HIV logistics and supply chain systems",
                "Assess and evaluate supply chain management performance",
                "Coordinate supply chain interventions for HIV medicines",
                "Oversee rational use of HIV medicine and pharmacovigilance",
            ],
        },
        {
            title: "Laboratory Services",
            icon: Database,
            color: "from-green-600 to-emerald-600",
            description:
                "Coordinating HIV laboratory services and ensuring quality testing across Tanzania.",
            functions: [
                "Lead quantification/forecasting of laboratory commodities",
                "Coordinate HIV laboratory services nationwide",
                "Coordinate HIV Viral load testing programs",
                "Ensure laboratory machines and equipment functionality",
                "Oversee laboratory quality assurance programs",
            ],
        },
    ];

    const keyFunctions = [
        {
            icon: Target,
            title: "Strategic Leadership",
            description:
                "Provide vision and leadership on HIV Pharmaceuticals and Laboratory Services issues across Tanzania.",
        },
        {
            icon: BarChart3,
            title: "Quantification & Forecasting",
            description:
                "Lead the quantification/forecasting of HIV medicines and other HIV related commodities.",
        },
        {
            icon: Truck,
            title: "Supply Chain Management",
            description:
                "Plan, budget, manage and monitor desired HIV commodity stock levels in the supply chain.",
        },
        {
            icon: Users,
            title: "Technical Support",
            description:
                "Provide leadership and technical support to RACCs, DACCs and all technical staff.",
        },
        {
            icon: Settings,
            title: "Policy Development",
            description:
                "Coordinate revision or development of policy guidelines, training materials and SOPs for HIV logistics.",
        },
        {
            icon: Database,
            title: "Performance Standards",
            description:
                "Develop and set performance standards with staff and ensure timely execution of planned activities.",
        },
    ];

    const additionalResponsibilities = [
        "Provide technical assistance for rational use of commodities including provision of safe blood",
        "Develop proposal for resource mobilization for activities under logistics, supply chain and commodities",
        "Coordinate all Implementing Partners under each Supply chain system",
        "Coordinate forums for logistics and supply chain with HIV/AIDS stakeholders",
        "Ensure timely submission of planned activities under all available source of funds (CDC, GF, WHO, UNICEF, PEPFAR)",
    ];

    return (
        <PublicLayout title="Pharmaceuticals & Laboratory Services">
            <Head title="Pharmaceuticals & Laboratory Services" />

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
                                    <Pill className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Pharmaceuticals & Laboratory Services
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Ensuring quality pharmaceutical and laboratory
                                    services for HIV/AIDS programs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Unit Objectives */}
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
                                Division Objectives
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Our strategic goals in providing leadership on
                                pharmaceutical and laboratory services
                            </p>
                        </div>

                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="space-y-6">
                                    {divisionObjectives.map((objective, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-4"
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                                <span className="text-white font-bold text-lg">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                {objective}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Functions */}
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
                                <Pill className="h-12 w-12 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Key Functions
                            </h2>
                            <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                                Essential functions that drive our pharmaceutical
                                and laboratory services
                                <br />
                                <span className="text-sm text-blue-200 mt-2 block">
                                    Supporting HIV/AIDS program effectiveness
                                    across Tanzania
                                </span>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {keyFunctions.map((func, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <func.icon className="h-8 w-8 text-white" />
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

                {/* Unit Sections */}
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
                                <Database className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                                Division Sections
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Two specialized sections working together to
                                deliver comprehensive pharmaceutical and laboratory
                                services
                            </p>
                        </div>

                        <div className="space-y-8">
                            {sections.map((section, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl shadow-lg"
                                >
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div
                                        className={`bg-gradient-to-r ${section.color} text-white p-6 relative z-10`}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full shadow-lg">
                                                <section.icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">
                                                    {section.title}
                                                </h3>
                                                <p className="text-blue-100 leading-relaxed">
                                                    {section.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8 relative z-10">
                                        <h4 className="font-semibold text-gray-800 mb-6 text-lg">
                                            Key Functions:
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {section.functions.map(
                                                (func, funcIndex) => (
                                                    <div
                                                        key={funcIndex}
                                                        className="flex items-start space-x-3"
                                                    >
                                                        <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-700 transition-colors duration-300"></div>
                                                        <p className="text-gray-700 leading-relaxed">
                                                            {func}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <div className="text-center"></div>
            </div>
        </PublicLayout>
    );
}
