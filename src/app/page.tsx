'use client';

import { useState, useCallback } from 'react';
import { SplashScreen } from '@/components/SplashScreen';
import { Hero } from '@/components/Hero';
import { MenuPreview } from '@/components/MenuPreview';
import { Specials } from '@/components/Specials';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <Hero />
      <MenuPreview />
      <Specials />
    </>
  );
}
