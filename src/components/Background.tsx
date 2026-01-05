"use client";

import { Spotlight } from "@/components/ui/Spotlight";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Spotlight className="" fill="hsl(217 91% 60% / 0.5)" />
    </div>
  );
}
