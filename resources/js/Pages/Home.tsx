import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Link } from "@inertiajs/react";
import { Shield, Phone, Users, FileText, ArrowRight } from "lucide-react";
import Herosection from "./Home/Herosection";
import FeaturedServiceWidget from "./Home/FeaturedServiceWidget";
import HomeStatisticsPage from "./Home/HomeStatisticsPage";
import FaqsWidgets from "./Home/FaqsWidgets";
import RecentNews from "./Home/RecentNews";
import ImportantDocumentsWidgets from "./Home/ImportantDocumentsWidgets";
import QuickActionWidget from "./Home/QuickActionWidget";
import ContactInfoWidget from "./Home/ContactInfoWidget";

interface Document {
    id: number;
    title: string;
    description: string;
    category: string;
    category_display: string;
    file_type: string;
    file_path: string;
    file_url: string | null;
    formatted_file_size: string;
    file_icon: string;
    published_date: string;
    author: string;
    version: string;
    tags: string[];
    is_featured: boolean;
    download_count: number;
}

interface HomeProps {
    hero: {
        title: string;
        subtitle: string;
        stats: Array<{
            label: string;
            value: string;
        }>;
    };
    quickLinks: Array<{
        title: string;
        href: string;
        icon: string;
    }>;
    featuredDocuments: Document[];
}

const iconMap = {
    FileText,
    Phone,
    Users,
    Shield,
};

export default function Home({ hero, quickLinks, featuredDocuments }: HomeProps) {
    return (
        <PublicLayout title="Nash COP - Community Oriented Policing">
            <Head title="Home" />
            <Herosection />
            <FeaturedServiceWidget />
            <HomeStatisticsPage />
            <FaqsWidgets />
            <RecentNews />
            <ImportantDocumentsWidgets featuredDocuments={featuredDocuments} />
            <QuickActionWidget />
            <ContactInfoWidget />
            {/* <section className="bg-green-500 min-h-screen">Homepage1</section> */}
        </PublicLayout>
    );
}
