import { ScrollReveal } from './ScrollReveal';

export function About() {
  return (
    <section id="about" className="section-light relative">
      {/* Thin blue edge lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/15" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-accent/15" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              More Meat. More Flavor. More Fire.
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <ScrollReveal variant="left">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                At Khan Korean Grill &amp; Bar, we bring the authentic Korean BBQ
                experience to Northern Virginia. Every cut is carefully selected, every
                marinade crafted with tradition, and every table set for an
                unforgettable dining experience.
              </p>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                Whether you choose our All-You-Can-Eat feast or our curated Combo
                platters, you&apos;ll discover the bold flavors of Korea in a modern,
                inviting atmosphere.
              </p>
              <a href="#menu" className="btn-outline-dark inline-flex mt-4">
                Explore Our Menu
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=85&auto=format&fit=crop"
              alt="Premium Korean BBQ cuts"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </ScrollReveal>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'All-You-Can-Eat',
              desc: 'Unlimited premium meats, sides, and more starting at $25 per person.',
            },
            {
              title: 'Halal Certified',
              desc: 'All beef and chicken options prepared with Halal-certified meats.',
            },
            {
              title: 'Full Bar',
              desc: 'Soju, cocktails, craft beer, wine, and creative mocktails.',
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={(i + 1) as 1 | 2 | 3}>
              <div className="bg-neutral-50 p-8 text-center hover:bg-neutral-100 transition-colors duration-500">
                <h3 className="text-lg font-bold text-neutral-900 mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>
                <div className="w-6 h-px bg-accent mx-auto mb-4" />
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
