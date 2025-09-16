import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    Search,
    Globe,
    Heart,
    Shield,
    Users,
    ArrowRight,
    Play,
    ChevronLeft,
    ChevronRight,
    Quote,
    MessageCircle,
    FileText,
} from "lucide-react";

function Herosection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [language, setLanguage] = useState<"sw" | "en">("sw");

    const slides = [
        {
            id: 1,
            image: "/images/arvsImages.jpeg",
            title: "Karibu NASHCOP",
            subtitle: "National AIDS, STIs and Hepatitis Control Programme",
            description:
                "Jukwaa la kuongeza ufikiaji wa habari kuhusu VVU, UKIMWI, magonjwa ya zinaa na Hepatitis Tanzania",
        },
        {
            id: 2,
            image: "/images/arvsImages.jpeg",
            title: "Mafanikio ya 95-95-95",
            subtitle: "Tanzania: 88% - 98% - 96%",
            description:
                "Maendeleo makubwa katika kupambana na VVU - Wanajua hali yao, wanapata matibabu, na virusi vimepungua",
        },
        {
            id: 3,
            image: "/images/arvsImages.jpeg",
            title: "Huduma Kamili za Afya",
            subtitle: "VVU, Magonjwa ya Zinaa na Hepatitis",
            description:
                "Huduma za upimaji, matibabu na kuzuia kwa VVU, magonjwa ya zinaa na Hepatitis kwa wote",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const welcomeMessage = {
        sw: {
            title: "Karibu Tovuti Rasmi ya NASHCOP Tanzania",
            message:
                "Karibu wote, kwenye tovuti rasmi ya Mpango wa Kitaifa wa Kudhibiti VVU, Magonjwa ya Zinaa na Hepatitis (NASHCOP) Tanzania. Tovuti hii ni jukwaa la kuongeza ufikiaji wa kila mtu wa habari kuhusu VVU, UKIMWI, magonjwa ya zinaa na Hepatitis, yanayozalishwa Tanzania. Tovuti hii inalenga kushiriki habari na nyenzo za VVU, UKIMWI, magonjwa ya zinaa na Hepatitis kwa umma mkuu ndani na nje ya nchi.",
            author: "Managing Director",
        },
        en: {
            title: "Welcome to NASHCOP Tanzania Official Website",
            message:
                "Welcome all, to the Tanzanian National AIDS, STIs and Hepatitis Control Programme (NASHCOP) official website. The website is a platform for enhancing everyone's access to information on HIV, AIDS, STIs and Hepatitis, generated in Tanzania. This website aims on sharing HIV, AIDS, STI and Hepatitis information and materials to the general public within and outside the country.",
            author: "Prime Minister of Tanzania",
        },
    };

    return (
        <div className="relative">
            {/* Hero Slider */}
            <div className="relative h-[600px] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                            index === currentSlide
                                ? "translate-x-0"
                                : index < currentSlide
                                ? "-translate-x-full"
                                : "translate-x-full"
                        }`}
                    >
                        <div
                            className="h-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                                <div className="container mx-auto px-4">
                                    <div className="max-w-3xl text-white">
                                        <Badge className="mb-4 bg-yellow-500 text-blue-900 hover:bg-yellow-400">
                                            NASHCOP Tanzania
                                        </Badge>
                                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                                            {slide.title}
                                        </h1>
                                        <h2 className="text-2xl md:text-3xl mb-6 text-blue-100">
                                            {slide.subtitle}
                                        </h2>
                                        <p className="text-xl mb-8 text-blue-50 leading-relaxed">
                                            {slide.description}
                                        </p>

                                        <div className="flex flex-wrap gap-4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slider Controls */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
                    onClick={nextSlide}
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentSlide
                                    ? "bg-white"
                                    : "bg-white/50"
                            }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Welcome Message from PM - Enhanced with Image */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl opacity-20"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
                            <div className="grid lg:grid-cols-2 gap-0">
                                {/* PM Image Section */}
                                <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 flex items-center justify-center">
                                    {/* Decorative Elements */}
                                    <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                                    <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>

                                    <div className="relative text-center">
                                        {/* PM Image */}
                                        <div className="relative inline-block mb-6">
                                            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                                <img
                                                    src="/images/655A0232-min.JPG"
                                                    alt="Managing Director"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Decorative Ring */}
                                            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
                                        </div>

                                        {/* Quote Icon */}
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                            <Quote className="h-8 w-8 text-white" />
                                        </div>

                                        {/* Title and Author */}
                                        <div className="text-white">
                                            <h3 className="text-xl lg:text-2xl font-bold mb-2">
                                                {
                                                    welcomeMessage[language]
                                                        .author
                                                }
                                            </h3>
                                            <p className="text-blue-100 text-sm lg:text-base font-medium">
                                                NASHCOP Tanzania
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Content Section */}
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                                            <MessageCircle className="h-6 w-6 text-white" />
                                        </div>
                                        <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                                            {welcomeMessage[language].title}
                                        </h2>
                                    </div>

                                    <blockquote className="text-gray-700 leading-relaxed text-lg lg:text-xl italic relative">
                                        <div className="absolute -top-4 -left-2 text-6xl text-blue-200 font-serif">
                                            "
                                        </div>
                                        <div className="relative z-10 pl-6">
                                            {welcomeMessage[language].message}
                                        </div>
                                        <div className="absolute -bottom-8 -right-2 text-6xl text-blue-200 font-serif">
                                            "
                                        </div>
                                    </blockquote>

                                    {/* Call to Action */}
                                    {/* <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                        <Heart className="h-4 w-4 mr-2" />
                        Jiunga Nasi
                      </Button>
                      <Button
                        variant="outline"
                        className="border-blue-300 text-blue-600 hover:bg-blue-50"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Soma Zaidi
                      </Button>
                    </div>
                  </div> */}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Tanzania Progress Towards 95-95-95 */}
            {/* <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === "sw" ? "Tanzania - Maendeleo Kuelekea 95-95-95" : "Tanzania - Progress Towards 95-95-95"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === "sw" ? "Chanzo cha Takwimu - DHIS2 Septemba 2021" : "Sources of Data - DHIS2 of September 2021"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="text-6xl font-bold text-blue-600 mb-4">88</div>
              <div className="text-2xl font-bold text-blue-600 mb-2">%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {language === "sw" ? "Wanajua Hali Yao ya VVU" : "Aware of their HIV Status"}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{width: '88%'}}></div>
              </div>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="text-6xl font-bold text-green-600 mb-4">98</div>
              <div className="text-2xl font-bold text-green-600 mb-2">%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {language === "sw" ? "Wanapata Matibabu ya ART" : "on ART"}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full" style={{width: '98%'}}></div>
              </div>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="text-6xl font-bold text-purple-600 mb-4">96</div>
              <div className="text-2xl font-bold text-purple-600 mb-2">%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {language === "sw" ? "Virusi Vimepungua" : "Virally Suppressed"}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full" style={{width: '96%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 italic">
              {language === "sw" ? "Chanzo cha Takwimu: DHIS2 Septemba 2021" : "Sources of Data: DHIS2 of September 2021"}
            </p>
          </div>
        </div>
      </section> */}
        </div>
    );
}

export default Herosection;
