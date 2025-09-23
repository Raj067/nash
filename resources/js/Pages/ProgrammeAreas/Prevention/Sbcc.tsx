import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    MessageCircle,
    Users,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Target,
    Heart,
    Award,
    Radio,
    Tv,
    Smartphone,
    Globe,
    Megaphone,
    BookOpen,
    Activity,
    Shield,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Sbcc() {
    return (
        <PublicLayout title="Social Behaviour Change Communication (SBCC)">
            <Head title="SBCC - Prevention Programme" />

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
                                        <MessageCircle className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Social Behaviour Change Communication
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Evidence-based communication strategies to promote HIV prevention behaviors and reduce stigma.
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
                                SBCC Program Reach
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Strategic communication campaigns driving behavior change and reducing HIV stigma across Tanzania
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg text-center">
                                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    <Users className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    25M+
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    People Reached Annually
                                </div>
                            </div>
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg text-center">
                                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    <Radio className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    150+
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    Radio Stations
                                </div>
                            </div>
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg text-center">
                                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    <Tv className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    25+
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    TV Channels
                                </div>
                            </div>
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg text-center">
                                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    <Smartphone className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    5M+
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    Digital Engagements
                                </div>
                            </div>
                        </div>

                        {/* Communication Channels */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
                                        <Megaphone className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Mass Media</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    National campaigns through radio, TV, and print media reaching millions with HIV prevention messages.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        150+ Radio stations
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        25+ TV channels
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        National newspapers
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
                                        <Globe className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Digital Platforms</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Social media and digital campaigns targeting youth and key populations with tailored messages.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        Social media campaigns
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        Mobile messaging
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        Interactive websites
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
                                        <BookOpen className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Community Outreach</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Community-based education and peer-to-peer communication for localized behavior change.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        Community dialogues
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        Peer educators
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        Cultural events
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Key Achievements */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mr-4">
                                        <TrendingUp className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Behavior Change Impact</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">HIV Testing Uptake</span>
                                        <span className="font-bold text-green-600">+35%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Condom Use</span>
                                        <span className="font-bold text-green-600">+28%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Stigma Reduction</span>
                                        <span className="font-bold text-green-600">+42%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                                        <Award className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Campaign Excellence</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Campaign Recall</span>
                                        <span className="font-bold text-purple-600">85%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Message Comprehension</span>
                                        <span className="font-bold text-purple-600">92%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Positive Response</span>
                                        <span className="font-bold text-purple-600">88%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Achievement Highlight */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                National SBCC Leadership
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Tanzania's SBCC program reaches over 25 million people annually through integrated 
                                communication strategies, driving significant behavior change and stigma reduction.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Join the Conversation
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Be part of Tanzania's HIV prevention communication efforts. 
                            Access resources, campaigns, and community programs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Get Involved
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
