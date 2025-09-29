import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Activity,
    ArrowRight,
    Heart,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Stis() {
    const priorityStrategies = [
        "Increase community awareness about STIs (including promotion of HPV vaccination for those eligible)",
        "Strengthen STI management services for PLHIV and PHR as part of the standard package of HIV prevention",
        "Strengthen the integration of STI management into combination prevention services, namely; PLHIV care, and treatment services, and other SRH services",
        "Improve STI contact tracing",
        "Revitalise regular antimicrobial resistance AMR surveillance of STIs to determine if current regimens are still effective and to guide the selection of appropriate treatment regimens",
        "Improve the quality of STI services (in all service delivery platforms) as part of the quality assurance and quality improvement strategy",
        "Develop an e-learning system and facility-based training package for the management of STI/RTI",
        "Improve availability of STI commodities at facility level (including medicines and laboratory reagents)",
        "Scale-up dual HIV/Syphilis testing for pregnant women attending ANC and appropriately manage those who are infected",
        "Strengthen multi-sectoral approach on comprehensive HIV prevention modalities to meet community demand",
        "Strengthen the M&E system for the improvement of data collection and reporting from the source of STI management",
        "Mobilise resources for supporting capacity building of HCWs on STI diagnosis and management, procurement of STI medicines and laboratory commodities, STI surveillance, and research",
        "Enhance engagement of the private sector (health facilities/ pharmacies) in the STI/RTI syndromic case management approach"
    ];

    return (
        <PublicLayout title="Sexually Transmitted Infections (STIs)">
            <Head title="STIs - Prevention Programme" />
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Activity className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Sexually Transmitted Infections (STIs)
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Comprehensive STI prevention, diagnosis, and treatment services integrated 
                                        with HIV prevention and care programs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Program Overview Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Program Overview
                                </h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    The NASHCoP SP will maintain the gains achieved during the previous implementation period 
                                    and further strengthen program fidelity. The strategies focus on comprehensive STI management 
                                    integrated with HIV prevention and care services to reduce transmission and improve health outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Priority Strategies Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Priority Strategies
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Strategic priorities for strengthening STI prevention, diagnosis, and treatment services
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="grid gap-6">
                                {priorityStrategies.map((strategy, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700 leading-relaxed flex-1">
                                                {strategy}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Access STI Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get comprehensive STI testing, treatment, and prevention services 
                            at health facilities across Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find STI Services
                                </Button>
                            </a>
                            <a href="/programme-areas/prevention">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                                >
                                    <ArrowRight className="mr-2 h-5 w-5" />
                                    Back to Prevention
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
