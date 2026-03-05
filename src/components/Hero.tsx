'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const slides = [
  {
    src: 'https://fox5sandiego.com/wp-content/uploads/sites/15/2024/08/Sura3.jpeg?w=900',
    alt: 'Korean BBQ grill with premium meats',
  },
  {
    src: 'https://platform.sandiego.eater.com/wp-content/uploads/sites/25/chorus/uploads/chorus_asset/file/25560103/Sura8.jpg?quality=90&strip=all&crop=0,0,100,100&w=2400',
    alt: 'Korean BBQ table spread',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/59b2b6baa803bb7536d72e04/1506474072349-8I8BCIC5N91F3DNKQOSY/IMG_4615.JPG',
    alt: 'Korean BBQ grilling experience',
  },
  {
    src: 'https://images.unsplash.com/photo-1610697728150-59c02f719145?q=80&w=2070&auto=format&fit=crop',
    alt: 'Korean BBQ meats on charcoal grill',
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Slideshow images with cross-fade + Ken Burns */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover ${
              current === i ? 'animate-slow-zoom' : ''
            }`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Dark overlay with warm bottom glow */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 warm-glow" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Logo — scale in */}
        <div className="mb-8 hero-logo">
          <img
            src="/khanlogo-icon.png?v=6"
            alt=""
            width={280}
            height={280}
            className="mx-auto mb-6 opacity-90 w-[140px] sm:w-[180px] md:w-[220px]"
          />
        </div>

        {/* Title — wipe reveal left to right */}
        <h1 className="font-heading text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold text-white tracking-tight mb-4 leading-[0.85] hero-title">
          Khan
        </h1>

        {/* Subtitle — fade in */}
        <p className="text-lg md:text-2xl text-white/80 font-light tracking-[0.15em] uppercase mb-12 hero-subtitle">
          Korean Grill &amp; Bar
        </p>

        {/* Primary CTA — View Menu (fade up) */}
        <div className="hero-cta">
          <Link
            href="/menu"
            className="group relative inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full px-10 sm:px-14 py-4 sm:py-5 mb-8 active:scale-[0.97] transition-all duration-300 shadow-lg shadow-amber-900/30 hover:shadow-amber-800/40"
          >
            <span className="text-lg sm:text-xl font-bold tracking-[0.08em] uppercase">View Our Menu</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Location Cards (fade up, staggered) */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-lg mx-auto hero-cards">
          {/* Fairfax */}
          <Link
            href="/locations/fairfax"
            className="flex-1 bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] rounded-lg px-5 py-5 text-center hover:bg-white/[0.12] hover:border-white/25 active:scale-[0.98] transition-all duration-300 cursor-pointer group"
          >
            <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-0.5 group-hover:text-amber-400 transition-colors">Fairfax</h3>
            <p className="text-xs text-white/40 mb-2">Fair Oaks Mall</p>
            <div className="flex items-center justify-center gap-2 text-white/50 group-hover:text-amber-400 transition-colors mt-3">
              <span className="text-sm font-medium tracking-wide">Call &middot; Reserve</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>

          {/* Woodbridge */}
          <Link
            href="/locations/woodbridge"
            className="flex-1 bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] rounded-lg px-5 py-5 text-center hover:bg-white/[0.12] hover:border-white/25 active:scale-[0.98] transition-all duration-300 cursor-pointer group"
          >
            <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-0.5 group-hover:text-amber-400 transition-colors">Woodbridge</h3>
            <p className="text-xs text-white/40 mb-2">Merchant Plaza</p>
            <div className="flex items-center justify-center gap-2 text-white/50 group-hover:text-amber-400 transition-colors mt-3">
              <span className="text-sm font-medium tracking-wide">Call &middot; Reserve</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

    </section>
  );
}
