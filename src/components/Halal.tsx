import { ScrollReveal } from './ScrollReveal';

export function Halal() {
  return (
    <section id="halal" className="section-light relative overflow-hidden">
      {/* Blue edge lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/15" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-accent/15" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="left">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Inclusivity
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                Halal Certified
              </h2>
              <div className="w-12 h-px bg-accent mb-8" />
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-8">
                We are proud to offer Halal-certified beef and chicken options at
                Khan Korean Grill &amp; Bar. Our commitment to quality and
                inclusivity means everyone can enjoy the full Korean BBQ experience.
              </p>

              <div className="flex items-center gap-4 bg-neutral-50 p-5">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-neutral-700 font-medium">
                  Halal Beef &amp; Chicken Available
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <img
              src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=85&auto=format"
              alt="Premium grilled meats"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
