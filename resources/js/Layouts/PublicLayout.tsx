import { Navigation } from "@/Components/Navigation";
import NASHCOPFooter from "@/Components/nashcop/NASHCOPFooter";
import NASHCOPHeader from "@/Components/nashcop/NASHCOPHeader";
import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren, ReactNode } from "react";

interface PublicLayoutProps {
    title?: string;
    header?: ReactNode;
}

export default function PublicLayout({
    title = "Nash COP",
    header,
    children,
}: PropsWithChildren<PublicLayoutProps>) {
    return (
        <div className="bg-background">
            <Head title={title} />

            <NASHCOPHeader />

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="flex-1">{children}</main>

            <NASHCOPFooter />
        </div>
    );
}
