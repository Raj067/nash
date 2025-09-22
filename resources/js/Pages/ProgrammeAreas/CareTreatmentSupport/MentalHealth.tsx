import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Brain, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function MentalHealth() {
    return (
        <PublicLayout title="Integration of Mental Health Services">
            <Head title="Mental Health - Care, Treatment & Support" />
            <div className="min-h-screen">
                <div className="relative h-[400px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Brain className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Integration of Mental Health Services</h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">Integration of mental health services in HIV and AIDS care to address psychosocial needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8">
                                <Brain className="h-12 w-12 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Content Coming Soon</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Information about mental health integration in HIV care will be available here soon.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/contact">
                                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <Heart className="mr-2 h-5 w-5" />Contact Us for Information
                                    </Button>
                                </a>
                                <a href="/programme-areas/care-treatment-support">
                                    <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                        <ArrowRight className="mr-2 h-5 w-5" />Back to Care & Treatment
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
