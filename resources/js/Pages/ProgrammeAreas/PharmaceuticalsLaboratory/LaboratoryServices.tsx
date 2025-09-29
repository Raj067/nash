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
            description:
                "Comprehensive HIV testing services for early detection",
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
                <div className="relative h-[500px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(/images/about.png)`,
                        }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <Microscope className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Laboratory Management Systems
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Medical laboratories in Tanzania play an
                                    essential role in determining clinical
                                    decisions and providing clinicians with
                                    information that assists in preventing,
                                    diagnosing, treating, and managing diseases.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overview Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Laboratory Management Systems Overview
                                </h2>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    This has been made possible by the MoH
                                    implementing Laboratory Management Systems
                                    (LMS) to strengthen Laboratory Information
                                    Systems (LIS), Planned Preventive
                                    Maintenance (PPM), Quality Management
                                    Systems (QMS) and Sample transportation
                                    systems.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    In line with the broader concept of
                                    Diagnostic Network Optimisation (DNO) a
                                    network analytics approach will continue to
                                    be used to improve and implement a
                                    patient-centred and cost-efficient
                                    diagnostic system that offers equitable
                                    diagnostic services to all.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-800 mb-8">
                                    Priority Strategies
                                </h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        "Improve utilisation of LIS for CT management and decision-making at all levels (Information systems)",
                                        "Strengthen the equipment PPM plans at POCT sites and testing laboratories (Equipment maintenance) through scaling up of the equipment placement model",
                                        "Expand the implementation of the QMS for laboratory networks",
                                        "Strengthen sample referral systems at POCT sites and testing laboratories (Sample management)",
                                        "Improve access to HVL, HEID, Hepatis B and C testing and shorten TAT by scaling up geographical coverage of testing laboratories",
                                        "Strengthen certification of non-laboratory testers to facilitate quality HTS at HF level",
                                        "Strengthen stakeholder coordination and collaboration through regular joint meetings to enhance the sharing of critical inputs to laboratory commodities quantification",
                                        "Regularly improve optimization of laboratory services and networks",
                                    ].map((strategy, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">
                                                {strategy}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
