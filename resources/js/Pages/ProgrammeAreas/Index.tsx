import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Users,
    Shield,
    Heart,
    BarChart3,
    Building,
    Target,
    ArrowRight,
    Activity,
    Stethoscope,
    FlaskConical,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function ProgrammeAreasIndex() {
    const programmeAreas = [
        {
            title: "Management & Coordination",
            description: "Strategic leadership and coordination of HIV/AIDS response across all sectors and levels",
            href: "/programme-areas/management-coordination",
            icon: Users,
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            title: "Prevention",
            description: "Comprehensive HIV prevention services including testing, VMMC, SBCC, and PrEP",
            href: "/programme-areas/prevention",
            icon: Shield,
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
        },
        {
            title: "Care, Treatment & Support",
            description: "Quality HIV care, treatment services, and comprehensive support systems",
            href: "/programme-areas/care-treatment-support",
            icon: Heart,
            color: "from-red-500 to-red-600",
            bgColor: "bg-red-50",
        },
        {
            title: "Monitoring & Evaluation",
            description: "Data-driven monitoring, research, surveillance, and health information systems",
            href: "/programme-areas/monitoring-evaluation",
            icon: BarChart3,
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
        },
        {
            title: "Pharmaceuticals & Laboratory Services",
            description: "Supply chain management and comprehensive HIV laboratory services",
            href: "/programme-areas/pharmaceuticals-laboratory",
            icon: FlaskConical,
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
        },
    ];

    return (
        <PublicLayout title="Programme Areas">
            <Head title="Programme Areas" />

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
                            <div className="container mx-auto px-4 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <Target className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Programme Areas
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Comprehensive HIV/AIDS response through strategic programme areas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Programme Areas Grid */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Our Programme Areas
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Each programme area represents a critical component of Tanzania's comprehensive HIV/AIDS response,
                                designed to achieve the 95-95-95 targets and beyond.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {programmeAreas.map((area, index) => (
                                <a
                                    key={index}
                                    href={area.href}
                                    className="group block"
                                >
                                    <div className={`${area.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border border-white/50`}>
                                        <div className="text-center">
                                            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                <area.icon className="h-8 w-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                                {area.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {area.description}
                                            </p>
                                            <div className="flex items-center justify-center space-x-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                                                <span className="font-medium">Learn More</span>
                                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Working Together for an HIV-Free Tanzania
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Our integrated programme approach ensures comprehensive coverage and maximum impact
                            in the fight against HIV/AIDS.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Activity className="mr-2 h-5 w-5" />
                                View Our Impact
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                <Building className="mr-2 h-5 w-5" />
                                Partner With Us
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
