import React, { useEffect } from 'react';
import { Hero } from './Hero';
import { WhyUs } from './WhyUs';
import { Services } from './Services';
import { Contractors } from './Contractors';
import { PricingCTA } from './PricingCTA';
import { Contact } from './Contact';
import { ScrollReveal } from './ScrollReveal';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Stump Grinding Phoenix AZ | Hungry Beaver Stump Grinding';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', "Phoenix's stump grinding specialists. Fast, affordable, and mess-free. Residential, commercial & municipal service across the Valley. Get a free quote today.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://hungrybeaverstumpgrinding.com/');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Stump Grinding Phoenix AZ | Hungry Beaver Stump Grinding');
    if (ogDesc) ogDesc.setAttribute('content', "Phoenix's stump grinding specialists. Fast, affordable, and mess-free. Residential, commercial & municipal service across the Valley. Get a free quote today.");
    if (ogUrl) ogUrl.setAttribute('content', 'https://hungrybeaverstumpgrinding.com/');
  }, []);

  return (
    <>
      <Hero />

      {/* Why Us Proof Strip */}
      <WhyUs />

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <Contractors />
      </ScrollReveal>

      {/* Pricing CTA Section */}
      <ScrollReveal>
        <PricingCTA />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
};
