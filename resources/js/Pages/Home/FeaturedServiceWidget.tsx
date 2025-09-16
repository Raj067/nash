import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
} from "@/Components/ui/card";
import { Activity, Heart, Shield, Stethoscope, TestTube } from "lucide-react";
import React from "react";

function FeaturedServiceWidget() {
    const featuredServices = [
        {
            title: "Vipimo vya VVU na STI",
            description:
                "Pata huduma za upimaji wa VVU na magonjwa ya zinaa kwa njia ya siri na ya bure",
            icon: TestTube,
            link: "/services/hiv-sti-testing",
            category: "Upimaji",
        },
        {
            title: "Matibabu ya ART na STI",
            description:
                "Huduma za matibabu ya antiretroviral na matibabu ya magonjwa ya zinaa",
            icon: Stethoscope,
            link: "/services/art-sti-treatment",
            category: "Matibabu",
        },
        {
            title: "Kuzuia VVU, STI na Hepatitis",
            description:
                "Elimu na programu za kuzuia maambukizi ya VVU, magonjwa ya zinaa na Hepatitis",
            icon: Shield,
            link: "/services/prevention",
            category: "Kuzuia",
        },
        {
            title: "Upimaji wa Hepatitis",
            description: "Huduma za upimaji na matibabu ya Hepatitis B na C",
            icon: Activity,
            link: "/services/hepatitis-testing",
            category: "Hepatitis",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                        <Heart className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        Huduma Zetu Kuu
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Tunatoa huduma za hali ya juu za afya kwa ajili ya
                        kukabiliana na VVU, magonjwa ya zinaa, na Hepatitis
                        kupitia teknolojia ya kisasa
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredServices.map((service, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden"
                        >
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <CardHeader className="text-center relative z-10 pb-4">
                                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    <service.icon className="h-10 w-10 text-white" />
                                </div>
                                <div className="">
                                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                                        {service.category}
                                    </div>
                                </div>

                                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="relative z-10">
                                <CardDescription className="text-center mb-6 text-gray-600 leading-relaxed">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedServiceWidget;
