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
    Pill,
    Microscope,
    Database,
    Users,
    Building,
    Phone,
    Mail,
    MapPin,
    Settings,
    Target,
    Wrench,
} from "lucide-react";

export default function HealthSystems() {
    const systemComponents = [
        {
            title: "Quality Improvement of HIV and AIDS Services",
            description:
                "Patient-centered quality improvement with MOHCDGEC instructions for RHMTs, CHMTs and HFs to incorporate QI activities in annual plans",
            icon: Settings,
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Medicine and Technologies",
            description:
                "PSCM system coordinated by PLSU at NACP, LMU under PSS of MOHCDGEC, and partners for uninterrupted HIV commodities supply",
            icon: Pill,
            color: "from-green-500 to-blue-500",
        },
        {
            title: "Laboratory Services",
            description:
                "Essential laboratory services providing HIV status, CD4 count, clinical chemistry, haematology and HVL for HIVDR detection",
            icon: Microscope,
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "HIV Strategic Information",
            description:
                "Data collection, processing, and quality improvement for target setting, prioritization of services, and evidence-based decisions",
            icon: Database,
            color: "from-orange-500 to-red-500",
        },
        {
            title: "Community Based Health System",
            description:
                "Community participation as core principle with re-organization of local people for sustainable health programs",
            icon: Users,
            color: "from-teal-500 to-green-500",
        },
        {
            title: "Healthcare Equipment Maintenance",
            description:
                "Planned Preventive Maintenance (PPM) for HIV laboratory equipment to ensure uninterrupted service provision",
            icon: Wrench,
            color: "from-indigo-500 to-purple-500",
        },
    ];

    const qiPriorities = [
        "Maintain patient-centered quality improvement as integral part of HIV service provision",
        "Coordinate implementing partners to optimize resources and standardize quality",
        "Designate QI focal persons with well-defined roles across all levels of care",
        "Coordinate and harmonize QI activities including BRN star rating and supervision",
    ];

    const medicinePriorities = [
        "Strengthen coordination and management of HIV commodities supply chain",
        "Advocate for increased domestic funds allocation for AIDS Trust Fund",
        "Increased allocation of ATF budget for procurement of HIV commodities",
        "Strengthen resource mobilization mechanism for timely financial resources",
        "Improve national forecasting, quantification, procurement and delivery",
        "Strengthen integration of eLMIS and pharmacy module",
        "Strengthen capacity of HCWs to manage medicines and commodities",
        "Strengthen collaboration between government and implementing partners",
        "Improve MSD capacity for timely delivery of commodities",
        "Expand scope of Health facility therapeutic committees for HIV commodities",
        "Build capacity of health care workers on rational use of medicines",
        "Strengthen supportive supervision and mentoring for prescribers",
        "Introduce prescription audit and feedback, peer review processes",
    ];

    const labPriorities = [
        "Expand and improve laboratory infrastructure at district and lower health facility level",
        "Expand SLMTA approach for HIV laboratory quality assurance to district facilities",
        "Scale up HIV Viral Load testing through conventional and POC testing",
        "Strengthen Work Improvement Teams at CTC and Laboratory level",
        "Strengthen laboratory supply chain management for HIV commodities",
        "Strengthen sample transportation system from facility to hub and to HVL laboratories",
        "Strengthen laboratory information system to capture HIV related data",
    ];

    const siPriorities = [
        "Harmonize parallel data recording and establish inter-database management for HTS, Viral Load and care",
        "Improve coverage for data management platforms including mobile services securely linked to central database",
        "Strengthen HIV commodities reporting systems for timely and consistent data",
        "Designate and capacitate human resources for data management systems",
        "Develop and utilize standard operating procedures for data dissemination and use",
        "Designate broad dissemination of Strategic Information based on routine data and research",
        "Strengthen coordination and promote utilization of health sector HIV research and evaluation",
    ];

    const cbhsPriorities = [
        "Strengthen institutional capacity to mobilize and manage resources for CBHP",
        "Finalize process of formalization of Community Health Worker cadre",
        "Strengthen management and coordination mechanism of CBHP at all levels",
        "Strengthen advocacy, communication and social mobilization",
        "Strengthen support systems for effective implementation of CBHP",
    ];

    const equipmentPriorities = [
        "Establish national system for monitoring functional status of laboratory equipment",
        "Establish pre-qualified procurement system for HVL and EID machines using placement system",
        "Strengthen health care equipment unit at MOHCDGEC and zonal maintenance workshops",
        "Ensure regular and timely PPM to ensure uninterrupted services",
        "Advocate for sufficient resources for laboratory PPM",
        "Ensure timely procurement and supply of reagents including reagent rentals",
    ];

    return (
        <PublicLayout title="Building Resilient Health Systems">
            <Head title="Building Resilient Health Systems" />

            <div className="min-h-screen">
                {/* Hero Section with Background Image */}
                <div className="relative h-[500px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(/images/hiv/hiv3.jpeg)`,
                        }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <Building className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Building Resilient Health Systems
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Strengthening health systems to deliver
                                    quality HIV services through improved
                                    infrastructure, technology, and human
                                    resources
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* System Components Overview */}
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
                                Health System Components
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Key components of resilient health systems
                                supporting comprehensive HIV and AIDS response
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {systemComponents.map((component, index) => (
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
                                <Building className="h-12 w-12 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Implementation Priorities
                            </h2>
                            <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                                Key priority areas for strengthening health
                                systems to support HIV and AIDS response
                                <br />
                                <span className="text-sm text-blue-200 mt-2 block">
                                    Building resilient and sustainable health
                                    infrastructure
                                </span>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Settings className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Quality Improvement
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {qiPriorities.map((priority, index) => (
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
                                        <Pill className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Medicine & Technologies
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {medicinePriorities.map(
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
                                        <Microscope className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Laboratory Services
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {labPriorities.map((priority, index) => (
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
                                        <Database className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Strategic Information
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {siPriorities.map((priority, index) => (
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
                                        Community Health Systems
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {cbhsPriorities.map((priority, index) => (
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
                                        <Wrench className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Equipment Maintenance
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {equipmentPriorities.map(
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
                                For more information about health system
                                strengthening initiatives, contact NACP
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
                                            nacp@afya.go.tz
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
