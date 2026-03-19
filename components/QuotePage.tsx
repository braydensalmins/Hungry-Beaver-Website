import React, { useEffect } from 'react';
import { Contact } from './Contact';
import { ScrollReveal } from './ScrollReveal';

export const QuotePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Get a Free Stump Grinding Quote | Hungry Beaver Phoenix';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Request a free, no-obligation stump grinding quote anywhere in the Phoenix Valley. Fast response, upfront pricing, no surprises.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://hungrybeaverstumpgrinding.com/quote');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Get a Free Stump Grinding Quote | Hungry Beaver Phoenix');
    if (ogDesc) ogDesc.setAttribute('content', 'Request a free, no-obligation stump grinding quote anywhere in the Phoenix Valley. Fast response, upfront pricing, no surprises.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://hungrybeaverstumpgrinding.com/quote');
  }, []);

  return (
    <div className="pt-0">
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
};
