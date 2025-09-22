import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Users,
    Target,
    Building,
    Network,
    Settings,
    TrendingUp,
    Globe,
    Handshake,
    ArrowRight,
    CheckCircle,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function ManagementCoordination() {
    const keyFunctions = [
        {
            title: "Strategic Leadership",
            description: "Providing overall strategic direction and leadership for the national HIV/AIDS response",
            icon: Target,
            color: "from-blue-500 to-blue-600",
        },
        {
            title: "Multi-sectoral Coordination",
            description: "Coordinating HIV/AIDS activities across government, private sector, and civil society",
            icon: Network,
            color: "from-green-500 to-green-600",
        },
        {
            title: "Policy Development",
            description: "Developing and updating national HIV/AIDS policies, guidelines, and strategies",
            icon: Settings,
            color: "from-purple-500 to-purple-600",
        },
        {
            title: "Resource Mobilization",
            description: "Mobilizing and coordinating financial and technical resources for HIV/AIDS programs",
            icon: TrendingUp,
            color: "from-orange-500 to-orange-600",
        },
        {
            title: "International Partnerships",
            description: "Managing partnerships with international organizations and development partners",
            icon: Globe,
            color: "from-teal-500 to-teal-600",
        },
        {
            title: "Stakeholder Engagement",
            description: "Engaging and coordinating with all key stakeholders in the HIV/AIDS response",
            icon: Handshake,
            color: "from-red-500 to-red-600",
        },
    ];

    const achievements = [
        "Established National AIDS Committee (NAC) with representation from 23 sectors",
        "Developed National Strategic Plans for HIV/AIDS response",
        "Coordinated over $2 billion in HIV/AIDS funding from multiple sources",
        "Established Regional and District AIDS Committees nationwide",
        "Created multi-sectoral HIV/AIDS coordination mechanisms",
        "Developed comprehensive HIV/AIDS policies and guidelines",
    ];

    return (
        <PublicLayout title="Management & Coordination">
            <Head title="Management & Coordination - Programme Areas" />

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
                                        <Users className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Management & Coordination
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Strategic leadership and coordination of Tanzania's comprehensive HIV/AIDS response
                                        across all sectors and administrative levels.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overview Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Coordinating Tanzania's HIV/AIDS Response
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                The Management & Coordination programme area serves as the central hub for Tanzania's 
                                HIV/AIDS response, ensuring effective leadership, coordination, and strategic direction 
                                across all sectors and levels of government.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mandate</h3>
                                <div className="space-y-4">
                                    <p className="text-gray-600 leading-relaxed">
                                        The National AIDS, STIs and Hepatitis Control Programme (NASHCOP) serves as the national 
                                        coordinating body for HIV/AIDS, STIs, and Hepatitis response in Tanzania. Established under 
                                        the Ministry of Health, we provide strategic leadership, coordinate multi-sectoral activities, 
                                        and ensure effective implementation of national HIV/AIDS policies and programs.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our coordination role extends from the national level through regional and district levels 
                                        down to communities, ensuring coherent and effective HIV/AIDS response across all 
                                        administrative levels in mainland Tanzania.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">Key Coordination Areas</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-gray-700">National HIV/AIDS Committee</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-gray-700">Regional AIDS Committees</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-gray-700">District AIDS Committees</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-gray-700">Civil Society Organizations</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-gray-700">Development Partners</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-gray-700">Private Sector</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Functions */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Key Functions
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Our management and coordination functions ensure effective leadership and 
                                seamless implementation of HIV/AIDS interventions across Tanzania.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {keyFunctions.map((func, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="text-center">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${func.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <func.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                            {func.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {func.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Achievements */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Key Achievements
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Significant milestones in coordinating Tanzania's HIV/AIDS response
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {achievements.map((achievement, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                                    >
                                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
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
                            Partner with Us in Coordination
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join our coordinated effort to achieve an HIV-free Tanzania through 
                            effective partnerships and collaboration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Building className="mr-2 h-5 w-5" />
                                Learn About Partnership
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                <ArrowRight className="mr-2 h-5 w-5" />
                                View Other Programme Areas
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
