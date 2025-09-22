import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    FlaskConical,
    Truck,
    TestTube,
    Package,
    Shield,
    Activity,
    Target,
    ArrowRight,
    CheckCircle,
    TrendingUp,
    Award,
    Building,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function PharmaceuticalsLaboratory() {
    const services = [
        {
            title: "Supply Chain Management",
            description: "Comprehensive management of HIV commodities from procurement to last-mile delivery",
            icon: Truck,
            color: "from-blue-500 to-blue-600",
            href: "/programme-areas/pharmaceuticals-laboratory/supply-chain",
        },
        {
            title: "HIV and AIDS Laboratory Services",
            description: "Quality-assured laboratory services for HIV diagnosis, monitoring, and treatment optimization",
            icon: TestTube,
            color: "from-green-500 to-green-600",
            href: "/programme-areas/pharmaceuticals-laboratory/laboratory-services",
        },
    ];

    const stats = [
        {
            label: "Laboratory Sites",
            value: "850+",
            icon: FlaskConical,
            color: "text-blue-600",
        },
        {
            label: "ARV Distribution Points",
            value: "3,500+",
            icon: Package,
            color: "text-green-600",
        },
        {
            label: "Viral Load Tests/Year",
            value: "1.8M+",
            icon: TestTube,
            color: "text-red-600",
        },
        {
            label: "ARV Stock Availability",
            value: "95%",
            icon: Truck,
            color: "text-purple-600",
        },
    ];

    const supplyChainComponents = [
        {
            title: "Procurement & Quantification",
            description: "Strategic procurement planning and accurate quantification of HIV commodities",
            features: [
                "National quantification exercises",
                "Competitive procurement processes",
                "Quality assurance protocols",
                "Cost optimization strategies",
            ],
        },
        {
            title: "Warehousing & Distribution",
            description: "Efficient storage and distribution systems ensuring commodity availability",
            features: [
                "Central and regional warehouses",
                "Cold chain management",
                "Inventory management systems",
                "Last-mile delivery solutions",
            ],
        },
        {
            title: "Rational Use & Pharmacovigilance",
            description: "Ensuring appropriate use of medicines and monitoring adverse events",
            features: [
                "Treatment guidelines implementation",
                "Adverse event monitoring",
                "Drug resistance surveillance",
                "Rational prescribing practices",
            ],
        },
    ];

    const labServices = [
        {
            title: "HIV Diagnosis",
            description: "Comprehensive HIV testing services across the testing cascade",
            tests: [
                "Rapid HIV testing",
                "ELISA confirmatory testing",
                "DNA PCR for infants",
                "Point-of-care testing",
            ],
        },
        {
            title: "Treatment Monitoring",
            description: "Laboratory services to monitor treatment response and optimize care",
            tests: [
                "CD4 cell count testing",
                "Viral load testing",
                "Drug resistance testing",
                "Liver function monitoring",
            ],
        },
        {
            title: "Co-infection Testing",
            description: "Testing for common co-infections in people living with HIV",
            tests: [
                "TB diagnosis (GeneXpert)",
                "Hepatitis B & C testing",
                "Cryptococcal antigen",
                "Syphilis testing",
            ],
        },
    ];

    const achievements = [
        "Achieved 100% national coverage of ARV supply chain",
        "Established 1,200+ laboratory sites for HIV testing",
        "Implemented viral load testing in all regions",
        "Achieved 95% ARV stock availability at facility level",
        "Established quality assurance program for all labs",
        "Implemented electronic logistics management system",
    ];

    return (
        <PublicLayout title="Pharmaceuticals & Laboratory Services">
            <Head title="Pharmaceuticals & Laboratory Services - Programme Areas" />

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
                                        <FlaskConical className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Pharmaceuticals & Laboratory Services
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Ensuring reliable supply of quality HIV commodities and comprehensive 
                                        laboratory services across Tanzania.
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
                                Service Coverage
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive pharmaceutical and laboratory services ensuring quality HIV care nationwide
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
                                95% ARV Stock Availability Achievement
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Maintained 95% ARV availability at facility level through robust supply chain management, 
                                ensuring continuous treatment access for 1.7+ million people living with HIV across Tanzania.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Services */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Core Services
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Two essential components ensuring quality HIV care through reliable supply chains and laboratory services
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <a
                                    key={index}
                                    href={service.href}
                                    className="group block"
                                >
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                                        <div className="text-center">
                                            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                <service.icon className="h-10 w-10 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
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

                {/* Supply Chain Management Details */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Supply Chain Management
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                End-to-end supply chain management ensuring reliable access to quality HIV commodities
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {supplyChainComponents.map((component, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{component.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{component.description}</p>
                                    <ul className="space-y-3">
                                        {component.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Laboratory Services Details */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Laboratory Services
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive laboratory services supporting the entire HIV care cascade
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {labServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                                        <TestTube className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                                    <ul className="space-y-3">
                                        {service.tests.map((test, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{test}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quality Assurance */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Quality Assurance
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Ensuring quality and reliability across all pharmaceutical and laboratory services
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                                        <Shield className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Pharmaceutical Quality</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Comprehensive quality assurance for all HIV commodities from procurement to patient delivery.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">WHO prequalified products</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Cold chain maintenance</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Expiry date monitoring</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
                                        <Target className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Laboratory Quality</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Rigorous quality assurance programs ensuring accurate and reliable laboratory results.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">External quality assurance</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Equipment calibration</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Staff competency testing</span>
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
                                    Significant milestones in pharmaceutical and laboratory services
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
                            Quality Services, Reliable Supply
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Our pharmaceutical and laboratory services ensure every person living with HIV 
                            has access to quality commodities and diagnostic services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Building className="mr-2 h-5 w-5" />
                                Find Service Centers
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
