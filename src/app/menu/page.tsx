'use client';

import { useState } from 'react';
import { menuSections, lunchCombos, aycePricing, categoryHeroImages } from '@/lib/menu-data';
import type { MenuItem } from '@/lib/menu-data';
import { ScrollReveal } from '@/components/ScrollReveal';

const categories = [
  { id: 'ayce', label: 'All-You-Can-Eat', desc: 'Unlimited premium BBQ', sub: 'Starting at $25/person', icon: '🔥' },
  { id: 'combo', label: 'Combos', desc: 'Curated platter experiences', sub: 'For 2-6 guests', icon: '🥩' },
  { id: 'sides', label: 'Sides & Starters', desc: 'Appetizers & Korean classics', sub: 'Banchan & more', icon: '🍱' },
  { id: 'drinks', label: 'Bar & Drinks', desc: 'Soju, cocktails, beer & wine', sub: 'Full bar menu', icon: '🍸' },
];

/* ═══════════════════════════════════════════════
   Circular plate image card
   ═══════════════════════════════════════════════ */
function PlateCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-5 ring-1 ring-white/[0.06] group-hover:ring-white/20 transition-all duration-500">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      <h4 className="font-heading text-base sm:text-lg md:text-xl font-bold text-white leading-tight mb-1.5">
        {item.name}
      </h4>

      {item.desc && (
        <p className="text-sm md:text-base text-white/60 leading-snug max-w-[200px]">{item.desc}</p>
      )}

      <div className="flex items-center gap-2 mt-2.5 flex-wrap justify-center">
        {item.tag === 'popular' && (
          <span className="text-[10px] md:text-xs font-medium tracking-wide text-amber-400 border border-amber-400/30 px-2.5 py-0.5 rounded">
            Popular
          </span>
        )}
        {item.note && (
          <span className="text-[10px] md:text-xs font-medium tracking-wide text-white/60 border border-white/15 px-2.5 py-0.5 rounded">
            {item.note}
          </span>
        )}
      </div>
    </div>
  );
}

