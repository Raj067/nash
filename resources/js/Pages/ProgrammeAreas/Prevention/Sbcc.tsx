import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    MessageCircle,
    ArrowRight,
    Heart,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Sbcc() {
    const priorityStrategies = [
        "Scale-up evidence-based, locally-contextualized, age-appropriate, and client-centred SBCC interventions using multiple channels to facilitate risk reduction, increase uptake of HIV services, and address critical enablers and barriers of behaviour change",
        "Enhance the engagement of parents /guardians in promoting acceptable behaviour change moving away from deviant behaviour among adolescents and youth",
        "Strengthen the engagement of religious and community leaders in behaviour change initiatives",
        "Reinforce stakeholder coordination across all levels of implementation, i.e., national, sub-national and community level",
        "Advocate for policy and regulatory changes to strengthen the supportive environment for SBCC interventions and service provision, e.g., alcohol and drug abuse prevention and management policies that promote behavioural change",
        "Accelerate the scale-up of CSE on HIV/AIDS, SRH, and Life Skills in primary and secondary schools and HLIs",
        "Strengthen SBCC M&E to include comprehensive HIV and AIDS behavioural and social science operational research",
        "Ensure adequate financing and resources for implementing SBCC strategies at all levels. This strategy includes increasing the engagement of the private sector to support SBCC interventions"
    ];

    return (
        <PublicLayout title="Social and Behaviour Change Communication (SBCC)">
            <Head title="SBCC - Prevention Programme" />

            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(/images/about.png)`,
                        }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <MessageCircle className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Social and Behaviour Change Communication
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Evidence-based communication strategies to promote HIV prevention behaviors and reduce stigma.
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
                                Strategic priorities for implementing effective SBCC interventions across Tanzania
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
                            Join the Movement
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Be part of the behavior change movement. Together, we can create an HIV-free Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Get Involved
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
