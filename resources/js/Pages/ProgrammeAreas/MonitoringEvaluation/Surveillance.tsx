import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Activity, CheckCircle } from "lucide-react";

export default function Surveillance() {
    const priorityStrategies = [
        "Establish and rollout ARV drug resistance surveillance and response system",
        "Scale and link HIV recency surveillance with ART monitoring system",
        "Build capacity for and conduct structured analyses of patient level data to answer key programmatic gaps",
        "Implement HIV, VH and STIs research agenda including mid- and end-term evaluation and scheduled surveillances to inform program implementation",
    ];

    return (
        <PublicLayout title="Surveillance and Data Use">
            <Head title="Surveillance and Data Use - Strategic Information" />

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
                                    <Activity className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Surveillance and Data Use
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Comprehensive surveillance systems and data
                                    analysis to monitor HIV program performance
                                    and inform evidence-based decision making.
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
                                    Strategic approaches to strengthen
                                    surveillance systems and enhance data
                                    utilization
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {priorityStrategies.map((strategy, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            {strategy}
                                        </p>
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