/* List item for items without images */
function ListItem({ item }: { item: MenuItem }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-white/[0.06] last:border-0 group hover:bg-white/[0.02] -mx-4 px-4 rounded transition-colors">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-lg md:text-xl text-white font-medium">{item.name}</span>
          {item.desc && <span className="text-base text-white/55">{item.desc}</span>}
          {item.tag === 'popular' && (
            <span className="text-[10px] text-amber-400 font-medium tracking-wide border border-amber-400/30 px-2 py-0.5 rounded">Popular</span>
          )}
          {item.note && <span className="text-sm text-white/65 font-medium">{item.note}</span>}
        </div>
      </div>
      <div className="ml-4 shrink-0">
        {item.price && <span className="text-lg text-white/75 font-medium">{item.price}</span>}
        {item.prices && (
          <div className="flex items-center gap-4">
            {item.prices.map((p) => (
              <span key={p.label} className="text-base">
                <span className="text-white/75 font-medium">{p.price}</span>
                <span className="text-white/50 ml-1.5 text-sm">{p.label}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const activeSection = menuSections.find((s) => s.id === activeCategory);

  return (
    <div className="min-h-screen bg-black page-enter">
      {/* ═══════ Category Selection View ═══════ */}
      {!activeCategory && (
        <>
          {/* Hero banner */}
          <div className="relative h-[45vh] min-h-[360px] md:h-[50vh] md:min-h-[400px] flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1920&q=85&auto=format"
              alt="Korean BBQ galbi on the grill"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
            <div className="relative z-10 text-center px-6">
              <p className="text-sm md:text-base font-medium tracking-[0.15em] uppercase text-white/55 mb-4">Dining</p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Our Menu
              </h1>
              <div className="w-16 h-[1px] bg-white/20 mx-auto mt-8 mb-6" />
              <p className="text-base md:text-lg text-white/60 max-w-lg mx-auto">
                20% gratuity for groups of 6+ &middot; 90 minute dining time
              </p>
            </div>
          </div>

          {/* Category cards */}
          <div className="max-w-6xl mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {categories.map((cat, i) => (
                <ScrollReveal key={cat.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3}>
                  <button
                    onClick={() => setActiveCategory(cat.id)}
                    className="relative w-full text-left overflow-hidden rounded group h-[200px] sm:h-[240px] md:h-[280px]"
                  >
                    <img
                      src={categoryHeroImages[cat.id]}
                      alt={cat.label}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 transition-colors duration-500" />
                    <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                      <span className="text-2xl md:text-3xl mb-2">{cat.icon}</span>
                      <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5">{cat.label}</h2>
                      <p className="text-base md:text-lg text-white/70 mb-0.5">{cat.desc}</p>
                      <p className="text-sm md:text-base text-white/50">{cat.sub}</p>
                      <div className="flex items-center gap-2 mt-4 text-white/60 group-hover:text-amber-400 transition-colors duration-300">
                        <span className="text-sm md:text-base font-medium tracking-wide">View Menu</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ═══════ Active Category ═══════ */}
      {activeCategory && activeSection && (
        <div className="page-enter">
          {/* Category hero banner */}
          <div className="relative h-[30vh] min-h-[240px] md:h-[35vh] md:min-h-[280px] flex items-end overflow-hidden">
            <img
              src={activeSection.heroImage || categoryHeroImages[activeCategory]}
              alt={activeSection.heading}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
            <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-12 pb-8 md:pb-10">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {activeSection.heading}
              </h2>
            </div>
          </div>

          {/* Sticky navigation bar */}
          <div className="sticky top-20 z-30 bg-black/95 backdrop-blur-md border-b border-white/[0.06]">
            <div className="max-w-6xl mx-auto px-5 md:px-12 flex items-center justify-between py-3 md:py-4">
              <button
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <span className="text-sm md:text-base font-medium">Back</span>
              </button>
              {/* Desktop category tabs */}
              <div className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 lg:px-5 py-2 text-sm font-medium tracking-wide transition-all rounded-md ${
                      activeCategory === cat.id ? 'bg-white text-black' : 'text-white/30 hover:text-white/60'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              {/* Mobile category selector */}
              <div className="md:hidden">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="bg-white/[0.06] text-white text-sm px-3 py-2 rounded border border-white/[0.1] outline-none appearance-none"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id} className="bg-black text-white">
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="max-w-6xl mx-auto px-5 md:px-12 py-10 md:py-12">
            {/* AYCE Pricing Tiers — clean, minimal, not AI-looking */}
            {activeCategory === 'ayce' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] mb-14 md:mb-16">
                {aycePricing.map((tier) => (
                  <div
                    key={tier.tier}
                    className="py-8 px-6 md:py-10 md:px-8 text-center bg-black"
                  >
                    <p className="font-heading text-base md:text-lg text-white/70 mb-3 italic">{tier.tier}</p>
                    <p className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">{tier.price}</p>
                    <p className="text-sm md:text-base text-white/50 font-medium mb-5">{tier.time}</p>
                    <div className="w-8 h-[1px] bg-white/20 mx-auto mb-5" />
                    <p className="text-sm md:text-base text-white/60 leading-relaxed">{tier.note}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Menu Categories */}
            {activeSection.categories.map((category) => {
              const itemsWithImages = category.items.filter(item => item.image);
              const itemsWithoutImages = category.items.filter(item => !item.image);
              const someHaveImages = itemsWithImages.length > 0;

              return (
                <div key={category.title} className="mb-16 md:mb-20 last:mb-0">
                  {/* Category header */}
                  <div className="mb-8 md:mb-10">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        {category.title}
                      </h3>
                      {category.subtitle && (
                        <span className="text-xl md:text-2xl text-white/60 font-medium">{category.subtitle}</span>
                      )}
                    </div>
                    {category.note && (
                      <p className="text-sm md:text-base text-white/55 mt-1">{category.note}</p>
                    )}
                    <div className="w-full h-[1px] bg-white/[0.08] mt-4" />
                  </div>

                  {/* Circular plate grid */}
                  {someHaveImages && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8">
                      {itemsWithImages.map((item) => (
                        <PlateCard key={item.name} item={item} />
                      ))}
                    </div>
                  )}

                  {/* List items */}
                  {itemsWithoutImages.length > 0 && (
                    <div className="p-5 md:p-8">
                      {itemsWithoutImages.map((item) => (
                        <ListItem key={item.name} item={item} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Lunch combo special */}
            {activeCategory === 'combo' && (
              <div className="py-10 md:py-12 text-center mt-8 border-t border-white/[0.06]">
                <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-white/55 mb-3">Weekday Special</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">Lunch Combo</h3>
                <p className="font-heading text-3xl md:text-4xl text-white font-bold mb-8">$25</p>
                <div className="w-10 h-[1px] bg-white/10 mx-auto mb-8" />
                <div className="max-w-sm mx-auto">
                  {lunchCombos.map((combo) => (
                    <p key={combo} className="text-base md:text-lg text-white/65 py-3.5 border-b border-white/[0.06] last:border-0">
                      {combo}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
