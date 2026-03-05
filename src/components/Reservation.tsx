import { ScrollReveal } from './ScrollReveal';

export function Reservation() {
  return (
    <section id="reservation" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85&auto=format"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Blue edge lines */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-accent/30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/30" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-accent/30" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-accent/30" />
      </div>

      <div className="relative z-20 max-w-3xl mx-auto text-center px-6">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Join Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Reserve Your Table
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mb-8" />
          <p className="text-base md:text-lg text-white/50 leading-relaxed mb-12 max-w-xl mx-auto">
            Secure your spot for an unforgettable Korean BBQ experience. Walk-ins
            are welcome, but reservations are recommended for parties of 4 or more.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="https://www.yelp.com/reservations/khan-korean-grill-and-bar-fairfax"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Reserve on Yelp
            </a>
            <a href="tel:+12409567540" className="btn-outline">
              Call to Reserve
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border-t border-white/10 pt-8">
            <p className="text-xs text-white/30 mb-2 tracking-wide font-semibold uppercase">
              Private Events &amp; Parties
            </p>
            <p className="text-sm text-white/40 font-medium">
              Groups of 6+ welcome. Contact us for event reservations.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
