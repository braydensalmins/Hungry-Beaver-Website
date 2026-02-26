import React from 'react';
import { Ruler, Check, X } from 'lucide-react';
import { Button } from './Button';
import { PHONE_NUMBER } from '../constants';
import { StumpDiagram } from './StumpDiagram';

export const HowToMeasure: React.FC = () => {
  return (
    <section id="measure" className="py-20 bg-gray-900 text-white border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Diagram - SVG Implementation */}
          <div className="relative flex flex-col items-center py-10 order-2 lg:order-1">
             <StumpDiagram />

             <div className="w-full max-w-lg space-y-4 mt-2 px-4">
                <div className="flex items-start gap-4 p-4 bg-gray-800 rounded border border-gray-700">
                  <X className="text-red-500 shrink-0 mt-1" />
                  <p className="text-gray-300 text-sm"><strong className="text-white block mb-1">Don't measure just the top.</strong> Measuring only the flat cut face will result in a quote that is too low, and the price will change when we arrive.</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-800 rounded border border-green-900/50">
                  <Check className="text-green-500 shrink-0 mt-1" />
                  <p className="text-gray-300 text-sm"><strong className="text-white block mb-1">Do measure at ground level.</strong> Measure the widest point where the stump and roots enter the ground.</p>
                </div>
             </div>
          </div>

          {/* Instructional Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-beaver-orange font-bold uppercase tracking-wider mb-4">
              <Ruler size={20} /> Accuracy Matters
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">HOW TO MEASURE PROPERLY</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Most pricing disputes happen because of measuring the "cut face" instead of the "root flare" (if there is one). The machine has to grind everything that sticks out of the ground to make it flat.
            </p>

            <Button variant="secondary" onClick={() => window.location.href = `sms:${PHONE_NUMBER}`}>
              Still not sure? Text us a photo
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};