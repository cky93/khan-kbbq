'use client';

import { useState, useEffect } from 'react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 2000);
    const completeTimer = setTimeout(onComplete, 2700);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-700 ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Logo — blur + scale in */}
        <img
          src="/khanlogo-icon.png?v=6"
          alt=""
          className="mx-auto mb-8 w-[100px] sm:w-[140px] md:w-[180px] splash-logo"
        />

        {/* Title — wipe reveal left to right */}
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight mb-4 splash-title">
          Khan
        </h1>

        {/* Gold accent line — expands from center */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-[2px] bg-amber-500 splash-line" />
        </div>

        {/* Subtitle — fade in with letter-spacing animation */}
        <p className="text-base md:text-lg text-white/50 font-light uppercase splash-subtitle">
          Korean Grill &amp; Bar
        </p>
      </div>
    </div>
  );
}
