import React, { useEffect } from 'react';
import { PricingCalculator } from './PricingCalculator';
import { HowToMeasure } from './HowToMeasure';
import { ScrollReveal } from './ScrollReveal';

export const CalculatorPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Stump Grinding Cost Estimator | Hungry Beaver';
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-beaver-dark text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Estimate Your Cost</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get an instant estimate for your stump removal project. No email required.
          </p>
        </div>
      </div>

      <ScrollReveal>
        <PricingCalculator />
      </ScrollReveal>
      
      <HowToMeasure />
    </div>
  );
};
