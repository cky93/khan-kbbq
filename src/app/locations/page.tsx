import { ScrollReveal } from '@/components/ScrollReveal';

const locations = [
  {
    name: 'Fairfax',
    label: 'Fair Oaks Mall',
    address: '11724 Fair Oaks Mall, Ste K237',
    city: 'Fairfax, VA 22033',
    phone: '(240) 956-7540',
    phoneHref: 'tel:+12409567540',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.5!2d-77.3574028!3d38.8632539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e84c71a5e4d%3A0x0!2sFair+Oaks+Mall!5e0!3m2!1sen!2sus!4v1',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=11724+Fair+Oaks+Mall+Ste+K237+Fairfax+VA+22033',
    hours: { weekday: '11 AM \u2013 11 PM', weekend: '11 AM \u2013 12 AM' },
    instagram: 'https://www.instagram.com/khankbbq_fairoaks/',
    instagramHandle: '@khankbbq_fairoaks',
  },
  {
    name: 'Woodbridge',
    label: 'Merchant Plaza',
    address: '4179 Merchant Plaza',
    city: 'Woodbridge, VA 22192',
    phone: '(202) 809-2104',
    phoneHref: 'tel:+12028092104',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.5!2d-77.3!3d38.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMerchant+Plaza!5e0!3m2!1sen!2sus!4v1',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=4179+Merchant+Plaza+Woodbridge+VA+22192',
    hours: { weekday: '11 AM \u2013 11 PM', weekend: '11 AM \u2013 12 AM' },
    instagram: 'https://www.instagram.com/khankbbq_woodbridge/',
    instagramHandle: '@khankbbq_woodbridge',
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-black page-enter">
      {/* Hero banner */}
      <div className="relative h-[40vh] min-h-[300px] md:min-h-[320px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85&auto=format"
          alt="Restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        <div className="relative z-10 text-center px-6">
          <p className="text-sm md:text-base font-medium tracking-[0.15em] uppercase text-white/55 mb-4">
            Visit Us
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Our Locations
          </h1>
          <div className="w-16 h-[1px] bg-white/20 mx-auto mt-8 mb-6" />
          <p className="text-base md:text-lg text-white/60 max-w-lg mx-auto">
            Two locations in Northern Virginia serving premium Korean BBQ.
          </p>
        </div>
      </div>

      {/* Location cards */}
      <div className="max-w-5xl mx-auto px-5 md:px-12 py-12 md:py-16">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
          {/* Vertical divider between cards */}
          <div className="hidden md:block absolute left-1/2 top-[5%] bottom-[5%] -translate-x-1/2">
            <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          </div>
          {locations.map((loc, i) => (
            <ScrollReveal key={loc.name} delay={(i + 1) as 1 | 2}>
              {/* Mobile horizontal divider before second card */}
              {i === 1 && (
                <div className="md:hidden py-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/40" />
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                    <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/40" />
                  </div>
                </div>
              )}
              <div className="overflow-hidden">
                {/* Map */}
                <div className="aspect-[16/10] bg-neutral-900">
                  <iframe
                    src={loc.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${loc.name} location map`}
                  />
                </div>

                {/* Info */}
                <div className="py-8 md:py-10 space-y-5">
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-1">
                      {loc.name}
                    </h3>
                    <p className="text-sm md:text-base text-white/55">
                      {loc.label}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-base md:text-lg text-white/65">{loc.address}</p>
                    <p className="text-base md:text-lg text-white/65">{loc.city}</p>
                    <a
                      href={loc.phoneHref}
                      className="text-lg md:text-xl text-white/85 font-semibold hover:text-white transition-colors inline-block mt-3"
                    >
                      {loc.phone}
                    </a>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <p className="font-heading text-base md:text-lg font-bold text-white/70 mb-3">
                      Hours
                    </p>
                    <p className="text-base md:text-lg text-white/60">
                      Mon&ndash;Thu, Sun: {loc.hours.weekday}
                    </p>
                    <p className="text-base md:text-lg text-white/60">
                      Fri&ndash;Sat: {loc.hours.weekend}
                    </p>
                  </div>

                  <div className="flex items-center gap-5 pt-2">
                    <a
                      href={loc.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-base text-white/65 hover:text-white transition-all duration-300 font-medium"
                    >
                      Get Directions
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                    <a
                      href={loc.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-pink-400/70 hover:text-pink-400 transition-colors font-medium"
                    >
                      <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      {loc.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
