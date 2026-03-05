'use client';

import { useState } from 'react';
import { menuSections, lunchCombos, aycePricing } from '@/lib/menu-data';
import type { MenuItem } from '@/lib/menu-data';
import { ScrollReveal } from './ScrollReveal';

const tabs = [
  { id: 'ayce', label: 'All-You-Can-Eat' },
  { id: 'combo', label: 'Combos' },
  { id: 'sides', label: 'Sides' },
  { id: 'drinks', label: 'Bar & Drinks' },
];

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex justify-between items-baseline py-3 border-b border-white/5 last:border-0 group">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <span className="text-[15px] text-white font-medium group-hover:text-accent transition-colors">
            {item.name}
          </span>
          {item.tag === 'popular' && (
            <span className="text-[10px] text-accent font-bold tracking-wider uppercase bg-accent/10 px-2 py-0.5">
              Popular
            </span>
          )}
        </div>
        {item.desc && (
          <p className="text-[13px] text-white/40 mt-0.5">{item.desc}</p>
        )}
        {item.note && (
          <p className="text-[11px] text-accent/80 mt-0.5 font-medium">{item.note}</p>
        )}
      </div>
      <div className="ml-6 shrink-0 text-right">
        {item.price && (
          <span className="text-sm text-white/60 font-medium">{item.price}</span>
        )}
        {item.prices && (
          <span className="text-xs text-white/40">
            {item.prices.map((p, i) => (
              <span key={p.label}>
                {i > 0 && <span className="mx-1 text-white/20">/</span>}
                <span className="text-white/50 font-medium">{p.price}</span>
                <span className="text-white/30 ml-1">{p.label}</span>
              </span>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}

export function Menu() {
  const [activeTab, setActiveTab] = useState('ayce');
  const activeSection = menuSections.find((s) => s.id === activeTab);

  return (
    <section id="menu" className="section-dark relative">
      {/* Blue edge lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/15" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-accent/15" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              Dining
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Our Menu
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mt-6 mb-6" />
            <p className="text-sm text-white/40 font-medium">
              20% gratuity for groups of 5+ &middot; 90 minute dining time
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex gap-1 bg-white/5 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 md:px-7 py-2.5 text-sm font-semibold transition-all duration-300 uppercase tracking-wide ${
                  activeTab === tab.id
                    ? 'bg-accent text-white'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* AYCE Pricing Tiers */}
        {activeTab === 'ayce' && (
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
              {aycePricing.map((tier, idx) => (
                <div
                  key={tier.tier}
                  className={`p-8 text-center transition-colors duration-500 ${
                    idx === 2
                      ? 'bg-accent/10 border border-accent/30'
                      : 'bg-white/[0.03] border border-white/10 hover:border-accent/30'
                  }`}
                >
                  <p className="text-xs text-white/40 tracking-widest mb-3 font-semibold uppercase">
                    {tier.tier}
                  </p>
                  <p className="text-4xl font-bold text-white mb-2">{tier.price}</p>
                  <p className="text-xs text-white/30 mb-4 font-medium uppercase tracking-wide">
                    {tier.time}
                  </p>
                  <div className="w-6 h-px bg-accent/40 mx-auto mb-4" />
                  <p className="text-xs text-white/40 leading-relaxed">
                    {tier.note}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Menu content - card-based layout */}
        {activeSection && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activeSection.categories.map((category) => (
              <ScrollReveal key={category.title}>
                <div className="bg-white/[0.03] border border-white/8 p-8 h-full">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <span className="text-sm text-accent font-semibold">
                        {category.subtitle}
                      </span>
                    )}
                  </div>
                  {category.note && (
                    <p className="text-xs text-white/35 font-medium mb-1">{category.note}</p>
                  )}
                  <div className="w-full h-px bg-white/10 mt-3 mb-2" />
                  <div>
                    {category.items.map((item) => (
                      <MenuItemRow key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {activeTab === 'combo' && (
              <ScrollReveal>
                <div className="bg-accent/10 border border-accent/25 p-8 text-center h-full flex flex-col justify-center">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2">
                    Special
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase">
                    Lunch Combo
                  </h3>
                  <p className="text-lg text-accent font-bold mb-6">
                    $25 per person
                  </p>
                  <div className="w-6 h-px bg-accent/40 mx-auto mb-6" />
                  <div className="max-w-sm mx-auto">
                    {lunchCombos.map((combo) => (
                      <p key={combo} className="text-sm text-white/60 py-2.5 border-b border-white/5 last:border-0 font-medium">
                        {combo}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
