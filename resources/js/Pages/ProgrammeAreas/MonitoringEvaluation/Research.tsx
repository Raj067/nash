import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Search,
    ArrowRight,
    Heart,
    CheckCircle,
    Users,
    FileText,
    Target,
    Award,
    BookOpen,
    TrendingUp,
    Globe,
    Microscope,
    Shield,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Research() {
    const stats = [
        {
            label: "Active Research Studies",
            value: "85+",
            icon: Search,
            color: "text-blue-600",
        },
        {
            label: "Research Publications",
            value: "240+",
            icon: FileText,
            color: "text-green-600",
        },
        {
            label: "Research Partners",
            value: "45+",
            icon: Users,
            color: "text-red-600",
        },
        {
            label: "Research Sites",
            value: "120+",
            icon: Target,
            color: "text-purple-600",
        },
    ];

    const researchAreas = [
        {
            title: "HIV Prevention Research",
            description: "Studies on biomedical, behavioral, and structural HIV prevention interventions",
            focus: [
                "Pre-exposure prophylaxis (PrEP) effectiveness",
                "Voluntary medical male circumcision outcomes",
                "Behavioral intervention studies",
                "Combination prevention strategies",
                "Key population prevention programs",
            ],
            studies: "25+ active studies",
            icon: Shield,
        },
        {
            title: "Treatment and Care Research",
            description: "Clinical and operational research on HIV treatment, care, and support services",
            focus: [
                "Antiretroviral therapy optimization",
                "Treatment adherence interventions",
                "Drug resistance monitoring",
                "Co-infection management (TB/HIV)",
                "Pediatric HIV treatment",
            ],
            studies: "30+ active studies",
            icon: Microscope,
        },
        {
            title: "Implementation Science",
            description: "Research on effective implementation of evidence-based HIV interventions",
            focus: [
                "Service delivery models",
                "Health system strengthening",
                "Task-shifting effectiveness",
                "Community engagement strategies",
                "Quality improvement methods",
            ],
            studies: "20+ active studies",
            icon: TrendingUp,
        },
        {
            title: "Social and Behavioral Research",
            description: "Studies on social determinants, stigma, and behavioral factors affecting HIV outcomes",
            focus: [
                "HIV stigma and discrimination",
                "Gender-based violence and HIV",
                "Mental health and HIV",
                "Social support systems",
                "Community mobilization",
            ],
            studies: "15+ active studies",
            icon: Users,
        },
    ];

    const keyStudies = [
        {
            title: "Tanzania HIV Impact Survey (THIS)",
            description: "National population-based survey measuring HIV incidence, prevalence, and viral load suppression",
            status: "Ongoing",
            participants: "45,000+",
            duration: "2016-2024",
            findings: [
                "HIV prevalence: 4.6% among adults 15-49",
                "90% of PLHIV know their status",
                "97% of diagnosed are on treatment",
                "95% on treatment are virally suppressed",
            ],
        },
        {
            title: "VMMC Impact Evaluation Study",
            description: "Multi-site study evaluating the impact of voluntary medical male circumcision on HIV prevention",
            status: "Completed",
            participants: "12,500+",
            duration: "2018-2022",
            findings: [
                "60% reduction in HIV acquisition risk",
                "High acceptability among target populations",
                "Cost-effective prevention intervention",
                "Improved sexual health outcomes",
            ],
        },
        {
            title: "PrEP Implementation Research",
            description: "Operational research on pre-exposure prophylaxis delivery models for key populations",
            status: "Ongoing",
            participants: "8,000+",
            duration: "2020-2025",
            findings: [
                "85% adherence rate in demonstration projects",
                "Reduced HIV incidence by 73%",
                "High retention in care (78% at 12 months)",
                "Effective peer-led delivery models",
            ],
        },
    ];

    const researchPriorities = [
        {
            area: "HIV Cure Research",
            description: "Investigating strategies for HIV cure and long-term remission",
            initiatives: [
                "Latent reservoir characterization",
                "Immune-based interventions",
                "Shock and kill strategies",
                "Therapeutic vaccines",
            ],
        },
        {
            area: "Adolescent HIV Research",
            description: "Addressing unique challenges of HIV prevention and treatment in adolescents",
            initiatives: [
                "Age-appropriate service delivery",
                "Adherence support interventions",
                "Sexual and reproductive health integration",
                "Transition to adult care models",
            ],
        },
        {
            area: "HIV and Aging Research",
            description: "Understanding HIV care needs in aging populations",
            initiatives: [
                "Comorbidity management",
                "Cognitive health assessment",
                "Long-term treatment effects",
                "Quality of life studies",
            ],
        },
    ];

    const partnerships = [
        "National Institute for Medical Research (NIMR)",
        "Muhimbili University of Health and Allied Sciences (MUHAS)",
        "Kilimanjaro Christian Medical University College (KCMUCo)",
        "Harvard T.H. Chan School of Public Health",
        "Centers for Disease Control and Prevention (CDC)",
        "President's Emergency Plan for AIDS Relief (PEPFAR)",
        "World Health Organization (WHO)",
        "UNAIDS",
    ];

    const achievements = [
        "Published 240+ peer-reviewed research articles on HIV/AIDS",
        "Contributed to 15+ WHO/UNAIDS policy guidelines",
        "Trained 500+ researchers in HIV research methods",
        "Established 5 research excellence centers nationwide",
        "Generated evidence for $2.5B+ in HIV program investments",
        "Influenced national HIV strategic plans and policies",
    ];

    return (
        <PublicLayout title="HIV Research">
            <Head title="HIV Research - Monitoring & Evaluation" />

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
                                        <Search className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        HIV Research
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Conducting cutting-edge operational and clinical research to generate evidence 
                                        for effective HIV prevention, treatment, and care interventions in Tanzania.
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
                                Research Impact
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Generating evidence to inform HIV policies and programs across Tanzania and beyond
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
                                Evidence-Based HIV Response
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Tanzania's HIV research program generates critical evidence that informs national 
                                policies and contributes to global knowledge on effective HIV interventions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Research Areas */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Research Focus Areas
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Key research domains addressing critical HIV prevention, treatment, and care questions
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {researchAreas.map((area, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                                            <Search className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800">{area.title}</h3>
                                            <p className="text-blue-600 font-medium">{area.studies}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">Research Focus:</h4>
                                        <ul className="space-y-2">
                                            {area.focus.map((item, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Studies */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Landmark Studies
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Major research studies that have shaped HIV policy and programming in Tanzania
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {keyStudies.map((study, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{study.title}</h3>
                                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{study.status}</span>
                                            <span>{study.duration}</span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed mb-4">{study.description}</p>
                                        <p className="text-blue-600 font-medium">Participants: {study.participants}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">Key Findings:</h4>
                                        <ul className="space-y-2">
                                            {study.findings.map((finding, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{finding}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Research Partnerships */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Research Partnerships
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Collaborative partnerships with leading research institutions and organizations
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {partnerships.map((partner, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                                    >
                                        <Globe className="h-6 w-6 text-blue-600 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{partner}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Achievements */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    Research Achievements
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Significant contributions to HIV research and evidence generation
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
                            Advancing HIV Research
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join our research efforts to generate evidence that will shape the future 
                            of HIV prevention, treatment, and care in Tanzania and beyond.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <BookOpen className="mr-2 h-5 w-5" />
                                    Research Collaboration
                                </Button>
                            </a>
                            <a href="/programme-areas/monitoring-evaluation">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                                >
                                    <ArrowRight className="mr-2 h-5 w-5" />
                                    Back to Monitoring & Evaluation
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
