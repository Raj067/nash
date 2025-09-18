import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { FolderOpen } from 'lucide-react';

export default function Resources() {
    return (
        <PublicLayout title="Resources">
            <Head title="Resources" />

            <div className="min-h-screen">
                {/* Hero Section with Background Image */}
                <div className="relative h-[500px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(/images/about.png)`,
                        }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <FolderOpen className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Resources
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Comprehensive collection of resources, tools, and materials
                                    supporting community-oriented policing initiatives
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Content Coming Soon
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We are compiling a comprehensive library of resources including 
                                strategic frameworks, guidelines, databases, and operational manuals. 
                                This central hub will provide easy access to all essential materials 
                                for community policing professionals and stakeholders.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
