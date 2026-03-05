'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

const values = [
  {
    title: 'Halal Certified',
    desc: 'All beef and chicken are halal-certified, so every guest can enjoy our BBQ with confidence.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Premium Quality',
    desc: 'We source the finest cuts with perfect marbling — brisket, galbi, Khan steak, and more.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Full Bar',
    desc: 'From soju popsicle cocktails and beer towers to wine and classic mixed drinks.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'Community First',
    desc: 'We proudly serve Northern Virginia with warm hospitality, great food, and a welcoming atmosphere for all.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const positions = [
  'Server',
  'Host / Hostess',
  'Line Cook',
  'Grill Cook',
  'Bartender',
  'Busser',
  'Management',
];

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    location: '',
    availability: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Khan Application] ${formData.position} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPosition: ${formData.position}\nPreferred Location: ${formData.location}\nAvailability: ${formData.availability}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:khanfairoaksmall@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black page-enter">
      {/* Hero Banner */}
      <div className="relative h-[45vh] min-h-[360px] md:h-[50vh] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85&auto=format"
          alt="Restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        <div className="relative z-10 text-center px-6">
          <p className="text-sm md:text-base font-medium tracking-[0.15em] uppercase text-white/55 mb-4">
            Our Story
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            About Khan
          </h1>
          <div className="w-16 h-[1px] bg-white/20 mx-auto mt-8" />
        </div>
      </div>

      {/* Brand Story */}
      <section className="max-w-4xl mx-auto px-5 md:px-12 py-16 md:py-20">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
              Premium Korean BBQ,<br />Right Here in Northern Virginia
            </h2>
            <div className="space-y-6 text-base md:text-lg text-white/65 leading-relaxed max-w-3xl mx-auto">
              <p>
                Khan Korean Grill &amp; Bar brings authentic, all-you-can-eat Korean BBQ to Northern Virginia.
                Every visit is a hands-on grilling experience at your table — choose from premium cuts of beef,
                pork, chicken, and seafood, all prepared fresh and cooked to your liking over open flame.
              </p>
              <p>
                We take pride in sourcing the finest meats with the right marbling and flavor.
                All of our beef and chicken options are <strong className="text-white/80">halal-certified</strong>,
                ensuring every guest can enjoy our BBQ with complete confidence.
              </p>
              <p>
                Pair your meal with our full bar — from soju popsicle cocktails and beer towers
                to classic mixed drinks and wine — all served in a modern, vibrant atmosphere with
                great music and warm hospitality.
              </p>
              <p>
                With locations in Fairfax and Woodbridge and more on the way,
                Khan is proud to be a go-to destination for Korean BBQ lovers across the DMV.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06]">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3}>
              <div className="bg-black py-10 px-6 md:py-12 md:px-8">
                <div className="text-amber-500/70 mb-4">{v.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-base md:text-lg text-white/55 leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-5 md:px-12">
        <div className="h-[1px] bg-white/[0.06]" />
      </div>

      {/* Join Our Crew */}
      <section className="max-w-4xl mx-auto px-5 md:px-12 py-16 md:py-20">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-14">
            <p className="text-sm md:text-base font-medium tracking-[0.15em] uppercase text-white/50 mb-4">
              Careers
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Join Our Crew
            </h2>
            <p className="text-base md:text-lg text-white/55 max-w-lg mx-auto">
              We&apos;re always looking for passionate people to join the Khan family.
              If you love great food and great energy, we&apos;d love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal>
            <div className="text-center py-16 md:py-20 bg-white/[0.03] rounded-lg border border-white/[0.06]">
              <div className="text-4xl mb-4">&#10003;</div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                Application Received
              </h3>
              <p className="text-base md:text-lg text-white/55 max-w-md mx-auto">
                Thanks for your interest in joining the Khan crew!
                We&apos;ll review your application and reach out if there&apos;s a match.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/25 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                    Email <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/25 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone + Position */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/60 mb-2">
                    Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/25 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 outline-none transition-colors"
                    placeholder="(000) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-white/60 mb-2">
                    Position <span className="text-amber-500">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/10 rounded px-4 py-3 text-white focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-black text-white/50">Select position</option>
                    {positions.map((p) => (
                      <option key={p} value={p} className="bg-black text-white">{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location + Availability */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-white/60 mb-2">
                    Preferred Location <span className="text-amber-500">*</span>
                  </label>
                  <select
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/10 rounded px-4 py-3 text-white focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-black text-white/50">Select location</option>
                    <option value="fairfax" className="bg-black text-white">Fairfax</option>
                    <option value="woodbridge" className="bg-black text-white">Woodbridge</option>
                    <option value="either" className="bg-black text-white">Either location</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-white/60 mb-2">
                    Availability
                  </label>
                  <input
                    type="text"
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/25 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 outline-none transition-colors"
                    placeholder="e.g. Weekdays, evenings"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
                  Tell us about yourself
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.04] border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/25 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 outline-none transition-colors resize-none"
                  placeholder="Experience, why you'd like to work with us, etc."
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="btn-primary text-base md:text-lg px-12 py-4"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </ScrollReveal>
        )}
      </section>
    </div>
  );
}
