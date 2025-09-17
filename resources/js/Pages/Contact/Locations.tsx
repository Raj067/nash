import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Building,
    Clock,
    ExternalLink,
    Globe,
    Mail,
    MapPin,
    Navigation,
    Phone,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
// import { Button } from '@headlessui/react';

export default function Locations() {
    const office = {
        name: "NACP/NTLP Office",
        name_sw: "Ofisi ya NACP/NTLP",
        type: "National Office",
        type_sw: "Ofisi ya Kitaifa",
        address: "Programme Manager",
        address_detail: "National AIDS Control Programme-NACP",
        location: "Kilimani Area, NACP/NTLP Building",
        city: "Dodoma, Tanzania",
        postal: "P O Box 784, Dodoma, Tanzania",
        phone: "+255 (0) 262060148",
        email: "nacp@afya.go.tz",
        hours: "Jumatatu - Ijumaa: 7:30 Asubuhi - 3:30 Mchana",
        hours_en: "Monday - Friday: 7:30 AM - 3:30 PM",
        services: [
            "Maendeleo ya Sera za VVU/UKIMWI",
            "Mipango ya Kimkakati ya Kitaifa",
            "Uratibu wa Programu za Kuzuia",
            "Usimamizi wa Matibabu ya ART",
            "Ufuatiliaji na Tathmini",
            "Mafunzo ya Wataalamu wa Afya",
        ],
        services_en: [
            "HIV/AIDS Policy Development",
            "National Strategic Planning",
            "Prevention Program Coordination",
            "ART Treatment Management",
            "Monitoring & Evaluation",
            "Healthcare Professional Training",
        ],
        coordinates: { lat: -6.1983108, lng: 35.7457656 },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.4234567890123!2d35.7457656!3d-6.1983108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184dfba29cc8b17d%3A0x691b513ff23f67e7!2sMOHCDGEC%20NACP%20%2FNTLP%20Office!5e0!3m2!1sen!2stz!4v1234567890123!5m2!1sen!2stz",
    };

    return (
        <PublicLayout title="Office Locations">
            <Head title="Office Locations" />

            <div className="min-h-screen">
                {/* Hero Section with Background Image */}
                <div className="relative h-[500px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(/images/arvsImages.jpeg)`,
                        }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <MapPin className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    NACP Office
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    National AIDS Control Programme Headquarters
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Office Information Section */}
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
                                <Building className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Office Information
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Complete contact details and location
                                information for NACP headquarters
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Office Information Card */}
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg">
                                {/* Card Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                {office.name}
                                            </h3>
                                            <p className="text-gray-600 font-medium text-lg">
                                                {office.name_sw}
                                            </p>
                                            <div className="flex items-center mt-3">
                                                <Building className="w-5 h-5 text-blue-600 mr-2" />
                                                <span className="text-sm text-blue-700 font-medium">
                                                    {office.type}
                                                </span>
                                                <span className="text-sm text-gray-500 ml-2">
                                                    ({office.type_sw})
                                                </span>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <Building className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Address */}
                                        <div className="flex items-start space-x-4">
                                            <MapPin className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-gray-800 font-medium text-lg mb-1">
                                                    {office.address}
                                                </p>
                                                <p className="text-gray-700 mb-1">
                                                    {office.address_detail}
                                                </p>
                                                <p className="text-gray-700 mb-1">
                                                    {office.location}
                                                </p>
                                                <p className="text-gray-600 mb-1">
                                                    {office.city}
                                                </p>
                                                <p className="text-gray-500 text-sm">
                                                    {office.postal}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Contact Info */}
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-4">
                                                <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
                                                <div>
                                                    <p className="text-gray-800 font-medium text-lg">
                                                        {office.phone}
                                                    </p>
                                                    <p className="text-gray-500 text-sm">
                                                        Simu / Phone
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <Mail className="w-6 h-6 text-purple-600 flex-shrink-0" />
                                                <div>
                                                    <p className="text-gray-800 font-medium text-lg">
                                                        {office.email}
                                                    </p>
                                                    <p className="text-gray-500 text-sm">
                                                        Barua Pepe / Email
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hours */}
                                        <div className="flex items-start space-x-4">
                                            <Clock className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-gray-800 font-medium text-lg">
                                                    {office.hours}
                                                </p>
                                                <p className="text-gray-600">
                                                    {office.hours_en}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col gap-4 pt-6">
                                            <Button
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
                                                onClick={() =>
                                                    window.open(
                                                        `https://maps.google.com/?q=${office.coordinates.lat},${office.coordinates.lng}`,
                                                        "_blank"
                                                    )
                                                }
                                            >
                                                <Navigation className="w-5 h-5 mr-2" />
                                                View on Map
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-3"
                                                onClick={() =>
                                                    (window.location.href = `tel:${office.phone}`)
                                                }
                                            >
                                                <Phone className="w-5 h-5 mr-2" />
                                                Call Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Embedded Map */}
                            <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl shadow-lg">
                                {/* Card Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 p-8">
                                    <div className="flex items-center mb-6">
                                        <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                                        <h3 className="text-xl font-bold text-gray-900">
                                            Location
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        Kilimani Area, NACP/NTLP Building,
                                        Dodoma
                                    </p>

                                    <div className="w-full h-96 rounded-lg overflow-hidden mb-6">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.423456789!2d35.745422!3d-6.198699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184dfba29cc8b17d%3A0x691b513ff23f67e7!2sMOHCDGEC%20NACP%20%2FNTLP%20Office!5e0!3m2!1ssw!2stz!4v1694789012345!5m2!1ssw!2stz"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen={true}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="NACP Office Location"
                                        ></iframe>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-800 font-medium">
                                                Coordinates:
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                {office.coordinates.lat},{" "}
                                                {office.coordinates.lng}
                                            </p>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                window.open(
                                                    "https://www.google.com/maps/place/MOHCDGEC+NACP+%2FNTLP+Office/@-6.198699,35.745422,17z/data=!4m6!3m5!1s0x184dfba29cc8b17d:0x691b513ff23f67e7!8m2!3d-6.1983108!4d35.7457656!16s%2Fg%2F11gzmybb2_?hl=sw&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
                                                    "_blank"
                                                )
                                            }
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Google Maps
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Information */}
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
                                <Globe className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                                Additional Information
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                Kwa maelezo zaidi kuhusu huduma zetu za
                                VVU/UKIMWI au kupanga mkutano, tafadhali
                                wasiliana nasi
                            </p>
                        </div>

                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                            {/* Card Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 text-center">
                                <p className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                                    For more information about our HIV/AIDS
                                    services or to schedule an appointment,
                                    please contact us. Our team of experts is
                                    ready to assist you.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
                                    <div className="flex items-center justify-center space-x-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-semibold text-gray-900">
                                                Phone
                                            </p>
                                            <p className="text-gray-600">
                                                {office.phone}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center space-x-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-semibold text-gray-900">
                                                Email
                                            </p>
                                            <p className="text-gray-600">
                                                {office.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-200">
                                    <p className="text-gray-600 text-sm">
                                        <strong className="text-gray-900">
                                            Headquarters:
                                        </strong>{" "}
                                        Kilimani Area, NACP/NTLP Building,
                                        Dodoma, Tanzania
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
