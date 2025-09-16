import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Speeches() {
    return (
        <PublicLayout title="Speeches">
            <Head title="Speeches" />
            
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Speeches</h1>
                    <p className="text-lg text-gray-600">Coming soon...</p>
                </div>
            </section>
        </PublicLayout>
    );
}
