import { FC, useState, useEffect } from "react";
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
} from "lucide-react";

const NASHCOPHeader: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                { title: "Contact Information", href: "/contact/info" },
                { title: "Feedback & Complaints", href: "/contact/feedback" },
                { title: "Help Desk", href: "/contact/help" },
            ],
        },
    ];

    const toggleDropdown = (title: string) => {
        setActiveDropdown(activeDropdown === title ? null : title);
    };

    const utilityLinks = [
        { label: "HIV Testing Centers", href: "/services/testing" },
        { label: "Treatment Guidelines", href: "/publications/treatment" },
        { label: "Emergency Support", href: "/contact/emergency" },
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
                                        className="hover:underline transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    {isSearchOpen ? (
                                        <div className="flex items-center bg-white/10 rounded-md px-2 py-1">
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                className="bg-transparent text-white placeholder-white/70 text-xs w-32 focus:outline-none focus:w-40 transition-all duration-200"
                                                autoFocus
                                                onBlur={() =>
                                                    setIsSearchOpen(false)
                                                }
                                            />
                                            <Search className="h-3 w-3 text-white/70 ml-1" />
                                        </div>
                                    ) : (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-white hover:text-yellow-300 hover:bg-blue-700 h-auto p-1"
                                            onClick={() =>
                                                setIsSearchOpen(true)
                                            }
                                        >
                                            <Search className="h-3 w-3" />
                                        </Button>
                                    )}
                                </div>

                                <a href="/donate/">
                                    <Button
                                        variant="default"
                                        size="sm"
                                        className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold h-auto px-3 py-1.5 flex items-center space-x-1 shadow-md hover:shadow-lg transition-all duration-200"
                                    >
                                        <HandHeart className="h-3 w-3" />
                                        <span className="text-xs">Donate</span>
                                    </Button>
                                </a>

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-white hover:text-yellow-300 hover:bg-blue-700 h-auto p-1"
                                        >
                                            <span className="text-xs">
                                                Language
                                            </span>
                                            <ChevronDown className="ml-1 h-3 w-3" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                            <a href="#" className="w-full">
                                                English
                                            </a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="#" className="w-full">
                                                Kiswahili
                                            </a>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* Main Header with Background - Sticky */}
            <div className="sticky top-0 z-50">
                <div
                    className={`bg-cover bg-center bg-no-repeat transition-all duration-300 ${
                        isScrolled ? "!h-20" : "!h-38 sm:h-32"
                    }`}
                    style={{ backgroundImage: `url(/images/banner.jpg)` }}
                >
                    <div className="bg-blue-700/70 backdrop-blur-sm h-full">
                        <div className="container mx-auto px-4 py-4 sm:py-6">
                            {/* Logo and title section */}
                            <div
                                className={`flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 transition-all duration-300 ${
                                    isScrolled ? "mb-0" : "mb-4 sm:mb-6"
                                }`}
                            >
                                {/* Left logo - hidden on mobile */}
                                <div className="hidden lg:block">
                                    <img
                                        src="/images/emblem.png"
                                        alt="Tanzania Coat of Arms"
                                        className={`w-auto transition-all duration-300 ${
                                            isScrolled ? "h-10" : "h-12 sm:h-16"
                                        }`}
                                    />
                                </div>

                                {/* Center content */}
                                <div
                                    className={`flex flex-col items-center text-center space-y-2 transition-all duration-300 ${
                                        isScrolled ? "space-y-1" : ""
                                    }`}
                                >
                                    <h1
                                        className={`font-bold text-white leading-tight transition-all duration-300 ${
                                            isScrolled
                                                ? "text-sm sm:text-base"
                                                : "text-lg sm:text-xl lg:text-2xl"
                                        }`}
                                    >
                                        THE UNITED REPUBLIC OF TANZANIA
                                    </h1>
                                    <p
                                        className={`text-white/95 leading-tight max-w-md lg:max-w-none transition-all duration-300 ${
                                            isScrolled
                                                ? "text-xs sm:text-sm"
                                                : "text-sm sm:text-base lg:text-lg"
                                        }`}
                                    >
                                        MINISTRY OF HEALTH
                                    </p>
                                    {!isScrolled && (
                                        <p
                                            className={`text-white/95 leading-tight max-w-md lg:max-w-none transition-all duration-300 ${
                                                isScrolled
                                                    ? "text-xs sm:text-sm"
                                                    : "text-sm sm:text-base lg:text-lg"
                                            }`}
                                        >
                                            NATIONAL AIDS, STIs AND HEPATITIS
                                            CONTROL PROGRAMME
                                        </p>
                                    )}
                                </div>

                                {/* Right logo - hidden on mobile */}
                                <div className="hidden lg:block">
                                    <img
                                        src="/images/logo.jpeg"
                                        alt="NASHCOP Logo"
                                        className={`w-auto transition-all duration-300 ${
                                            isScrolled ? "h-10" : "h-12 sm:h-16"
                                        }`}
                                    />
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
                                        <div className="absolute left-0 mt-2 w-64 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all text-sm">
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
