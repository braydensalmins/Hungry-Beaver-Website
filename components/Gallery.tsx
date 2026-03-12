import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    },
    {
      before: "/before-2.jpeg",
      after: "/after-2.jpeg",
      title: "36\" Palm Tree Stump",
      location: "Buckeye, AZ",
      time: "1 Hour (tight gate access)",
      cost: "$250"
    },
    {
      before: "/before-3.jpeg",
      after: "/after-3.jpeg",
      title: "",
      location: "",
      time: "",
      cost: ""
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
            <div key={idx} className="bg-white rounded-xl overflow-hidden ring-1 ring-gray-200 group hover:-translate-y-1 transition-transform duration-300">
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-px">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.before} alt="Stump before grinding" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-0 left-0 bg-beaver-dark/90 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider backdrop-blur-sm">Before</span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.after} alt="Clean yard after professional stump grinding" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-0 left-0 bg-beaver-orange/90 text-beaver-dark text-xs font-bold px-3 py-1 uppercase tracking-wider backdrop-blur-sm">After</span>
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