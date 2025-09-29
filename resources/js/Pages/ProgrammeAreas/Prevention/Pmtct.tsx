import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Users,
    ArrowRight,
    Heart,
    Baby,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Pmtct() {
    const priorities = [
        "Scale-up couples testing (including for HIV/Syphilis Duo and viral hepatitis) as well as HIV re-testing of negative PBFW at ANC, Postnatal Care (PNC) and immunisation clinics",
        "Enhance the utilisation of peer mothers to ensure more effective screening of infants and young children who are eligible for testing by using immunisation cards and following up mother-baby pairs (with a specific focus on mothers who are adolescents and young women)",
        "Expand and improve quality of HIV and VH PMTCT services (HTS for pregnant women, retesting of previously negative women, EID and HVL)",
        "Build capacity of HCPs, to improve their skills so that they can offer non-judgmental and supportive services to youth and PHR seeking ANC and PNC services",
        "Create community awareness to boost male partner involvement in PMTCT of HIV and VH services (including testing of partners of pregnant women)",
        "Scale-up mother-to-mother and peer-led mentoring, counselling and other community-based psychosocial support services for pregnant and breastfeeding women",
        "Strengthen primary prevention of HIV among HIV negative women identified during antenatal, postnatal and breastfeeding periods (including offering PrEP for pregnant and breastfeeding women who are at a greater risk of acquiring HIV)",
        "Scale-up routine screening and counselling for all pregnant women and adolescents in antenatal care for chronic viral hepatitis B and C infections and providing antiviral prophylaxis to those who are eligible",
        "Ensure prompt and efficacious interventions to treat pregnant women and adolescents who test positive and to prevent transmission of hepatitis B virus infection to their infants",
        "Institute mechanisms to identify and follow-up of exposed infants, including hepatitis B birth-dose vaccine and completion of three-dose series of hepatitis B vaccine",
        "Deploy an electronic Case-Based Surveillance and Management (CBSM) response to all facilities offering PMTCT services"
    ];

    return (
        <PublicLayout title="Prevention of Mother to Child Transmission of HIV and Viral Hepatitis">
            <Head title="PMTCT - Prevention Programme" />
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Baby className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Prevention of Mother to Child Transmission of HIV and Viral Hepatitis
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Comprehensive PMTCT services ensuring HIV-free generations through 
                                        integrated maternal and child health programs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Priorities Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Priorities
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Strategic priorities for preventing mother-to-child transmission of HIV and viral hepatitis
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="grid gap-6">
                                {priorities.map((priority, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700 leading-relaxed flex-1">
                                                {priority}
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
                            Access PMTCT Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get comprehensive PMTCT services at health facilities across Tanzania. 
                            Ensure your baby is born HIV-free.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find PMTCT Services
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
