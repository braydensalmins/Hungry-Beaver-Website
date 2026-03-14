import React, { useEffect } from 'react';
import { Contact } from './Contact';
import { ScrollReveal } from './ScrollReveal';

export const QuotePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Request a Free Quote | Hungry Beaver Stump Grinding';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Request a free stump grinding quote from Hungry Beaver. Same-day estimates for Phoenix, Scottsdale, Mesa, Tempe, Gilbert, Chandler, and more.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://hungrybeaverstumpgrinding.com/quote');
  }, []);

  return (
    <div className="pt-0">
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
};
