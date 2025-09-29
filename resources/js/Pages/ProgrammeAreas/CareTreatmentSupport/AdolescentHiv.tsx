import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Users,
    ArrowRight,
    Heart,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function AdolescentHiv() {
    const priorityStrategies = [
        "Promptly link A/YLHIV to DSDMs to provide peer support and motivation, build resilience, strengthen problem-solving skills, and overcome adherence challenges",
        "Disseminate policies on the age of consent for HIV testing to stakeholders, including scale-up of self-testing",
        "Strengthen index testing specifically testing sexual contacts of adolescents",
        "Strengthen implementation of an adolescent transition package to provide HCWs with the required experience and tools to prepare ALHIV for transitioning to adult care",
        "Strengthen community approaches to reach adolescents in formal and informal sectors",
        "Intensify follow up of missed appointments before lost to follow up",
        "Scale-up and fully utilise community led services (DSDM) in ART delivery",
        "Routine screening and treatment of STIs and mental health for adolescents",
        "Intensify comprehensive, integrated adolescent-friendly health and social services (NCDs, mental health and psychosocial support services, alcohol and substance abuse)",
        "Intensify community linkage to social services through CBHSP/CHWs and Community Adolescent cluster leaders for peer support, addressing stigma and discrimination",
        "Capacity building for HCWs on addressing the changing needs of ALHIV (psychosocial and medical)",
        "Monitor early warning signs for drug resistance and conduct routine surveillance, and scale-up second and third line therapeutic network"
    ];

    return (
        <PublicLayout title="Adolescent HIV Services">
            <Head title="Adolescent HIV Services - Care, Treatment & Support" />
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Users className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Adolescent HIV Services
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Specialized HIV care and treatment services for adolescents and young people, 
                                        focusing on peer support, transition care, and comprehensive health services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Priority Strategies Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Priority Strategies
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Strategic priorities for strengthening adolescent HIV services and improving health outcomes for young people living with HIV
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="grid gap-6">
                                {priorityStrategies.map((strategy, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                            Access Adolescent HIV Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get specialized HIV care and treatment services for adolescents and young people 
                            at health facilities across Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find Adolescent Services
                                </Button>
                            </a>
                            <a href="/programme-areas/care-treatment-support">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                                >
                                    <ArrowRight className="mr-2 h-5 w-5" />
                                    Back to Care & Treatment
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
