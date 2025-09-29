import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    Heart,
    Mail,
    MapPin,
    Phone,
    Shield,
    Target,
    TestTube,
    Users,
} from "lucide-react";

export default function HivTesting() {
    const caseFindingStrategies = [
        "Develop and implement population-specific case-finding strategies (facility and community-based) to improve diagnosis in children, men, young adults PHR, and other unreached population segments",
        "Enhance implementation fidelity of HIV case finding approaches which include but are not limited to optimized provider-initiated testing and counselling (PITC), index testing, HIV self-testing, and social network testing (SNT) approaches/modalities with a focus on geographic hotspots and population segments with high transmission rates",
        "Strengthen the use of local epidemiological data and granular program data to inform robust data-driven HTS programming (i.e., modelling, mapping unreached population segments and geographical locations, setting targets, and implementing targeted case findings)",
        "Adapt and incorporate alternative/new HTS service delivery models and approaches across regions to facilitate the identification of geographic hotspots and population segments with high transmission rates and target them effectively",
        "Strengthen HTS quality assurance",
        "Strengthen the engagement of other sectors and platforms to increase the coverage of HTS delivery, including the private sector, informal sector, workplaces, civil society, and other community structures",
        "Promote adolescent, youth, male, PHR and PLHIV involvement",
        "Remove remaining legal, social and structural barriers blocking testing and treatment uptake and ensure access to other relevant health and social services (including stigma and discrimination training of healthcare workers)",
        "Strengthen health systems to support HTS"
    ];

    const linkageStrategies = [
        "Improve community awareness of the importance of early treatment among PLHIV once diagnosed",
        "Scale-up evidence-based linkage approaches including enhancing post-test counselling, peer-led evidence-based linkage case management (LCM) mode, and strengthening post-testing clubs (including implementation of these strategies using virtual ICT tools)",
        "Enhance decentralization of facility and community-based HTS, linkage and referral services",
        "Improve provider accountability for HTS and linkage (HTS providers who identify HIV positive clients will be encouraged to ensure that their clients are enrolled into care)",
        "Scale-up SBCC interventions aimed at addressing inappropriate gender norms, GBV, stigma and discrimination",
        "Scale-up evidence-based messaging on the benefits of treatment for PLHIV and their sexual partners (e.g., Undetectable = Untransmissible and support re-engagement in care)",
        "Scale-up community ART initiation for PHR (one-month starter pack after an initial test and re-testing for verification at community level, with linkage to the nearby facility)",
        "Revitalise workplace HIV programmes to facilitate employers to support PLHIV to timely access care and treatment services",
        "Strengthen the M&E system to have the capability to monitor successful linkage and utilisation of services by linked clients. This includes integrating data and linkage between HTS points and CTCs using case-based management and unique identifiers through the national client register",
        "Adopt a service delivery model to accommodate disruptions in programs/intervention caused by disease outbreaks or major calamities (low linkages were observed during COVID-19 outbreak)"
    ];

    const pmtctPriorities = [
        "Scale-up couples testing (including for HIV/Syphilis Duo and viral hepatitis) as well as HIV re-testing of negative PBFW at ANC, Postnatal Care (PNC) and immunisation clinics",
        "Enhance the utilisation of peer mothers to ensure more effective screening of infants and young children who are eligible for testing by using immunisation cards and following up mother-baby pairs (with a specific focus on mothers who are adolescents and young women)",
        "Expand and improve quality of HIV and VH PMTCT services (HTS for pregnant women, retesting of previously negative women, EID and HVL)",
        "Build capacity of HCPs, to improve their skills so that they can offer non-judgmental and supportive services to youth and PHR seeking ANC and PNC services",
        "Create community awareness to boost male partner involvement in PMTCT of HIV and VH services (including testing of partners of pregnant women)",
        "Scale-up mother-to-mother and peer-led mentoring, counselling and other community-based psychosocial support services for pregnant and breastfeeding women",
        "Strengthen primary prevention of HIV among HIV negative women identified during antenatal, postnatal and breastfeeding periods (including offering PrEP for pregnant and breastfeeding women who are at a greater risk of acquiring HIV)",
        "Scale-up routine screening and counselling for all pregnant women and adolescents in antenatal care for chronic viral hepatitis B and C infections and providing antiviral prophylaxis to those who are eligible",
        "Ensure prompt and efficacious interventions to treat pregnant women and adolescents who test positive and to prevent transmission of hepatitis B virus infection to their infants",
        "Institute mechanisms to identify and follow-up of exposed infants, including hepatitis B birth-dose vaccine and completion of three-dose series of hepatitis B vaccine",
        "Deploy an electronic Case-Based Surveillance and Management (CBSM) response to all facilities offering PMTCT services"
    ];
    return (
        <PublicLayout title="HIV Testing Services & Linkage">
            <Head title="HIV Testing Services & Linkage" />

            <div className="min-h-screen">
                {/* Hero Section with Background Image */}
                <div className="relative h-[500px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(/images/hiv/arvs.jpg)`,
                        }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <TestTube className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    HIV Testing Services & Linkage
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    HIV Testing Services are the gateways to prevention, treatment, care, and support services for HIV and AIDS. 
                                    Fast-tracking efforts to end AIDS as a public health threat by 2030.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Introduction Section */}
                <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                HIV Testing Services are the gateways to prevention, treatment, care, and support services for HIV and AIDS 
                                as they provide an opportunity to link clients to both prevention and treatment services. Therefore, HTS are 
                                crucial to the success of the HIV response in Tanzania. In order to fast-track efforts to end AIDS as a 
                                public health threat by 2030, this strategy will capitalize on identifying PLHIV with unknown HIV status 
                                and initiating them on ART.
                            </p>
                        </div>
                    </div>
                </section>

                {/* HIV Case Finding Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                                <Target className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Intervention Area 1: HIV Case Finding
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Priority strategies for identifying PLHIV with unknown HIV status across all population segments
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Priority Strategies</h3>
                            <div className="grid gap-6">
                                {caseFindingStrategies.map((strategy, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                        <CardContent className="p-6">
                                            <div className="flex items-start space-x-4">
                                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                    {index + 1}
                                                </div>
                                                <p className="text-gray-700 leading-relaxed flex-1">
                                                    {strategy}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* HTS Priorities Section */}
                <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
                    {/* Background Graphics */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
                        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-10"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
                                <TestTube className="h-12 w-12 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Key Intervention Areas
                            </h2>
                            <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                                Strategic intervention areas for comprehensive HIV testing services, 
                                linkage to care, and prevention of mother-to-child transmission
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <TestTube className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Intervention Area 2: Linkage Strategies
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {linkageStrategies.slice(0, 5).map((strategy, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-3"
                                        >
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-blue-100 leading-relaxed">
                                                {strategy}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                                <div className="flex items-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Heart className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                        Intervention Area 3: PMTCT Priorities
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {pmtctPriorities.slice(0, 5).map(
                                        (priority, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start space-x-3"
                                            >
                                                <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-blue-100 leading-relaxed">
                                                    {priority}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Linkage Process Section */}
                <section className="py-20 bg-gradient-to-br from-green-50 via-white to-cyan-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full mb-6">
                                <Heart className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                                Linkage to Prevention, Care, Treatment and
                                Support
                            </h2>
                            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                                HIV testing presents an opportunity to identify
                                client's HIV status and link them to appropriate
                                services through comprehensive post-test
                                counselling and effective referral systems. HTS
                                providers link HIV positive clients to care and
                                treatment through referral forms or by escorting
                                them to the clinic, with feedback provided
                                through referral feedback forms.
                            </p>
                        </div>

                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <TestTube className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            HIV Testing
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Comprehensive testing through
                                            multiple modalities
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            Post-Test Counselling
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Comprehensive counselling for all
                                            clients regardless of results
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Heart className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            Linkage to Services
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Referral through forms or escort
                                            services to prevention, care,
                                            treatment and support with feedback
                                            mechanisms
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <div className="text-center"></div>
            </div>
        </PublicLayout>
    );
}
