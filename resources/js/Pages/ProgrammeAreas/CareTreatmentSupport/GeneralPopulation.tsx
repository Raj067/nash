import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Users2,
    ArrowRight,
    Heart,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function GeneralPopulation() {
    const priorityStrategies = [
        "Revitalise general population prevention programming agenda by advocating for donors, private sector, community structures, and implementers to increase HIV prevention focus",
        "Employ data-driven approaches to segment and target the general population according to risk profiles",
        "Scale-up the provision of cost-effective, evidence-based, and risk-matched HIV prevention interventions to this population, including re-launching of SBCC campaigns that showed evidence of better results",
        "Mobilise resources and improve the allocation and accountability of R/CHMTs in planning, budgeting, coordinating, and overseeing interventions targeting the general population",
        "Leverage PHR programming investments and tools to enhance reach to the general population",
        "Strengthen the current M&E system and the research and learning agenda (RLA) to cater for the needs of the general population"
    ];

    return (
        <PublicLayout title="General Population">
            <Head title="General Population - Care, Treatment & Support" />
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Users2 className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        General Population
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Comprehensive HIV prevention and care services for the general population 
                                        in Tanzania's generalized epidemic context.
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
                                    Understanding the General Population Context
                                </h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                    Tanzania is experiencing a generalised epidemic, with heterosexual transmission being the main mode of transmission (80%). Based on the Spectrum estimates, there are currently approximately 1.7 million PLHIV in the country.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Based on this data, despite the disproportionately high burden of HIV among PHR, the remaining 'general population' still contributes immensely to the disease burden in terms of absolute numbers. Literature suggests that the genesis of the term 'general population' came about during early HIV research, whose goal was to uncover the aetiology of a new and alarming syndrome, HIV and AIDS.
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
                                Key priority strategies for addressing HIV prevention and care needs of the general population
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
                            Access General Population Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get comprehensive HIV prevention and care services designed for the general population 
                            at health facilities across Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find Services
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
