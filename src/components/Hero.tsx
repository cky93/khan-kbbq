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
  const [loaded, setLoaded] = useState(false);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    setLoaded(true);
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
      <div
        className={`relative z-20 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="mb-8">
          <img
            src="/khanlogo-icon.png?v=6"
            alt=""
            width={280}
            height={280}
            className="mx-auto mb-6 opacity-90 w-[140px] sm:w-[180px] md:w-[220px]"
          />
        </div>

        <h1 className="font-heading text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold text-white tracking-tight mb-4 leading-[0.85]">
          Khan
        </h1>

        <p className="text-lg md:text-2xl text-white/80 font-light tracking-[0.15em] uppercase mb-12">
          Korean Grill &amp; Bar
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/menu" className="btn-primary text-base md:text-lg px-10 py-4 md:px-12 md:py-5">
            View Our Menu
          </Link>
          <Link href="/reservation" className="btn-outline text-base md:text-lg px-10 py-4 md:px-12 md:py-5">
            Reserve a Table
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-10 h-1 rounded-full transition-all duration-500 ${
              current === i ? 'bg-amber-500' : 'bg-white/20'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
