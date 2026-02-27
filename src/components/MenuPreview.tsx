import Link from 'next/link';
import { categoryHeroImages } from '@/lib/menu-data';
import { ScrollReveal } from './ScrollReveal';

const menuItems = [
  { id: 'ayce', label: 'All-You-Can-Eat', desc: 'Unlimited premium BBQ', sub: 'Starting at $25/person' },
  { id: 'combo', label: 'Combos', desc: 'Curated platter experiences', sub: 'For 2-6 guests' },
  { id: 'sides', label: 'Sides & Starters', desc: 'Appetizers & Korean classics', sub: 'Banchan & more' },
  { id: 'drinks', label: 'Bar & Drinks', desc: 'Soju, cocktails, beer & wine', sub: 'Full bar menu' },
];

export function MenuPreview() {
  return (
    <section className="relative bg-black px-5 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-16">
            <p className="text-sm md:text-base font-medium tracking-[0.15em] uppercase text-white/50 mb-4">
              Dining
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Our Menu
            </h2>
            <div className="w-16 h-[1px] bg-white/20 mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {menuItems.map((item, i) => (
            <ScrollReveal key={item.id} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
              <Link
                href="/menu"
                className="relative block w-full text-left overflow-hidden rounded group h-[180px] sm:h-[220px] md:h-[260px]"
              >
                <img
                  src={categoryHeroImages[item.id]}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 transition-colors duration-500" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5">
                    {item.label}
                  </h3>
                  <p className="text-base md:text-lg text-white/70 mb-0.5">{item.desc}</p>
                  <p className="text-sm md:text-base text-white/50">{item.sub}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="btn-outline text-base md:text-lg px-10 py-4"
            >
              View Full Menu
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
