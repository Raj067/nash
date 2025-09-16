import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Services() {
    return (
        <PublicLayout title="What We Do">
            <Head title="What We Do" />
            
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">What We Do</h1>
                    <p className="text-lg text-gray-600">Coming soon...</p>
                </div>
            </section>
        </PublicLayout>
    );
}
