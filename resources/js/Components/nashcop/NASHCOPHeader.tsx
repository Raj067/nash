import { FC, useState, useEffect } from "react";

// Type declarations for Google Translate
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

const NASHCOPHeader: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState<"en" | "sw">(() => {
        // Get saved language preference or default to 'en'
        if (typeof window !== "undefined") {
            return (
                (localStorage.getItem("nacp_language") as "en" | "sw") || "en"
            );
        }
        return "en";
    });
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Initialize Google Translate
    useEffect(() => {
        const addGoogleTranslateScript = () => {
            // Remove existing script if any
            const existingScript = document.querySelector(
                'script[src*="translate.google.com"]'
            );
            if (existingScript) {
                existingScript.remove();
            }

            // Add CSS to hide Google Translate elements
            const style = document.createElement("style");
            style.textContent = `
                .goog-te-banner-frame.skiptranslate { display: none !important; }
                body { top: 0px !important; }
                .goog-te-balloon-frame { display: none !important; }
                .goog-te-ftab { display: none !important; }
                #google_translate_element { display: none !important; }
                .goog-te-combo { display: none !important; }
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
                }
            };
        };

        // Delay to ensure DOM is ready
        setTimeout(addGoogleTranslateScript, 1000);
    }, []);

    // Apply saved language on page load
    useEffect(() => {
        if (currentLanguage === "sw") {
            // Delay to ensure page is fully loaded
            setTimeout(() => {
                handleLanguageChange("sw");
            }, 2000);
        }
    }, []);

    // Detect current language from Google Translate
    useEffect(() => {
        const detectLanguage = () => {
            const iframe = document.querySelector(
                "iframe.goog-te-banner-frame"
            );
            if (iframe) {
                try {
                    const currentLang = document.documentElement.lang || "en";
                    if (currentLang === "sw" && currentLanguage !== "sw") {
                        setCurrentLanguage("sw");
                    } else if (
                        currentLang === "en" &&
                        currentLanguage !== "en"
                    ) {
                        setCurrentLanguage("en");
                    }
                } catch (e) {
                    // Ignore cross-origin errors
                }
            }
        };

        const interval = setInterval(detectLanguage, 1000);
        return () => clearInterval(interval);
    }, [currentLanguage]);

    const languages = [
        {
            code: "en",
            name: "English",
            flag: "🇺🇸",
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

        // Method 1: Try to trigger Google Translate dropdown
        setTimeout(() => {
            const googleTranslateCombo = document.querySelector(
                ".goog-te-combo"
            ) as HTMLSelectElement;
            if (googleTranslateCombo) {
                googleTranslateCombo.value = langCode;
                googleTranslateCombo.dispatchEvent(
                    new Event("change", { bubbles: true })
                );
                return;
            }

            // Method 2: Try to find and click Google Translate menu items
            const checkForTranslateMenu = () => {
                const menuItems = document.querySelectorAll(
                    ".goog-te-menu2-item"
                );
                for (let item of menuItems) {
                    const span = item.querySelector("span.text");
                    if (span) {
                        const text = span.textContent?.toLowerCase();
                        if (
                            langCode === "sw" &&
                            (text?.includes("swahili") ||
                                text?.includes("kiswahili"))
                        ) {
                            (item as HTMLElement).click();
                            return true;
                        } else if (
                            langCode === "en" &&
                            text?.includes("english")
                        ) {
                            (item as HTMLElement).click();
                            return true;
                        }
                    }
                }
                return false;
            };

            // Try multiple times to find the menu
            let attempts = 0;
            const tryTranslate = () => {
                if (checkForTranslateMenu() || attempts > 10) {
                    return;
                }
                attempts++;
                setTimeout(tryTranslate, 200);
            };

            tryTranslate();
        }, 500);

        // Fallback: Manual translation
        setTimeout(() => {
            if (langCode === "sw") {
                translatePageToSwahili();
            } else {
                revertToEnglish();
            }
        }, 2000);
    };

    // Simple translation fallback
    const translatePageToSwahili = () => {
        const translations: { [key: string]: string } = {
            // Navigation
            Home: "Nyumbani",
            "Who We Are": "Sisi ni Nani",
            Services: "Huduma",
            Interventions: "Mipango",
            Publications: "Machapisho",
            Contact: "Mawasiliano",
            Search: "Tafuta",
            Support: "Msaada",
            Language: "Lugha",

            // Languages
            English: "Kiingereza",
            Kiswahili: "Kiswahili",

            // Header links
            "HIV Testing Centers": "Vituo vya Upimaji wa VVU",
            "Prevention Programs": "Mipango ya Kuzuia",
            "Emergency Hotline": "Simu ya Dharura",

            // Common terms
            About: "Kuhusu",
            "About Us": "Kuhusu Sisi",
            "Our Mission": "Dhamira Yetu",
            "Our Vision": "Maono Yetu",
            "HIV/AIDS": "VVU/UKIMWI",
            "National AIDS Control Programme":
                "Mpango wa Kitaifa wa Kudhibiti UKIMWI",
            NACP: "NACP",
            Tanzania: "Tanzania",

            // Page titles
            "Organization Structure": "Muundo wa Shirika",
            "HIV/AIDS in Tanzania": "VVU/UKIMWI Tanzania",
            "Care, Treatment & Support": "Huduma, Matibabu na Msaada",
            "Division of Prevention": "Idara ya Kuzuia",
            "NACP Roles & Responsibilities": "Majukumu na Wajibu wa NACP",

            // Buttons and actions
            "Read More": "Soma Zaidi",
            "Learn More": "Jifunze Zaidi",
            "Get Started": "Anza",
            "Contact Us": "Wasiliana Nasi",
            Download: "Pakua",
            "View All": "Ona Zote",

            // Common phrases
            "Welcome to": "Karibu",
            "Latest News": "Habari za Hivi Karibuni",
            "Our Programs": "Mipango Yetu",
            "Key Statistics": "Takwimu Muhimu",
            "Quick Links": "Viungo vya Haraka",
        };

        // Store original content
        if (!document.body.dataset.originalLang) {
            document.body.dataset.originalLang = "en";
            document.body.dataset.originalContent = document.body.innerHTML;
        }

        // More targeted text replacement to avoid breaking React components
        const translateTextNodes = (node: Node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                let text = node.textContent || "";
                Object.entries(translations).forEach(([en, sw]) => {
                    const regex = new RegExp(`\\b${en}\\b`, "g");
                    text = text.replace(regex, sw);
                });
                if (node.textContent !== text) {
                    node.textContent = text;
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                // Skip script tags, style tags, and React-specific elements
                if (
                    !["SCRIPT", "STYLE", "NOSCRIPT"].includes(
                        element.tagName
                    ) &&
                    !element.hasAttribute("data-reactroot")
                ) {
                    Array.from(node.childNodes).forEach(translateTextNodes);
                }
            }
        };

        translateTextNodes(document.body);
        document.documentElement.lang = "sw";
    };

    const revertToEnglish = () => {
        if (document.body.dataset.originalContent) {
            document.body.innerHTML = document.body.dataset.originalContent;
            document.documentElement.lang = "en";
        }
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

    const navigationItems = [
        {
            title: "Home",
            href: "/",
            icon: null,
        },
        {
            title: "Who We Are",
            href: "/about",
            icon: Users,
            dropdown: [
                { title: "About Us", href: "/about/about-us" },
                {
                    title: "HIV/AIDS in Tanzania",
                    href: "/about/hiv-aids-tanzania",
                },
                {
                    title: "NASHCOP Organisation Structure",
                    href: "/about/structure",
                },
            ],
        },
        {
            title: "What We Do",
            href: "/services",
            icon: Heart,
            dropdown: [
                {
                    title: "NASHCOP Roles & Responsibilities",
                    href: "/services/nacp-roles-and-responsibilities",
                },
                {
                    title: "Division of Prevention",
                    href: "/services/division-of-prevention",
                },
                {
                    title: "Care, Treatment & Support Unit",
                    href: "/services/care-treatment-and-support-unit",
                },
                {
                    title: "Strategic Information Unit",
                    href: "/services/strategic-information-unit",
                },
                {
                    title: "Pharmaceuticals & Laboratory Services",
                    href: "/services/division-of-pharmaceuticals-and-laboratory-services",
                },
                {
                    title: "National Strategic Plan 90-90-90",
                    href: "/services/national-strategic-plan-on-90-90-90",
                },
            ],
        },
        {
            title: "Interventions",
            href: "/interventions",
            icon: Shield,
            dropdown: [
                {
                    title: "HIV Testing Services & Linkage",
                    href: "/interventions/hiv-testing-services-linkage",
                },
                {
                    title: "Prevention of New HIV Infection",
                    href: "/interventions/prevention-new-hiv-infection",
                },
                {
                    title: "Building Resilient Health Systems",
                    href: "/interventions/building-resilient-health-systems",
                },
                {
                    title: "Decentralized HIV Care & Treatment",
                    href: "/interventions/decentralized-hiv-care-treatment",
                },
                {
                    title: "Cross-Sector HIV Interventions",
                    href: "/interventions/cross-sector-hiv-interventions",
                },
            ],
        },
        {
            title: "Resources",
            href: "/resources",
            icon: FileText,
            dropdown: [
                {
                    title: "Strategic Framework & Policies",
                    href: "/resources/strategic-framework",
                },
                { title: "Guidelines", href: "/resources/guidelines" },
                { title: "Databases", href: "/resources/databases" },
                { title: "SOP & Manuals", href: "/resources/sop-manuals" },
            ],
        },
        {
            title: "News & Media",
            href: "/news",
            icon: Newspaper,
            dropdown: [
                { title: "Press Releases", href: "/news/press-releases" },
                { title: "Speeches", href: "/news/speeches" },
                { title: "Photo Gallery", href: "/news/photo-gallery" },
                { title: "Video Library", href: "/news/video-library" },
            ],
        },
        {
            title: "Contact & Support",
            href: "/contact",
            icon: MessageCircle,
            dropdown: [
                { title: "Office Locations", href: "/contact/locations" },
                // { title: "Contact Information", href: "/contact/info" },
                { title: "Feedback & Complaints", href: "/contact/feedback" },
                { title: "Help Desk", href: "/contact/help" },
            ],
        },
    ];

    const toggleDropdown = (title: string) => {
        setActiveDropdown(activeDropdown === title ? null : title);
    };

    const utilityLinks = [
        {
            label: "Emergency HIV Hotline: 199",
            href: "tel:199",
        },
        {
            label: "info@nacp.go.tz",
            href: "mailto:info@nacp.go.tz",
        },
    ];

    return (
        <>
            {
                <div className="bg-blue-800 text-white text-xs sm:text-sm py-1">
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
                                                placeholder="Search NACP..."
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
                                            aria-label="Open search"
                                        >
                                            <Search className="h-3 w-3" />
                                        </Button>
                                    )}
                                </div>

                                {/* Donate Button */}
                                <a
                                    href="/support-nacp"
                                    aria-label="Support NACP"
                                >
                                    <Button
                                        variant="default"
                                        size="sm"
                                        className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold h-auto px-3 py-1.5 flex items-center space-x-1 shadow-md hover:shadow-lg transition-all duration-200"
                                    >
                                        <HandHeart className="h-3 w-3" />
                                        <span className="text-xs">Support</span>
                                    </Button>
                                </a>

                                {/* Language Selector */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-white hover:text-yellow-300 hover:bg-blue-700 h-auto px-2 py-1 flex items-center space-x-1"
                                            aria-label="Select language"
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
            <div className="sticky top-0 z-50">
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
                                        THE UNITED REPUBLIC OF TANZANIA
                                    </h1>
                                    <p className="text-white/95 leading-tight max-w-md lg:max-w-none text-sm sm:text-base">
                                        MINISTRY OF HEALTH
                                    </p>
                                    <p className="text-white/95 leading-tight max-w-md lg:max-w-none text-sm sm:text-base">
                                        NATIONAL AIDS, STIs AND HEPATITIS
                                        CONTROL PROGRAMME
                                    </p>
                                </div>

                                {/* Right logo - hidden on mobile */}
                                <div className="hidden lg:block">
                                    <a href="/" className="">
                                        <img
                                            src="/images/logo.jpeg"
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
                    <span>Emergency HIV Hotline: 199</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>info@nacp.go.tz</span>
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
                                <div
                                    key={item.title}
                                    className="relative group"
                                >
                                    <a href={item.href || "#"}>
                                        <Button
                                            variant="ghost"
                                            className="flex items-center space-x-1 px-3 py-2 text-blue-800 hover:text-blue-600 hover:bg-blue-50 text-sm font-medium"
                                        >
                                            {item.icon && (
                                                <item.icon className="h-4 w-4" />
                                            )}
                                            {item.title}
                                            {item.dropdown && (
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            )}
                                        </Button>
                                    </a>
                                    {item.dropdown && (
                                        <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all text-sm">
                                            {item.dropdown.map((sub) => (
                                                <a
                                                    key={sub.title}
                                                    href={sub.href}
                                                    className="block px-4 py-2 hover:bg-custom-red hover:text-white"
                                                >
                                                    {sub.title}
                                                </a>
                                            ))}
                                        </div>
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
                                                                <a
                                                                    key={
                                                                        subItem.title
                                                                    }
                                                                    href={
                                                                        subItem.href
                                                                    }
                                                                    className="block py-2 text-sm text-blue-700 hover:text-blue-600 transition-colors"
                                                                >
                                                                    {
                                                                        subItem.title
                                                                    }
                                                                </a>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                        </div>
                                    ))}
                                </nav>
                            </div>
                        )}

                        {/* Quick Access Bar - Only show when not scrolled */}
                        {/* {!isScrolled && (
            <div className="border-t border-blue-100 py-2 bg-yellow-50">
              <div className="flex flex-wrap items-center justify-center space-x-4 text-sm">
                <a
                  href="/services/testing"
                  className="text-blue-700 hover:text-blue-900 font-medium"
                >
                  🧪 HIV Testing Centers
                </a>
                <span className="text-blue-300">|</span>
                <a
                  href="/services/treatment"
                  className="text-blue-700 hover:text-blue-900 font-medium"
                >
                  💊 ART Treatment
                </a>
                <span className="text-blue-300">|</span>
                <a
                  href="/services/prevention"
                  className="text-blue-700 hover:text-blue-900 font-medium"
                >
                  🛡️ Prevention Programs
                </a>
                <span className="text-blue-300">|</span>
                <a
                  href="/publications/statistics"
                  className="text-blue-700 hover:text-blue-900 font-medium"
                >
                  📊 HIV Statistics
                </a>
                <span className="text-blue-300">|</span>
                <a
                  href="/contact/help"
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  🆘 Get Help Now
                </a>
              </div>
            </div>
          )} */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NASHCOPHeader;
