import React, { useEffect } from 'react';
import { ServiceAreas } from './ServiceAreas';
import { ScrollReveal } from './ScrollReveal';

export const ServiceAreasPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Service Areas | Hungry Beaver Stump Grinding';
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-beaver-cream">
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
