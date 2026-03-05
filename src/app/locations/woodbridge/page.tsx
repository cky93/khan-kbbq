import Link from 'next/link';

export default function WoodbridgePage() {
  return (
    <div className="min-h-screen bg-black page-enter">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[380px] md:h-[55vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=85&auto=format"
          alt="Khan Korean Grill & Bar Woodbridge"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 pb-10 md:pb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back
          </Link>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-2">
            Woodbridge
          </h1>
          <p className="text-lg md:text-xl text-white/50">Merchant Plaza</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-14 md:mb-16">
          {/* Call */}
          <a
            href="tel:+12028092104"
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
              <p className="text-base md:text-lg text-white/60 font-semibold">(202) 809-2104</p>
            </div>
          </a>

          {/* Reserve */}
          <a
            href="https://www.yelp.com/biz/khan-korean-grill-and-bar-woodbridge"
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

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {/* Address & Hours */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-sm font-bold text-white/40 uppercase tracking-[0.15em] mb-4">Address</h3>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                4179 Merchant Plaza<br />
                Woodbridge, VA 22192
              </p>
            </div>

            <div>
              <h3 className="font-heading text-sm font-bold text-white/40 uppercase tracking-[0.15em] mb-4">Hours</h3>
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
              href="https://www.google.com/maps/dir/?api=1&destination=4179+Merchant+Plaza+Woodbridge+VA+22192"
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

          {/* Map */}
          <div className="aspect-square md:aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.5!2d-77.3!3d38.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMerchant+Plaza!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Woodbridge location map"
            />
          </div>
        </div>

        {/* Menu CTA */}
        <div className="text-center mt-14 md:mt-16 pt-10 md:pt-12 border-t border-white/[0.06]">
          <Link
            href="/menu"
            className="btn-primary text-base md:text-lg px-12 py-4"
          >
            View Our Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
