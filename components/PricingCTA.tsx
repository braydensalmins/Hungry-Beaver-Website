import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Ruler, MessageSquare, Camera } from 'lucide-react';
import { Button } from './Button';
import { PRICING_TIERS, PHONE_NUMBER } from '../constants';
import { StumpDiagram } from './StumpDiagram';

export const PricingCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Transparent Pricing</h2>
          <h3 className="text-4xl font-display font-bold text-beaver-dark">NO HIDDEN FEES. JUST HONEST WORK.</h3>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We price by the inch. Measure your stump at the widest point where it touches the ground (including visible surface roots) to get an idea of the cost.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Pricing Tiers */}
          <div>
            <div className="space-y-6">
              {PRICING_TIERS.map((tier) => (
                <div key={tier.name} className="bg-beaver-cream p-6 border-l-4 border-beaver-dark group hover:bg-gray-100 transition-colors shadow-sm">
                  <div className="flex justify-between items-baseline mb-3">
                    <h4 className="text-xl font-bold font-display uppercase">{tier.name}</h4>
                    <span className="text-2xl font-bold text-beaver-orange">{tier.price}</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-beaver-dark rounded-full mr-2 group-hover:bg-beaver-orange transition-colors"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Text for Quote Card Removed */}
          </div>

          {/* Right Column: Diagram */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Ruler size={100} className="text-white" />
             </div>
             <h4 className="text-white font-bold uppercase tracking-wider mb-6 flex items-center gap-2 relative z-10">
               <Ruler size={18} className="text-beaver-orange" /> How to Measure
             </h4>
             <div className="bg-gray-800/50 rounded-lg p-2 relative z-10">
               <StumpDiagram />
             </div>
             <p className="text-gray-400 text-sm mt-4 text-center relative z-10">
               Measure the widest point at ground level, including roots.
             </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-beaver-dark text-white p-10 rounded-xl shadow-xl">
          <h3 className="text-2xl font-display font-bold mb-4">Ready to get an exact number?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Use our interactive calculator to estimate your project cost in seconds. No email required.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => navigate('/calculator')}
            className="flex items-center gap-2 mx-auto text-lg px-8 py-4"
          >
            <Calculator size={24} />
            Calculate Your Cost Now
          </Button>
        </div>

      </div>
    </section>
  );
};
