import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { HandHeart, Users, Heart, Shield, Target, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function SupportNacp() {
    const supportWays = [
        {
            icon: HandHeart,
            title: "Financial Support",
            description: "Support our programs through donations to help us reach more people with HIV/AIDS services.",
            color: "from-blue-600 to-cyan-600",
            actions: [
                "Monthly donations for sustainable support",
                "One-time contributions for specific programs",
                "Corporate sponsorship opportunities"
            ]
        },
        {
            icon: Users,
            title: "Volunteer Programs",
            description: "Join our community of volunteers to support HIV/AIDS awareness and prevention efforts.",
            color: "from-green-600 to-emerald-600",
            actions: [
                "Community outreach programs",
                "Peer education and counseling",
                "Event organization and support"
            ]
        },
        {
            icon: Heart,
            title: "Advocacy & Awareness",
            description: "Help us spread awareness about HIV/AIDS prevention, testing, and treatment.",
            color: "from-red-600 to-pink-600",
            actions: [
                "Social media advocacy campaigns",
                "Community education sessions",
                "Stigma reduction initiatives"
            ]
        },
        {
            icon: Shield,
            title: "Professional Services",
            description: "Contribute your professional skills to support our technical and operational needs.",
            color: "from-purple-600 to-violet-600",
            actions: [
                "Medical and healthcare expertise",
                "IT and digital solutions",
                "Research and data analysis"
            ]
        }
    ];

    const impactStats = [
        {
            number: "1.4M+",
            label: "People Living with HIV Supported",
            description: "Comprehensive care and treatment services"
        },
        {
            number: "500+",
            label: "Health Facilities",
            description: "Providing HIV services across Tanzania"
        },
        {
            number: "90%",
            label: "Treatment Success Rate",
            description: "Achieving UNAIDS 90-90-90 targets"
        },
        {
            number: "25+",
            label: "Years of Service",
            description: "Leading Tanzania's HIV response"
        }
    ];

    return (
        <PublicLayout title="Support NACP">
            <Head title="Support NACP - National AIDS Control Programme" />
            
            <div className="min-h-screen">
                {/* Hero Section */}
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
                                    <HandHeart className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Support NACP
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Join us in the fight against HIV/AIDS and help us build a healthier Tanzania for all
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Impact Statistics */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Our Impact Together
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Your support helps us achieve measurable impact in Tanzania's fight against HIV/AIDS
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {impactStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg text-center"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                            {stat.number}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            {stat.label}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {stat.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ways to Support */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Ways to Support Our Mission
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                There are many ways you can contribute to our efforts in ending HIV/AIDS in Tanzania
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {supportWays.map((way, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:scale-105 relative overflow-hidden rounded-2xl shadow-lg"
                                >
                                    <div className={`bg-gradient-to-r ${way.color} text-white p-6`}>
                                        <div className="flex items-center space-x-4">
                                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full shadow-lg">
                                                <way.icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">
                                                    {way.title}
                                                </h3>
                                                <p className="text-white/90 leading-relaxed">
                                                    {way.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <h4 className="font-semibold text-gray-800 mb-4">How you can help:</h4>
                                        <ul className="space-y-2">
                                            {way.actions.map((action, actionIndex) => (
                                                <li key={actionIndex} className="flex items-start space-x-3">
                                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-gray-700">{action}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact for Support */}
                <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
                        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-10"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Ready to Make a Difference?
                            </h2>
                            <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
                                Contact us to learn more about how you can support NACP's mission to end HIV/AIDS in Tanzania
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                                <p className="text-blue-100">+255-22-2120270</p>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                                <p className="text-blue-100">support@nacp.go.tz</p>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                                <p className="text-blue-100">Dar es Salaam, Tanzania</p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Button
                                size="lg"
                                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                <HandHeart className="w-5 h-5 mr-2" />
                                Get Involved Today
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
