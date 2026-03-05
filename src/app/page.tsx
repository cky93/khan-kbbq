'use client';

import { useState, useCallback } from 'react';
import { SplashScreen } from '@/components/SplashScreen';
import { LocationSelector } from '@/components/LocationSelector';
import { Hero } from '@/components/Hero';
import { MenuPreview } from '@/components/MenuPreview';
import { Specials } from '@/components/Specials';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLocations, setShowLocations] = useState(true);

  const handleSplashComplete = useCallback(() => setShowSplash(false), []);
  const handleLocationSelect = useCallback(() => setShowLocations(false), []);

  return (
    <>
      {/* Splash overlay (z-100, above location selector) */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Location selector overlay (z-99, above main content) */}
      {showLocations && <LocationSelector onSelect={handleLocationSelect} />}

      {/* Main content (renders behind overlays, preloads images) */}
      <Hero />
      <MenuPreview />
      <Specials />
    </>
  );
}
