import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Shield,
    CheckCircle,
} from "lucide-react";

export default function RationalUse() {
    const priorityStrategies = [
        "Strengthen HCW capacity in implementing RUM",
        "Improve use of pharmacovigilance monitoring systems (recording and reporting)",
        "Increase awareness on ADR among patients and communities to facilitate timely reporting of ADR",
        "In close collaboration with TMDA, undertake surveillance of ADR monitoring as new ARVs are rolled out, and strengthen the current implementation of active ARV toxicity surveillance",
        "Conduct annual RUM assessment and evaluation with particular focus on ARVs and related commodities use"
    ];

    return (
        <PublicLayout title="Rational Use of Medicines & Pharmacovigilance">
            <Head title="Rational Use of Medicines - Pharmaceuticals & Laboratory" />

            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[500px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(/images/about.png)`,
                        }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <Shield className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Rational Use of Medicines & Pharmacovigilance
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Ensuring safe, effective, and appropriate use of HIV medicines through 
                                    comprehensive monitoring and surveillance systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Priority Strategies Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Priority Strategies
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Strategic approaches to enhance rational use of medicines and strengthen pharmacovigilance systems
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 gap-6">
                                {priorityStrategies.map((strategy, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{strategy}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
