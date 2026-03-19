"use client";

import { useEffect, useRef, useState } from "react";

interface Position {
    x: number;
    y: number;
}

const TRAIL_IDS = ["trail-0", "trail-1", "trail-2"];

export default function BlurCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [trailPositions, setTrailPositions] = useState<Position[]>([
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
    ]);
    const mousePosition = useRef<Position>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
            
            const el = cursorRef.current;
            if (!el) return;
            el.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

  
    useEffect(() => {
        let animationFrameId: number;

        const animateTrail = () => {
            setTrailPositions((prev) => {
                const newPositions = [...prev];
                
    
                newPositions[0] = {
                    x: newPositions[0].x + (mousePosition.current.x - newPositions[0].x) * 0.15,
                    y: newPositions[0].y + (mousePosition.current.y - newPositions[0].y) * 0.15,
                };

                for (let i = 1; i < newPositions.length; i++) {
                    newPositions[i] = {
                        x: newPositions[i].x + (newPositions[i - 1].x - newPositions[i].x) * 0.2,
                        y: newPositions[i].y + (newPositions[i - 1].y - newPositions[i].y) * 0.2,
                    };
                }

                return newPositions;
            });

            animationFrameId = requestAnimationFrame(animateTrail);
        };

        animationFrameId = requestAnimationFrame(animateTrail);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-20 w-20 rounded-full md:block bg-red-500/20 blur-2xl will-change-transform"
            />
            
            {trailPositions.map((pos, index) => (
                <div
                    key={TRAIL_IDS[index]}
                    className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block rounded-full blur-xl will-change-transform transition-opacity duration-300"
                    style={{
                        transform: `translate(${pos.x - 32 + index * 4}px, ${pos.y - 32 + index * 4}px)`,
                        width: `${64 - index * 12}px`,
                        height: `${64 - index * 12}px`,
                        backgroundColor: `rgba(239, 68, 68, ${0.12 - index * 0.03})`,
                    }}
                />
            ))}
        </>
    );
}