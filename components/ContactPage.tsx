import React, { useEffect } from 'react';
import { Contact } from './Contact';
import { ScrollReveal } from './ScrollReveal';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Get a Free Stump Grinding Quote | Hungry Beaver Phoenix';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Ready to get rid of that stump? Contact Hungry Beaver Stump Grinding for a free, no-obligation quote anywhere in the Phoenix Valley.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://hungrybeaverstumpgrinding.com/contact');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Get a Free Stump Grinding Quote | Hungry Beaver Phoenix');
    if (ogDesc) ogDesc.setAttribute('content', 'Ready to get rid of that stump? Contact Hungry Beaver Stump Grinding for a free, no-obligation quote anywhere in the Phoenix Valley.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://hungrybeaverstumpgrinding.com/contact');
  }, []);

  return (
    <div className="pt-2">
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
};
