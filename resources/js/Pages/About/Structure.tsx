import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Activity, Building, TrendingUp, UserCheck } from "lucide-react";

export default function Structure() {
    return (
        <PublicLayout title="NASHCOP Organisation Structure">
            <Head title="NASHCOP Organisation Structure" />
            <div className="relative h-[500px] overflow-hidden">
                <div
                    className="h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(/images/arvsImages.jpeg)`,
                    }}
                >
                    <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                        <div className="container mx-auto px-4 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                <Building className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                Organization Structure
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                Coordinating Tanzania's national response to
                                HIV/AIDS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Organizational Chart
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our hierarchical structure ensures effective
                            coordination and implementation of HIV/AIDS programs
                        </p>
                    </div>

                    {/* Director General */}
                    <div className="flex justify-center mb-8">
                        <div className="backdrop-blur-lg bg-white/40 border border-white/30 rounded-2xl p-6 shadow-xl max-w-md">
                            <div className="text-center">
                                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-4">
                                    <UserCheck className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    Director General
                                </h3>
                                <p className="text-blue-600 font-medium mb-2">
                                    Dr. Selemani Jafo
                                </p>
                                <p className="text-sm text-gray-600">
                                    Overall leadership and strategic direction
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Connecting Line */}
                    <div className="flex justify-center mb-8">
                        <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                    </div>

                    {/* Deputy Directors */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                        <div className="backdrop-blur-lg bg-white/40 border border-white/30 rounded-2xl p-6 shadow-xl text-center">
                            <div className="inline-flex p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg mb-4">
                                <Activity className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">
                                Deputy Director - Programs
                            </h4>
                            <p className="text-green-600 font-medium mb-2">
                                Dr. Amina Hassan
                            </p>
                            <p className="text-sm text-gray-600">
                                Prevention, Treatment & Care Programs
                            </p>
                        </div>

                        <div className="backdrop-blur-lg bg-white/40 border border-white/30 rounded-2xl p-6 shadow-xl text-center">
                            <div className="inline-flex p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg mb-4">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">
                                Deputy Director - Operations
                            </h4>
                            <p className="text-orange-600 font-medium mb-2">
                                Eng. Michael Temba
                            </p>
                            <p className="text-sm text-gray-600">
                                M&E, Policy & Administration
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
