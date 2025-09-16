import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function DecentralizedCare() {
    return (
        <PublicLayout title="Decentralized HIV Care & Treatment">
            <Head title="Decentralized HIV Care & Treatment" />
            
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Decentralized HIV Care & Treatment</h1>
                    <p className="text-lg text-gray-600">Coming soon...</p>
                </div>
            </section>
        </PublicLayout>
    );
}
