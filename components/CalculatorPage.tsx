import React, { useEffect } from 'react';
import { PricingCalculator } from './PricingCalculator';
import { HowToMeasure } from './HowToMeasure';
import { ScrollReveal } from './ScrollReveal';
import { PRICING_ROWS } from '../constants';

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
            Use the guide below to get a ballpark, then plug in your numbers for a specific estimate.
          </p>
        </div>
      </div>

      {/* Pricing Guide Table */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Pricing Guide</h2>
            <h3 className="text-3xl font-display font-bold text-beaver-dark">WHAT TO EXPECT</h3>
          </div>
          <div className="overflow-x-auto mb-4 shadow-sm border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-beaver-dark text-white uppercase text-xs tracking-wider">
                  <th className="px-5 py-4 font-bold w-1/4">Stump Size</th>
                  <th className="px-5 py-4 font-bold w-1/5">Estimated Cost</th>
                  <th className="px-5 py-4 font-bold w-1/3">Major Cost Factors</th>
                  <th className="px-5 py-4 font-bold">The Hungry Beaver Standard</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_ROWS.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-beaver-cream'}>
                    <td className="px-5 py-5 font-bold text-beaver-dark text-sm align-top">{row.size}</td>
                    <td className="px-5 py-5 align-top">
                      <span className="text-beaver-orange font-bold text-lg">{row.range}</span>
                    </td>
                    <td className="px-5 py-5 align-top">
                      <ul className="space-y-1">
                        {row.factors.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-beaver-orange rounded-full flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-5 py-5 align-top text-sm text-gray-700 italic">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 italic px-1">
            *Pricing varies based on access, depth, and site conditions. Final price determined at on-site or virtual quote.
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
