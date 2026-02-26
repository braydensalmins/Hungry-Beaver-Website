import React from 'react';
import { COMPANY_NAME } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo / Logo placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-beaver-cream border-4 border-beaver-orange flex items-center justify-center rounded-sm shadow-lg">
              {/* TODO: Replace with owner photo */}
              <img
                src="/beaver-icon.png"
                alt={COMPANY_NAME}
                className="w-40 h-40 object-contain opacity-60"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark mb-6">ABOUT HUNGRY BEAVER</h3>
            <div className="w-24 h-2 bg-beaver-orange mb-8"></div>

            {/* TODO: Replace with real owner bio and story */}
            <p className="text-gray-600 leading-relaxed mb-4">
              Hungry Beaver Stump Grinding is a locally owned and operated stump removal company serving the Greater Phoenix Valley. We're your neighbors — not a national franchise — and we take pride in showing up on time, doing the job right, and leaving your property cleaner than we found it.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {/* TODO: Add owner name, years in business, and personal story */}
              [Owner name and story coming soon.]
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're fully licensed and insured, and we back every job with a straightforward price and zero surprises.
            </p>

            {/* Key stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              <div className="text-center">
                {/* TODO: Fill in real numbers */}
                <div className="text-3xl font-display font-bold text-beaver-orange">—</div>
                <div className="text-sm text-gray-500 uppercase font-bold mt-1">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-beaver-orange">—</div>
                <div className="text-sm text-gray-500 uppercase font-bold mt-1">Stumps Ground</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-beaver-orange">14+</div>
                <div className="text-sm text-gray-500 uppercase font-bold mt-1">Valley Cities</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
