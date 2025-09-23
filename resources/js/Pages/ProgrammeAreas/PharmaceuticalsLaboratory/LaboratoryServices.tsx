import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    TestTube,
    ArrowRight,
    Heart,
    CheckCircle,
    Users,
    Target,
    Award,
    Shield,
    TrendingUp,
    Activity,
    Microscope,
    FlaskConical,
    Beaker,
    Zap,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function LaboratoryServices() {
    const stats = [
        {
            label: "Laboratory Sites",
            value: "3,500+",
            icon: TestTube,
            color: "text-blue-600",
        },
        {
            label: "Annual HIV Tests",
            value: "12M+",
            icon: Activity,
            color: "text-green-600",
        },
        {
            label: "Quality Assurance Coverage",
            value: "95%",
            icon: Target,
            color: "text-red-600",
        },
        {
            label: "Turnaround Time",
            value: "<24hrs",
            icon: Zap,
            color: "text-purple-600",
        },
    ];

    const laboratoryServices = [
        {
            category: "HIV Diagnosis",
            description: "Comprehensive HIV testing services for early detection",
            tests: [
                "HIV Rapid Tests (RDTs)",
                "ELISA/EIA Testing",
                "Western Blot Confirmation",
                "HIV DNA/RNA PCR",
                "Point-of-Care Testing",
            ],
            coverage: "Available at all levels",
        },
        {
            category: "Treatment Monitoring",
            description: "Laboratory monitoring for HIV treatment optimization",
            tests: [
                "CD4+ T-cell Count",
                "HIV Viral Load Testing",
                "Complete Blood Count",
                "Liver Function Tests",
                "Kidney Function Tests",
            ],
            coverage: "3,500+ sites nationwide",
        },
        {
            category: "Drug Resistance Testing",
            description: "Advanced testing for treatment failure management",
            tests: [
                "HIV Genotyping",
                "Drug Resistance Mutations",
                "Phenotypic Resistance",
                "Integrase Resistance",
                "Tropism Testing",
            ],
            coverage: "Regional reference labs",
        },
        {
            category: "Opportunistic Infections",
            description: "Laboratory diagnosis of HIV-related infections",
            tests: [
                "TB Microscopy & Culture",
                "Cryptococcal Antigen",
                "Toxoplasma Testing",
                "Hepatitis B & C Testing",
                "STI Screening Panel",
            ],
            coverage: "Integrated with HIV care",
        },
    ];

    const qualityAssurance = [
        {
            program: "External Quality Assessment (EQA)",
            description: "Regular proficiency testing for all HIV laboratories",
            frequency: "Quarterly",
            participation: "95% of labs",
            benefits: [
                "Standardized testing procedures",
                "Performance benchmarking",
                "Continuous improvement",
                "Accreditation support",
            ],
        },
        {
            program: "Internal Quality Control (IQC)",
            description: "Daily quality control measures for reliable results",
            frequency: "Daily",
            participation: "All testing sites",
            benefits: [
                "Real-time quality monitoring",
                "Error detection and correction",
                "Result reliability assurance",
                "Staff competency maintenance",
            ],
        },
        {
            program: "Laboratory Accreditation",
            description: "ISO 15189 accreditation for reference laboratories",
            frequency: "Ongoing",
            participation: "15 reference labs",
            benefits: [
                "International standards compliance",
                "Enhanced credibility",
                "Improved service quality",
                "Regulatory compliance",
            ],
        },
    ];

    const innovations = [
        {
            technology: "Point-of-Care Testing",
            description: "Rapid HIV testing at the point of patient care",
            implementation: "Deployed in 2,800+ sites",
            benefits: [
                "Same-day results",
                "Reduced patient loss",
                "Improved linkage to care",
                "Decentralized testing",
            ],
        },
        {
            technology: "Digital Health Integration",
            description: "Electronic laboratory information systems",
            implementation: "Operational in 450+ labs",
            benefits: [
                "Automated result reporting",
                "Reduced turnaround time",
                "Improved data quality",
                "Real-time monitoring",
            ],
        },
        {
            technology: "Mobile Laboratory Units",
            description: "Mobile labs serving remote and hard-to-reach areas",
            implementation: "25 units nationwide",
            benefits: [
                "Extended service coverage",
                "Reduced travel burden",
                "Community-level access",
                "Outbreak response capability",
            ],
        },
    ];

    const achievements = [
        "Established comprehensive HIV laboratory network of 3,500+ sites",
        "Achieved 95% quality assurance coverage nationwide",
        "Reduced HIV test turnaround time to <24 hours",
        "Implemented viral load testing in all regions",
        "Achieved ISO 15189 accreditation for 15 reference laboratories",
        "Conducted 12+ million HIV tests annually",
    ];

    return (
        <PublicLayout title="HIV and AIDS Laboratory Services">
            <Head title="Laboratory Services - Pharmaceuticals & Laboratory" />

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
                                        <TestTube className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        HIV Laboratory Services
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Comprehensive, quality-assured laboratory services for HIV diagnosis, 
                                        treatment monitoring, and program evaluation across Tanzania.
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
                                Laboratory Network Performance
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive laboratory services ensuring accurate HIV diagnosis and treatment monitoring
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
                                World-Class Laboratory Excellence
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Tanzania operates one of Africa's most comprehensive HIV laboratory networks, 
                                providing quality-assured testing services from community to national levels.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Laboratory Services */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Laboratory Services Portfolio
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive HIV testing services across the continuum of care
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {laboratoryServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{service.category}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                                    
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Available Tests:</h4>
                                        <ul className="space-y-2">
                                            {service.tests.map((test, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <Microscope className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{test}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <p className="text-blue-800 font-medium text-sm">
                                            Coverage: {service.coverage}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quality Assurance */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Quality Assurance Programs
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive quality systems ensuring reliable and accurate laboratory results
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {qualityAssurance.map((qa, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{qa.program}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{qa.description}</p>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Frequency:</p>
                                            <p className="text-gray-800 font-medium text-sm">{qa.frequency}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Participation:</p>
                                            <p className="text-gray-800 font-medium text-sm">{qa.participation}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                                        <ul className="space-y-2">
                                            {qa.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Innovations */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Laboratory Innovations
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Cutting-edge technologies enhancing HIV laboratory services
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {innovations.map((innovation, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{innovation.technology}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{innovation.description}</p>
                                    
                                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                        <p className="text-blue-800 font-medium text-sm">{innovation.implementation}</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                                        <ul className="space-y-2">
                                            {innovation.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <TrendingUp className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Achievements */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Key Achievements
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Significant milestones in HIV laboratory service development in Tanzania
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {achievements.map((achievement, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg"
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
                            Quality HIV Laboratory Services
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Access comprehensive HIV laboratory services at healthcare facilities 
                            across Tanzania with quality-assured results and rapid turnaround times.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <TestTube className="mr-2 h-5 w-5" />
                                    Find Laboratory Services
                                </Button>
                            </a>
                            <a href="/programme-areas/pharmaceuticals-laboratory">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                                >
                                    <ArrowRight className="mr-2 h-5 w-5" />
                                    Back to Pharmaceuticals & Laboratory
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
