import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Shield,
    Lock,
    Eye,
    Database,
    UserCheck,
    Mail,
    Phone,
    MapPin,
    Calendar,
    FileText,
    AlertCircle,
    CheckCircle,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Privacy() {
    return (
        <PublicLayout title="Privacy Policy">
            <Head title="Privacy Policy - NASHCOP" />

            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[300px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(/images/about.png)` }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <Shield className="w-10 h-10 text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                        Privacy Policy
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                                        Your privacy is important to us. Learn
                                        how we collect, use, and protect your
                                        personal information.
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
                            <span className="font-medium">
                                Last Updated: January 2025
                            </span>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy Content */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Introduction */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
                                        <FileText className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        Introduction
                                    </h2>
                                </div>
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        The National AIDS, STIs and Hepatitis
                                        Control Programme (NASHCOP) is committed
                                        to protecting your privacy and ensuring
                                        the security of your personal
                                        information. This Privacy Policy
                                        explains how we collect, use, disclose,
                                        and safeguard your information when you
                                        visit our website www.nashcop.go.tz or
                                        interact with our services.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        By using our website and services, you
                                        consent to the data practices described
                                        in this policy. If you do not agree with
                                        the practices described in this policy,
                                        please do not use our website.
                                    </p>
                                </div>
                            </div>

                            {/* Information We Collect */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mr-4">
                                        <Database className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        Information We Collect
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                            <UserCheck className="h-5 w-5 mr-2 text-blue-600" />
                                            Personal Information
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            We may collect personal information
                                            that you voluntarily provide,
                                            including:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                                            <li>
                                                Name, email address, and phone
                                                number when you contact us
                                            </li>
                                            <li>
                                                Feedback and comments when you
                                                use our feedback forms
                                            </li>
                                            <li>
                                                Professional information when
                                                you register for events or
                                                services
                                            </li>
                                            <li>
                                                Location information when you
                                                access our services
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                            <Eye className="h-5 w-5 mr-2 text-blue-600" />
                                            Automatically Collected Information
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            We automatically collect certain
                                            information when you visit our
                                            website:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                                            <li>
                                                IP address and browser
                                                information
                                            </li>
                                            <li>
                                                Pages visited and time spent on
                                                our website
                                            </li>
                                            <li>
                                                Referring website and search
                                                terms used
                                            </li>
                                            <li>
                                                Device information and operating
                                                system
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* How We Use Information */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                                        <CheckCircle className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        How We Use Your Information
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-blue-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-blue-800 mb-3">
                                            Service Provision
                                        </h3>
                                        <ul className="text-blue-700 space-y-2">
                                            <li>
                                                • Respond to your inquiries and
                                                requests
                                            </li>
                                            <li>
                                                • Provide HIV/AIDS prevention
                                                and treatment information
                                            </li>
                                            <li>
                                                • Process feedback and
                                                complaints
                                            </li>
                                            <li>
                                                • Deliver requested documents
                                                and resources
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-green-800 mb-3">
                                            Communication
                                        </h3>
                                        <ul className="text-green-700 space-y-2">
                                            <li>
                                                • Send newsletters and updates
                                                (with consent)
                                            </li>
                                            <li>
                                                • Notify about new programs and
                                                services
                                            </li>
                                            <li>
                                                • Respond to whistleblowing
                                                reports
                                            </li>
                                            <li>• Provide customer support</li>
                                        </ul>
                                    </div>

                                    <div className="bg-purple-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-purple-800 mb-3">
                                            Website Improvement
                                        </h3>
                                        <ul className="text-purple-700 space-y-2">
                                            <li>
                                                • Analyze website usage and
                                                performance
                                            </li>
                                            <li>
                                                • Improve user experience and
                                                navigation
                                            </li>
                                            <li>
                                                • Develop new features and
                                                content
                                            </li>
                                            <li>
                                                • Ensure website security and
                                                functionality
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-orange-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-orange-800 mb-3">
                                            Legal Compliance
                                        </h3>
                                        <ul className="text-orange-700 space-y-2">
                                            <li>
                                                • Comply with legal obligations
                                            </li>
                                            <li>
                                                • Protect against fraud and
                                                abuse
                                            </li>
                                            <li>
                                                • Enforce our terms of service
                                            </li>
                                            <li>• Respond to legal requests</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Information Sharing */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mr-4">
                                        <AlertCircle className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        Information Sharing and Disclosure
                                    </h2>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                                    <p className="text-red-800 font-medium mb-2">
                                        We do not sell, trade, or rent your
                                        personal information to third parties.
                                    </p>
                                    <p className="text-red-700">
                                        We may share your information only in
                                        the following circumstances:
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">
                                                Government Agencies
                                            </h4>
                                            <p className="text-gray-600">
                                                With Ministry of Health and
                                                other government agencies for
                                                public health purposes
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">
                                                Service Providers
                                            </h4>
                                            <p className="text-gray-600">
                                                With trusted service providers
                                                who assist in website operations
                                                and services
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">
                                                Legal Requirements
                                            </h4>
                                            <p className="text-gray-600">
                                                When required by law or to
                                                protect rights, property, or
                                                safety
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Data Security */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl mr-4">
                                        <Lock className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        Data Security
                                    </h2>
                                </div>

                                <div className="bg-indigo-50 rounded-lg p-6">
                                    <p className="text-indigo-800 mb-4">
                                        We implement appropriate technical and
                                        organizational security measures to
                                        protect your personal information
                                        against:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-indigo-700">
                                                Unauthorized access
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-indigo-700">
                                                Data breaches
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-indigo-700">
                                                Accidental loss
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                            <span className="text-indigo-700">
                                                Unauthorized disclosure
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Your Rights */}
                            <div className="mb-12">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl mr-4">
                                        <UserCheck className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        Your Rights
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">
                                                    Access
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    Request access to your
                                                    personal information
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">
                                                    Correction
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    Request correction of
                                                    inaccurate information
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">
                                                    Deletion
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    Request deletion of your
                                                    personal information
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">
                                                    Portability
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    Request transfer of your
                                                    data
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">
                                                    Objection
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    Object to processing of your
                                                    information
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">
                                                    Withdraw Consent
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    Withdraw consent at any time
                                                </p>
                                            </div>
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
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        Contact Us
                                    </h2>
                                </div>

                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                                    <p className="text-gray-700 mb-6">
                                        If you have questions about this Privacy
                                        Policy or wish to exercise your rights,
                                        please contact us:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="flex items-center space-x-3">
                                            <Mail className="h-5 w-5 text-blue-600" />
                                            <div>
                                                <p className="font-medium text-gray-800">
                                                    Email
                                                </p>
                                                <p className="text-blue-600">
                                                    nacp@afya.go.tz
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Phone className="h-5 w-5 text-blue-600" />
                                            <div>
                                                <p className="font-medium text-gray-800">
                                                    Phone
                                                </p>
                                                <p className="text-blue-600">
                                                    +255 22 2120261
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <MapPin className="h-5 w-5 text-blue-600" />
                                            <div>
                                                <p className="font-medium text-gray-800">
                                                    Address
                                                </p>
                                                <p className="text-blue-600">
                                                    Dodoma, Tanzania
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Changes to Policy */}
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                                    Changes to This Privacy Policy
                                </h3>
                                <p className="text-yellow-700">
                                    We may update this Privacy Policy from time
                                    to time. We will notify you of any changes
                                    by posting the new Privacy Policy on this
                                    page and updating the "Last Updated" date.
                                    You are advised to review this Privacy
                                    Policy periodically for any changes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Questions About Our Privacy Policy?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            We're here to help. Contact us if you have any
                            questions about how we handle your personal
                            information.
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
                            <a href="/legal/terms">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                                >
                                    <FileText className="mr-2 h-5 w-5" />
                                    Terms of Use
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
