import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export const Contractors: React.FC = () => {
  const valueProps = [
    {
      title: "Reliable Show-Up",
      description: "We treat your job schedule like our own. No-shows and last-minute cancellations cost you money — we understand that and show up when we say we will."
    },
    {
      title: "Volume Pricing",
      description: "The more stumps on a job, the better the per-unit rate. We work with tree services and landscapers on recurring volume arrangements."
    },
    {
      title: "Same-Day Scheduling",
      description: "Text us a photo and we can typically schedule within 24 hours. We keep our calendar flexible to accommodate your project timelines."
    }
  ];

  return (
    <section id="contractors" className="py-24 bg-beaver-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">For Trade Professionals</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">WE'RE YOUR STUMP GRINDING SUBCONTRACTOR</h3>
          <div className="w-24 h-2 bg-beaver-orange mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <div key={index} className="bg-gray-800 p-8 border-b-4 border-beaver-orange">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-beaver-orange w-6 h-6 shrink-0" />
                <h4 className="text-xl font-display font-bold uppercase">{prop.title}</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-300 text-lg mb-6">
            Tree services, landscapers, property managers — let's talk about working together.
          </p>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-block bg-beaver-orange text-beaver-dark font-display font-bold text-lg px-10 py-4 uppercase tracking-wide hover:bg-orange-500 transition-colors shadow-lg"
          >
            Call to Discuss a Partnership
          </a>
          <p className="text-gray-500 text-sm mt-4">{PHONE_NUMBER} · Mon–Fri 8am–5pm</p>
        </div>
      </div>
    </section>
  );
};
