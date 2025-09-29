import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    UserCheck,
    ArrowRight,
    Heart,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function VulnerableAgyw() {
    const priorities = [
        "Scale-up evidence-based and innovative AGYW combination prevention program interventions nationwide (prioritising geographical areas with high transmission dynamics)",
        "Expand adolescent and youth-friendly health services (AYFHS)",
        "Strengthen the referral system and coordination between health, and multi-sectoral social protection interventions",
        "Strengthen the involvement of adolescent boys and young and older men in HIV prevention programming for the elimination of new HIV/STI infections (engaging them in the design, planning, implementation, operational research, monitoring, evaluation of HIV combination prevention interventions)",
        "Advance gender equality and girl empowerment",
        "Strengthen parent/guardian engagement",
        "Address HIV-related stigma and discrimination against AGYW and ABYM",
        "Strengthen the integration of HIV and SRH services to meet AGYW and ABYM needs",
        "Create an enabling environment to facilitate access to HIV prevention programs and promote acceptable sexual and health-seeking behaviours among AGYW",
        "Strengthen M&E systems and operational research to inform policymakers and program implementers on AGYW and ABYM HIV-related issues. This initiative should include enhancing the capacity on frontline providers to analyse data for AGYW and ABYM"
    ];

    return (
        <PublicLayout title="Vulnerable Adolescent Girls and Young Women">
            <Head title="Vulnerable AGYW - Care, Treatment & Support" />
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <UserCheck className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Vulnerable Adolescent Girls and Young Women
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Comprehensive HIV prevention and care services for adolescent girls and young women 
                                        aged 15-24 who face heightened HIV risk due to multiple vulnerability factors.
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
                                    Understanding Vulnerability
                                </h2>
                            </div>
                            
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                    Vulnerable AGYW refers to girls and young women aged 15-24 years who experience a heightened risk of HIV due to exposure to individual, household, community, and structural factors. Vulnerability can be thought of as a transactional relationship between the context in which a girl lives and a set of factors that put her 'at-risk' of negative outcomes.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    The increased vulnerability of AGYW to HIV risk is linked to persistent gender inequality and several inter-related biological, behavioural, and structural factors. These include biological susceptibility to HIV infection, age-disparate relationships with unequal power dynamics that may hinder safe sex, transactional sex, lack of schooling and economic empowerment, GBV including IPV, harmful traditional practices, and institutional or socio-cultural barriers to providing comprehensive sexuality education and sexual health services for adolescents and young women.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Priorities Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Priorities
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Strategic priorities for addressing the needs of vulnerable adolescent girls and young women
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="grid gap-6">
                                {priorities.map((priority, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                            Access AGYW Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get comprehensive HIV prevention and care services for vulnerable adolescent girls 
                            and young women at health facilities across Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Heart className="mr-2 h-5 w-5" />
                                    Find AGYW Services
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
