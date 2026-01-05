"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  children?: React.ReactNode;
  className?: string;
  fill?: string;
};

export function Spotlight({
  className = "",
  fill = "white",
}: Omit<SpotlightProps, "children">) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;
      const div = divRef.current;
      const rect = div.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={cn(
        "fixed inset-0 z-0 h-full w-full overflow-hidden bg-background bg-grid-white/[0.02] antialiased pointer-events-none",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity: 1, // Always visible for global effect
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill}, transparent 40%)`,
        }}
      />
      {/* Remove children wrapper since this is just the background effect now */}
    </div>
  );
}
