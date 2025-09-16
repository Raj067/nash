import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactProps {
    title: string;
    departments: Array<{
        name: string;
        phone: string;
        email?: string;
        description: string;
    }>;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
}

export default function Contact({ title, departments, address }: ContactProps) {
    return (
        <PublicLayout title={title}>
            <Head title="Contact Us" />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            {title}
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
                            We're here to serve you. Reach out to us anytime.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            
                            {/* Emergency Alert */}
                            <Card className="mb-6 border-red-200 bg-red-50">
                                <CardContent className="pt-6">
                                    <div className="flex items-center space-x-3">
                                        <Phone className="h-6 w-6 text-red-600" />
                                        <div>
                                            <p className="font-semibold text-red-900">Emergency: 911</p>
                                            <p className="text-red-700 text-sm">For life-threatening emergencies only</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Departments */}
                            <div className="space-y-4">
                                {departments.map((dept, index) => (
                                    <Card key={index}>
                                        <CardHeader>
                                            <CardTitle className="text-lg">{dept.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <Phone className="h-4 w-4 text-gray-500" />
                                                    <span className="font-medium">{dept.phone}</span>
                                                </div>
                                                {dept.email && (
                                                    <div className="flex items-center space-x-2">
                                                        <Mail className="h-4 w-4 text-gray-500" />
                                                        <a href={`mailto:${dept.email}`} className="text-blue-600 hover:underline">
                                                            {dept.email}
                                                        </a>
                                                    </div>
                                                )}
                                                <p className="text-gray-600 text-sm">{dept.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Location & Hours */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h2>
                            
                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <MapPin className="h-5 w-5" />
                                        <span>Location</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <address className="not-italic text-gray-600">
                                        {address.street}<br />
                                        {address.city}, {address.state} {address.zip}
                                    </address>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Clock className="h-5 w-5" />
                                        <span>Hours</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-gray-600">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday:</span>
                                            <span>8:00 AM - 5:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday:</span>
                                            <span>9:00 AM - 1:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday:</span>
                                            <span>Closed</span>
                                        </div>
                                        <div className="mt-4 pt-4 border-t">
                                            <p className="text-sm font-medium text-red-600">
                                                Emergency services available 24/7
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
