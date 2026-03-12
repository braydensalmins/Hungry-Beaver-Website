import React, { useEffect } from 'react';
import { Contact } from './Contact';
import { ScrollReveal } from './ScrollReveal';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Hungry Beaver Stump Grinding — Phoenix';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Contact Hungry Beaver Stump Grinding at 480-283-4560. Serving 14+ cities across the Greater Phoenix Valley.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://hungrybeaverstumpgrinding.com/contact');
  }, []);

  return (
    <div className="pt-24">
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
};
