import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Pill,
    ArrowRight,
    Heart,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Prep() {
    const priorityStrategies = [
        "Enhance PrEP accessibility, acceptability and effective use among PrEP users",
        "Capacity building of healthcare providers nationwide (improve HRH for PrEP)",
        "Strengthen the quantification, forecasting, and procurement of PrEP commodities (laboratory reagents and medications)",
        "Scale-up facility-based and facility-led community-based quality PrEP services nationwide in alignment with the approved implementation framework",
        "Strengthen pharmacovigilance for PrEP",
        "Strengthen PrEP M&E systems (including the capability for registering transfer outs), enhance data used for programming and develop PrEP research and learning agenda to inform programme improvement and quality assurance",
        "Establish a proactive mechanism for reviewing evidence, assessing acceptance, approval, registration, transitioning and scale-up of the newer PrEP options",
        "Enhance the integration of PrEP into HIV combination prevention services (with special emphasis on comprehensive condom programming)",
        "Build the capacity of CSOs in PrEP service design, planning, delivery, and monitoring (Community-Led Monitoring)",
        "Engage multi-stakeholders at the national, regional and council levels to foster ownership and sustainability (including R/CHMT, CSOs, etc.)"
    ];

    return (
        <PublicLayout title="Pre-Exposure Prophylaxis (PrEP)">
            <Head title="PrEP - Prevention Programme" />
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Pill className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Pre-Exposure Prophylaxis (PrEP)
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Highly effective HIV prevention medication for high-risk individuals, 
                                        reducing HIV acquisition risk by up to 99%.
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
                                Strategic priorities for scaling up and improving PrEP services across Tanzania
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
                            Access PrEP Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get comprehensive PrEP services at health facilities across Tanzania. 
                            Protect yourself with highly effective HIV prevention.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find PrEP Services
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
