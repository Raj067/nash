import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Calendar, Download, FileText } from "lucide-react";
import React from "react";

function ImportantDocumentsWidgets() {
    const importantDocuments = [
        {
            title: "Mwongozo wa Matibabu ya VVU na STI 2024",
            type: "PDF",
            size: "3.2 MB",
            date: "2024-01-01",
        },
        {
            title: "Sera ya Kuzuia VVU, STI na Hepatitis Tanzania",
            type: "PDF",
            size: "2.8 MB",
            date: "2023-12-15",
        },
        {
            title: "Ripoti ya Mwaka 2023 - NASHCOP",
            type: "PDF",
            size: "5.1 MB",
            date: "2023-12-01",
        },
        {
            title: "Mwongozo wa Upimaji wa Hepatitis B na C",
            type: "PDF",
            size: "1.9 MB",
            date: "2023-11-20",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full mb-6">
                            <FileText className="h-10 w-10 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6">
                            Nyaraka Muhimu za NASHCOP
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Pakua nyaraka za kiufundi na sera za programu za
                            VVU, STI na Hepatitis
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {importantDocuments.map((doc, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:bg-white relative overflow-hidden"
                            >
                                {/* Card Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <CardContent className="p-6 text-center relative z-10">
                                    {/* Document Icon with Animation */}
                                    <div className="relative mb-6">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                            <FileText className="h-8 w-8 text-white" />
                                        </div>
                                        {/* PDF Badge */}
                                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                                            {doc.type}
                                        </div>
                                    </div>

                                    <h4 className="font-bold text-gray-800 mb-4 text-sm leading-tight group-hover:text-red-600 transition-colors duration-300">
                                        {doc.title}
                                    </h4>

                                    {/* Document Metadata */}
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center justify-center text-xs text-gray-500">
                                            <div className="flex items-center">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                                                {doc.size}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center text-xs text-gray-500">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {new Date(
                                                doc.date
                                            ).toLocaleDateString("sw-TZ")}
                                        </div>
                                    </div>

                                    {/* Download Button */}
                                    <Button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                                        <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                                        Pakua
                                    </Button>

                                    {/* Download Stats */}
                                    <div className="mt-3 text-xs text-gray-400">
                                        <span className="inline-flex items-center">
                                            <div className="w-1 h-1 bg-green-400 rounded-full mr-1"></div>
                                            {Math.floor(Math.random() * 1000) +
                                                100}{" "}
                                            downloads
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImportantDocumentsWidgets;
