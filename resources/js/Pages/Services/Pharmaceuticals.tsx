import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Pharmaceuticals() {
    return (
        <PublicLayout title="Pharmaceuticals & Laboratory Services">
            <Head title="Pharmaceuticals & Laboratory Services" />
            
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Pharmaceuticals & Laboratory Services</h1>
                    <p className="text-lg text-gray-600">Coming soon...</p>
                </div>
            </section>
        </PublicLayout>
    );
}
