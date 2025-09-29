import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    HeartHandshake,
    ArrowRight,
    Heart,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function ViralHepatitisCare() {
    const keyStrategies = [
        "Expand access to facility and community based viral hepatitis care, treatment and support services",
        "Provide equitable access to viral hepatitis services in special settings, including humanitarian settings, and prisons and other closed settings",
        "Strengthen integration and linkages with NCDs and other communicable diseases, including tuberculosis",
        "Establish and develop guidance for linkage to involve key stakeholders in viral hepatitis care",
        "Prepare protocol to guide stakeholders in linking suspected/ confirmed cases from other clinics (PWID, TB and HIV clinics, prisons, correctional centres) to viral hepatitis clinics",
        "Promote disability-inclusive programming and ensure that viral hepatitis services are accessible to people with disabilities",
        "Provide mental health care for people affected by and living with viral hepatitis",
        "Promote integration of viral hepatitis services and their key co-infections and comorbidities into primary health care, including through decentralized and community-based service delivery",
        "Engage private health care facilities in delivering viral hepatitis services",
        "Provide differentiated viral hepatitis services through innovative approaches such as task sharing, modifying service delivery hours, and adapting frequency of clinic visits and medicine refills, leveraging technology- and community-based approaches, and to deliver high-quality people-centred services that are free of stigma and discrimination"
    ];

    return (
        <PublicLayout title="Viral Hepatitis Care and Treatment">
            <Head title="Viral Hepatitis Care and Treatment - Care, Treatment & Support" />
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <HeartHandshake className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Viral Hepatitis Care and Treatment
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Comprehensive viral hepatitis care, treatment, and support services 
                                        integrated with primary healthcare and community-based delivery systems.
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
                                Strategic approaches for expanding viral hepatitis care, treatment, and support services across all settings
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
                            Access Viral Hepatitis Care
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get comprehensive viral hepatitis care, treatment, and support services 
                            at health facilities and community centers across Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find Care Services
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
