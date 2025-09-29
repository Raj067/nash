import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    BabyIcon,
    ArrowRight,
    Heart,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function EarlyInfantDiagnosis() {
    const priorityStrategies = [
        "Strengthen the implementation of integrated EID and other HIV testing services for all HEI at all levels (including improving EID at 2-month coverage, renewed focus on quality and TAT of results)",
        "Optimise and scale up POC platforms for EID services including collection, testing of DBS samples and data use to inform planning",
        "Strengthen the integration of EID testing within immunisation clinics and other RCH platforms during outreach services",
        "Leverage the OVC programme for effective and timely identification and testing for HIV of children most at risk after being screened for eligibility",
        "Promote male involvement in eMTCT services through improved awareness, reduction in stigma, and community engagement",
        "Increase access of HIV-exposed new-borns and infants to integrated services for maternal and new-born care, including prevention of the triple vertical transmission of HIV, syphilis, and the hepatitis B virus"
    ];

    return (
        <PublicLayout title="HIV Early Infant Diagnosis">
            <Head title="HIV Early Infant Diagnosis - Care, Treatment & Support" />
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <BabyIcon className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        HIV Early Infant Diagnosis
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Early identification of HIV in exposed infants through DNA-PCR testing 
                                        within 6 weeks of birth, providing timely entry into lifelong treatment.
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
                                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                    Tanzania has continued to improve service delivery for children, especially through Early Infant Diagnosis (EID) at two months, case identification, and viral suppression for children.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    HIV early infant diagnosis utilises DNA-PCR to isolate viral nucleic acid in HIV-exposed infants (HEI) within 6 weeks of birth, and up to 18 months of age thus providing a virological basis for entry into lifelong treatment for infected infants.
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
                                Strategic priorities for strengthening HIV early infant diagnosis and improving outcomes for HIV-exposed infants
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
                            Access Early Infant Diagnosis Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get HIV early infant diagnosis services for HIV-exposed infants 
                            at health facilities across Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find EID Services
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
