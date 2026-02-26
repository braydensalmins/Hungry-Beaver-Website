import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRICING_TIERS, PHONE_NUMBER } from '../constants';
import { Button } from './Button';
import { Ruler, MessageSquare, Camera, AlertTriangle, Info } from 'lucide-react';

export const PricingCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [diameter, setDiameter] = useState<number | ''>('');
  const [stumpCount, setStumpCount] = useState<number>(1);
  
  const calculateEstimate = (pricePerInch: number) => {
    if (!diameter || typeof diameter !== 'number') return 0;
    const total = diameter * stumpCount * pricePerInch;
    return total;
  };

  const stdEstimateRaw = calculateEstimate(7);
  // const fullEstimateRaw = calculateEstimate(14); // Removed as we are simplifying logic presentation

  // Logic: 
  // 1. If empty -> "Enter diameter"
  // 2. If calculated < 150 -> "Minimum Service: $150"
  // 3. Else -> Show range
  
  let priceDisplay = (
    <span className="text-2xl md:text-3xl text-gray-400 font-display uppercase">
      Enter diameter to estimate
    </span>
  );

  const stdTotal = Math.max(stdEstimateRaw, 150);
  const fullTotal = Math.max(calculateEstimate(14), 150);

  if (diameter && typeof diameter === 'number' && diameter > 0) {
    if (stdEstimateRaw < 150) {
       priceDisplay = (
         <div className="flex flex-col">
            <span className="text-4xl font-display font-bold text-white tracking-tight">
              Minimum: $150
            </span>
            <span className="text-sm text-beaver-orange mt-1 font-bold">
               (Covers small stumps)
            </span>
         </div>
       );
    } else {
       priceDisplay = (
         <span className="text-4xl font-display font-bold text-white tracking-tight">
            ${stdTotal.toFixed(0)} - ${fullTotal.toFixed(0)}
         </span>
       );
    }
  }

  return (
    <section id="pricing" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Context & Alternative CTA */}
          <div>
            <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Transparent Pricing</h2>
            <h3 className="text-4xl font-display font-bold text-beaver-dark mb-6">NO HIDDEN FEES. <br/>JUST HONEST WORK.</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We price by the inch. Measure your stump at the widest point where it touches the ground (including visible surface roots) to get an idea of the cost.
            </p>
            
            <div className="space-y-4">
              {PRICING_TIERS.map((tier) => (
                <div key={tier.name} className="bg-beaver-cream p-5 border-l-4 border-beaver-dark group hover:bg-gray-100 transition-colors">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-bold font-display uppercase">{tier.name}</h4>
                    <span className="text-2xl font-bold text-beaver-orange">{tier.price}</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
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
          </div>

          {/* Right Column: Calculator */}
          <div className="bg-beaver-dark p-6 md:p-10 text-white shadow-2xl relative rounded-sm">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
               <Ruler size={140} />
            </div>
            
            <h4 className="text-2xl font-display font-bold mb-6 text-beaver-orange uppercase flex items-center gap-2">
              <Ruler className="text-white" size={24} /> Quick Estimator
            </h4>
            
            <div className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-300">Total Width (Inches)</label>
                <input 
                  type="number" 
                  min="0"
                  value={diameter}
                  onChange={(e) => setDiameter(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full bg-gray-800 border-2 border-gray-600 text-white p-4 focus:border-beaver-orange focus:outline-none text-xl font-bold placeholder-gray-600 transition-colors rounded-sm"
                  placeholder="e.g. 24"
                />
                <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                  <Info size={12} className="text-beaver-orange" /> Pricing based on total ground-level width
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-300">Number of Stumps</label>
                <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2">
                  {[1, 2, 3, 4, 5].map(num => (
                    <button
                      key={num}
                      onClick={() => setStumpCount(num)}
                      className={`flex-1 py-3 px-4 font-bold border-2 transition-colors rounded-sm min-w-[50px] ${stumpCount === num ? 'bg-beaver-orange border-beaver-orange text-beaver-dark' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-baseline mb-2 text-center sm:text-left">
                  <span className="text-gray-300 uppercase font-bold text-sm tracking-wide mb-2 sm:mb-0">Estimated Range</span>
                  {priceDisplay}
                </div>

                {/* Info Text */}
                <div className="bg-gray-800/50 p-3 rounded mt-4 mb-6">
                   <p className="text-xs text-gray-400 flex items-start gap-2">
                      <AlertTriangle size={12} className="shrink-0 mt-0.5 text-beaver-orange" />
                      <span>Note: Our minimum service fee is $150. Even for small stumps, the truck roll starts at this price.</span>
                   </p>
                </div>
                
                <Button variant="primary" className="w-full" onClick={() => navigate('/quote')}>
                  Request Official Quote
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};