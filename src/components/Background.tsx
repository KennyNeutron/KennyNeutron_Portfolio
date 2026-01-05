"use client";

import { Spotlight } from "@/components/ui/Spotlight";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Spotlight
        className="left-0 md:left-20 top-0"
        fill="hsl(217 91% 60% / 0.5)"
      />
      <Spotlight
        className="left-full md:left-3/4 top-0"
        fill="hsl(140 90% 60% / 0.3)"
      />
    </div>
  );
}
