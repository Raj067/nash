import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Shield,
    ArrowRight,
    Heart,
    CheckCircle,
    AlertTriangle,
    Users,
    Target,
    Award,
    Activity,
    FileText,
    Clock,
    BarChart3,
    Stethoscope,
    Eye,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function RationalUse() {
    const stats = [
        {
            label: "Healthcare Workers Trained",
            value: "8,500+",
            icon: Users,
            color: "text-blue-600",
        },
        {
            label: "ADR Reports Processed",
            value: "2,400+",
            icon: FileText,
            color: "text-green-600",
        },
        {
            label: "Health Facilities Covered",
            value: "1,200+",
            icon: Target,
            color: "text-red-600",
        },
        {
            label: "Patient Safety Rate",
            value: "98.5%",
            icon: Shield,
            color: "text-purple-600",
        },
    ];

    const rumComponents = [
        {
            title: "Healthcare Worker Capacity Building",
            description: "Comprehensive training programs for implementing rational use of medicines",
            processes: [
                "Clinical decision-making training",
                "Evidence-based prescribing guidelines",
                "Drug interaction awareness",
                "Patient counseling skills",
                "Medication adherence strategies",
            ],
            metrics: "8,500+ HCWs trained annually",
        },
        {
            title: "Pharmacovigilance Systems",
            description: "Robust monitoring and reporting systems for adverse drug reactions",
            processes: [
                "ADR detection and reporting",
                "Signal detection and analysis",
                "Risk assessment protocols",
                "Safety communication systems",
                "Regulatory compliance monitoring",
            ],
            metrics: "2,400+ ADR reports processed",
        },
        {
            title: "Community Awareness Programs",
            description: "Patient and community education on medication safety and reporting",
            processes: [
                "Patient education materials",
                "Community health worker training",
                "Public awareness campaigns",
                "Medication safety workshops",
                "Reporting mechanism education",
            ],
            metrics: "500,000+ patients reached",
        },
    ];

    const priorityStrategies = [
        "Strengthen HCW capacity in implementing RUM",
        "Improve use of pharmacovigilance monitoring systems (recording and reporting)",
        "Increase awareness on ADR among patients and communities to facilitate timely reporting of ADR",
        "In close collaboration with TMDA, undertake surveillance of ADR monitoring as new ARVs are rolled out, and strengthen the current implementation of active ARV toxicity surveillance",
        "Conduct annual RUM assessment and evaluation with particular focus on ARVs and related commodities use"
    ];

    const adverseReactionTypes = [
        {
            category: "Mild Reactions",
            reactions: [
                "Nausea and vomiting",
                "Headache",
                "Skin rash",
                "Fatigue",
            ],
            frequency: "15-20% of patients",
            management: "Supportive care and monitoring",
        },
        {
            category: "Moderate Reactions",
            reactions: [
                "Peripheral neuropathy",
                "Lipodystrophy",
                "Anemia",
                "Hepatotoxicity",
            ],
            frequency: "5-10% of patients",
            management: "Dose adjustment or regimen change",
        },
        {
            category: "Severe Reactions",
            reactions: [
                "Stevens-Johnson syndrome",
                "Lactic acidosis",
                "Severe hepatotoxicity",
                "Hypersensitivity reactions",
            ],
            frequency: "<2% of patients",
            management: "Immediate discontinuation and alternative therapy",
        },
    ];

    const monitoringTools = [
        {
            tool: "Electronic ADR Reporting System",
            description: "Digital platform for healthcare workers to report adverse drug reactions",
            implementation: "Deployed in 1,200+ facilities",
            benefits: [
                "Real-time reporting capability",
                "Automated signal detection",
                "Trend analysis and alerts",
                "Regulatory compliance tracking",
            ],
        },
        {
            tool: "Active Surveillance Program",
            description: "Proactive monitoring of patients on new ARV regimens",
            implementation: "Covering 500+ high-volume sites",
            benefits: [
                "Early detection of safety signals",
                "Comprehensive patient follow-up",
                "Risk factor identification",
                "Evidence-based safety updates",
            ],
        },
        {
            tool: "Patient Safety Cards",
            description: "Educational materials for patients on medication safety and reporting",
            implementation: "Distributed to 800,000+ patients",
            benefits: [
                "Improved patient awareness",
                "Enhanced reporting rates",
                "Better medication adherence",
                "Reduced preventable ADRs",
            ],
        },
    ];

    const qualityIndicators = [
        {
            indicator: "Rational Prescribing Rate",
            current: "87%",
            target: "95%",
            trend: "improving",
        },
        {
            indicator: "ADR Reporting Rate",
            current: "12.5 per 1000 patients",
            target: "15 per 1000 patients",
            trend: "improving",
        },
        {
            indicator: "Treatment Adherence",
            current: "89%",
            target: "95%",
            trend: "stable",
        },
        {
            indicator: "Safety Signal Detection Time",
            current: "14 days",
            target: "7 days",
            trend: "improving",
        },
    ];

    const achievements = [
        "Established comprehensive pharmacovigilance system covering 1,200+ health facilities",
        "Trained 8,500+ healthcare workers in rational use of medicines",
        "Processed and analyzed 2,400+ adverse drug reaction reports annually",
        "Achieved 98.5% patient safety rate in HIV treatment programs",
        "Implemented electronic ADR reporting system in all major facilities",
        "Developed patient safety education materials in multiple languages",
    ];

    return (
        <PublicLayout title="Rational Use of Medicines & Pharmacovigilance">
            <Head title="Rational Use of Medicines - Pharmaceuticals & Laboratory" />

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
                                    <Shield className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Rational Use of Medicines & Pharmacovigilance
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Ensuring safe, effective, and appropriate use of HIV medicines through 
                                    comprehensive monitoring and surveillance systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Priority Strategies Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Priority Strategies
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Strategic approaches to enhance rational use of medicines and strengthen pharmacovigilance systems
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 gap-6">
                                {priorityStrategies.map((strategy, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{strategy}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Statistics Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Program Performance
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Key metrics demonstrating the impact of rational use and pharmacovigilance programs
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    </div>
                </section>

                {/* RUM Components */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Program Components
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive approach to rational use of medicines and pharmacovigilance
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {rumComponents.map((component, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{component.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{component.description}</p>
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Key Activities:</h4>
                                        <ul className="space-y-2">
                                            {component.processes.map((process, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{process}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <p className="text-blue-800 font-medium text-sm">{component.metrics}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Adverse Reactions */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Adverse Drug Reaction Management
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive classification and management of adverse drug reactions
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {adverseReactionTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-gray-800">{type.category}</h3>
                                        <div className="text-right">
                                            <div className="text-lg font-bold text-blue-600">{type.frequency}</div>
                                            <div className="text-sm text-gray-600">Frequency</div>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Common Reactions:</h4>
                                        <ul className="space-y-2">
                                            {type.reactions.map((reaction, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <AlertTriangle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{reaction}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-4">
                                        <p className="text-green-800 font-medium text-sm">
                                            Management: {type.management}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Monitoring Tools */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Monitoring & Surveillance Tools
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Advanced tools and systems for comprehensive pharmacovigilance
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {monitoringTools.map((tool, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{tool.tool}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{tool.description}</p>
                                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                        <p className="text-blue-800 font-medium text-sm">{tool.implementation}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                                        <ul className="space-y-2">
                                            {tool.benefits.map((benefit, idx) => (
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

                {/* Quality Indicators */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Quality Indicators
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Key performance indicators for rational use and pharmacovigilance programs
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {qualityIndicators.map((indicator, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-bold text-gray-800">{indicator.indicator}</h3>
                                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            indicator.trend === 'improving' ? 'bg-green-100 text-green-800' : 
                                            indicator.trend === 'stable' ? 'bg-blue-100 text-blue-800' : 
                                            'bg-orange-100 text-orange-800'
                                        }`}>
                                            {indicator.trend}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-2xl font-bold text-blue-600">{indicator.current}</div>
                                            <div className="text-sm text-gray-600">Current</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-semibold text-gray-800">{indicator.target}</div>
                                            <div className="text-sm text-gray-600">Target</div>
                                        </div>
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
                                    Significant milestones in rational use of medicines and pharmacovigilance
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
                            Safe & Effective HIV Treatment
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Learn more about medication safety, adverse reaction reporting, 
                            and rational use of HIV medicines.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Shield className="mr-2 h-5 w-5" />
                                    Report ADR
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
