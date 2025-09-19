import { Activity, Award, BarChart3, Target, Users } from "lucide-react";
import React from "react";

const quickStats = [
    { label: "Watu Wenye VVU", value: "1.7M", icon: Users },
    { label: "Wanajua Hali Yao", value: "88%", icon: Target },
    { label: "Wanapata Matibabu", value: "98%", icon: Activity },
    { label: "Virusi Vimepungua", value: "96%", icon: Award },
];

function HomeStatisticsPage() {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
            {/* Background Graphics */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </div>
                <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-10"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
                        <BarChart3 className="h-12 w-12 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Takwimu za 95-95-95 Tanzania
                    </h2>
                    <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                        Maendeleo ya Tanzania katika kufikia malengo ya UNAIDS
                        ya 95-95-95
                        <br />
                        <span className="text-sm text-blue-200 mt-2 block">
                            Chanzo: DHIS2 September 2021
                        </span>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {quickStats.map((stat, index) => (
                        <div
                            key={index}
                            className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                <stat.icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                                {stat.value}
                            </div>
                            <div className="text-blue-200 font-medium">
                                {stat.label}
                            </div>

                            {/* Progress Bar for Percentages */}
                            {stat.value.includes("%") && (
                                <div className="mt-4">
                                    <div className="w-full bg-white/20 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: stat.value }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Visual Progress Chart */}
                {/* <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        Mfumo wa 95-95-95: Maendeleo ya Tanzania
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                label: "Wanajua Hali Yao",
                                value: 88,
                                target: 95,
                                color: "from-green-400 to-blue-500",
                            },
                            {
                                label: "Wanapata Matibabu",
                                value: 98,
                                target: 95,
                                color: "from-blue-400 to-purple-500",
                            },
                            {
                                label: "Virusi Vimepungua",
                                value: 96,
                                target: 95,
                                color: "from-purple-400 to-pink-500",
                            },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <svg
                                        className="w-32 h-32 transform -rotate-90"
                                        viewBox="0 0 120 120"
                                    >
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="50"
                                            stroke="rgba(255,255,255,0.2)"
                                            strokeWidth="8"
                                            fill="none"
                                        />
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="50"
                                            stroke="url(#gradient-${index})"
                                            strokeWidth="8"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeDasharray={`${
                                                (item.value / 100) * 314
                                            } 314`}
                                            className="transition-all duration-1000 ease-out"
                                        />
                                        <defs>
                                            <linearGradient
                                                id={`gradient-${index}`}
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="0%"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#fbbf24"
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor="#f97316"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-white">
                                            {item.value}%
                                        </span>
                                    </div>
                                </div>
                                <h4 className="text-white font-semibold mb-2">
                                    {item.label}
                                </h4>
                                <div className="text-sm text-blue-200">
                                    Lengo: {item.target}%
                                    {item.value >= item.target && (
                                        <span className="text-green-300 ml-2">
                                            ✓ Limefikwa
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default HomeStatisticsPage;
