'use client';

import { useState } from 'react';
import Link from 'next/link';

const locations = [
  {
    id: 'fairfax',
    name: 'Fairfax',
    sub: 'Fair Oaks Mall',
    address: '11724 Fair Oaks Mall, Ste K237',
    city: 'Fairfax, VA 22033',
    phone: '(240) 956-7540',
    phoneHref: 'tel:+12409567540',
    yelp: 'https://www.yelp.com/biz/khan-korean-grill-and-bar-fairfax',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=11724+Fair+Oaks+Mall+Ste+K237+Fairfax+VA+22033',
  },
  {
    id: 'woodbridge',
    name: 'Woodbridge',
    sub: 'Merchant Plaza',
    address: '4179 Merchant Plaza',
    city: 'Woodbridge, VA 22192',
    phone: '(202) 809-2104',
    phoneHref: 'tel:+12028092104',
    yelp: 'https://www.yelp.com/biz/khan-korean-grill-and-bar-woodbridge',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=4179+Merchant+Plaza+Woodbridge+VA+22192',
  },
];

export default function ReservationPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const location = locations.find((l) => l.id === selectedLocation);

  return (
    <div className="min-h-screen bg-black page-enter">
      {/* Hero banner */}
      <div className="relative h-[40vh] min-h-[300px] md:min-h-[320px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85&auto=format"
          alt="Restaurant ambiance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        <div className="relative z-10 text-center px-6">
          <p className="text-sm md:text-base font-medium tracking-[0.15em] uppercase text-white/55 mb-4">
            Join Us
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Reserve a Table
          </h1>
          <div className="w-16 h-[1px] bg-white/20 mx-auto mt-8 mb-6" />
          <p className="text-base md:text-lg text-white/60 max-w-lg mx-auto">
            Walk-ins welcome. Reservations recommended for parties of 4+.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-12 py-12 md:py-16">
        {!location ? (
          /* Location Selection */
          <div className="max-w-xl mx-auto">
            <p className="text-center text-white/50 text-base mb-8">Select a location</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc.id)}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-6 py-8 text-center hover:bg-white/[0.1] hover:border-white/25 active:scale-[0.98] transition-all duration-300 group"
                >
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {loc.name}
                  </h3>
                  <p className="text-sm text-white/40">{loc.sub}</p>
                  <div className="flex items-center justify-center gap-2 text-white/50 group-hover:text-amber-400 transition-colors mt-5">
                    <span className="text-sm font-medium tracking-wide">Call &middot; Reserve</span>
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Selected Location — Call & Reserve */
          <div className="max-w-2xl mx-auto">
            {/* Location header with change button */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm font-bold text-white">{location.name}</span>
                <span className="text-xs text-white/40">{location.sub}</span>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-xs text-white/40 hover:text-white transition-colors underline underline-offset-2"
              >
                Change
              </button>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-12">
              {/* Call */}
              <a
                href={location.phoneHref}
                className="flex items-center gap-5 bg-white/[0.04] border border-white/[0.08] rounded-lg px-6 py-6 md:px-8 md:py-8 hover:bg-white/[0.08] hover:border-white/20 active:scale-[0.98] transition-all duration-300 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-600/20 flex items-center justify-center shrink-0 group-hover:bg-amber-600/30 transition-colors">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    Call Us
                  </p>
                  <p className="text-base md:text-lg text-white/60 font-semibold">{location.phone}</p>
                </div>
              </a>

              {/* Reserve */}
              <a
                href={location.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-white/[0.04] border border-white/[0.08] rounded-lg px-6 py-6 md:px-8 md:py-8 hover:bg-white/[0.08] hover:border-white/20 active:scale-[0.98] transition-all duration-300 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-600/20 flex items-center justify-center shrink-0 group-hover:bg-amber-600/30 transition-colors">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    Reserve a Table
                  </p>
                  <p className="text-base text-white/50">View on Yelp</p>
                </div>
              </a>
            </div>

            {/* Location Info */}
            <div className="space-y-6 border-t border-white/[0.06] pt-10">
              <div>
                <h3 className="font-heading text-sm font-bold text-white/40 uppercase tracking-[0.15em] mb-3">Address</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  {location.address}<br />
                  {location.city}
                </p>
              </div>

              <div>
                <h3 className="font-heading text-sm font-bold text-white/40 uppercase tracking-[0.15em] mb-3">Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-base md:text-lg">
                    <span className="text-white/50">Mon &ndash; Thu, Sun</span>
                    <span className="text-white/70 font-medium">11 AM &ndash; 11 PM</span>
                  </div>
                  <div className="flex justify-between text-base md:text-lg">
                    <span className="text-white/50">Fri &ndash; Sat</span>
                    <span className="text-white/70 font-medium">11 AM &ndash; 12 AM</span>
                  </div>
                </div>
              </div>

              <a
                href={location.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-base text-amber-400/70 hover:text-amber-400 transition-colors font-medium"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>

            {/* Additional info */}
            <div className="border-t border-white/[0.06] pt-10 mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-heading text-base font-bold text-white/70 mb-2">Group Dining</h4>
                  <p className="text-sm text-white/50">Parties of 6+ welcome. Contact us for group reservations.</p>
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-white/70 mb-2">Private Events</h4>
                  <p className="text-sm text-white/50">Birthday parties, corporate events, and celebrations.</p>
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-white/70 mb-2">Walk-ins</h4>
                  <p className="text-sm text-white/50">Always welcome! No reservation needed for small parties.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
