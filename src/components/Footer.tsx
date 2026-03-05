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
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/khankbbq_fairoaks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-400/70 hover:text-pink-400 transition-colors"
                  aria-label="Instagram Fairfax"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span className="text-xs font-medium">Fairfax</span>
                </a>
                <a
                  href="https://www.instagram.com/khankbbq_woodbridge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-400/70 hover:text-pink-400 transition-colors"
                  aria-label="Instagram Woodbridge"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span className="text-xs font-medium">Woodbridge</span>
                </a>
              </div>
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
              <a href="https://www.instagram.com/khankbbq_fairoaks/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-pink-400/70 hover:text-pink-400 transition-colors mt-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                @khankbbq_fairoaks
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
              <a href="https://www.instagram.com/khankbbq_woodbridge/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-pink-400/70 hover:text-pink-400 transition-colors mt-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                @khankbbq_woodbridge
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
