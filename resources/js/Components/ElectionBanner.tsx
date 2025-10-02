import React, { useState, useEffect } from "react";

interface ElectionBannerProps {
    imageUrl?: string;
    linkUrl?: string;
    altText?: string;
}

const ElectionBanner: React.FC<ElectionBannerProps> = ({
    imageUrl = "https://www.ega.go.tz/uploads/announcements/6091a63478e38c178040272ccc146991.webp",
    linkUrl = "https://www.ega.go.tz/",
    altText = "Uchaguzi 2025 - Kura yako haki yako jitokeze kupiga kura",
}) => {
    //   const [isLoaded, setIsLoaded] = useState(false);

    //   const handleImageLoad = () => {
    //     setIsLoaded(true);
    //   };

    const handleBannerClick = () => {
        if (linkUrl) {
            window.open(linkUrl, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Banner Container - Recreating the exact look from the image */}
            <div
                className={`
          relative bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-2xl shadow-2xl 
          transform transition-all duration-500 ease-in-out cursor-pointer
          hover:scale-105 hover:shadow-3xl border border-yellow-500
          translate-y-0 opacity-100
          w-80 h-20 flex items-center px-4 gap-3
        `}
                onClick={handleBannerClick}
            >
                {/* Election Logo/Badge */}
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={altText}
                            className="w-12 h-12 object-cover rounded-full"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-left">
                    <h3 className="text-white font-bold text-md leading-tight mb-0.5">
                        Uchaguzi 2025
                    </h3>
                    <p className="text-white/90 text-xs font-medium leading-tight">
                        Kura yako haki yako jitokeze kupiga kura
                    </p>
                </div>

                {/* Hidden image for loading detection */}

                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl pointer-events-none" />

                {/* Tanzania flag colors accent */}
            </div>

            {/* Mobile responsive styles */}
            <div className="sm:hidden">
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
            @media (max-width: 640px) {
              .fixed.bottom-4.right-4 {
                right: 0.5rem;
                bottom: 0.5rem;
              }
              .w-80 {
                width: calc(100vw - 1rem);
                max-width: 20rem;
              }
            }
          `,
                    }}
                />
            </div>
        </div>
    );
};

export default ElectionBanner;
