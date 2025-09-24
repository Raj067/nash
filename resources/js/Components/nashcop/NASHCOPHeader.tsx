import React, { FC, useState, useEffect } from "react";
import { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

// Google Translate declarations
declare global {
    interface Window {
        google?: {
            translate: {
                TranslateElement: {
                    new (options: any, elementId: string): any;
                    InlineLayout: {
                        SIMPLE: any;
                    };
                };
            };
        };
        googleTranslateElementInit?: () => void;
    }
}
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    Menu,
    X,
    ChevronDown,
    Search,
    Phone,
    Mail,
    MapPin,
    Heart,
    Shield,
    Users,
    FileText,
    Newspaper,
    MessageCircle,
    HandHeart,
    Globe,
} from "lucide-react";

// Type definitions for navigation
interface NavigationItem {
    title: string;
    href?: string;
    icon?: LucideIcon;
    dropdown?: NavigationItem[];
}

const NASHCOPHeader: FC = () => {
    const { t } = useTranslation("common");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeNestedDropdown, setActiveNestedDropdown] = useState<
        string | null
    >(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState<"en" | "sw">(() => {
        // Get saved language preference or default to 'sw' (Swahili)
        if (typeof window !== "undefined") {
            return (
                (localStorage.getItem("nacp_language") as "en" | "sw") || "sw"
            );
        }
        return "sw";
    });

    const [searchQuery, setSearchQuery] = useState("");

    // Function to trigger Google Translate programmatically
    const triggerGoogleTranslate = (langCode: string) => {
        // Method 1: Try to find and trigger the Google Translate dropdown
        const checkForTranslateElements = () => {
            const combo = document.querySelector(
                ".goog-te-combo"
            ) as HTMLSelectElement;
            if (combo) {
                combo.value = langCode;
                combo.dispatchEvent(new Event("change", { bubbles: true }));
                return true;
            }

            // Method 2: Try to find Google Translate menu items
            const menuItems = document.querySelectorAll(".goog-te-menu2-item");
            for (let item of menuItems) {
                const span = item.querySelector("span.text");
                if (span) {
                    const text = span.textContent?.toLowerCase();
                    if (
                        (langCode === "sw" &&
                            (text?.includes("swahili") ||
                                text?.includes("kiswahili"))) ||
                        (langCode === "en" && text?.includes("english"))
                    ) {
                        (item as HTMLElement).click();
                        return true;
                    }
                }
            }
            return false;
        };

        // Try multiple times to find the translation elements
        let attempts = 0;
        const tryTranslate = () => {
            if (checkForTranslateElements() || attempts > 20) {
                return;
            }
            attempts++;
            setTimeout(tryTranslate, 200);
        };

        tryTranslate();
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Initialize Google Translate
    useEffect(() => {
        const initializeGoogleTranslate = () => {
            // Remove existing Google Translate elements
            const existingScript = document.querySelector(
                'script[src*="translate.google.com"]'
            );
            if (existingScript) {
                existingScript.remove();
            }

            // Add CSS to hide Google Translate UI elements
            const style = document.createElement("style");
            style.textContent = `
                .goog-te-banner-frame.skiptranslate { display: none !important; }
                body { top: 0px !important; }
                .goog-te-balloon-frame { display: none !important; }
                .goog-te-ftab { display: none !important; }
                #google_translate_element { display: none !important; }
                .goog-te-combo { display: none !important; }
                .goog-te-menu-value { display: none !important; }
                .goog-te-gadget { display: none !important; }
                .goog-te-gadget-simple { display: none !important; }
                .goog-te-menu-frame { display: none !important; }
            `;
            document.head.appendChild(style);

            // Add Google Translate script
            const script = document.createElement("script");
            script.src =
                "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.head.appendChild(script);

            // Initialize Google Translate
            window.googleTranslateElementInit = () => {
                if (window.google?.translate) {
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: "en",
                            includedLanguages: "en,sw",
                            layout: window.google.translate.TranslateElement
                                .InlineLayout.SIMPLE,
                            autoDisplay: false,
                            multilanguagePage: true,
                        },
                        "google_translate_element"
                    );

                    // Auto-translate to Swahili on load if that's the current language
                    setTimeout(() => {
                        if (currentLanguage === "sw") {
                            triggerGoogleTranslate("sw");
                        }
                    }, 1000);
                }
            };
        };

        // Delay initialization to ensure DOM is ready
        setTimeout(initializeGoogleTranslate, 1000);
    }, []);

    // Apply language changes
    useEffect(() => {
        // Update document language
        document.documentElement.lang = currentLanguage;

        // Trigger custom event for other components to listen to
        window.dispatchEvent(
            new CustomEvent("languageChanged", {
                detail: { language: currentLanguage },
            })
        );

        // Store language context globally
        (window as any).translationContext = {
            currentLanguage,
            setLanguage: handleLanguageChange,
        };
    }, [currentLanguage]);

    // Apply saved language on page load and auto-translate
    useEffect(() => {
        const savedLang = localStorage.getItem("nacp_language") as "en" | "sw";
        if (savedLang && savedLang !== currentLanguage) {
            setCurrentLanguage(savedLang);
        }

        // Auto-translate to current language after Google Translate loads
        const autoTranslate = () => {
            if (currentLanguage === "sw") {
                setTimeout(() => {
                    triggerGoogleTranslate("sw");
                }, 2000);
            }
        };

        // Wait for Google Translate to be ready
        if (window.google?.translate) {
            autoTranslate();
        } else {
            // Wait for Google Translate to load
            setTimeout(autoTranslate, 3000);
        }
    }, []);

    const languages = [
        {
            code: "en",
            name: "English",
            flag: "🇬🇧",
        },
        {
            code: "sw",
            name: "Kiswahili",
            flag: "🇹🇿",
        },
    ];

    const handleLanguageChange = (langCode: "en" | "sw") => {
        setCurrentLanguage(langCode);

        // Store language preference
        localStorage.setItem("nacp_language", langCode);

        // Change i18next language
        i18n.changeLanguage(langCode);

        // Smooth transition effect
        document.body.style.transition = "opacity 0.3s ease";
        document.body.style.opacity = "0.9";

        // Use Google Translate to translate the entire page
        setTimeout(() => {
            const googleTranslateCombo = document.querySelector(
                ".goog-te-combo"
            ) as HTMLSelectElement;
            if (googleTranslateCombo) {
                googleTranslateCombo.value = langCode;
                googleTranslateCombo.dispatchEvent(
                    new Event("change", { bubbles: true })
                );
            } else {
                // Fallback: Try to trigger translation via Google Translate API
                triggerGoogleTranslate(langCode);
            }

            setTimeout(() => {
                document.body.style.opacity = "1";
            }, 500);
        }, 300);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Redirect to search results page
            window.location.href = `/search?q=${encodeURIComponent(
                searchQuery.trim()
            )}`;
        }
    };

    const navigationItems: NavigationItem[] = [
        {
            title: t("header.navigation.home"),
            href: "/",
        },
        {
            title: t("header.navigation.about"),
            href: "/about/about-us",
            icon: Users,
            dropdown: [
                {
                    title: t("header.navigation.historical_background"),
                    href: "/about/about-us#historical-background",
                },
                {
                    title: t("header.navigation.hiv_aids_tanzania"),
                    href: "/about/hiv-aids-tanzania",
                },
                {
                    title: t("header.navigation.programme_manager_statement"),
                    href: "/#programme-manager-statement",
                },
                {
                    title: t("header.navigation.mission_vision"),
                    href: "/about/about-us#mission-vision",
                },
                {
                    title: t("header.navigation.goals_functions"),
                    href: "/about/about-us#goals-functions",
                },
                {
                    title: t("header.navigation.core_values"),
                    href: "/about/about-us#core-values",
                },
                {
                    title: t("header.navigation.structure"),
                    href: "/about/structure",
                },
            ],
        },
        {
            title: t("header.navigation.programme_areas"),
            href: "/programme-areas",
            icon: Heart,
            dropdown: [
                {
                    title: t("header.navigation.management_coordination"),
                    href: "/programme-areas/management-coordination",
                },
                {
                    title: t("header.navigation.prevention"),
                    href: "/programme-areas/prevention",
                    dropdown: [
                        {
                            title: "HIV Testing Services",
                            href: "/interventions/hiv-testing-services-linkage",
                        },
                        {
                            title: "Voluntary Medical Male Circumcision (VMMC)",
                            href: "/programme-areas/prevention/vmmc",
                        },
                        {
                            title: "Social Behaviour Change Communication (SBCC)",
                            href: "/programme-areas/prevention/sbcc",
                        },
                        {
                            title: "Condom Promotion and Distribution",
                            href: "/programme-areas/prevention/condoms",
                        },
                        {
                            title: "Prevention of Vertical Transmission (PMTCT)",
                            href: "/programme-areas/prevention/pmtct",
                        },
                        {
                            title: "Pre-Exposure Prophylaxis (PrEP)",
                            href: "/programme-areas/prevention/prep",
                        },
                        {
                            title: "Key and Vulnerable Populations (KVP)",
                            href: "/programme-areas/prevention/kvp",
                        },
                    ],
                },
                {
                    title: t("header.navigation.care_treatment_support"),
                    href: "/programme-areas/care-treatment-support",
                    dropdown: [
                        {
                            title: "Community Based HIV and AIDS Services",
                            href: "/programme-areas/care-treatment-support/community-services",
                        },
                        {
                            title: "TB/HIV Co-infection",
                            href: "/programme-areas/care-treatment-support/tb-hiv",
                        },
                        {
                            title: "Viral Hepatitis and Co-infections",
                            href: "/programme-areas/care-treatment-support/viral-hepatitis",
                        },
                        {
                            title: "Integrated Management of NCDs in HIV",
                            href: "/programme-areas/care-treatment-support/ncd-integration",
                        },
                        {
                            title: "Integration of Mental Health Services",
                            href: "/programme-areas/care-treatment-support/mental-health",
                        },
                    ],
                },
                {
                    title: t("header.navigation.monitoring_evaluation"),
                    href: "/programme-areas/monitoring-evaluation",
                    dropdown: [
                        {
                            title: "HIV Research",
                            href: "/programme-areas/monitoring-evaluation/research",
                        },
                        {
                            title: "HIV Surveillance",
                            href: "/programme-areas/monitoring-evaluation/surveillance",
                        },
                        {
                            title: "Health Information Systems (HIS)",
                            href: "/programme-areas/monitoring-evaluation/his",
                        },
                    ],
                },
                {
                    title: t("header.navigation.pharmaceuticals_laboratory"),
                    href: "/programme-areas/pharmaceuticals-laboratory",
                    dropdown: [
                        {
                            title: "Supply Chain Management and Rational",
                            href: "/programme-areas/pharmaceuticals-laboratory/supply-chain",
                        },
                        {
                            title: "HIV and AIDS Laboratory Services",
                            href: "/programme-areas/pharmaceuticals-laboratory/laboratory-services",
                        },
                    ],
                },
            ],
        },
        {
            title: t("header.navigation.resources"),
            href: "/resources",
            icon: FileText,
            dropdown: [
                {
                    title: "Strategic Framework & Policies",
                    href: "/resources/strategic-framework",
                },
                { title: "Guidelines", href: "/resources/guidelines" },
                {
                    title: "Policy Documents",
                    href: "/resources/policy-documents",
                },
                { title: "Reports", href: "/resources/reports" },
                { title: "SOP & Manuals", href: "/resources/sop-manuals" },
                {
                    title: "IEC/SBC Materials",
                    href: "/resources/iec-materials",
                },
                { title: "Databases", href: "/resources/databases" },
            ],
        },
        {
            title: t("header.navigation.media"),
            href: "/news",
            icon: Newspaper,
            dropdown: [
                { title: "News", href: "/news" },
                { title: "Press Releases", href: "/news/press-releases" },
                { title: "Speeches", href: "/news/speeches" },
                { title: "NASHCOP Events", href: "/news/events" },
                { title: "Newsletter", href: "/news/newsletter" },
                { title: "Photo Gallery", href: "/news/photo-gallery" },
                { title: "Video Library", href: "/news/video-library" },
            ],
        },
        {
            title: t("header.navigation.contact"),
            href: "/contact/locations",
            icon: MessageCircle,
            dropdown: [
                { title: "Office Locations", href: "/contact/locations" },
                // { title: "Contact Information", href: "/contact/info" },
                { title: "Feedback & Complaints", href: "/contact/feedback" },
                // { title: "Help Desk", href: "/contact/help" },
            ],
        },
    ];

    const toggleDropdown = (title: string) => {
        setActiveDropdown(activeDropdown === title ? null : title);
        setActiveNestedDropdown(null); // Close nested when parent changes
    };

    const toggleNestedDropdown = (title: string) => {
        setActiveNestedDropdown(activeNestedDropdown === title ? null : title);
    };

    const utilityLinks = [
        {
            label: t("header.emergency_hotline"),
            href: "tel:117",
        },
        {
            label: t("header.email_contact"),
            href: "mailto:nacp@afya.go.tz",
        },
    ];

    return (
        <>
            {
                <div className="bg-blue-800 text-white text-xs sm:text-sm py-1 notranslate">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-1 sm:space-y-0">
                            <div className="hidden md:flex space-x-4">
                                {utilityLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="hover:underline transition-colors text-xs flex items-center space-x-1"
                                        {...(link.href.startsWith("tel:")
                                            ? {
                                                  "aria-label":
                                                      "Emergency Hotline",
                                              }
                                            : link.href.startsWith("mailto:")
                                            ? {
                                                  "aria-label": "Email Contact",
                                              }
                                            : {})}
                                    >
                                        {link.href.startsWith("tel:") && (
                                            <Phone className="h-3 w-3" />
                                        )}
                                        {link.href.startsWith("mailto:") && (
                                            <Mail className="h-3 w-3" />
                                        )}
                                        <span>{link.label}</span>
                                    </a>
                                ))}
                            </div>

                            <div className="flex items-center space-x-3">
                                {/* Search */}
                                <div className="relative">
                                    {isSearchOpen ? (
                                        <form
                                            onSubmit={handleSearch}
                                            className="flex items-center bg-white/10 rounded-md px-2 py-1"
                                        >
                                            <input
                                                type="text"
                                                placeholder={t(
                                                    "header.search_placeholder"
                                                )}
                                                value={searchQuery}
                                                onChange={(e) =>
                                                    setSearchQuery(
                                                        e.target.value
                                                    )
                                                }
                                                className="bg-transparent text-white placeholder-white/70 text-xs w-32 focus:outline-none focus:w-40 transition-all duration-200"
                                                autoFocus
                                                onBlur={(e) => {
                                                    // Only close if not clicking submit
                                                    setTimeout(
                                                        () =>
                                                            setIsSearchOpen(
                                                                false
                                                            ),
                                                        150
                                                    );
                                                }}
                                            />
                                            <button
                                                type="submit"
                                                className="ml-1"
                                            >
                                                <Search className="h-3 w-3 text-white/70 hover:text-white" />
                                            </button>
                                        </form>
                                    ) : (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-white hover:text-yellow-300 hover:bg-blue-700 h-auto p-1"
                                            onClick={() =>
                                                setIsSearchOpen(true)
                                            }
                                            aria-label={t("header.open_search")}
                                        >
                                            <Search className="h-3 w-3" />
                                        </Button>
                                    )}
                                </div>

                                {/* Donate Button */}
                                <a
                                    href="/support-nacp"
                                    aria-label={t("header.support_nacp")}
                                >
                                    <Button
                                        variant="default"
                                        size="sm"
                                        className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold h-auto px-3 py-1.5 flex items-center space-x-1 shadow-md hover:shadow-lg transition-all duration-200"
                                    >
                                        <HandHeart className="h-3 w-3" />
                                        <span className="text-xs">
                                            {t("header.donate")}
                                        </span>
                                    </Button>
                                </a>

                                {/* Language Selector */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-white hover:text-yellow-300 hover:bg-blue-700 h-auto px-2 py-1 flex items-center space-x-1"
                                            aria-label={t(
                                                "header.select_language"
                                            )}
                                        >
                                            <span className="text-sm">
                                                {
                                                    languages.find(
                                                        (lang) =>
                                                            lang.code ===
                                                            currentLanguage
                                                    )?.flag
                                                }
                                            </span>
                                            <span className="text-xs hidden sm:inline">
                                                {languages
                                                    .find(
                                                        (lang) =>
                                                            lang.code ===
                                                            currentLanguage
                                                    )
                                                    ?.code.toUpperCase()}
                                            </span>
                                            <ChevronDown className="h-3 w-3" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="min-w-[140px]"
                                    >
                                        {languages.map((language) => (
                                            <DropdownMenuItem
                                                key={language.code}
                                                onClick={() =>
                                                    handleLanguageChange(
                                                        language.code as
                                                            | "en"
                                                            | "sw"
                                                    )
                                                }
                                                className={`flex items-center space-x-2 cursor-pointer ${
                                                    currentLanguage ===
                                                    language.code
                                                        ? "bg-blue-50 font-medium"
                                                        : ""
                                                }`}
                                            >
                                                <span className="text-lg">
                                                    {language.flag}
                                                </span>
                                                <span className="text-sm">
                                                    {language.name}
                                                </span>
                                                {currentLanguage ===
                                                    language.code && (
                                                    <div className="w-2 h-2 bg-blue-600 rounded-full ml-auto"></div>
                                                )}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                {/* Hidden Google Translate Element */}
                                <div
                                    id="google_translate_element"
                                    className="hidden"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* Main Header with Background - Sticky */}
            <div className="sticky top-0 z-50 notranslate">
                <div
                    className="bg-cover bg-center bg-no-repeat h-36 sm:h-28"
                    style={{ backgroundImage: `url(/images/banner.jpg)` }}
                >
                    <div className="bg-black/70 backdrop-blur-sm h-full">
                        <div className="container mx-auto px-4 py-2 sm:py-4">
                            {/* Logo and title section */}
                            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 mb-4 sm:mb-6">
                                {/* Left logo - hidden on mobile */}
                                <div className="hidden lg:block">
                                    <a href="/" className="">
                                        <img
                                            src="/images/emblem.png"
                                            alt="Tanzania Coat of Arms"
                                            className="w-auto h-12 sm:h-16"
                                        />
                                    </a>
                                </div>

                                {/* Center content */}
                                <div className="flex flex-col items-center text-center space-y-0">
                                    <h1 className="font-bold text-white leading-tight text-lg sm:text-lg">
                                        {t("header.tanzania_republic")}
                                    </h1>
                                    <p className="text-white/95 leading-tight max-w-md lg:max-w-none text-sm sm:text-base">
                                        {t("header.ministry_health")}
                                    </p>
                                    <p className="text-white/95 leading-tight max-w-md lg:max-w-none text-sm sm:text-base">
                                        {t("header.nashcop_full")}
                                    </p>
                                </div>

                                {/* Right logo - hidden on mobile */}
                                <div className="hidden lg:block">
                                    <a href="/" className="">
                                        <img
                                            src="/images/NASHCOP LOGO.png"
                                            alt="NASHCOP Logo"
                                            className="w-auto h-12 sm:h-16"
                                        />
                                    </a>
                                </div>

                                {/* Mobile menu button */}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="lg:hidden text-white hover:bg-white/20"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    {isMenuOpen ? (
                                        <X className="h-6 w-6" />
                                    ) : (
                                        <Menu className="h-6 w-6" />
                                    )}
                                </Button>
                            </div>

                            {/* Emergency Contact Bar - Only show when not scrolled */}
                            {/* {!isScrolled && (
              <div className="text-center text-white/90 text-sm space-y-1">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Emergency HIV Hotline: 117</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>nacp@afya.go.tz </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Dar es Salaam, Tanzania</span>
                  </div>
                </div>
              </div>
            )} */}
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation Bar - Sticky */}
                <div className="bg-white border-t border-blue-200 shadow-lg  zoom-in-90 transition-all duration-300">
                    <div className="container mx-auto px-4">
                        {/* Desktop Navigation */}
                        {/* <div className="h-4"></div> */}
                        {/* <nav className="hidden lg:flex items-center justify-center space-x-1 py-2">
                        {navigationItems.map((item) => (
                            <div key={item.title} className="relative group">
                                <Button
                                    variant="ghost"
                                    className="flex items-center space-x-1 px-3 py-2 text-blue-800 hover:text-blue-600 hover:bg-blue-50 text-sm font-medium"
                                    onClick={() =>
                                        item.dropdown &&
                                        toggleDropdown(item.title)
                                    }
                                >
                                    {item.icon && (
                                        <item.icon className="h-4 w-4" />
                                    )}
                                    <span>{item.title}</span>
                                    {item.dropdown && (
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    )}
                                </Button>

                                {item.dropdown && (
                                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-blue-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <div className="py-2">
                                            {item.dropdown.map((subItem) => (
                                                <a
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                >
                                                    {subItem.title}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav> */}
                        <nav className="hidden lg:flex items-center justify-center space-x-1 py-2">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    {item.dropdown ? (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    className="flex items-center space-x-1 px-3 py-2 text-blue-800 hover:text-blue-600 hover:bg-blue-50 text-sm font-medium active:border-none hover:border-none selection:border-none focus:border-none focus:outline-none"
                                                >
                                                    {item.icon && (
                                                        <item.icon className="h-4 w-4" />
                                                    )}
                                                    {item.title}
                                                    <ChevronDown className="ml-1 h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-64">
                                                {item.dropdown.map(
                                                    (subItem) => (
                                                        <div
                                                            key={subItem.title}
                                                        >
                                                            {subItem.dropdown ? (
                                                                <DropdownMenuSub>
                                                                    <DropdownMenuSubTrigger>
                                                                        {
                                                                            subItem.title
                                                                        }
                                                                    </DropdownMenuSubTrigger>
                                                                    <DropdownMenuSubContent className="w-64">
                                                                        {subItem.dropdown.map(
                                                                            (
                                                                                nestedItem
                                                                            ) => (
                                                                                <DropdownMenuItem
                                                                                    key={
                                                                                        nestedItem.title
                                                                                    }
                                                                                    asChild
                                                                                >
                                                                                    <a
                                                                                        href={
                                                                                            nestedItem.href
                                                                                        }
                                                                                        className="w-full cursor-pointer"
                                                                                    >
                                                                                        {
                                                                                            nestedItem.title
                                                                                        }
                                                                                    </a>
                                                                                </DropdownMenuItem>
                                                                            )
                                                                        )}
                                                                    </DropdownMenuSubContent>
                                                                </DropdownMenuSub>
                                                            ) : (
                                                                <DropdownMenuItem
                                                                    asChild
                                                                >
                                                                    <a
                                                                        href={
                                                                            subItem.href
                                                                        }
                                                                        className="w-full cursor-pointer"
                                                                    >
                                                                        {
                                                                            subItem.title
                                                                        }
                                                                    </a>
                                                                </DropdownMenuItem>
                                                            )}
                                                        </div>
                                                    )
                                                )}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <a href={item.href || "#"}>
                                            <Button
                                                variant="ghost"
                                                className="flex items-center space-x-1 px-3 py-2 text-blue-800 hover:text-blue-600 hover:bg-blue-50 text-sm font-medium"
                                            >
                                                {item.icon && (
                                                    <item.icon className="h-4 w-4" />
                                                )}
                                                {item.title}
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Navigation */}
                        {isMenuOpen && (
                            <div className="lg:hidden bg-white border-t border-blue-200">
                                <nav className="py-4">
                                    {navigationItems.map((item) => (
                                        <div key={item.title} className="mb-2">
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-between text-left px-0 py-2 text-blue-800 hover:text-blue-600"
                                                onClick={() =>
                                                    item.dropdown &&
                                                    toggleDropdown(item.title)
                                                }
                                            >
                                                <div className="flex items-center space-x-2">
                                                    {item.icon && (
                                                        <item.icon className="h-4 w-4" />
                                                    )}
                                                    <span>{item.title}</span>
                                                </div>
                                                {item.dropdown && (
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${
                                                            activeDropdown ===
                                                            item.title
                                                                ? "rotate-180"
                                                                : ""
                                                        }`}
                                                    />
                                                )}
                                            </Button>

                                            {/* Mobile Dropdown */}
                                            {item.dropdown &&
                                                activeDropdown ===
                                                    item.title && (
                                                    <div className="ml-6 mt-2 space-y-1">
                                                        {item.dropdown.map(
                                                            (subItem) => (
                                                                <div
                                                                    key={
                                                                        subItem.title
                                                                    }
                                                                >
                                                                    {subItem.dropdown ? (
                                                                        <div>
                                                                            <Button
                                                                                variant="ghost"
                                                                                className="w-full justify-between text-left px-0 py-2 text-sm text-blue-700 hover:text-blue-600"
                                                                                onClick={() =>
                                                                                    toggleNestedDropdown(
                                                                                        subItem.title
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span>
                                                                                    {
                                                                                        subItem.title
                                                                                    }
                                                                                </span>
                                                                                <ChevronDown
                                                                                    className={`h-3 w-3 transition-transform ${
                                                                                        activeNestedDropdown ===
                                                                                        subItem.title
                                                                                            ? "rotate-180"
                                                                                            : ""
                                                                                    }`}
                                                                                />
                                                                            </Button>
                                                                            {activeNestedDropdown ===
                                                                                subItem.title && (
                                                                                <div className="ml-4 mt-1 space-y-1">
                                                                                    {subItem.dropdown.map(
                                                                                        (
                                                                                            nestedItem
                                                                                        ) => (
                                                                                            <a
                                                                                                key={
                                                                                                    nestedItem.title
                                                                                                }
                                                                                                href={
                                                                                                    nestedItem.href
                                                                                                }
                                                                                                className="block py-1 text-xs text-blue-600 hover:text-blue-500 transition-colors"
                                                                                            >
                                                                                                {
                                                                                                    nestedItem.title
                                                                                                }
                                                                                            </a>
                                                                                        )
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ) : (
                                                                        <a
                                                                            href={
                                                                                subItem.href
                                                                            }
                                                                            className="block py-2 text-sm text-blue-700 hover:text-blue-600 transition-colors"
                                                                        >
                                                                            {
                                                                                subItem.title
                                                                            }
                                                                        </a>
                                                                    )}
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                        </div>
                                    ))}
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Hidden Google Translate Element */}
            {/* <div
                id="google_translate_element"
                style={{ display: "none" }}
            ></div> */}
        </>
    );
};

export default NASHCOPHeader;
