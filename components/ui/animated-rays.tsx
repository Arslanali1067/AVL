"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedRaysProps {
    /** Additional CSS classes */
    className?: string;
    /** Optional children to render over the background */
    children?: React.ReactNode;
    /** Force dark mode styles (glowing rays) */
    forceDark?: boolean;
}

export function AnimatedRays({
    className = "",
    children,
    forceDark = false,
}: AnimatedRaysProps) {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (forceDark) {
            setIsDark(true);
            return;
        }
        const checkDark = () => document.documentElement.classList.contains("dark");
        setIsDark(checkDark());

        const observer = new MutationObserver(() => setIsDark(checkDark()));
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => observer.disconnect();
    }, [forceDark]);

    if (!mounted) return null;

    const stripes = `repeating-linear-gradient(
        100deg,
        #ffffff 0%,
        #ffffff 7%,
        transparent 10%,
        transparent 12%,
        #ffffff 16%
    )`;
    const rainbow = `repeating-linear-gradient(
        100deg,
        rgba(255, 255, 255, 0.15) 10%,
        rgba(255, 255, 255, 0.3) 15%,
        rgba(255, 255, 255, 0.15) 20%,
        rgba(255, 255, 255, 0.25) 25%,
        rgba(255, 255, 255, 0.15) 30%
    )`;

    return (
        <section className={cn("relative w-full h-full overflow-hidden", className)}>
            {/* Aurora Background — matches original .hero */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `${stripes}, ${rainbow}`,
                    backgroundSize: "300%, 200%",
                    backgroundPosition: "50% 50%, 50% 50%",
                    filter: isDark
                        ? "blur(10px) opacity(90%) saturate(200%)"
                        : "blur(10px) invert(100%)",
                    maskImage: "radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%)",
                }}
            >
                {/* Animated overlay — matches original .hero::after */}
                <div
                    className="absolute inset-0 animate-aurora-bg"
                    style={{
                        backgroundImage: `${stripes}, ${rainbow}`,
                        backgroundSize: "200%, 100%",
                        backgroundAttachment: "fixed",
                        mixBlendMode: "difference",
                    }}
                />
            </div>

            {children && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                    {children}
                </div>
            )}
        </section>
    );
}

export default AnimatedRays;
