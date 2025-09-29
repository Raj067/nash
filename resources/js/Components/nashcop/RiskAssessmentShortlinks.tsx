import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import {
    Activity,
    Heart,
    Shield,
    Zap,
    AlertTriangle,
    ArrowRight,
    X,
} from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { useTranslation } from "react-i18next";

const RiskAssessmentShortlinks = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const assessmentTools = [
        {
            title: t("risk_assessment.tools.hiv_risk.title"),
            subtitle: t("risk_assessment.tools.hiv_risk.subtitle"),
            description: t("risk_assessment.tools.hiv_risk.description"),
            href: "/tools/hiv-risk-assessment",
            icon: Heart,
            color: "bg-red-50 border-red-200 hover:bg-red-100",
            iconColor: "text-red-600",
            buttonColor: "bg-red-600 hover:bg-red-700",
        },
        {
            title: t("risk_assessment.tools.tb_risk.title"),
            subtitle: t("risk_assessment.tools.tb_risk.subtitle"),
            description: t("risk_assessment.tools.tb_risk.description"),
            href: "/tools/tb-risk-assessment",
            icon: Activity,
            color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
            iconColor: "text-blue-600",
            buttonColor: "bg-blue-600 hover:bg-blue-700",
        },
        {
            title: t("risk_assessment.tools.prep.title"),
            subtitle: t("risk_assessment.tools.prep.subtitle"),
            description: t("risk_assessment.tools.prep.description"),
            href: "/tools/prep-assessment",
            icon: Shield,
            color: "bg-green-50 border-green-200 hover:bg-green-100",
            iconColor: "text-green-600",
            buttonColor: "bg-green-600 hover:bg-green-700",
        },
        {
            title: t("risk_assessment.tools.pep.title"),
            subtitle: t("risk_assessment.tools.pep.subtitle"),
            description: t("risk_assessment.tools.pep.description"),
            href: "/tools/pep-assessment",
            icon: Zap,
            color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
            iconColor: "text-orange-600",
            buttonColor: "bg-orange-600 hover:bg-orange-700",
        },
    ];

    // if (!isVisible || isScrolled) {
    //     return null;
    // }

    return (
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-b border-gray-200 relative">
            {/* Close button */}
            {/* <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors"
                aria-label="Close shortcuts"
            >
                <X className="h-4 w-4 text-gray-500" />
            </button> */}

            <div className="container mx-auto px-4 py-6">
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-3">
                        <AlertTriangle className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {t("risk_assessment.title")}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t("risk_assessment.description")}
                    </p>
                </div>

                {/* Assessment Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {assessmentTools.map((tool, index) => {
                        const IconComponent = tool.icon;
                        return (
                            <Card
                                key={index}
                                className={`${tool.color} border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 group`}
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center group-hover:bg-white transition-colors">
                                            <IconComponent
                                                className={`w-6 h-6 ${tool.iconColor}`}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-gray-800 text-lg mb-1">
                                        {tool.title}
                                    </h3>
                                    <p className="font-medium text-gray-700 text-sm mb-2">
                                        {tool.subtitle}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {tool.description}
                                    </p>

                                    <Link href={tool.href}>
                                        <Button
                                            size="sm"
                                            className={`${tool.buttonColor} text-white w-full group-hover:shadow-md transition-all`}
                                        >
                                            {t("risk_assessment.start_assessment")}
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* View All Link */}
                <div className="text-center mt-6">
                    <Link href="/tools/risk-assessment">
                        <Button
                            variant="outline"
                            className="bg-white/80 hover:bg-white"
                        >
                            {t("risk_assessment.view_all")}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Notice */}
                {/* <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                        💡 Tip: These shortcuts hide when you scroll down to
                        keep your browsing clean
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default RiskAssessmentShortlinks;
