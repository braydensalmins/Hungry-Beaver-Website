import React from 'react';
import { Settings, Shield, Users, DollarSign } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const points = [
    { icon: Settings, text: "Bandit 2550XP Power" },
    { icon: Shield, text: "Guards + Clean-up Options" },
    { icon: Users, text: "Respectful Crews" },
    { icon: DollarSign, text: "Transparent Pricing" }
  ];

  return (
    <div className="bg-gray-800 border-b border-gray-700 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-300">
              <point.icon className="text-beaver-orange w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <span className="font-bold uppercase tracking-wider text-xs md:text-sm">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};