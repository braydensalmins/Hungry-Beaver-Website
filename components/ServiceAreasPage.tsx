import React, { useEffect } from 'react';
import { ServiceAreas } from './ServiceAreas';
import { ScrollReveal } from './ScrollReveal';

export const ServiceAreasPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Service Areas | Hungry Beaver Stump Grinding';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Hungry Beaver Stump Grinding serves Phoenix, Scottsdale, Mesa, Tempe, Gilbert, Chandler, Glendale, Peoria, Surprise, Queen Creek, and more across the Greater Phoenix Valley.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://hungrybeaverstumpgrinding.com/service-areas');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Service Areas | Hungry Beaver Stump Grinding');
    if (ogDesc) ogDesc.setAttribute('content', 'Hungry Beaver Stump Grinding serves Phoenix, Scottsdale, Mesa, Tempe, Gilbert, Chandler, Glendale, Peoria, Surprise, Queen Creek, and more across the Greater Phoenix Valley.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://hungrybeaverstumpgrinding.com/service-areas');
  }, []);

  return (
    <div className="min-h-screen bg-beaver-cream">
      <div className="bg-beaver-dark text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Service Areas</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proudly serving 14+ cities across the Greater Phoenix Valley.
          </p>
        </div>
      </div>
      <ScrollReveal>
        <ServiceAreas />
      </ScrollReveal>
    </div>
  );
};
