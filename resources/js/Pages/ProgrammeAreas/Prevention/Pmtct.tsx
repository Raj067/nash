import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Users,
    ArrowRight,
    Heart,
    CheckCircle,
    Target,
    Award,
    Shield,
    TrendingUp,
    Activity,
    Baby,
    UserCheck,
    Calendar,
    Stethoscope,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Pmtct() {
    return (
        <PublicLayout title="Prevention of Vertical Transmission">
            <Head title="PMTCT - Prevention Programme" />
            <div className="min-h-screen">
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Users className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Prevention of Vertical Transmission</h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                        Comprehensive Prevention of Mother-to-Child Transmission (PMTCT) services 
                        ensuring HIV-free generations through integrated maternal and child health programs.
                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Statistics Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                PMTCT Program Impact
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Preventing mother-to-child transmission and ensuring HIV-free generations
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg text-center">
                                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    <Users className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    98%
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    ANC HIV Testing Coverage
                                </div>
                            </div>
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg text-center">
                                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    <Baby className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    1.2%
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    MTCT Transmission Rate
                                </div>
                            </div>
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg text-center">
                                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    <Stethoscope className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    3,500+
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    PMTCT Service Sites
                                </div>
                            </div>
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg text-center">
                                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    <Target className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    95%
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    ART Coverage in Pregnancy
                                </div>
                            </div>
                        </div>

                        {/* Achievement Highlight */}
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
                                <Award className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                PMTCT Excellence Achievement
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Tanzania has achieved remarkable success in PMTCT, reducing mother-to-child 
                                transmission to just 1.2% through comprehensive prevention services.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            PMTCT Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Access comprehensive PMTCT services including HIV testing, treatment, 
                            and support for mothers and babies at healthcare facilities nationwide.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Calendar className="mr-2 h-5 w-5" />
                                    Book ANC Appointment
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
