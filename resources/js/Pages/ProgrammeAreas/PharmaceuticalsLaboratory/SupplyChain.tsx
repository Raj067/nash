import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Truck,
    ArrowRight,
    Heart,
    CheckCircle,
    Package,
    Target,
    Award,
    Shield,
    TrendingUp,
    Activity,
    AlertTriangle,
    MapPin,
    Clock,
    BarChart3,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function SupplyChain() {
    const stats = [
        {
            label: "ARV Distribution Points",
            value: "3,500+",
            icon: Package,
            color: "text-blue-600",
        },
        {
            label: "ARV Stock Availability",
            value: "95%",
            icon: Target,
            color: "text-green-600",
        },
        {
            label: "Supply Chain Partners",
            value: "25+",
            icon: Truck,
            color: "text-red-600",
        },
        {
            label: "On-time Delivery Rate",
            value: "92%",
            icon: Clock,
            color: "text-purple-600",
        },
    ];

    const supplyChainComponents = [
        {
            title: "Procurement & Sourcing",
            description: "Strategic procurement of quality HIV medicines and commodities",
            processes: [
                "Global Fund procurement mechanisms",
                "PEPFAR supply chain support",
                "Local pharmaceutical partnerships",
                "Quality assurance protocols",
                "Cost optimization strategies",
            ],
            metrics: "95% quality compliance",
        },
        {
            title: "Warehousing & Storage",
            description: "Central and regional storage facilities with proper conditions",
            processes: [
                "Central Medical Store operations",
                "Regional warehouse network",
                "Cold chain management",
                "Inventory management systems",
                "Security and access controls",
            ],
            metrics: "99.2% storage compliance",
        },
        {
            title: "Distribution Network",
            description: "Efficient distribution to health facilities nationwide",
            processes: [
                "Last-mile delivery systems",
                "Emergency supply protocols",
                "Transportation optimization",
                "Delivery tracking systems",
                "Regional distribution hubs",
            ],
            metrics: "92% on-time delivery",
        },
    ];

    const keyMedicines = [
        {
            category: "First-line ARVs",
            medicines: [
                "Tenofovir/Lamivudine/Efavirenz (TLE)",
                "Tenofovir/Lamivudine/Dolutegravir (TLD)",
                "Abacavir/Lamivudine/Efavirenz",
                "Zidovudine/Lamivudine/Nevirapine",
            ],
            availability: "96%",
            patients: "1.6M+ patients",
        },
        {
            category: "Second-line ARVs",
            medicines: [
                "Atazanavir/Ritonavir combinations",
                "Lopinavir/Ritonavir combinations",
                "Darunavir-based regimens",
                "Raltegravir formulations",
            ],
            availability: "94%",
            patients: "120,000+ patients",
        },
        {
            category: "Pediatric Formulations",
            medicines: [
                "Pediatric fixed-dose combinations",
                "Liquid formulations",
                "Dispersible tablets",
                "Age-appropriate dosing forms",
            ],
            availability: "93%",
            patients: "85,000+ children",
        },
        {
            category: "Opportunistic Infection Drugs",
            medicines: [
                "Co-trimoxazole (CTX)",
                "Fluconazole",
                "Isoniazid (IPT)",
                "TB treatment combinations",
            ],
            availability: "97%",
            patients: "1.7M+ patients",
        },
    ];

    const supplyChainChallenges = [
        {
            challenge: "Last-Mile Delivery",
            description: "Reaching remote and hard-to-access health facilities",
            impact: "15% of facilities face delivery delays",
            solutions: [
                "Mobile delivery units",
                "Drone delivery pilots",
                "Community distribution points",
                "Emergency supply protocols",
            ],
        },
        {
            challenge: "Cold Chain Management",
            description: "Maintaining temperature-sensitive medicines",
            impact: "5% cold chain breaches annually",
            solutions: [
                "Solar-powered refrigeration",
                "Temperature monitoring systems",
                "Backup power solutions",
                "Staff training programs",
            ],
        },
        {
            challenge: "Inventory Management",
            description: "Preventing stockouts and expiry waste",
            impact: "3% medicine expiry rate",
            solutions: [
                "Electronic inventory systems",
                "Automated reorder points",
                "First-expiry-first-out protocols",
                "Demand forecasting models",
            ],
        },
    ];

    const innovativeSolutions = [
        {
            innovation: "Electronic Logistics Management Information System (eLMIS)",
            description: "Real-time inventory tracking and automated ordering system",
            implementation: "Deployed in 2,800+ facilities",
            benefits: [
                "Reduced stockouts by 60%",
                "Improved forecasting accuracy",
                "Automated reporting",
                "Real-time visibility",
            ],
        },
        {
            innovation: "Drone Delivery Program",
            description: "Unmanned aerial vehicles for emergency medicine delivery",
            implementation: "Pilot in 5 regions",
            benefits: [
                "Reduced delivery time by 75%",
                "Access to remote areas",
                "Emergency response capability",
                "Cost-effective for small volumes",
            ],
        },
        {
            innovation: "Mobile Pharmacy Units",
            description: "Mobile units serving remote communities and outreach sites",
            implementation: "50+ units nationwide",
            benefits: [
                "Extended service coverage",
                "Reduced patient travel",
                "Community-level access",
                "Integrated service delivery",
            ],
        },
    ];

    const qualityAssurance = [
        {
            aspect: "Medicine Quality",
            measures: [
                "WHO prequalification standards",
                "Good Manufacturing Practice (GMP)",
                "Post-market surveillance",
                "Pharmacovigilance systems",
            ],
            compliance: "99.5%",
        },
        {
            aspect: "Storage Conditions",
            measures: [
                "Temperature and humidity monitoring",
                "Proper storage infrastructure",
                "Regular facility inspections",
                "Staff training and certification",
            ],
            compliance: "97.8%",
        },
        {
            aspect: "Distribution Integrity",
            measures: [
                "Chain of custody protocols",
                "Transportation standards",
                "Security measures",
                "Delivery verification systems",
            ],
            compliance: "96.2%",
        },
    ];

    const achievements = [
        "Achieved 95% ARV availability at facility level nationwide",
        "Reduced medicine stockouts by 70% since 2015",
        "Implemented eLMIS in 2,800+ health facilities",
        "Established 15 regional distribution hubs",
        "Launched drone delivery pilots in 5 regions",
        "Maintained 99.5% medicine quality compliance rate",
    ];

    return (
        <PublicLayout title="Supply Chain Management">
            <Head title="Supply Chain - Pharmaceuticals & Laboratory" />

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
                                        <Truck className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Supply Chain Management
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Ensuring reliable, continuous supply of quality HIV medicines and commodities 
                                        to all health facilities across Tanzania through robust supply chain systems.
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
                                Supply Chain Performance
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Delivering essential HIV medicines and commodities with reliability and efficiency
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
                                World-Class Supply Chain Excellence
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Tanzania has built one of Africa's most robust HIV medicine supply chains, 
                                ensuring 95% availability of ARVs at facility level nationwide.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Supply Chain Components */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Supply Chain Components
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Integrated systems ensuring end-to-end medicine availability
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {supplyChainComponents.map((component, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{component.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{component.description}</p>
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Key Processes:</h4>
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

                {/* Key Medicines */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Essential HIV Medicines
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Comprehensive portfolio of HIV medicines ensuring treatment access for all populations
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {keyMedicines.map((category, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-green-600">{category.availability}</div>
                                            <div className="text-sm text-gray-600">Availability</div>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Key Medicines:</h4>
                                        <ul className="space-y-2">
                                            {category.medicines.map((medicine, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <Package className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{medicine}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-4">
                                        <p className="text-green-800 font-medium text-sm">
                                            Serving: {category.patients}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Challenges & Solutions */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Challenges & Solutions
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Addressing supply chain challenges through innovative solutions
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {supplyChainChallenges.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                                >
                                    <div className="flex items-center mb-4">
                                        <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
                                        <h3 className="text-lg font-bold text-gray-800">{item.challenge}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                                    <div className="bg-orange-50 rounded-lg p-3 mb-4">
                                        <p className="text-orange-800 font-medium text-sm">{item.impact}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">Solutions:</h4>
                                        <ul className="space-y-2">
                                            {item.solutions.map((solution, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{solution}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Innovative Solutions */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Innovative Solutions
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Cutting-edge technologies transforming HIV medicine supply chains
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {innovativeSolutions.map((solution, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{solution.innovation}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                        <p className="text-blue-800 font-medium text-sm">{solution.implementation}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                                        <ul className="space-y-2">
                                            {solution.benefits.map((benefit, idx) => (
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
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Key Achievements
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Significant milestones in HIV supply chain management in Tanzania
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
                            Reliable Medicine Supply
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Access information about HIV medicine availability and supply chain 
                            services at healthcare facilities across Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Package className="mr-2 h-5 w-5" />
                                    Medicine Availability
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
