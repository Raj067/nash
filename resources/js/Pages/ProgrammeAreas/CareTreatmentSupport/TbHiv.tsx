import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Stethoscope, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function TbHiv() {
    const priorityStrategies = [
        "Scale-up TB case finding and notification among PLHIV",
        "Facilitate effective utilisation of the TB diagnostic algorithm including adoption of newer TB diagnostic tests (TB LAM, GeneXpert Ultra)",
        "Strengthen the implementation of collaborative TB/HIV activities in public and private health facilities including ensuring infection prevention measures",
        "Adapt new latent TB Infection Policy including the introduction and scale-up of shorter and improved TB and TPT regimens",
        "Scale-up the provision of TPT and CTX to all eligible PLHIV",
        "Strengthen cross-border collaboration on HIV and TB epidemic control",
        "Improve the quality of management of TB-HIV Co-infection. Establish TPT Service Delivery Models with a family approach to improve TPT coverage and completion rate in PLHIV",
        "Consolidate TB infection control measures in congregate settings",
        "Strengthen and improve integrated prevention, infection control, screening and management of TB in congregate settings including prisons",
        "Scale-up treatment as prevention (Undetectable=Untransmittable – U=U) by engaging PLHIV in care and treatment to achieve and maintain viral suppression to prevent the occurrence of OIs (i.e., TB)",
    ];

    return (
        <PublicLayout title="TB/HIV Collaboration">
            <Head title="TB/HIV Collaboration - Care, Treatment & Support" />
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(/images/about.png)` }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Stethoscope className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        TB/HIV Collaboration
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Collaborative approaches to TB and HIV
                                        prevention, diagnosis, and treatment for
                                        improved health outcomes and reduced
                                        mortality.
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
                                Strategic priorities for strengthening TB/HIV
                                collaboration and improving health outcomes
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
                            Access TB/HIV Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get comprehensive TB/HIV collaborative care through
                            integrated services at health facilities across
                            Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find TB/HIV Services
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
