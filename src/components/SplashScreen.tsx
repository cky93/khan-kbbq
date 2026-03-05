'use client';

import { useState, useEffect } from 'react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 1800);
    const completeTimer = setTimeout(onComplete, 2500);
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
        <img
          src="/khanlogo-icon.png?v=6"
          alt=""
          className="mx-auto mb-8 w-[120px] sm:w-[160px] md:w-[200px] splash-logo"
        />
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight mb-3 splash-title">
          Khan
        </h1>
        <p className="text-lg md:text-xl text-white/60 font-light tracking-[0.2em] uppercase splash-subtitle">
          Korean Grill &amp; Bar
        </p>
      </div>
    </div>
  );
}
