import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Shield,
    Users,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Award,
    Target,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Vmmc() {
    const stats = [
        {
            label: "VMMC Procedures Completed (2019-2023)",
            value: "2.8M+",
            icon: Shield,
            color: "text-blue-600",
        },
        {
            label: "HIV Risk Reduction",
            value: "60%",
            icon: TrendingUp,
            color: "text-green-600",
        },
        {
            label: "Active Service Sites",
            value: "450+",
            icon: Users,
            color: "text-red-600",
        },
        {
            label: "National Target Achievement",
            value: "78%",
            icon: Target,
            color: "text-purple-600",
        },
    ];

    const benefits = [
        "Reduces HIV acquisition risk by up to 60%",
        "Reduces risk of other sexually transmitted infections",
        "Improves genital hygiene",
        "May reduce risk of penile cancer",
        "May reduce risk of cervical cancer in female partners",
        "One-time procedure with lifelong benefits",
    ];

    return (
        <PublicLayout title="Voluntary Medical Male Circumcision (VMMC)">
            <Head title="VMMC - Prevention Programme" />

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
                                        Voluntary Medical Male Circumcision
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Safe, effective HIV prevention intervention reducing male HIV acquisition risk by up to 60%.
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
                                VMMC Impact in Tanzania
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Significant progress in scaling up voluntary medical male circumcision services
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
                                WHO Recommended Prevention Strategy
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                VMMC is recognized by WHO as one of the most effective biomedical HIV prevention interventions for heterosexual men.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Health Benefits
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Multiple health benefits of voluntary medical male circumcision
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                                    >
                                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-700 leading-relaxed">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Information */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Service Delivery
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Quality VMMC services delivered through trained healthcare providers
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Service Standards</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">WHO-approved surgical techniques</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Trained and certified providers</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Comprehensive counseling</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Follow-up care and support</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Target Populations</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Males aged 10-34 years</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">HIV-negative men</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">High HIV prevalence areas</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Key and vulnerable populations</span>
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
                            Access VMMC Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Find quality VMMC services at health facilities across Tanzania. 
                            Protect yourself and your community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Users className="mr-2 h-5 w-5" />
                                    Find VMMC Services
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
