import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Heart,
    ArrowRight,
    Shield,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Condoms() {
    const priorityStrategies = [
        "Strengthen the promotion of male and female condoms, including correct and consistent use of condoms through multiple channels",
        "Empower adolescent girls and women to increase their condom negotiation skills",
        "Diversify condom distribution and marketing approaches at different levels including within communities",
        "Improve market stewardship through strong leadership and coordination in support of TMA",
        "Strengthen condom distribution from facility to community level (e.g., bars, guest houses, night clubs) using various community channels and structures (CHACC, WEO, VEO, peers)",
        "Scale-up the community dispenser model by installing additional condom dispensers in unreached community venues/hotspots, HLIs and workplaces",
        "Maximise market efficiency, equity, and sustainability by coordinating condoms available through the public, social marketing, and commercial sector (including introducing a mechanism to regulate condom prices)",
        "Strengthen the integration of condom programming with HIV, SRH and other facility-and community-based interventions (general population and at-risk groups)",
        "Improve availability and consistent supply of male and female condoms",
        "Improve forecasting, quantification and supply and planning of condoms, according to the NMCS and the newly issued condom distribution guide (this process is supposed to be done in a participatory manner)",
        "Strengthen the condom supply chain and distribution systems to ensure that adequate quantities are available in a timely manner, accessible, and equitably distributed at the facility and community level, including workplaces. (This strategy goes hand in hand with the development of a sustainable, cost-effective condom distribution model/ecosystem that uses local structures)",
        "Improve surveillance, evaluation and operational research in condom programming"
    ];

    return (
        <PublicLayout title="Comprehensive Condom Programming">
            <Head title="Condom Programming - Prevention Programme" />

            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Shield className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Comprehensive Condom Programming
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Highly effective multipurpose prevention technology providing triple protection 
                                        against HIV, STIs and pregnancy.
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
                                    Since the heterosexual route is the most predominant means of acquiring and transmitting HIV, 
                                    condom programming is among one of the important pillars of primary HIV prevention. Condoms are 
                                    safe and do not require a prescription. The correct and consistent use of male and female condoms 
                                    remains to be the only available highly effective multipurpose prevention technologies (MPT) that 
                                    provide triple protection in preventing HIV, STIs and pregnancy.
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
                                Strategic priorities for comprehensive condom programming across Tanzania
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
                            Access Free Condoms
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get free male and female condoms at health facilities and community distribution points across Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find Distribution Points
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
