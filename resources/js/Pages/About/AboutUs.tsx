import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Users,
    Activity,
    MapPin,
    Calendar,
    TrendingUp,
    Eye,
    Stethoscope,
    Shield,
    Award,
    Heart,
    BarChart3,
    Handshake,
    ArrowRight,
    Building,
    FileText,
    Mail,
    Phone,
    Target,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function AboutUs() {
    const stats = [
        {
            label: "People Living with HIV",
            value: "1.7M+",
            icon: Users,
            color: "text-red-600",
        },
        {
            label: "HIV Prevalence Rate",
            value: "4.7%",
            icon: Activity,
            color: "text-orange-600",
        },
        {
            label: "Regions Covered",
            value: "31",
            icon: MapPin,
            color: "text-blue-600",
        },
        {
            label: "Years of Service",
            value: "30+",
            icon: Calendar,
            color: "text-green-600",
        },
    ];

    const achievements = [
        {
            title: "50% Reduction in AIDS Deaths",
            description: "From 64,000 in 2010 to 32,000 in 2020",
            icon: TrendingUp,
            color: "bg-green-100 text-green-600",
        },
        {
            title: "88% HIV Status Awareness",
            description: "Nearly achieved 90% target for HIV status awareness",
            icon: Eye,
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "97% Treatment Coverage",
            description: "Of those who know their status are on HIV treatment",
            icon: Stethoscope,
            color: "bg-purple-100 text-purple-600",
        },
        {
            title: "95% Viral Suppression",
            description: "Among those on ART treatment",
            icon: Shield,
            color: "bg-indigo-100 text-indigo-600",
        },
    ];

    const coreValues = [
        {
            title: "Transparency & Accountability",
            description:
                "We operate with complete transparency and are accountable to the people we serve",
            icon: Eye,
            gradient: "from-blue-400 to-blue-600",
        },
        {
            title: "Excellence in Service",
            description:
                "We strive to provide the highest quality HIV/AIDS prevention and treatment services",
            icon: Award,
            gradient: "from-green-400 to-green-600",
        },
        {
            title: "Compassionate Care",
            description:
                "We treat every individual with dignity, respect, and compassion",
            icon: Heart,
            gradient: "from-red-400 to-red-600",
        },
        {
            title: "Evidence-Based Approach",
            description:
                "Our programs are based on scientific evidence and best practices",
            icon: BarChart3,
            gradient: "from-purple-400 to-purple-600",
        },
        {
            title: "Community Partnership",
            description:
                "We work closely with communities to ensure culturally appropriate interventions",
            icon: Handshake,
            gradient: "from-orange-400 to-orange-600",
        },
        {
            title: "Innovation & Adaptation",
            description:
                "We continuously innovate and adapt our approaches to meet evolving challenges",
            icon: TrendingUp,
            gradient: "from-teal-400 to-teal-600",
        },
    ];

    return (
        <PublicLayout title="About Us">
            <Head title="About Us" />

            <div className="min-h-screen">
                {/* Hero Section with Background Image */}
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
                                    <Heart className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    About NASHCOP
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Tanzania's leading institution in the fight
                                    against HIV/AIDS, STIs and Hepatitis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
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
                                <BarChart3 className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                NASHCOP at a Glance
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Key statistics about our impact and reach in
                                Tanzania's fight against HIV/AIDS
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg"
                                >
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="text-center relative z-10">
                                        <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                            <stat.icon className="h-10 w-10 text-white" />
                                        </div>
                                        <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-600 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission, Vision, Values */}
                <section className="py-20 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6">
                                <Target className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Our Foundation
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                The mission, vision and values that guide our
                                work in Tanzania's HIV/AIDS response
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Mission */}
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src="/images/arvsImages.jpeg"
                                        alt="Our Mission"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 right-4 p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
                                        <Target className="h-6 w-6 text-white" />
                                    </div>
                                </div>

                                <div className="p-8 text-center relative z-10">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                        Our Mission
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To lead Tanzania's response to HIV/AIDS
                                        through evidence-based prevention,
                                        treatment, and care programs that reduce
                                        HIV transmission and improve the quality
                                        of life for all people affected by
                                        HIV/AIDS.
                                    </p>
                                </div>
                            </div>

                            {/* Vision */}
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src="/images/arvsImages.jpeg"
                                        alt="Our Vision"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 right-4 p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg">
                                        <Eye className="h-6 w-6 text-white" />
                                    </div>
                                </div>

                                <div className="p-8 text-center relative z-10">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                                        Our Vision
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        A Tanzania free from HIV/AIDS where all
                                        people have access to quality
                                        prevention, treatment, and care
                                        services, and where those affected by
                                        HIV/AIDS live with dignity and without
                                        discrimination.
                                    </p>
                                </div>
                            </div>

                            {/* Values Preview */}
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src="/images/arvsImages.jpeg"
                                        alt="Our Values"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 right-4 p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg">
                                        <Award className="h-6 w-6 text-white" />
                                    </div>
                                </div>

                                <div className="p-8 text-center relative z-10">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                                        Our Values
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        We are guided by core values that shape
                                        every aspect of our work in the fight
                                        against HIV/AIDS.
                                    </p>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-purple-500/50 hover:bg-purple-500/10"
                                    >
                                        View All Values
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values Detailed */}
                <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
                    {/* Background Graphics */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
                        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-10"></div>
                        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-green-400 rounded-full blur-2xl opacity-10"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
                                <Heart className="h-12 w-12 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Our Core Values
                            </h2>
                            <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                                These values guide everything we do in our
                                mission to combat HIV/AIDS in Tanzania
                                <br />
                                <span className="text-sm text-blue-200 mt-2 block">
                                    Guiding principles for our work
                                </span>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coreValues.map((value, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20 h-full"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <value.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                                        {value.title}
                                    </h4>
                                    <p className="text-blue-100 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Achievements */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-6">
                                <Award className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Key Achievements
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Significant progress in Tanzania's fight against
                                HIV/AIDS through evidence-based programs and
                                community partnerships
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl shadow-lg"
                                >
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Achievement Image/Visual */}
                                    <div className="relative h-32 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-6xl font-bold text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
                                                {achievement.title.match(
                                                    /\d+/
                                                )?.[0] || "★"}
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                            <achievement.icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>

                                    <div className="p-8 relative z-10">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                                    {achievement.title}
                                                </h4>
                                                <p className="text-gray-600 leading-relaxed mb-4">
                                                    {achievement.description}
                                                </p>

                                                {/* Progress indicator */}
                                                <div className="flex items-center space-x-2">
                                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-full group-hover:from-blue-600 group-hover:to-purple-700 transition-colors duration-300"></div>
                                                    </div>
                                                    <span className="text-sm font-semibold text-green-600">
                                                        Achieved
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Achievement Summary */}
                        <div className="mt-16 text-center">
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
                                        <TrendingUp className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                                        Towards an AIDS-Free Tanzania
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                        These achievements represent significant
                                        milestones in our journey towards
                                        eliminating HIV/AIDS as a public health
                                        threat in Tanzania. We continue to work
                                        tirelessly with our partners and
                                        communities to achieve the UNAIDS
                                        95-95-95 targets and beyond.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Links to Sub-pages */}
                <section className="py-16 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                                Learn More About Us
                            </h2>
                            <p className="text-xl text-gray-600">
                                Explore different aspects of our organization
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Organization Structure",
                                    href: "/about/structure",
                                    icon: Building,
                                    color: "from-blue-500 to-blue-600",
                                },
                                {
                                    title: "Leadership",
                                    href: "/about/leadership",
                                    icon: Users,
                                    color: "from-green-500 to-green-600",
                                },
                                {
                                    title: "History & Mandate",
                                    href: "/about/history",
                                    icon: FileText,
                                    color: "from-purple-500 to-purple-600",
                                },
                                {
                                    title: "Strategic Plans",
                                    href: "/about/strategic-plans",
                                    icon: Target,
                                    color: "from-orange-500 to-orange-600",
                                },
                            ].map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="group block"
                                >
                                    <div className="backdrop-blur-lg bg-white/40 border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                                        <div
                                            className={`inline-flex p-4 bg-gradient-to-r ${link.color} rounded-2xl shadow-lg mb-4`}
                                        >
                                            <link.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-2">
                                            {link.title}
                                        </h4>
                                        <ArrowRight className="h-5 w-5 text-gray-500 mx-auto group-hover:text-blue-600 transition-colors" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="backdrop-blur-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/30 rounded-3xl p-12 shadow-2xl text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Have Questions About Our Work?
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Get in touch with us to learn more about our
                                HIV/AIDS programs and how you can get involved
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Mail className="mr-2 h-5 w-5" />
                                    Contact Us
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-blue-500/50 hover:bg-blue-500/10 backdrop-blur-sm"
                                >
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call Hotline: 199
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
