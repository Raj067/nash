import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Truck,
    CheckCircle,
} from "lucide-react";

export default function SupplyChain() {
    const priorityStrategies = [
        "Roll out the redesigned logistics system to all HFs, including reporting of monthly stock in hand and consumption data, as well as improving logistics data quality at the last mile",
        "Strengthen the use of electronic data systems (e-LMIS & PMD); integration of E10, e-LMIS, and PMD; analysis and use of data at all levels of the system, including system improvement (dashboard) to enhance end-to-end visibility of key logistics and supply chain data in the context of an integrated information system that links and triangulates facility-level logistic information and global PSM data (order and shipment data) for better planning and monitoring",
        "Develop an in-country procurement and shipment tracking system (dashboard) for health commodities procured by MSD and donors (procurement tracking and upstream pipeline monitoring)",
        "Strengthen national-level capacity in forecasting and supply planning for HIV, VH and STIs commodities (MoH, MSD and PO-RALG)",
        "Mobilise domestic resources through the AIDS Trust Fund using advocacy for increased government budget allocations, and tap-on other sources such as insurance fund and the private sector funds, to fund the procurement and distribution of HIV, VH and STIs commodities",
        "Strengthen collaborative efforts in coordination and monitoring of supply chain management interventions between the MoH, PO-RALG and IPs",
        "Improve MSD's storage and distribution capacity to facilitate timely delivery of commodities",
        "Improve HIV, VH and STIs commodity availability and reduce wastage through improved inventory and data management at all levels"
    ];

    return (
        <PublicLayout title="Supply Chain Management">
            <Head title="Supply Chain - Pharmaceuticals & Laboratory" />

            <div className="min-h-screen">
                {/* Hero Section */}
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
                                    <Truck className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Supply Chain Management
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    A fundamental principle of "No products, no Programme" guides the national 
                                    Procurement and Supply Chain Management (PSCM) system for HIV, VH and STIs commodities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overview Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                    PSCM System Overview
                                </h2>
                            </div>
                            
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    The HIV, VH and STIs PSCM system comprises supply chain management (product selection, 
                                    quantification, procurement, storage and distribution; quality control and assurance, 
                                    among other key logistics parameters), including the rational use of medicines and pharmacovigilance.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    The system is jointly coordinated by the Pharmaceutical and Laboratory Services Unit (PLSU) 
                                    at the NASHCOP and LMS under the Pharmaceutical Services Unit (PSU) of the MoH, working in 
                                    close collaboration with key partners in the commodities supply chain and serving to ensure 
                                    an uninterrupted supply of medicine and laboratory commodities.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-800 mb-8">Priority Strategies</h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {priorityStrategies.map((strategy, index) => (
                                        <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">{index + 1}</span>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">{strategy}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
