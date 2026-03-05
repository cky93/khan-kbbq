'use client';

import { useState } from 'react';

interface LocationData {
  id: string;
  name: string;
  label: string;
  address: string;
  city: string;
  phone: string;
  phoneHref: string;
  instagram: string;
  instagramHandle: string;
  googleRating: string;
  yelpRating: string;
  image: string;
  active: boolean;
}

const locations: LocationData[] = [
  {
    id: 'fairfax',
    name: 'Fairfax',
    label: 'Fair Oaks Mall',
    address: '11724 Fair Oaks Mall, Ste K237',
    city: 'Fairfax, VA 22033',
    phone: '(240) 956-7540',
    phoneHref: 'tel:+12409567540',
    instagram: 'https://www.instagram.com/khankbbq_fairoaks/',
    instagramHandle: '@khankbbq_fairoaks',
    googleRating: '4.5',
    yelpRating: '4.0',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80&auto=format',
    active: true,
  },
  {
    id: 'woodbridge',
    name: 'Woodbridge',
    label: 'Merchant Plaza',
    address: '4179 Merchant Plaza',
    city: 'Woodbridge, VA 22192',
    phone: '(202) 809-2104',
    phoneHref: 'tel:+12028092104',
    instagram: 'https://www.instagram.com/khankbbq_woodbridge/',
    instagramHandle: '@khankbbq_woodbridge',
    googleRating: '4.3',
    yelpRating: '4.0',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80&auto=format',
    active: true,
  },
  {
    id: 'sterling',
    name: 'Sterling',
    label: 'Coming Soon',
    address: '',
    city: 'Sterling, VA',
    phone: '',
    phoneHref: '',
    instagram: '',
    instagramHandle: '',
    googleRating: '',
    yelpRating: '',
    image: 'https://images.unsplash.com/photo-1610697728150-59c02f719145?w=800&q=80&auto=format',
    active: false,
  },
];

export function LocationSelector({ onSelect }: { onSelect: (locationId: string) => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleSelect = (loc: LocationData) => {
    if (!loc.active) return;
    setFadeOut(true);
    setTimeout(() => onSelect(loc.id), 500);
  };

  return (
    <div
      className={`fixed inset-0 z-[99] bg-black flex flex-col items-center justify-center px-5 transition-opacity duration-500 overflow-y-auto ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 pt-8 sm:pt-0">
        <img
          src="/khanlogo-icon.png?v=6"
          alt=""
          className="mx-auto mb-4 w-[50px] md:w-[70px] opacity-60"
        />
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
          Select Location
        </h2>
        <p className="text-sm md:text-base text-white/40">
          Choose your dining destination
        </p>
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-4xl w-full pb-8 sm:pb-0">
        {locations.map((loc, i) => (
          <button
            key={loc.id}
            onClick={() => handleSelect(loc)}
            disabled={!loc.active}
            className={`location-card relative group overflow-hidden rounded-lg text-left transition-all duration-300 ${
              loc.active
                ? 'cursor-pointer hover:ring-2 hover:ring-amber-500/50 hover:scale-[1.02]'
                : 'cursor-not-allowed opacity-50'
            }`}
            style={{ animationDelay: `${(i + 1) * 100}ms` }}
          >
            <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden">
              <img
                src={loc.image}
                alt={loc.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

              {/* Coming Soon badge */}
              {!loc.active && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                  <span className="text-base md:text-lg font-bold text-white/80 tracking-wider uppercase border border-white/30 px-5 py-2.5 rounded">
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">
                  {loc.name}
                </h3>
                <p className="text-sm md:text-base text-white/55 mb-4">{loc.label}</p>

                {loc.active && (
                  <>
                    <p className="text-xs md:text-sm text-white/40 mb-1">{loc.address}</p>
                    <p className="text-xs md:text-sm text-white/40 mb-4">{loc.city}</p>

                    {/* Social links row */}
                    <div className="flex items-center gap-3 flex-wrap">
                      {/* Instagram */}
                      <a
                        href={loc.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white/80 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                        Instagram
                      </a>

                      {/* Google rating */}
                      <span className="flex items-center gap-1 text-xs text-white/50">
                        <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {loc.googleRating}
                      </span>

                      {/* Yelp */}
                      <span className="flex items-center gap-1.5 text-xs text-white/50">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308c.564-.838 1.842-.622 2.082.35l.6 2.455c.24.97-.24 1.42-1.416 1.7zm-8.432 5.78l1.065-5.244c.192-.948 1.584-1.11 2.04-.245l2.37 4.456c.457.87-.17 1.9-1.078 1.685l-3.437-.896c-.96-.248-1.2-.808-.96-1.756zm-2.464-7.41L4.77 13.6c-.918.494-1.898-.384-1.572-1.41l.84-2.583c.275-.852 1.238-1.19 1.91-.67l3.66 2.742c.75.564.606 1.64-.346 2.284zm.83 8.652l-1.1-5.116c-.204-.954.956-1.556 1.692-.89l3.78 3.436c.728.672.34 1.886-.636 1.96l-2.805.163c-.975.082-1.547-.404-1.93-1.553zm-.68-13.014l-.966 5.14c-.18.946-1.46 1.19-1.878.36l-2.17-4.307C4 6.96 4.757 5.973 5.65 6.12l3.41.565c.955.158 1.34.894.394 1.917z" />
                        </svg>
                        Yelp
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
