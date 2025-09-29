import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import {
    Shield,
    AlertTriangle,
    Lock,
    Phone,
    Mail,
    FileText,
    Eye,
    EyeOff,
    ExternalLink,
    Users,
    Heart,
} from "lucide-react";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

const WhistleblowingModule = () => {
    const { t } = useTranslation();
    const [showDetails, setShowDetails] = useState(false);

    const seahTypes = [
        {
            key: "sexual_abuse",
            type: t("whistleblowing.seah_types.sexual_abuse.type"),
            description: t(
                "whistleblowing.seah_types.sexual_abuse.description"
            ),
            color: "bg-red-100 text-red-800 border-red-200",
        },
        {
            key: "sexual_harassment",
            type: t("whistleblowing.seah_types.sexual_harassment.type"),
            description: t(
                "whistleblowing.seah_types.sexual_harassment.description"
            ),
            color: "bg-orange-100 text-orange-800 border-orange-200",
        },
    ];

    const reportingChannels = [
        {
            title: t("whistleblowing.reporting_channels.online.title"),
            description: t(
                "whistleblowing.reporting_channels.online.description"
            ),
            icon: FileText,
            href: "/report/seah",
            primary: true,
        },
        {
            title: t("whistleblowing.reporting_channels.email.title"),
            description: t(
                "whistleblowing.reporting_channels.email.description"
            ),
            icon: Mail,
            href: "mailto:nacp@afya.go.tz?subject=SEAH Report - Confidential",
            contact: "nacp@afya.go.tz",
        },
        {
            title: t("whistleblowing.reporting_channels.phone.title"),
            description: t(
                "whistleblowing.reporting_channels.phone.description"
            ),
            icon: Phone,
            href: "tel:117",
            contact: "117 (Free)",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-red-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-red-100 p-3 rounded-full mr-4">
                            <Shield className="h-8 w-8 text-red-600" />
                        </div>
                        <Badge
                            variant="destructive"
                            className="text-sm font-medium"
                        >
                            {t("whistleblowing.subtitle")}
                        </Badge>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t("whistleblowing.title")}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                        {t("whistleblowing.description")}
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                            <Lock className="h-4 w-4 mr-1" />
                            {t("whistleblowing.features.confidential")}
                        </div>
                        <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {t("whistleblowing.features.anonymous")}
                        </div>
                        <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            {t("whistleblowing.features.professional")}
                        </div>
                    </div>
                </div>

                {/* Quick Action Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {reportingChannels.map((channel, index) => (
                        <Card
                            key={index}
                            className={`transition-all duration-300 ${
                                channel.primary
                                    ? "ring-2 ring-red-200 bg-red-50"
                                    : "hover:shadow-md"
                            }`}
                        >
                            <CardHeader className="text-center pb-4">
                                <div
                                    className={`mx-auto p-3 rounded-full mb-3 ${
                                        channel.primary
                                            ? "bg-red-100"
                                            : "bg-blue-100"
                                    }`}
                                >
                                    <channel.icon
                                        className={`h-6 w-6 ${
                                            channel.primary
                                                ? "text-red-600"
                                                : "text-blue-600"
                                        }`}
                                    />
                                </div>
                                <CardTitle className="text-lg">
                                    {channel.title}
                                </CardTitle>
                                <CardDescription className="text-sm">
                                    {channel.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                {channel.contact && (
                                    <p className="text-sm font-medium text-gray-600 mb-3">
                                        {channel.contact}
                                    </p>
                                )}
                                <Button
                                    asChild
                                    variant={
                                        channel.primary
                                            ? "destructive"
                                            : "outline"
                                    }
                                    className="w-full"
                                >
                                    {channel.href.startsWith("http") ||
                                    channel.href.startsWith("mailto") ||
                                    channel.href.startsWith("tel") ? (
                                        <a
                                            href={channel.href}
                                            target={
                                                channel.href.startsWith("http")
                                                    ? "_blank"
                                                    : undefined
                                            }
                                        >
                                            {channel.primary
                                                ? t(
                                                      "whistleblowing.buttons.report_now"
                                                  )
                                                : "Contact"}
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </a>
                                    ) : (
                                        <Link href={channel.href}>
                                            {channel.primary
                                                ? t(
                                                      "whistleblowing.buttons.report_now"
                                                  )
                                                : "Contact"}
                                        </Link>
                                    )}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Information Section */}
                <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                            {t("whistleblowing.seah_types.title")}
                        </h3>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowDetails(!showDetails)}
                            className="text-blue-600 hover:text-blue-800"
                        >
                            {showDetails ? (
                                <>
                                    <EyeOff className="h-4 w-4 mr-1" />
                                    {t("whistleblowing.buttons.hide_details")}
                                </>
                            ) : (
                                <>
                                    <Eye className="h-4 w-4 mr-1" />
                                    {t("whistleblowing.buttons.show_details")}
                                </>
                            )}
                        </Button>
                    </div>

                    {showDetails && (
                        <div className="space-y-6">
                            {seahTypes.map((item, index) => (
                                <div
                                    key={index}
                                    className="border-l-4 border-gray-200 pl-4"
                                >
                                    <div
                                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${item.color}`}
                                    >
                                        {item.type}
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        {item.description}
                                    </p>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h5 className="font-medium text-gray-900 mb-2">
                                            Examples:
                                        </h5>
                                        <ul className="space-y-1">
                                            {(
                                                t(
                                                    `whistleblowing.seah_types.${item.key}.examples`,
                                                    { returnObjects: true }
                                                ) as string[]
                                            ).map(
                                                (
                                                    example: string,
                                                    exIndex: number
                                                ) => (
                                                    <li
                                                        key={exIndex}
                                                        className="text-sm text-gray-600 flex items-start"
                                                    >
                                                        <span className="text-gray-400 mr-2">
                                                            •
                                                        </span>
                                                        {example}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Commitment Statement */}
                <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-lg p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">
                        {t("whistleblowing.commitment.title")}
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                        {t("whistleblowing.commitment.description")}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                            <Shield className="h-4 w-4 mr-2" />
                            {t(
                                "whistleblowing.commitment.features.safe_reporting"
                            )}
                        </div>
                        <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                            <Lock className="h-4 w-4 mr-2" />
                            {t(
                                "whistleblowing.commitment.features.confidential_process"
                            )}
                        </div>
                        <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                            <Users className="h-4 w-4 mr-2" />
                            {t(
                                "whistleblowing.commitment.features.professional_response"
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhistleblowingModule;
