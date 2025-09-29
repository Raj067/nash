import React from "react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import {
    Building2,
    Users,
    Target,
    BookOpen,
    Heart,
    MessageSquare,
    Package,
    BarChart3,
    FlaskConical,
    Handshake,
    DollarSign,
} from "lucide-react";

const CoreFunctions = () => {
    const coreFunctions = [
        {
            icon: Target,
            title: "Strategic Implementation",
            description: "Implement the Health Strategy in line with the first national strategic framework for the control of HIV/AIDS, sexually transmitted infections (STIs), and hepatitis in the country.",
        },
        {
            icon: BarChart3,
            title: "Coordination & Monitoring",
            description: "Coordinate, supervise, monitor, and evaluate prevention, treatment, and care interventions for HIV/AIDS, STIs, and hepatitis.",
        },
        {
            icon: Handshake,
            title: "Stakeholder Collaboration",
            description: "Collaborate with stakeholders at all levels in planning and implementing the strategic plan for HIV/AIDS, STIs, and hepatitis within the health sector.",
        },
        {
            icon: BookOpen,
            title: "Guidelines Development",
            description: "Develop strategies, guidelines, protocols, and training packages for various interventions on HIV/AIDS, STIs, and hepatitis.",
        },
        {
            icon: Heart,
            title: "Service Integration",
            description: "Integrate prevention, treatment, and care services into other health services.",
        },
        {
            icon: MessageSquare,
            title: "Information & Communication",
            description: "Provide and coordinate information, education, and communication (IEC) for behavior change in response to HIV/AIDS, STIs, and hepatitis.",
        },
        {
            icon: Package,
            title: "Supply Chain Management",
            description: "In collaboration with the supply unit, facilitate procurement, distribution, monitoring, and evaluation of commodities and medical supplies for HIV/AIDS, STIs, and hepatitis, including condoms and reagents.",
        },
        {
            icon: BarChart3,
            title: "Monitoring & Evaluation Systems",
            description: "Coordinate monitoring and evaluation (M&E) systems and develop related tools, as well as ensure availability of data storage systems for interventions on HIV/AIDS, STIs, and hepatitis.",
        },
        {
            icon: FlaskConical,
            title: "Research Coordination",
            description: "In collaboration with research institutions, coordinate research on HIV/AIDS, STIs, and hepatitis in the health sector.",
        },
        {
            icon: Users,
            title: "Technical Support",
            description: "Provide technical support and coordinate stakeholders implementing HIV/AIDS, STI, and hepatitis interventions in the country.",
        },
        {
            icon: DollarSign,
            title: "Resource Mobilization",
            description: "Mobilize funds and resources for the national response to HIV/AIDS, STIs, and hepatitis.",
        },
    ];

    return (
        <PublicLayout>
            <Head title="Core Functions of NASHCOP - NASHCOP Tanzania" />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                        <Building2 className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Core Functions of NASHCOP
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        The National Program for the Control of HIV/AIDS, Sexually Transmitted Infections (STIs), 
                        and Hepatitis operates under the Ministry of Health through comprehensive strategic functions.
                    </p>
                </div>
            </section>

            {/* Program Overview Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card className="shadow-lg border-0">
                            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                <CardTitle className="text-2xl font-bold flex items-center">
                                    <Building2 className="h-6 w-6 mr-3" />
                                    Program Structure & Operations
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                <div className="space-y-6 text-gray-700 leading-relaxed">
                                    <p className="text-lg">
                                        The National Program for the Control of HIV/AIDS, Sexually Transmitted Infections (STIs), 
                                        and Hepatitis (NASHCoP) operates under the Ministry of Health through the Chief Medical Officer.
                                    </p>
                                    
                                    <p>
                                        At the regional and district levels, the program works directly with PO-RALG, Regional Medical Officers, 
                                        and District Medical Officers to ensure that services are established in all health facilities. 
                                        For effective operational communication, each region and district appoints coordinators for HIV, STIs, 
                                        and hepatitis, who support the Regional and District Medical Officers in coordinating all related 
                                        activities and reporting to both the medical officers and the NASHCoP at the national level.
                                    </p>
                                    
                                    <p>
                                        Through this structure, HIV, STI, and hepatitis activities are effectively managed across all levels, 
                                        and information is reported on time to all stakeholders.
                                    </p>

                                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                                        <h3 className="font-semibold text-blue-900 mb-2">Collaboration with Stakeholders</h3>
                                        <p className="text-blue-800">
                                            At the national level, NASHCoP collaborates with various local and international 
                                            stakeholders and donors in the control of HIV, STIs, and hepatitis in the country.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Functions Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                            Strategic Functions
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Core Functions of NASHCoP
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive strategic functions ensuring effective implementation of HIV, STI, 
                            and hepatitis control programs across Tanzania.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreFunctions.map((func, index) => {
                            const IconComponent = func.icon;
                            return (
                                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                                                    <IconComponent className="h-6 w-6 text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                                    {func.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {func.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Working Together for a Healthier Tanzania
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Through these core functions, NASHCOP ensures comprehensive and coordinated 
                        response to HIV, STIs, and hepatitis across all levels of the health system.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/about/about-us"
                            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            Learn More About NASHCOP
                        </a>
                        <a
                            href="/contact/locations"
                            className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default CoreFunctions;
