import React, { useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { PHONE_NUMBER } from '../constants';

const TRUST_CARDS = [
  { heading: 'Locally Owned', sub: '& Family Operated' },
  { heading: 'Commercial-Grade', sub: 'Equipment on Every Job' },
  { heading: 'Licensed & Insured', sub: 'Phoenix Valley' },
];

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Hungry Beaver Stump Grinding Phoenix AZ';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', "Hungry Beaver Stump Grinding is a family-owned stump grinding company serving the Phoenix Valley. Learn our story and why we're the Valley's stump specialists.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://hungrybeaverstumpgrinding.com/about');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', 'About Us | Hungry Beaver Stump Grinding Phoenix AZ');
    if (ogDesc) ogDesc.setAttribute('content', "Hungry Beaver Stump Grinding is a family-owned stump grinding company serving the Phoenix Valley. Learn our story and why we're the Valley's stump specialists.");
    if (ogUrl) ogUrl.setAttribute('content', 'https://hungrybeaverstumpgrinding.com/about');
  }, []);

  return (
    <div className="min-h-screen bg-beaver-cream">

      {/* Dark hero header */}
      <div className="bg-beaver-dark text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-display font-bold uppercase leading-tight">
            Two Guys, One Stump Grinder, and a Mission to Grind Every Stump in the Valley
          </h1>
        </div>
      </div>

      {/* Story section with team photo */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/About-Us-1.jpeg"
                  alt="Hungry Beaver Stump Grinding — father and son team"
                  className="w-full max-w-md h-auto object-cover border-4 border-beaver-orange shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Our Story</h2>
                <div className="w-24 h-2 bg-beaver-orange mb-10"></div>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    Hungry Beaver Stump Grinding started the way most good ideas do — a YouTube video, a
                    conversation between a father and son, and a decision to bet on ourselves.
                  </p>
                  <p>
                    We were both done with the 9-5. We wanted to build something real, work with our hands,
                    and actually see the results of our effort at the end of every day. So we did the
                    research, bought a commercial-grade Bandit grinder, and got to work.
                  </p>
                  <p>
                    What started as an idea turned into Phoenix Valley's stump grinding specialists. We're
                    locally owned, family operated, fully insured, and we show up on time. We use
                    commercial-grade equipment on every single job — not rental machines — and we don't
                    leave until the area is clean.
                  </p>
                  <p>
                    We're not a big tree company where stump grinding is an afterthought. It's all we do.
                    And because of that, we're better at it.
                  </p>
                  <p>
                    Every job we do puts us one step closer to the life we're building. When you hire
                    Hungry Beaver, you're not calling a call center — you're texting the guys who own the
                    machine and show up to every job.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Action photos */}
      <ScrollReveal>
        <section className="py-12 bg-beaver-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-beaver-orange font-bold tracking-widest uppercase text-sm mb-4">On the Job</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="/About-Us-2.jpeg"
                alt="Hungry Beaver stump grinding crew at work"
                className="w-full h-72 object-cover shadow-md"
              />
              <img
                src="/About-Us-3.jpeg"
                alt="Hungry Beaver commercial-grade stump grinder in action"
                className="w-full h-72 object-cover shadow-md"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Trust cards */}
      <ScrollReveal>
        <section className="py-16 bg-beaver-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TRUST_CARDS.map((card) => (
                <div key={card.heading} className="bg-gray-800 p-8 border-b-4 border-beaver-orange text-center">
                  <div className="text-xl font-display font-bold uppercase text-white leading-tight">
                    {card.heading}
                  </div>
                  <div className="text-beaver-orange font-bold uppercase tracking-wide text-sm mt-1">
                    {card.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA section */}
      <ScrollReveal>
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-beaver-dark uppercase mb-6">
              Ready to Get That Stump Gone?
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Text us a photo at{' '}
              <a href={`tel:${PHONE_NUMBER}`} className="text-beaver-orange font-bold hover:underline">
                {PHONE_NUMBER}
              </a>{' '}
              and we'll have a price to you in minutes.
            </p>
            <a
              href={`sms:${PHONE_NUMBER}`}
              className="inline-block bg-beaver-orange text-beaver-dark font-display font-bold text-lg px-10 py-4 uppercase tracking-wide hover:bg-orange-500 transition-colors shadow-lg"
            >
              Text Us a Photo
            </a>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
};
