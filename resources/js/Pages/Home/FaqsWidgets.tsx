import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { HelpCircle } from "lucide-react";
import React, { useState, useEffect } from "react";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    category: string;
}

function FaqsWidgets() {
    const [faqData, setFaqData] = useState<FAQItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        try {
            const response = await fetch('/api/faqs');
            const data = await response.json();
            setFaqData(data);
        } catch (error) {
            console.error('Error fetching FAQs:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center mb-4">
                            <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Maswali Yanayoulizwa Mara kwa Mara
                            </h2>
                        </div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Pata majibu ya maswali muhimu kuhusu VVU na huduma zetu
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="border border-gray-200 rounded-lg mb-4 p-6 animate-pulse">
                                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Maswali Yanayoulizwa Mara kwa Mara
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Pata majibu ya maswali muhimu kuhusu VVU na huduma zetu
                    </p>
                </div>

                {/* FAQ Items using Accordion */}
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((item) => (
                            <AccordionItem key={item.id} value={item.id.toString()} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                                <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 hover:no-underline">
                                    <span className="text-lg font-semibold text-gray-900 pr-4">
                                        {item.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 border-t border-gray-100">
                                    <p className="text-gray-700 leading-relaxed pt-4">
                                        {item.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default FaqsWidgets;
