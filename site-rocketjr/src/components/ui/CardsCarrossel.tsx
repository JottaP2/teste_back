"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

type CardsProps = {
    imgCard: StaticImageData;
    cardId: string;
    title: string;
    description: string;
    ctaLink: string;
    ctaText: string;
    onToggleRead?: (cardId: string, expanded: boolean) => void;
};

export default function CardsCarrossel({
    imgCard,
    cardId,
    title,
    description,
    ctaLink,
    ctaText,
    onToggleRead,
}: CardsProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasOverflow, setHasOverflow] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        function checkOverflow() {
            const element = descriptionRef.current;

            if (!element) {
                return;
            }

            setHasOverflow(element.scrollHeight > element.clientHeight + 1);
        }

        if (!isExpanded) {
            checkOverflow();
        }

        window.addEventListener("resize", checkOverflow);

        return () => {
            window.removeEventListener("resize", checkOverflow);
        };
    }, [isExpanded]);

    function handleToggleRead() {
        const nextExpanded = !isExpanded;
        setIsExpanded(nextExpanded);
        onToggleRead?.(cardId, nextExpanded);
    }

    return (
        <main className="group relative z-0 h-[360px] w-full md:h-[380px] overflow-hidden rounded-2xl border border-red-700/50 bg-none dark:bg-black to-black p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-colors duration-300 hover:border-red-500">
            <div className="absolute -top-16 -right-12 h-36 w-36 rounded-full bg-red-700/10 blur-2xl" />

            <div className="relative flex h-full flex-col">
                <Image src={imgCard} alt={title} className="mb-7 h-10 w-10 object-contain" />

                <h3 className="max-w-[20ch] text-2xl font-semibold leading-[1.08] text-black dark:text-white">
                    {title}
                </h3>

                <p
                    ref={descriptionRef}
                    className={`mt-6 max-w-[34ch] text-base leading-7 text-black dark:text-white ${isExpanded ? "read-more-scroll max-h-32 overflow-y-auto pr-1" : ""}`}
                    style={
                        !isExpanded
                            ? {
                                  display: "-webkit-box",
                                  WebkitLineClamp: 3,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                              }
                            : undefined
                    }
                >
                    {description}
                </p>

                {hasOverflow ? (
                    <button
                        type="button"
                        onClick={handleToggleRead}
                        className="mt-3 w-fit text-sm font-medium text-red-400 transition-colors duration-200 hover:text-red-300"
                    >
                        {isExpanded ? "Ler menos" : "Ler mais"}
                    </button>
                ) : null}

                <a
                    href={ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-base font-semibold text-black dark:text-white transition-colors duration-200 hover:text-red-500 dark:hover:text-red-500"
                >
                    {ctaText}
                    <ArrowRight
                        size={17}
                        aria-hidden="true"
                        className="text-red-500 transition-transform duration-200 group-hover:translate-x-1"
                    />
                </a>
            </div>
        </main>
    );
}