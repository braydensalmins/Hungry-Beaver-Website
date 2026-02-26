import React from 'react';
import { TreePine, Ruler, Truck, Users } from 'lucide-react';

export const Services: React.FC = () => {
  const SERVICES_DATA = [
    {
      title: "Stump Grinding",
      description: "We grind stumps 6–8 inches below grade — deep enough for replanting grass, seeding, or gravel cover. Perfect for HOA compliance. Any size stump, any hardwood.",
      icon: TreePine,
      subtext: "Most Popular"
    },
    {
      title: "Surface Root Grinding",
      description: "Stop breaking your lawnmower blades. We chase and grind annoying surface roots that extend several feet from the stump, protecting your equipment and improving lawn aesthetics.",
      icon: Ruler,
      subtext: "Save Your Mower"
    },
    {
      title: "Clean Up & Haul Away",
      description: "Standard service leaves the mulch in the hole — great for soil health. Full service means we backfill, rake the site clean, and haul all excess debris away for a finished look.",
      icon: Truck,
      subtext: "Optional Add-on"
    },
    {
      title: "Multi-Stump Jobs",
      description: "Contractors and landscapers welcome. Volume jobs handled efficiently with competitive pricing. We're a reliable stump grinding subcontractor for tree services and property managers.",
      icon: Users,
      subtext: "Volume Pricing"
    },
  ];

  return (
    <section id="services" className="py-24 bg-beaver-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Our Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">PROFESSIONAL STUMP SERVICES</h3>
          <div className="w-24 h-2 bg-beaver-orange mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="bg-white p-8 border-b-4 border-beaver-orange shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-beaver-dark w-16 h-16 flex items-center justify-center group-hover:bg-beaver-orange transition-colors">
                  <service.icon className="text-beaver-orange group-hover:text-beaver-dark w-8 h-8 transition-colors" />
                </div>
                {service.subtext && (
                  <span className="text-xs font-bold uppercase bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {service.subtext}
                  </span>
                )}
              </div>
              <h4 className="text-2xl font-bold text-beaver-dark mb-4 font-display uppercase">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};