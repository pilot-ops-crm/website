"use client";

import React from "react";

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lightLine = "#e5e7eb";
  const darkLine = "#262626";

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <style>{`
        .grid-bg {
          background-image:
            linear-gradient(45deg, transparent 49%, var(--grid-line) 49%, var(--grid-line) 51%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, var(--grid-line) 49%, var(--grid-line) 51%, transparent 51%);
          background-size: 40px 40px;
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%);
          mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%);
        }
        .dark .grid-bg {
          --grid-line: ${darkLine};
        }
        .grid-bg {
          --grid-line: ${lightLine};
        }
      `}</style>
      <div className="absolute inset-0 grid-bg" />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}