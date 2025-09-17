import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { 
    Activity, 
    Building, 
    TrendingUp, 
    UserCheck, 
    Users, 
    Shield, 
    BarChart3, 
    Pill, 
    Microscope, 
    DollarSign, 
    FileText, 
    Heart, 
    Baby, 
    Home, 
    Stethoscope, 
    Target, 
    Database, 
    Search 
} from "lucide-react";

export default function Structure() {
    return (
        <PublicLayout title="NASHCOP Organisation Structure">
            <Head title="NASHCOP Organisation Structure" />
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
                                <Building className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                Organization Structure
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                Coordinating Tanzania's national response to
                                HIV/AIDS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Organizational Chart Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                            <Building className="h-10 w-10 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                            NACP Organization Structure
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            Hierarchical structure ensuring effective coordination and implementation of Tanzania's HIV/AIDS response
                        </p>
                    </div>

                    {/* Top Level - Permanent Secretary */}
                    <div className="flex justify-center mb-8">
                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg max-w-md">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="text-center relative z-10">
                                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <UserCheck className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    Permanent Secretary
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Ministry of Health, Community Development, Gender, Elderly and Children
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Connecting Line */}
                    <div className="flex justify-center mb-8">
                        <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                    </div>

                    {/* Second Level - Directorate */}
                    <div className="flex justify-center mb-8">
                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg max-w-md">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="text-center relative z-10">
                                <div className="inline-flex p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                                    Directorate of Preventive Services
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Overseeing preventive health services including HIV/AIDS
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Connecting Line */}
                    <div className="flex justify-center mb-8">
                        <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-orange-400 rounded-full"></div>
                    </div>

                    {/* Third Level - Program Manager */}
                    <div className="flex justify-center mb-12">
                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg max-w-md">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="text-center relative z-10">
                                <div className="inline-flex p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Activity className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                                    Program Manager
                                </h3>
                                <p className="text-sm text-gray-600">
                                    National AIDS Control Programme
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Departments */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                        {/* Care, Treatment & Support */}
                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="text-center relative z-10">
                                <div className="inline-flex p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Heart className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                                    Care, Treatment & Support
                                </h4>
                            </div>
                        </div>

                        {/* Preventive */}
                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="text-center relative z-10">
                                <div className="inline-flex p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                                    Preventive
                                </h4>
                            </div>
                        </div>

                        {/* Strategic Information */}
                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="text-center relative z-10">
                                <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <BarChart3 className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    Strategic Information
                                </h4>
                            </div>
                        </div>

                        {/* Pharmaceuticals & Laboratory Service */}
                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="text-center relative z-10">
                                <div className="inline-flex p-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Microscope className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                    Pharmaceuticals & Laboratory Service
                                </h4>
                            </div>
                        </div>

                        {/* Finance & Administration */}
                        <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden rounded-2xl p-6 shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="text-center relative z-10">
                                <div className="inline-flex p-3 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <DollarSign className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                                    Finance & Administration
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/* Sub-departments and Units */}
                    <div className="space-y-12">
                        {/* Care, Treatment & Support Sub-units */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
                                <Heart className="h-6 w-6 text-red-500 mr-3" />
                                Care, Treatment & Support Units
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Adolescence & Adult Therapy</p>
                                </div>
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Stethoscope className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">TB/HIV</p>
                                </div>
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Baby className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">PedART</p>
                                </div>
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Home className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Home Base Care & Support</p>
                                </div>
                            </div>
                        </div>

                        {/* Preventive Sub-units */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
                                <Shield className="h-6 w-6 text-green-500 mr-3" />
                                Preventive Units
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Microscope className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Biomedical (HTS, VMMC, KP, STI)</p>
                                </div>
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Behavior (IEC/SBCC)</p>
                                </div>
                            </div>
                        </div>

                        {/* Strategic Information Sub-units */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
                                <BarChart3 className="h-6 w-6 text-blue-500 mr-3" />
                                Strategic Information Units
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Target className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Quality Improvement</p>
                                </div>
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Database className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Health Information System</p>
                                </div>
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Search className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Surveillance & Research</p>
                                </div>
                            </div>
                        </div>

                        {/* Pharmaceuticals & Laboratory Sub-units */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
                                <Microscope className="h-6 w-6 text-purple-500 mr-3" />
                                Pharmaceuticals & Laboratory Units
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Pill className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Supply Chain Management</p>
                                </div>
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Quality Assurance & Equipment Maintenance</p>
                                </div>
                            </div>
                        </div>

                        {/* Finance & Administration Sub-units */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
                                <DollarSign className="h-6 w-6 text-orange-500 mr-3" />
                                Finance & Administration Units
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Human Resources</p>
                                </div>
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <FileText className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Administration & Procurement</p>
                                </div>
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Accounts</p>
                                </div>
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <Target className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-semibold text-green-800">Planning (Donor Support Programs)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
