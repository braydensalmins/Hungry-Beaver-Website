import React from 'react';
import { Hero } from './Hero';
import { WhyUs } from './WhyUs';
import { Services } from './Services';
import { PricingCTA } from './PricingCTA';
import { Contact } from './Contact';
import { ScrollReveal } from './ScrollReveal';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Why Us Proof Strip */}
      <WhyUs />
      
      <ScrollReveal>
        <Services />
      </ScrollReveal>

      {/* Pricing CTA Section */}
      <ScrollReveal>
        <PricingCTA />
      </ScrollReveal>
    </>
  );
};
