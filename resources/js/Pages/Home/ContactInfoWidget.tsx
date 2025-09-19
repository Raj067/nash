import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function ContactInfoWidget() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <Phone className="h-8 w-8 text-blue-600 mb-2" />
                        <h3 className="font-semibold mb-1">Msaada wa Haraka</h3>
                        <p className="text-gray-600">199 (Bure)</p>
                        <p className="text-xs text-gray-500">
                            Huduma za siku 24
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Mail className="h-8 w-8 text-blue-600 mb-2" />
                        <h3 className="font-semibold mb-1">Barua Pepe</h3>
                        <p className="text-gray-600">nacp@afya.go.tz </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <MapPin className="h-8 w-8 text-blue-600 mb-2" />
                        <h3 className="font-semibold mb-1">Makao Makuu</h3>
                        <p className="text-gray-600">
                            Wizara ya Afya, Dar es Salaam
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactInfoWidget;
