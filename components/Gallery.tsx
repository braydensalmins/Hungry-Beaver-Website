import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { Button } from './Button';

export const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const images = [
    {
      before: "/before-1.jpeg",
      after: "/after-1.jpeg",
      title: "30\" Tempe Oak Stump",
      location: "Tempe, AZ",
      time: "1 Hour",
      cost: "$200"
    }
  ];

  const handleContactClick = () => {
    navigate('/#contact');
  };

  return (
    <section id="gallery" className="py-24 bg-beaver-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Our Work</h2>
          <h3 className="text-4xl font-display font-bold text-beaver-dark">BEFORE & AFTER</h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">See the difference professional grinding makes. We leave your yard ready for landscaping.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {images.map((item, idx) => (
            <div key={idx} className="bg-white p-6 shadow-xl border-b-4 border-beaver-dark group hover:-translate-y-1 transition-transform duration-300">
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4 h-64 mb-6">
                <div className="relative h-full overflow-hidden rounded-sm">
                  <img src={item.before} alt="Stump before grinding — 30 inch oak stump in Tempe AZ" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-0 left-0 bg-beaver-dark/90 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider backdrop-blur-sm">Before</span>
                </div>
                <div className="relative h-full overflow-hidden rounded-sm">
                  <img src={item.after} alt="Clean yard after professional stump grinding in Tempe AZ" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-0 left-0 bg-beaver-orange/90 text-beaver-dark text-xs font-bold px-3 py-1 uppercase tracking-wider backdrop-blur-sm">After</span>
                </div>
              </div>

              {/* Job Details */}
              <div className="flex flex-col">
                <h4 className="font-display font-bold text-2xl text-beaver-dark uppercase mb-4">{item.title}</h4>
                
                <div className="grid grid-cols-3 gap-2 text-sm border-t border-gray-100 pt-4">
                  <div className="flex flex-col gap-1">
                     <div className="flex items-center text-gray-400 uppercase text-xs font-bold gap-1">
                        <MapPin size={12} /> Location
                     </div>
                     <span className="font-bold text-gray-700">{item.location}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <div className="flex items-center text-gray-400 uppercase text-xs font-bold gap-1">
                        <Clock size={12} /> Time
                     </div>
                     <span className="font-bold text-gray-700">{item.time}</span>
                  </div>
                   <div className="flex flex-col gap-1">
                     <div className="flex items-center text-gray-400 uppercase text-xs font-bold gap-1">
                        <DollarSign size={12} /> Est. Cost
                     </div>
                     <span className="font-bold text-beaver-orange">{item.cost}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
           <Button variant="outline" onClick={handleContactClick}>
              Contact Us to See More Work
           </Button>
        </div>
      </div>
    </section>
  );
};