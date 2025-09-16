import { FC } from "react";
import {
    Phone,
    Mail,
    MapPin,
    Globe,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Heart,
    Shield,
    Users,
    FileText,
    Clock,
    AlertCircle,
} from "lucide-react";

const NASHCOPFooter: FC = () => {
    const quickLinks = [
        { title: "HIV Testing", href: "/services/testing", icon: Heart },
        { title: "ART Treatment", href: "/services/treatment", icon: Shield },
        {
            title: "Prevention Programs",
            href: "/programs/prevention",
            icon: Users,
        },
        {
            title: "Latest Statistics",
            href: "/publications/statistics",
            icon: FileText,
        },
    ];

    const importantLinks = [
        { title: "Emergency HIV Hotline", href: "tel:199", phone: "199" },
        { title: "Find Testing Center", href: "/services/testing-centers" },
        {
            title: "Treatment Guidelines",
            href: "/publications/treatment-guidelines",
        },
        { title: "Prevention Resources", href: "/programs/prevention" },
        { title: "Support Groups", href: "/services/support-groups" },
        { title: "Report Discrimination", href: "/contact/discrimination" },
    ];

    const governmentLinks = [
        { title: "Ministry of Health", href: "https://moh.go.tz" },
        { title: "Tanzania Government Portal", href: "https://tanzania.go.tz" },
        { title: "President's Office", href: "https://po.go.tz" },
        { title: "Prime Minister's Office", href: "https://pmo.go.tz" },
    ];

    const partnerOrganizations = [
        { title: "PEPFAR", href: "https://pepfar.gov" },
        { title: "UNAIDS", href: "https://unaids.org" },
        { title: "WHO Tanzania", href: "https://who.int/tanzania" },
        { title: "Global Fund", href: "https://theglobalfund.org" },
        { title: "USAID Tanzania", href: "https://usaid.gov/tanzania" },
        {
            title: "CDC Tanzania",
            href: "https://cdc.gov/globalhealth/countries/tanzania",
        },
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
            {/* Background Graphics */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </div>
                <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-green-400 rounded-full blur-2xl opacity-10"></div>
            </div>

            {/* Emergency Banner */}
            <div className="bg-gradient-to-r from-red-900 via-red-800 to-orange-900 py-4 shadow-lg relative z-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-center">
                        <div className="flex items-center space-x-2">
                            <AlertCircle className="h-5 w-5 animate-pulse" />
                            <span className="font-bold text-lg">
                                HIV Emergency Hotline: 199
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5" />
                            <span className="font-medium">
                                Available 24/7 - Free & Confidential
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Organization Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <img
                                src="/images/logo.jpeg"
                                alt="Tanzania Coat of Arms"
                                className="h-12 w-12"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-yellow-400">
                                    NASHCOP Tanzania
                                </h3>
                                <p className="text-sm text-blue-200">
                                    National AIDS Control Programme
                                </p>
                            </div>
                        </div>

                        <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                            Leading Tanzania's response to HIV/AIDS through
                            prevention, treatment, care, and support services.
                            Working towards an AIDS-free generation.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                                <div className="text-sm">
                                    <p>
                                        Ministry of Health, Community
                                        Development,
                                    </p>
                                    <p>Gender, Elderly and Children</p>
                                    <p>Samora Avenue, Dar es Salaam</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                                <div className="text-sm">
                                    <p>+255 22 211 0000</p>
                                    <p className="text-gray-400">
                                        Mon-Fri: 8:00 AM - 4:30 PM
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                                <div className="text-sm">
                                    <p>info@nacp.go.tz</p>
                                    <p className="text-gray-400">
                                        Official inquiries
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-yellow-400 border-b border-yellow-400 pb-2">
                            Quick Services
                        </h4>
                        <div className="space-y-3">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="flex items-center space-x-3 text-blue-100 hover:text-yellow-400 transition-colors group"
                                >
                                    <link.icon className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300" />
                                    <span className="text-sm">
                                        {link.title}
                                    </span>
                                </a>
                            ))}
                        </div>

                        <h5 className="text-md font-semibold mt-8 mb-4 text-blue-200">
                            Important Links
                        </h5>
                        <div className="space-y-2">
                            {importantLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="block text-sm text-blue-100 hover:text-yellow-400 transition-colors"
                                >
                                    {link.title}
                                    {link.phone && (
                                        <span className="ml-2 text-yellow-400 font-semibold">
                                            ({link.phone})
                                        </span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Government Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-yellow-400 border-b border-yellow-400 pb-2">
                            Government
                        </h4>
                        <div className="space-y-2">
                            {governmentLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-sm text-blue-100 hover:text-yellow-400 transition-colors"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>

                        <h5 className="text-md font-semibold mt-8 mb-4 text-blue-200">
                            Regional Offices
                        </h5>
                        <div className="space-y-2 text-sm text-blue-100">
                            <p>Dar es Salaam - Main Office</p>
                            <p>Mwanza - Lake Zone</p>
                            <p>Arusha - Northern Zone</p>
                            <p>Mbeya - Southern Highlands</p>
                            <p>Dodoma - Central Zone</p>
                        </div>
                    </div>

                    {/* Partners & Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-yellow-400 border-b border-yellow-400 pb-2">
                            Partners
                        </h4>
                        <div className="space-y-2">
                            {partnerOrganizations.map((partner) => (
                                <a
                                    key={partner.title}
                                    href={partner.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-sm text-blue-100 hover:text-yellow-400 transition-colors"
                                >
                                    {partner.title}
                                </a>
                            ))}
                        </div>

                        {/* Social Media */}
                        <h5 className="text-md font-semibold mt-8 mb-4 text-blue-200">
                            Follow Us
                        </h5>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com/nacptanzania"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-blue-800 rounded-full hover:bg-yellow-500 hover:text-blue-900 transition-colors shadow-lg"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href="https://twitter.com/nacptanzania"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-blue-800 rounded-full hover:bg-yellow-500 hover:text-blue-900 transition-colors shadow-lg"
                            >
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a
                                href="https://instagram.com/nacptanzania"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-blue-800 rounded-full hover:bg-yellow-500 hover:text-blue-900 transition-colors shadow-lg"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href="https://youtube.com/nacptanzania"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-blue-800 rounded-full hover:bg-yellow-500 hover:text-blue-900 transition-colors shadow-lg"
                            >
                                <Youtube className="h-4 w-4" />
                            </a>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="mt-6">
                            <h5 className="text-sm font-semibold mb-3 text-blue-200">
                                Stay Updated
                            </h5>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 text-sm bg-blue-800 border border-blue-600 rounded-l-md focus:outline-none focus:border-yellow-400 text-white placeholder-blue-300"
                                />
                                <button className="px-4 py-2 bg-yellow-500 text-blue-900 text-sm font-semibold rounded-r-md hover:bg-yellow-400 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-700 bg-blue-950">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-blue-300">
                            <p>
                                &copy; 2024 National AIDS Control Programme,
                                Tanzania. All rights reserved.
                            </p>
                            <div className="flex items-center space-x-4">
                                <a
                                    href="/legal/privacy"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Privacy Policy
                                </a>
                                <span>|</span>
                                <a
                                    href="/legal/terms"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Terms of Use
                                </a>
                                <span>|</span>
                                <a
                                    href="/legal/accessibility"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Accessibility
                                </a>
                                <span>|</span>
                                <a
                                    href="/contact/feedback"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Feedback
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-blue-300">
                            <div className="flex items-center space-x-2">
                                <Globe className="h-4 w-4" />
                                <span>
                                    Last updated:{" "}
                                    {new Date().toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default NASHCOPFooter;
