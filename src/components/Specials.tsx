import { ScrollReveal } from './ScrollReveal';

export function Specials() {
  const discounts = [
    { title: 'Senior Discount', items: ['Lunch Combo: 20% off', 'Regular menu: 10% off'] },
    { title: 'Military Discount', items: ['10% off all orders', 'Valid military ID required'] },
    { title: 'DMV Iron Gym', items: ['10% off all orders', 'Show membership card'] },
  ];

  return (
    <section className="relative bg-black px-5 py-20 md:px-12 md:py-28 lg:px-20 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Discounts
            </h2>
            <div className="w-16 h-[1px] bg-white/15 mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06]">
          {discounts.map((d, i) => (
            <ScrollReveal key={d.title} delay={(i + 1) as 1 | 2 | 3}>
              <div className="bg-black py-10 px-6 md:py-12 md:px-8 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-5">
                  {d.title}
                </h3>
                <div className="w-8 h-[1px] bg-white/10 mx-auto mb-6" />
                <ul className="space-y-3">
                  {d.items.map((item) => (
                    <li key={item} className="text-base md:text-lg text-white/65">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
