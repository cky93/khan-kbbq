import { ScrollReveal } from '@/components/ScrollReveal';

export default function ReservationPage() {
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
        {/* Action buttons */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20">
            <a
              href="https://www.yelp.com/reservations/khan-korean-grill-and-bar-fairfax"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-center text-base md:text-lg"
            >
              Reserve on Yelp
            </a>
            <a href="tel:+12409567540" className="btn-outline w-full sm:w-auto text-center text-base md:text-lg">
              Call to Reserve
            </a>
          </div>
        </ScrollReveal>

        {/* Location info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-14 md:mb-16">
          <ScrollReveal delay={1}>
            <div className="p-8 md:p-10 border-l border-white/[0.1]">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4">
                Fairfax
              </h3>
              <p className="text-sm md:text-base text-white/55 mb-1">Fair Oaks Mall</p>
              <div className="space-y-1.5 mt-4">
                <p className="text-base md:text-lg text-white/65">11724 Fair Oaks Mall, Ste K237</p>
                <p className="text-base md:text-lg text-white/65">Fairfax, VA 22033</p>
                <a href="tel:+12409567540" className="text-lg md:text-xl text-white/85 font-semibold hover:text-white transition-colors block mt-3">
                  (240) 956-7540
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="p-8 md:p-10 border-l border-white/[0.1]">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4">
                Woodbridge
              </h3>
              <p className="text-sm md:text-base text-white/55 mb-1">Merchant Plaza</p>
              <div className="space-y-1.5 mt-4">
                <p className="text-base md:text-lg text-white/65">4179 Merchant Plaza</p>
                <p className="text-base md:text-lg text-white/65">Woodbridge, VA 22192</p>
                <a href="tel:+12028092104" className="text-lg md:text-xl text-white/85 font-semibold hover:text-white transition-colors block mt-3">
                  (202) 809-2104
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Additional info */}
        <ScrollReveal>
          <div className="border-t border-white/[0.06] pt-12 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div>
                <h4 className="font-heading text-base md:text-lg font-bold text-white/70 mb-3">
                  Group Dining
                </h4>
                <p className="text-base md:text-lg text-white/60">
                  Parties of 6+ welcome. Contact us for group reservations.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-base md:text-lg font-bold text-white/70 mb-3">
                  Private Events
                </h4>
                <p className="text-base md:text-lg text-white/60">
                  Birthday parties, corporate events, and celebrations.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-base md:text-lg font-bold text-white/70 mb-3">
                  Hours
                </h4>
                <p className="text-base md:text-lg text-white/60">
                  Mon&ndash;Sun: 11 AM &ndash; 11 PM<br />
                  Fri &amp; Sat: Until 12 AM
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
