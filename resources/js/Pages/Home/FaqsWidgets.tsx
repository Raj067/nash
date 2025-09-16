import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { HelpCircle } from "lucide-react";
import React from "react";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

function FaqsWidgets() {
    const faqData: FAQItem[] = [
        {
            id: "item-1",
            question: "VVU ni nini na ni jinsi gani inasambaa?",
            answer: "VVU (Virusi vya Ukosefu wa Kinga Mwilini) ni virusi vinavyoshambulia mfumo wa kinga wa mwili. Inasambaa kupitia mahusiano ya kingono yasiyolindwa, kushiriki sindano, kutoka kwa mama kwenda kwa mtoto wakati wa ujauzito, kujifungua au kunyonyesha.",
        },
        {
            id: "item-2",
            question: "Ni jinsi gani naweza kujua hali yangu ya VVU?",
            answer: "Unaweza kujua hali yako ya VVU kwa kupima katika vituo vya afya, vituo vya upimaji wa VVU, au kupitia vipimo vya nyumbani. Upimaji ni wa bure na ni wa siri. Tunapendekeza upimaji kila miezi 3-6 kwa watu walio katika hatari kubwa.",
        },
        {
            id: "item-3",
            question: "Kama nimepata matokeo chanya ya VVU, ni hatua gani za kuchukua?",
            answer: "Anza matibabu ya ARV haraka iwezekanavyo, fuata maagizo ya daktari, pima viral load mara kwa mara, tumia kondomu, na pata msaada wa kisaikolojia. Matibabu ya ARV ni ya bure katika vituo vyote vya umma.",
        },
        {
            id: "item-4",
            question: "Je, VVU inaweza kuponyeka?",
            answer: "Kwa sasa hakuna tiba ya VVU, lakini matibabu ya ARV yanaweza kudhibiti virusi na kuwezesha maisha ya kawaida. Watu wenye VVU wanaoweza kupata matibabu sahihi wanaweza kuishi maisha marefu na yenye afya.",
        },
        {
            id: "item-5",
            question: "Ni jinsi gani naweza kujikinga na VVU?",
            answer: "Tumia kondomu kila wakati, epuka kushiriki vifaa vya kudunga, pima mara kwa mara, punguza idadi ya washirika wa kingono, na chukua PrEP ikiwa uko katika hatari kubwa. Pia, pata tohara kwa wanaume.",
        },
        {
            id: "item-6",
            question: "PrEP ni nini na ni nani anayestahili?",
            answer: "PrEP (Pre-Exposure Prophylaxis) ni dawa za kuzuia VVU zinazochukuliwa na watu wasio na VVU lakini walio katika hatari kubwa. Ni kwa ajili ya washirika wa watu wenye VVU, wanaume wanaofanya mapenzi na wanaume, na makahaba.",
        },
        {
            id: "item-7",
            question: "Je, mama mwenye VVU anaweza kuzaa mtoto asiye na VVU?",
            answer: "Ndio, kwa matibabu sahihi ya ARV wakati wa ujauzito na baada ya kujifungua, uwezekano wa kusambaza VVU kwa mtoto ni chini ya 2%. Pia, kunyonyesha kwa muda mfupi na kufuata maagizo ya daktari ni muhimu.",
        },
        {
            id: "item-8",
            question: "Ni wapi naweza kupata huduma za VVU?",
            answer: "Huduma za VVU zinapatikana katika hospitali za umma, vituo vya afya, vituo maalum vya VVU, na kupitia huduma za nyumbani. Piga simu 116 kwa msaada wa haraka au tembelea tovuti yetu kwa maelezo zaidi.",
        },
    ];

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
                            <AccordionItem key={item.id} value={item.id} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
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
