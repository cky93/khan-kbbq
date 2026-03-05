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

        {/* Social & Menu CTA */}
        <div className="mt-14 md:mt-16 pt-10 md:pt-12 border-t border-white/[0.06]">
          <div className="flex items-center justify-center gap-5 mb-10">
            <a
              href="https://www.instagram.com/khankbbq_woodbridge/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/50 hover:text-amber-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span className="text-sm font-medium">@khankbbq_woodbridge</span>
            </a>
            <a
              href="https://www.yelp.com/biz/khan-korean-grill-and-bar-woodbridge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/50 hover:text-amber-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308c.564-.838 1.842-.622 2.082.35l.6 2.455c.24.97-.24 1.42-1.416 1.7zm-8.432 5.78l1.065-5.244c.192-.948 1.584-1.11 2.04-.245l2.37 4.456c.457.87-.17 1.9-1.078 1.685l-3.437-.896c-.96-.248-1.2-.808-.96-1.756zm-2.464-7.41L4.77 13.6c-.918.494-1.898-.384-1.572-1.41l.84-2.583c.275-.852 1.238-1.19 1.91-.67l3.66 2.742c.75.564.606 1.64-.346 2.284zm.83 8.652l-1.1-5.116c-.204-.954.956-1.556 1.692-.89l3.78 3.436c.728.672.34 1.886-.636 1.96l-2.805.163c-.975.082-1.547-.404-1.93-1.553zm-.68-13.014l-.966 5.14c-.18.946-1.46 1.19-1.878.36l-2.17-4.307C4 6.96 4.757 5.973 5.65 6.12l3.41.565c.955.158 1.34.894.394 1.917z"/>
              </svg>
              <span className="text-sm font-medium">Yelp</span>
            </a>
          </div>
          <div className="text-center">
            <Link
              href="/menu"
              className="btn-primary text-base md:text-lg px-12 py-4"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
