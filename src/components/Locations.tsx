import { ScrollReveal } from './ScrollReveal';

export function Locations() {
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
    },
  ];

  return (
    <section id="locations" className="section-light relative">
      {/* Blue edge lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/15" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-accent/15" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              Visit Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Our Locations
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {locations.map((loc, i) => (
            <ScrollReveal key={loc.name} delay={(i + 1) as 1 | 2}>
              <div>
                {/* Map */}
                <div className="aspect-[4/3] bg-neutral-100 mb-8 overflow-hidden">
                  <iframe
                    src={loc.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${loc.name} location map`}
                  />
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-1 uppercase tracking-wide">
                      {loc.name}
                    </h3>
                    <p className="text-xs text-neutral-400 tracking-wide font-medium uppercase">
                      {loc.label}
                    </p>
                  </div>

                  <div className="w-6 h-px bg-accent/30" />

                  <div className="space-y-1">
                    <p className="text-sm text-neutral-600">{loc.address}</p>
                    <p className="text-sm text-neutral-600">{loc.city}</p>
                    <a
                      href={loc.phoneHref}
                      className="text-sm text-neutral-800 font-semibold hover:text-accent transition-colors inline-block mt-1"
                    >
                      {loc.phone}
                    </a>
                  </div>

                  <div className="space-y-1 pt-2">
                    <p className="text-xs text-accent tracking-wide mb-2 font-semibold uppercase">
                      Hours
                    </p>
                    <p className="text-sm text-neutral-600">
                      Mon&ndash;Thu, Sun: {loc.hours.weekday}
                    </p>
                    <p className="text-sm text-neutral-600">
                      Fri&ndash;Sat: {loc.hours.weekend}
                    </p>
                  </div>

                  <a
                    href={loc.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-neutral-900 transition-all duration-300 mt-4 font-semibold uppercase tracking-wide"
                  >
                    Get Directions
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
