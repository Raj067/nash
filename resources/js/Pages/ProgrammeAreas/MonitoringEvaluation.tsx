import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    BarChart3,
    Search,
    Activity,
    Database,
    TrendingUp,
    FileText,
    Users,
    ArrowRight,
    CheckCircle,
    Target,
    Award,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function MonitoringEvaluation() {
    const meServices = [
        {
            title: "HIV Research",
            description: "Conducting operational research to inform evidence-based HIV programming and policy decisions",
            icon: Search,
            color: "from-blue-500 to-blue-600",
            href: "/programme-areas/monitoring-evaluation/research",
        },
        {
            title: "HIV Surveillance",
            description: "Comprehensive surveillance systems to monitor HIV trends, patterns, and epidemic dynamics",
            icon: Activity,
            color: "from-green-500 to-green-600",
            href: "/programme-areas/monitoring-evaluation/surveillance",
        },
        {
            title: "Health Information Systems (HIS)",
            description: "Robust health information systems for data collection, analysis, and decision-making",
            icon: Database,
            color: "from-purple-500 to-purple-600",
            href: "/programme-areas/monitoring-evaluation/his",
        },
    ];

    const stats = [
        {
            label: "Data Collection Sites",
            value: "3,500+",
            icon: Database,
            color: "text-blue-600",
        },
        {
            label: "Active Research Studies",
            value: "85+",
            icon: Search,
            color: "text-green-600",
        },
        {
            label: "HIV Surveillance Sites",
            value: "45",
            icon: Activity,
            color: "text-red-600",
        },
        {
            label: "Annual Reports Published",
            value: "15+",
            icon: FileText,
            color: "text-purple-600",
        },
    ];

    const keyIndicators = [
        {
            indicator: "HIV Incidence Rate",
            value: "0.13%",
            trend: "Declining",
            description: "New HIV infections per 1,000 population (2023)",
        },
        {
            indicator: "HIV Prevalence",
            value: "4.6%",
            trend: "Stable",
            description: "Overall HIV prevalence in adults 15-49 (THIS 2023)",
        },
        {
            indicator: "Treatment Coverage",
            value: "97%",
            trend: "Increasing",
            description: "% of PLHIV on antiretroviral therapy",
        },
        {
            indicator: "Viral Suppression",
            value: "95%",
            trend: "Increasing",
            description: "% achieving viral suppression on ART",
        },
    ];

    const researchAreas = [
        "Implementation science for HIV interventions",
        "Behavioral and social research",
        "Clinical trials and treatment optimization",
        "Prevention research including PrEP and VMMC",
        "Health systems strengthening research",
        "Stigma and discrimination studies",
        "Economic evaluation of HIV programs",
        "Pediatric and adolescent HIV research",
    ];

    return (
        <PublicLayout title="Monitoring & Evaluation">
            <Head title="Monitoring & Evaluation - Programme Areas" />

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
                                        <BarChart3 className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Monitoring & Evaluation
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Data-driven monitoring, research, surveillance, and health information systems 
                                        to guide Tanzania's HIV/AIDS response.
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
                                M&E System Overview
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Our comprehensive monitoring and evaluation system provides critical data for evidence-based decision making
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

                        {/* Key Indicators */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Key HIV Indicators</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {keyIndicators.map((item, index) => (
                                    <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                                        <div className="text-2xl font-bold text-blue-600 mb-2">{item.value}</div>
                                        <div className="text-sm font-semibold text-gray-800 mb-1">{item.indicator}</div>
                                        <div className="text-xs text-gray-600 mb-2">{item.description}</div>
                                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                            item.trend === 'Declining' ? 'bg-green-100 text-green-800' :
                                            item.trend === 'Increasing' ? 'bg-blue-100 text-blue-800' :
                                            'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            <TrendingUp className="h-3 w-3 mr-1" />
                                            {item.trend}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* M&E Services */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                M&E Components
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Three core components that form the backbone of our monitoring and evaluation system
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {meServices.map((service, index) => (
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

                {/* Research Areas */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Research Priority Areas
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Key research areas that inform our HIV/AIDS programming and policy development
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {researchAreas.map((area, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-700 leading-relaxed font-medium">{area}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data Use and Impact */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Data for Decision Making
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    How our monitoring and evaluation data drives program improvements and policy decisions
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                                        <Target className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Program Optimization</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Real-time data analysis enables continuous program improvement and resource allocation optimization.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Performance monitoring</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Gap identification</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Resource optimization</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
                                        <Award className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Policy Development</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Evidence-based policy development ensures our strategies are grounded in solid data and research.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Evidence synthesis</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Policy recommendations</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-gray-700">Strategic planning</span>
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
                            Data-Driven HIV Response
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Our robust monitoring and evaluation system ensures evidence-based decision making 
                            for maximum impact in the fight against HIV/AIDS.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <FileText className="mr-2 h-5 w-5" />
                                View Research Reports
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
