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
