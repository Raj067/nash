import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    HandHeart,
    ArrowRight,
    Heart,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Gbv() {
    const priorityStrategies = [
        "Increase community awareness of GBV/VAWC (prevalence, link with HIV and other poor SRH outcomes, importance of reporting, and available services and support)",
        "Increase awareness on GBV/VAWC at workplaces and academic institutions",
        "Strengthen the integration of GBV/VAWC/VAM prevention and response in HIV combination prevention programmes for all populations",
        "Mainstream HIV, VH and STIs and specifically GBV/VAWC in inter and cross-sectoral national policies, guidelines and programs",
        "Scale-up the implementation of gender-transformative interventions to address root causes of GBV",
        "Advocate for the amendment of legislation that increases the risk of HIV, VH and STIs transmission among women and girls",
        "Strengthen M&E systems to collect, analyse and produce data that are gender-responsive",
        "Advocate for increased investment in comprehensive combination prevention programs that have integrated GBV for all populations"
    ];

    return (
        <PublicLayout title="Gender-Based Violence and Violence against Women and Children">
            <Head title="GBV/VAWC - Prevention Programme" />
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <HandHeart className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Gender-Based Violence and Violence against Women and Children
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Addressing gender inequalities and violence that shape the HIV epidemic 
                                        and disproportionately affect women and girls.
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
                                    Gender inequalities, which include GBV, VAWC, and other intersecting socio-economic, 
                                    political and environmental factors, inherently characterize and shape the HIV epidemic 
                                    and the disproportionate burden of disease borne by women and girls. Of particular 
                                    interest is GBV and VAWC or men because they can be both the cause and consequence 
                                    of HIV and viral hepatitis.
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
                                Strategic priorities for addressing gender-based violence and its intersection with HIV prevention
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
                            Support and Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Access support services for GBV/VAWC survivors and learn about 
                            prevention programs across Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find Support Services
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
