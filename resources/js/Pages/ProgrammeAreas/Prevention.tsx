import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Shield,
    TestTube,
    Users,
    MessageCircle,
    Heart,
    Pill,
    Target,
    ArrowRight,
    CheckCircle,
    TrendingDown,
    Activity,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Prevention() {
    const preventionServices = [
        {
            title: "HIV Testing Services",
            description: "Comprehensive HIV testing and counseling services including rapid testing, self-testing, and partner testing",
            icon: TestTube,
            color: "from-blue-500 to-blue-600",
            href: "/interventions/hiv-testing-services-linkage",
        },
        {
            title: "Voluntary Medical Male Circumcision (VMMC)",
            description: "Safe medical male circumcision services to reduce HIV transmission risk by up to 60%",
            icon: Shield,
            color: "from-green-500 to-green-600",
            href: "/programme-areas/prevention/vmmc",
        },
        {
            title: "Social Behaviour Change Communication (SBCC)",
            description: "Evidence-based communication strategies to promote HIV prevention behaviors and reduce stigma",
            icon: MessageCircle,
            color: "from-purple-500 to-purple-600",
            href: "/programme-areas/prevention/sbcc",
        },
        {
            title: "Condom Promotion and Distribution",
            description: "Ensuring availability and accessibility of male and female condoms nationwide",
            icon: Heart,
            color: "from-red-500 to-red-600",
            href: "/programme-areas/prevention/condoms",
        },
        {
            title: "Prevention of Vertical Transmission",
            description: "Comprehensive PMTCT services to prevent mother-to-child transmission of HIV, syphilis, and hepatitis B",
            icon: Users,
            color: "from-pink-500 to-pink-600",
            href: "/programme-areas/prevention/pmtct",
        },
        {
            title: "Pre-Exposure Prophylaxis (PrEP)",
            description: "Preventive medication for high-risk individuals to reduce HIV acquisition risk",
            icon: Pill,
            color: "from-orange-500 to-orange-600",
            href: "/programme-areas/prevention/prep",
        },
        {
            title: "Key and Vulnerable Populations (KVP)",
            description: "Targeted prevention services for sex workers, MSM, PWID, and other vulnerable groups",
            icon: Target,
            color: "from-teal-500 to-teal-600",
            href: "/programme-areas/prevention/kvp",
        },
    ];

    const stats = [
        {
            label: "HIV Testing Sites",
            value: "3,500+",
            icon: TestTube,
            color: "text-blue-600",
        },
        {
            label: "VMMC Procedures (2019-2023)",
            value: "2.8M+",
            icon: Shield,
            color: "text-green-600",
        },
        {
            label: "Condoms Distributed Annually",
            value: "120M+",
            icon: Heart,
            color: "text-red-600",
        },
        {
            label: "PMTCT Coverage",
            value: "97%",
            icon: Users,
            color: "text-purple-600",
        },
    ];

    return (
        <PublicLayout title="Prevention Programme Area">
            <Head title="Prevention - Programme Areas" />

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
                                        <Shield className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Prevention
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Comprehensive HIV prevention services designed to reduce new infections 
                                        and protect vulnerable populations across Tanzania.
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
                                Prevention Impact
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Our prevention efforts have significantly reduced new HIV infections across Tanzania
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg text-center"
                                >
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
                            ))}
                        </div>

                        {/* Achievement Highlight */}
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
                                <TrendingDown className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                23% Reduction in New HIV Infections (2019-2023)
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Tanzania has achieved a significant 23% decline in new HIV infections through 
                                comprehensive prevention strategies including VMMC, PrEP, and targeted interventions 
                                for key populations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Prevention Services */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Prevention Services
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive prevention interventions targeting different populations and transmission routes
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {preventionServices.map((service, index) => (
                                <a
                                    key={index}
                                    href={service.href}
                                    className="group block"
                                >
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                                        <div className="text-center">
                                            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                <service.icon className="h-8 w-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {service.description}
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

                {/* Key Strategies */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Prevention Strategies
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Our evidence-based approach to HIV prevention
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Combination Prevention</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Implementing multiple prevention interventions simultaneously to maximize impact 
                                        and address different transmission routes and risk factors.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Biomedical interventions</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Behavioral interventions</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Structural interventions</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Targeted Approaches</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Tailoring prevention services to specific populations based on risk profiles, 
                                        geographic location, and demographic characteristics.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Key populations focus</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Geographic prioritization</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Age-specific interventions</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Prevention Saves Lives
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join our prevention efforts and help us achieve zero new HIV infections in Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Activity className="mr-2 h-5 w-5" />
                                Get Prevention Services
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                <ArrowRight className="mr-2 h-5 w-5" />
                                View All Programme Areas
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
