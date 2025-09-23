import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    FileText,
    Scale,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Users,
    Globe,
    Shield,
    Mail,
    Phone,
    MapPin,
    Calendar,
    ExternalLink,
    Info,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Terms() {
    return (
        <PublicLayout title="Terms of Use">
            <Head title="Terms of Use - NASHCOP" />
            
            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[300px] overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/about.png)` }}>
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Scale className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Terms of Use</h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Please read these terms carefully before using our website and services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Last Updated */}
                <section className="py-8 bg-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-center space-x-2 text-blue-700">
                            <Calendar className="h-5 w-5" />
                            <span className="font-medium">Last Updated: January 2025</span>
                        </div>
                    </div>
                </section>

                {/* Terms Content */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            
                            {/* Introduction */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
                                        <FileText className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
                                </div>
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Welcome to the National AIDS, STIs and Hepatitis Control Programme (NASHCOP) website. 
                                        These Terms of Use ("Terms") govern your use of our website www.nashcop.go.tz and any 
                                        related services, features, content, or applications offered by NASHCOP.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        By accessing or using our website, you agree to be bound by these Terms. If you do not 
                                        agree to these Terms, please do not use our website.
                                    </p>
                                </div>
                            </div>

                            {/* Acceptance of Terms */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mr-4">
                                        <CheckCircle className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Acceptance of Terms</h2>
                                </div>
                                
                                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                                    <p className="text-green-800 mb-4">
                                        By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                            <span className="text-green-700">You are at least 18 years old or have parental consent</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                            <span className="text-green-700">You have the legal capacity to enter into these Terms</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                            <span className="text-green-700">You will comply with all applicable laws and regulations</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Website Use */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                                        <Globe className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Permitted Use</h2>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-blue-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                                            <CheckCircle className="h-5 w-5 mr-2" />
                                            You May:
                                        </h3>
                                        <ul className="text-blue-700 space-y-2">
                                            <li>• Access and view website content</li>
                                            <li>• Download documents for personal use</li>
                                            <li>• Share content for educational purposes</li>
                                            <li>• Contact us through provided channels</li>
                                            <li>• Subscribe to newsletters and updates</li>
                                            <li>• Provide feedback and suggestions</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="bg-red-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                                            <XCircle className="h-5 w-5 mr-2" />
                                            You May Not:
                                        </h3>
                                        <ul className="text-red-700 space-y-2">
                                            <li>• Use content for commercial purposes</li>
                                            <li>• Modify or redistribute our content</li>
                                            <li>• Attempt to hack or disrupt the website</li>
                                            <li>• Upload malicious software or viruses</li>
                                            <li>• Impersonate NASHCOP or its staff</li>
                                            <li>• Violate any applicable laws</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Intellectual Property */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mr-4">
                                        <Shield className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Intellectual Property Rights</h2>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="bg-indigo-50 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-indigo-800 mb-4">Copyright and Ownership</h3>
                                        <p className="text-indigo-700 mb-4">
                                            All content on this website, including but not limited to text, graphics, logos, images, 
                                            videos, and software, is the property of NASHCOP or its content suppliers and is protected 
                                            by Tanzanian and international copyright laws.
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-start space-x-2">
                                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                                                <span className="text-indigo-700">NASHCOP logo and branding materials</span>
                                            </div>
                                            <div className="flex items-start space-x-2">
                                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                                                <span className="text-indigo-700">Educational and informational content</span>
                                            </div>
                                            <div className="flex items-start space-x-2">
                                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                                                <span className="text-indigo-700">Website design and functionality</span>
                                            </div>
                                            <div className="flex items-start space-x-2">
                                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                                                <span className="text-indigo-700">Documents, reports, and publications</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                                        <h4 className="font-semibold text-yellow-800 mb-2">Fair Use Policy</h4>
                                        <p className="text-yellow-700">
                                            You may use our content for educational, research, or personal purposes. 
                                            Commercial use requires written permission from NASHCOP. Always provide 
                                            proper attribution when sharing our content.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* User Responsibilities */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mr-4">
                                        <Users className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">User Responsibilities</h2>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 rounded-lg p-6">
                                            <h3 className="text-lg font-semibold text-orange-800 mb-3">Account Security</h3>
                                            <ul className="text-orange-700 space-y-2">
                                                <li>• Keep login credentials secure</li>
                                                <li>• Report suspicious activities</li>
                                                <li>• Use strong passwords</li>
                                                <li>• Log out from shared devices</li>
                                            </ul>
                                        </div>
                                        
                                        <div className="bg-teal-50 rounded-lg p-6">
                                            <h3 className="text-lg font-semibold text-teal-800 mb-3">Content Submission</h3>
                                            <ul className="text-teal-700 space-y-2">
                                                <li>• Provide accurate information</li>
                                                <li>• Respect others' privacy</li>
                                                <li>• No offensive or harmful content</li>
                                                <li>• Follow submission guidelines</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                            <AlertTriangle className="h-5 w-5 mr-2" />
                                            Prohibited Activities
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <XCircle className="h-4 w-4 text-red-600" />
                                                    <span className="text-red-700">Spreading misinformation</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <XCircle className="h-4 w-4 text-red-600" />
                                                    <span className="text-red-700">Harassment or discrimination</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <XCircle className="h-4 w-4 text-red-600" />
                                                    <span className="text-red-700">Unauthorized data collection</span>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <XCircle className="h-4 w-4 text-red-600" />
                                                    <span className="text-red-700">System interference</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <XCircle className="h-4 w-4 text-red-600" />
                                                    <span className="text-red-700">Copyright infringement</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <XCircle className="h-4 w-4 text-red-600" />
                                                    <span className="text-red-700">Illegal activities</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Disclaimers */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl mr-4">
                                        <AlertTriangle className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Disclaimers and Limitations</h2>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="bg-yellow-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-yellow-800 mb-3">Medical Information Disclaimer</h3>
                                        <p className="text-yellow-700 mb-4">
                                            The information provided on this website is for educational and informational purposes only. 
                                            It is not intended as medical advice and should not replace consultation with qualified healthcare professionals.
                                        </p>
                                        <div className="bg-yellow-100 p-4 rounded-lg">
                                            <p className="text-yellow-800 font-medium">
                                                Always consult with your healthcare provider before making any health-related decisions 
                                                or changes to your treatment plan.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Website Availability</h3>
                                        <p className="text-gray-600 mb-4">
                                            While we strive to maintain continuous website availability, we do not guarantee that 
                                            our website will be available at all times. We may experience:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <ul className="text-gray-600 space-y-2">
                                                <li>• Scheduled maintenance periods</li>
                                                <li>• Technical difficulties</li>
                                                <li>• Server outages</li>
                                            </ul>
                                            <ul className="text-gray-600 space-y-2">
                                                <li>• Network connectivity issues</li>
                                                <li>• Third-party service disruptions</li>
                                                <li>• Emergency updates</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Third-Party Links */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl mr-4">
                                        <ExternalLink className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Third-Party Links and Services</h2>
                                </div>
                                
                                <div className="bg-teal-50 rounded-lg p-6">
                                    <p className="text-teal-800 mb-4">
                                        Our website may contain links to third-party websites, including:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <ul className="text-teal-700 space-y-2">
                                            <li>• Government agency websites</li>
                                            <li>• Partner organization sites</li>
                                            <li>• Social media platforms</li>
                                        </ul>
                                        <ul className="text-teal-700 space-y-2">
                                            <li>• Educational resources</li>
                                            <li>• Research publications</li>
                                            <li>• External tools and services</li>
                                        </ul>
                                    </div>
                                    <div className="bg-teal-100 p-4 rounded-lg">
                                        <p className="text-teal-800 font-medium">
                                            We are not responsible for the content, privacy policies, or practices of third-party websites. 
                                            Use external links at your own discretion.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Termination */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl mr-4">
                                        <XCircle className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Termination</h2>
                                </div>
                                
                                <div className="bg-red-50 rounded-lg p-6">
                                    <p className="text-red-800 mb-4">
                                        We reserve the right to terminate or suspend your access to our website immediately, 
                                        without prior notice or liability, for any reason, including:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <ul className="text-red-700 space-y-2">
                                            <li>• Violation of these Terms</li>
                                            <li>• Suspicious or fraudulent activity</li>
                                            <li>• Harmful or disruptive behavior</li>
                                        </ul>
                                        <ul className="text-red-700 space-y-2">
                                            <li>• Legal or regulatory requirements</li>
                                            <li>• Technical or security concerns</li>
                                            <li>• At our sole discretion</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Governing Law */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl mr-4">
                                        <Scale className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Governing Law</h2>
                                </div>
                                
                                <div className="bg-purple-50 rounded-lg p-6">
                                    <p className="text-purple-800 mb-4">
                                        These Terms shall be governed by and construed in accordance with the laws of the 
                                        United Republic of Tanzania, without regard to its conflict of law provisions.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Scale className="h-4 w-4 text-purple-600" />
                                            <span className="text-purple-700">Disputes will be resolved in Tanzanian courts</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Scale className="h-4 w-4 text-purple-600" />
                                            <span className="text-purple-700">Tanzanian law takes precedence</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Scale className="h-4 w-4 text-purple-600" />
                                            <span className="text-purple-700">English language version is authoritative</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
                                </div>
                                
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                                    <p className="text-gray-700 mb-6">
                                        If you have any questions about these Terms of Use, please contact us:
                                    </p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="flex items-center space-x-3">
                                            <Mail className="h-5 w-5 text-blue-600" />
                                            <div>
                                                <p className="font-medium text-gray-800">Email</p>
                                                <p className="text-blue-600">nacp@afya.go.tz</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Phone className="h-5 w-5 text-blue-600" />
                                            <div>
                                                <p className="font-medium text-gray-800">Phone</p>
                                                <p className="text-blue-600">+255 22 2120261</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <MapPin className="h-5 w-5 text-blue-600" />
                                            <div>
                                                <p className="font-medium text-gray-800">Address</p>
                                                <p className="text-blue-600">Dar es Salaam, Tanzania</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Changes to Terms */}
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                                    <Info className="h-5 w-5 mr-2" />
                                    Changes to These Terms
                                </h3>
                                <p className="text-blue-700">
                                    We reserve the right to modify these Terms at any time. We will notify users of any 
                                    material changes by posting the updated Terms on our website and updating the "Last Updated" 
                                    date. Your continued use of the website after such changes constitutes acceptance of the new Terms.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Need Help Understanding Our Terms?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            We're here to answer any questions you may have about our terms of use and policies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Mail className="mr-2 h-5 w-5" />
                                    Contact Us
                                </Button>
                            </a>
                            <a href="/legal/privacy">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                                >
                                    <Shield className="mr-2 h-5 w-5" />
                                    Privacy Policy
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
