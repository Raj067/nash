import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    TestTube,
    ArrowRight,
    Heart,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function ViralHepatitisScreening() {
    const keyStrategies = [
        "Integrate viral hepatitis B and C testing into routine HIV testing and counselling particularly for populations at higher risk",
        "Improve screening and provide quality viral hepatitis testing for early identification of infected persons in the course of the disease",
        "Strengthen countrywide laboratory system to provide quality diagnosis of acute and chronic hepatitis",
        "Improve quality assurance, and external quality control measures for laboratory testing of viral hepatitis",
        "Procure rapid diagnostic tests for hepatitis B and C as well as upgrade existing GeneXpert machines to accommodate VH testing",
        "Improve national forecasting quantification, procurement and timely delivery of VH commodities",
        "Incorporate VH lab information management system into the existing reporting systems",
        "Promote voluntary partner notification and other partner services and social network approaches"
    ];

    return (
        <PublicLayout title="Viral Hepatitis Screening and Diagnosis">
            <Head title="Viral Hepatitis Screening and Diagnosis - Care, Treatment & Support" />
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <TestTube className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Viral Hepatitis Screening and Diagnosis
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Comprehensive viral hepatitis B and C screening, diagnosis, and laboratory services 
                                        integrated with HIV testing and care systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Strategies Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Key Strategies
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Strategic approaches for strengthening viral hepatitis screening, diagnosis, and laboratory systems
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="grid gap-6">
                                {keyStrategies.map((strategy, index) => (
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
                            Access Viral Hepatitis Screening
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get comprehensive viral hepatitis B and C screening and diagnosis services 
                            at health facilities across Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find Screening Services
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
