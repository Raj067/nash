import { Card, CardContent } from "@/Components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
    id: number;
    question: {
        sw: string;
        en: string;
    };
    answer: {
        sw: string;
        en: string;
    };
}

interface FAQSectionProps {
    language?: "sw" | "en";
}

function FaqsWidgets({ language = "sw" }) {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const faqData: FAQItem[] = [
        {
            id: 1,
            question: {
                sw: "VVU ni nini na ni jinsi gani inasambaa?",
                en: "What is HIV and how does it spread?",
            },
            answer: {
                sw: "VVU (Virusi vya Ukosefu wa Kinga Mwilini) ni virusi vinavyoshambulia mfumo wa kinga wa mwili. Inasambaa kupitia mahusiano ya kingono yasiyolindwa, kushiriki sindano, kutoka kwa mama kwenda kwa mtoto wakati wa ujauzito, kujifungua au kunyonyesha.",
                en: "HIV (Human Immunodeficiency Virus) is a virus that attacks the body's immune system. It spreads through unprotected sexual contact, sharing needles, from mother to child during pregnancy, childbirth or breastfeeding.",
            },
        },
        {
            id: 2,
            question: {
                sw: "Ni jinsi gani naweza kujua hali yangu ya VVU?",
                en: "How can I know my HIV status?",
            },
            answer: {
                sw: "Unaweza kujua hali yako ya VVU kwa kupima katika vituo vya afya, vituo vya upimaji wa VVU, au kupitia vipimo vya nyumbani. Upimaji ni wa bure na ni wa siri. Tunapendekeza upimaji kila miezi 3-6 kwa watu walio katika hatari kubwa.",
                en: "You can know your HIV status by testing at health facilities, HIV testing centers, or through home-based testing. Testing is free and confidential. We recommend testing every 3-6 months for people at high risk.",
            },
        },
        {
            id: 3,
            question: {
                sw: "Kama nimepata matokeo chanya ya VVU, ni hatua gani za kuchukua?",
                en: "If I test positive for HIV, what steps should I take?",
            },
            answer: {
                sw: "Anza matibabu ya ARV haraka iwezekanavyo, fuata maagizo ya daktari, pima viral load mara kwa mara, tumia kondomu, na pata msaada wa kisaikolojia. Matibabu ya ARV ni ya bure katika vituo vyote vya umma.",
                en: "Start ART treatment as soon as possible, follow doctor's instructions, monitor viral load regularly, use condoms, and get psychological support. ART treatment is free at all public facilities.",
            },
        },
        {
            id: 4,
            question: {
                sw: "Je, VVU inaweza kuponyeka?",
                en: "Can HIV be cured?",
            },
            answer: {
                sw: "Kwa sasa hakuna tiba ya VVU, lakini matibabu ya ARV yanaweza kudhibiti virusi na kuwezesha maisha ya kawaida. Watu wenye VVU wanaoweza kupata matibabu sahihi wanaweza kuishi maisha marefu na yenye afya.",
                en: "Currently there is no cure for HIV, but ART treatment can control the virus and enable normal life. People with HIV who receive proper treatment can live long and healthy lives.",
            },
        },
        {
            id: 5,
            question: {
                sw: "Ni jinsi gani naweza kujikinga na VVU?",
                en: "How can I protect myself from HIV?",
            },
            answer: {
                sw: "Tumia kondomu kila wakati, epuka kushiriki vifaa vya kudunga, pima mara kwa mara, punguza idadi ya washirika wa kingono, na chukua PrEP ikiwa uko katika hatari kubwa. Pia, pata tohara kwa wanaume.",
                en: "Use condoms consistently, avoid sharing injection equipment, test regularly, reduce number of sexual partners, and take PrEP if at high risk. Also, get male circumcision.",
            },
        },
        {
            id: 6,
            question: {
                sw: "PrEP ni nini na ni nani anayestahili?",
                en: "What is PrEP and who is eligible?",
            },
            answer: {
                sw: "PrEP (Pre-Exposure Prophylaxis) ni dawa za kuzuia VVU zinazochukuliwa na watu wasio na VVU lakini walio katika hatari kubwa. Ni kwa ajili ya washirika wa watu wenye VVU, wanaume wanaofanya mapenzi na wanaume, na makahaba.",
                en: "PrEP (Pre-Exposure Prophylaxis) is HIV prevention medication taken by HIV-negative people at high risk. It's for partners of people with HIV, men who have sex with men, and sex workers.",
            },
        },
        {
            id: 7,
            question: {
                sw: "Je, mama mwenye VVU anaweza kuzaa mtoto asiye na VVU?",
                en: "Can an HIV-positive mother give birth to an HIV-negative child?",
            },
            answer: {
                sw: "Ndio, kwa matibabu sahihi ya ARV wakati wa ujauzito na baada ya kujifungua, uwezekano wa kusambaza VVU kwa mtoto ni chini ya 2%. Pia, kunyonyesha kwa muda mfupi na kufuata maagizo ya daktari ni muhimu.",
                en: "Yes, with proper ART treatment during pregnancy and after delivery, the chance of transmitting HIV to the child is less than 2%. Also, short-term breastfeeding and following doctor's instructions is important.",
            },
        },
        {
            id: 8,
            question: {
                sw: "Ni wapi naweza kupata huduma za VVU?",
                en: "Where can I access HIV services?",
            },
            answer: {
                sw: "Huduma za VVU zinapatikana katika hospitali za umma, vituo vya afya, vituo maalum vya VVU, na kupitia huduma za nyumbani. Piga simu 116 kwa msaada wa haraka au tembelea tovuti yetu kwa maelezo zaidi.",
                en: "HIV services are available at public hospitals, health centers, specialized HIV centers, and through home-based services. Call 116 for emergency assistance or visit our website for more information.",
            },
        },
    ];

    const toggleItem = (id: number) => {
        setOpenItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const content = {
        sw: {
            title: "Maswali Yanayoulizwa Mara kwa Mara",
            subtitle: "Pata majibu ya maswali muhimu kuhusu VVU na huduma zetu",
        },
        en: {
            title: "Frequently Asked Questions",
            subtitle:
                "Get answers to important questions about HIV and our services",
        },
    };

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {content[language].title}
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {content[language].subtitle}
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqData.map((item) => (
                        <Card
                            key={item.id}
                            className="overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
                        >
                            <CardContent className="p-0">
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-4">
                                        {item.question[language]}
                                    </span>
                                    {openItems.includes(item.id) ? (
                                        <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                    )}
                                </button>

                                {openItems.includes(item.id) && (
                                    <div className="px-6 pb-4 border-t border-gray-100">
                                        <p className="text-gray-700 leading-relaxed pt-4">
                                            {item.answer[language]}
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Contact CTA */}
                {/* <div className="text-center mt-12">
          <div className="bg-blue-600 text-white p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">
              {language === 'sw' ? 'Una swali lingine?' : 'Have another question?'}
            </h3>
            <p className="mb-4">
              {language === 'sw' 
                ? 'Wasiliana nasi kupitia simu 116 au tembelea kituo cha afya karibu nawe'
                : 'Contact us through phone 116 or visit a health facility near you'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:116" 
                className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                {language === 'sw' ? 'Piga Simu 116' : 'Call 116'}
              </a>
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-white"
              >
                {language === 'sw' ? 'Maelezo ya Mawasiliano' : 'Contact Information'}
              </a>
            </div>
          </div>
        </div> */}
            </div>
        </section>
    );
}

export default FaqsWidgets;
