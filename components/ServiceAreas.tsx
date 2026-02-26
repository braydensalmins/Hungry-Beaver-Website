import React from 'react';
import { MapPin } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

const CITY_BLURBS: Record<string, string> = {
  Phoenix: "Phoenix stump grinding — same-day estimates available.",
  Scottsdale: "Scottsdale stump removal — residential and estate properties.",
  Mesa: "Mesa stump grinding — fast scheduling, reliable crews.",
  Tempe: "Tempe stump removal — near ASU and surrounding neighborhoods.",
  Gilbert: "Gilbert stump grinding — new construction and established yards.",
  Chandler: "Chandler stump removal — HOA-compliant grinding available.",
  Glendale: "Glendale stump grinding — sports district to quiet suburbs.",
  Peoria: "Peoria stump removal — same-day text estimates.",
  Surprise: "Surprise stump grinding — West Valley coverage.",
  "Queen Creek": "Queen Creek stump removal — rural lots and subdivisions.",
  Ahwatukee: "Ahwatukee stump grinding — South Mountain area coverage.",
  Avondale: "Avondale stump removal — West Valley scheduling available.",
  Goodyear: "Goodyear stump grinding — new communities and established properties.",
  "Paradise Valley": "Paradise Valley stump removal — luxury estates and hillside lots.",
};

export const ServiceAreas: React.FC = () => {
  return (
    <section id="service-areas" className="py-24 bg-beaver-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Where We Work</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">GREATER PHOENIX VALLEY</h3>
          <div className="w-24 h-2 bg-beaver-orange mx-auto mt-6 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We serve 14+ cities across the Valley. Text us a photo for a same-day estimate — no matter where you are.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICE_AREAS.map((city) => (
            <div
              key={city}
              className="bg-white p-6 border-b-4 border-beaver-orange shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-beaver-dark w-9 h-9 flex items-center justify-center shrink-0">
                  <MapPin className="text-beaver-orange w-5 h-5" />
                </div>
                <h4 className="text-xl font-display font-bold text-beaver-dark uppercase">{city}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{CITY_BLURBS[city]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
