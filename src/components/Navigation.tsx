'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/menu', label: 'Menu' },
  { href: '/locations', label: 'Locations' },
  { href: '/reservation', label: 'Reserve' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-black/95 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center gap-3 group">
              <img
                src="/khanlogo-icon.png?v=6"
                alt="Khan Korean Grill & Bar"
                width={56}
                height={56}
                className="object-contain opacity-90 group-hover:opacity-100 transition-opacity h-14 w-14"
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-white tracking-wide">
                  Khan
                </span>
                <span className="text-xs text-white/60 font-normal -mt-0.5 tracking-wider uppercase">
                  Korean Grill &amp; Bar
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                    pathname === link.href
                      ? 'text-white'
                      : 'text-white/65 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+12409567540"
                className="text-sm font-bold px-6 py-2.5 border border-white/20 text-white/80 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider rounded-sm"
              >
                (240) 956-7540
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[4px] bg-white' : 'bg-white/60'
                }`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[4px] bg-white' : 'bg-white/60'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu - full screen */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-4xl font-black tracking-wider uppercase transition-colors ${
                pathname === link.href ? 'text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-10 h-px bg-amber-500/20 mt-2" />
          <a href="tel:+12409567540" className="btn-outline mt-2 text-lg">
            (240) 956-7540
          </a>
        </div>
      </div>
    </>
  );
}
