import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Heart,
    Stethoscope,
    Users,
    Activity,
    Brain,
    Shield,
    Home,
    ArrowRight,
    CheckCircle,
    TrendingUp,
    Award,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function CareTreatmentSupport() {
    const careServices = [
        {
            title: "Community-based HIV and AIDS Services",
            description:
                "Comprehensive HIV services delivered at community level to improve access and reduce stigma",
            icon: Home,
            color: "from-blue-500 to-blue-600",
            href: "/programme-areas/care-treatment-support/community-services",
        },
        {
            title: "TB/HIV Collaboration Management",
            description:
                "Integrated services for patients with both TB and HIV to improve treatment outcomes",
            icon: Stethoscope,
            color: "from-green-500 to-green-600",
            href: "/programme-areas/care-treatment-support/tb-hiv",
        },
        {
            title: "Viral Hepatitis and Co-infections",
            description:
                "Comprehensive management of hepatitis B, hepatitis C, and other co-infections in PLHIV",
            icon: Shield,
            color: "from-purple-500 to-purple-600",
            href: "/programme-areas/care-treatment-support/viral-hepatitis",
        },
        {
            title: "Integrated NCD Management",
            description:
                "Integration of non-communicable disease services within HIV care for comprehensive health",
            icon: Activity,
            color: "from-red-500 to-red-600",
            href: "/programme-areas/care-treatment-support/ncd-integration",
        },
        {
            title: "Mental Health Integration",
            description:
                "Integration of mental health services in HIV and AIDS care to address psychosocial needs",
            icon: Brain,
            color: "from-orange-500 to-orange-600",
            href: "/programme-areas/care-treatment-support/mental-health",
        },
    ];

    const stats = [
        {
            label: "People on ART",
            value: "1.7M+",
            icon: Stethoscope,
            color: "text-blue-600",
        },
        {
            label: "Viral Suppression Rate",
            value: "95%",
            icon: Shield,
            color: "text-green-600",
        },
        {
            label: "Treatment Centers",
            value: "3,500+",
            icon: Home,
            color: "text-red-600",
        },
        {
            label: "Community Health Workers",
            value: "45,000+",
            icon: Users,
            color: "text-purple-600",
        },
    ];

    const achievements = [
        "Achieved 95% viral suppression rate among those on treatment",
        "Established over 3,500 HIV treatment and care sites nationwide",
        "Trained 50,000+ community health workers for HIV care",
        "Integrated TB/HIV services in all HIV care facilities",
        "Implemented differentiated service delivery models",
        "Achieved 97% treatment retention rate at 12 months",
    ];

    return (
        <PublicLayout title="Care, Treatment & Support">
            <Head title="Care, Treatment & Support - Programme Areas" />

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
                                        <Heart className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Care, Treatment & Support
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Comprehensive HIV care, treatment
                                        services, and support systems ensuring
                                        quality life for all people living with
                                        HIV in Tanzania.
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
                                Treatment & Care Impact
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Our comprehensive care and treatment services
                                have transformed the lives of people living with
                                HIV
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
                                <Award className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                95-95-95 Targets Achieved
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Tanzania has achieved the UNAIDS 95-95-95
                                targets with 90% knowing their status, 97% of
                                those diagnosed on treatment, and 95% achieving
                                viral suppression, demonstrating excellence in
                                HIV care and treatment services.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Care Services */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Care & Treatment Services
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive and integrated services designed
                                to provide holistic care for people living with
                                HIV
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {careServices.map((service, index) => (
                                <a
                                    key={index}
                                    href={service.href}
                                    className="group block"
                                >
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                                        <div className="text-center">
                                            <div
                                                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <service.icon className="h-8 w-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {service.description}
                                            </p>
                                            <div className="flex items-center justify-center space-x-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                                                <span className="font-medium">
                                                    Learn More
                                                </span>
                                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Treatment Approach */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Our Treatment Approach
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Evidence-based, patient-centered care that
                                    addresses the full spectrum of HIV treatment
                                    needs
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        Test and Treat
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Immediate initiation of antiretroviral
                                        therapy (ART) for all people diagnosed
                                        with HIV, regardless of CD4 count or
                                        clinical stage.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">
                                                Same-day ART initiation
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">
                                                Rapid viral load monitoring
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        Differentiated Care
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Tailored service delivery models based
                                        on patient needs, preferences, and
                                        clinical stability to improve access and
                                        retention.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">
                                                Multi-month dispensing
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">
                                                Community ART groups
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        Integrated Services
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Comprehensive care that addresses HIV
                                        alongside other health conditions and
                                        social support needs.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">
                                                TB/HIV integration
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">
                                                Mental health support
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
                                    Significant milestones in HIV care and
                                    treatment in Tanzania
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {achievements.map((achievement, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                                    >
                                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-700 leading-relaxed">
                                            {achievement}
                                        </p>
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
                            Quality Care for All
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Access comprehensive HIV care and treatment services
                            designed to help you live a healthy, fulfilling
                            life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Stethoscope className="mr-2 h-5 w-5" />
                                Find Care Services
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
