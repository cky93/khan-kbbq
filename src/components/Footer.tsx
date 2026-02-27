export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/khanlogo-icon.png?v=6"
                alt="Khan Korean Grill & Bar"
                width={56}
                height={56}
                className="object-contain opacity-70 h-14 w-14"
              />
              <div>
                <span className="font-heading text-xl text-white font-bold block tracking-wide">
                  Khan
                </span>
                <span className="text-xs text-white/50 font-normal tracking-wider uppercase">
                  Korean Grill &amp; Bar
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-8">
              Premium Korean BBQ with AYCE, Combo platters, and Halal options in Northern Virginia.
            </p>
            {/* Social */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/khankbbq_fairoaks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/khan-korean-grill-and-bar-fairfax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-amber-500 transition-colors"
                aria-label="Yelp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308c.564-.838 1.842-.622 2.082.35l.6 2.455c.24.97-.24 1.42-1.416 1.7zm-8.432 5.78l1.065-5.244c.192-.948 1.584-1.11 2.04-.245l2.37 4.456c.457.87-.17 1.9-1.078 1.685l-3.437-.896c-.96-.248-1.2-.808-.96-1.756zm-2.464-7.41L4.77 13.6c-.918.494-1.898-.384-1.572-1.41l.84-2.583c.275-.852 1.238-1.19 1.91-.67l3.66 2.742c.75.564.606 1.64-.346 2.284zm.83 8.652l-1.1-5.116c-.204-.954.956-1.556 1.692-.89l3.78 3.436c.728.672.34 1.886-.636 1.96l-2.805.163c-.975.082-1.547-.404-1.93-1.553zm-.68-13.014l-.966 5.14c-.18.946-1.46 1.19-1.878.36l-2.17-4.307C4 6.96 4.757 5.973 5.65 6.12l3.41.565c.955.158 1.34.894.394 1.917z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Fairfax */}
          <div>
            <h3 className="font-heading text-base text-white/70 mb-5 font-bold">
              Fairfax
            </h3>
            <div className="space-y-2">
              <p className="text-base text-white/55">11724 Fair Oaks Mall, Ste K237</p>
              <p className="text-base text-white/55">Fairfax, VA 22033</p>
              <a href="tel:+12409567540" className="text-base text-white/75 font-bold hover:text-amber-400 transition-colors block mt-3">
                (240) 956-7540
              </a>
            </div>
          </div>

          {/* Woodbridge */}
          <div>
            <h3 className="font-heading text-base text-white/70 mb-5 font-bold">
              Woodbridge
            </h3>
            <div className="space-y-2">
              <p className="text-base text-white/55">4179 Merchant Plaza</p>
              <p className="text-base text-white/55">Woodbridge, VA 22192</p>
              <a href="tel:+12028092104" className="text-base text-white/75 font-bold hover:text-amber-400 transition-colors block mt-3">
                (202) 809-2104
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-base text-white/70 mb-5 font-bold">
              Hours
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-white/50 mb-1 font-medium">Mon&ndash;Thu, Sun</p>
                <p className="text-base text-white/65">11 AM &ndash; 11 PM</p>
              </div>
              <div>
                <p className="text-sm text-white/50 mb-1 font-medium">Fri &amp; Sat</p>
                <p className="text-base text-white/65">11 AM &ndash; 12 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/40 font-medium">
            &copy; {currentYear} Khan Korean Grill &amp; Bar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
