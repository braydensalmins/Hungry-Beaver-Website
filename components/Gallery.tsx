import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from './Button';

const pairs = [
  { before: '/before-1.jpeg', after: '/after-1.jpeg' },
  { before: '/before-2.jpeg', after: '/after-2.jpeg' },
  { before: '/before-3.jpeg', after: '/after-3.jpeg' },
  { before: '/before-4.jpeg', after: '/after-4.jpeg' },
];

export const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  return (
    <section id="gallery" className="pb-24 bg-beaver-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-beaver-orange font-bold tracking-widest uppercase mb-2">Our Work</h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold text-beaver-dark">BEFORE & AFTER</h3>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">See the difference professional grinding makes. We leave your yard ready for landscaping.</p>
        </div>

        <div className="columns-1 md:columns-2 gap-4 mb-12">
          {pairs.map((pair, idx) => (
            <div key={idx} className="break-inside-avoid mb-4 grid grid-cols-2 gap-px group">
              <div className="relative overflow-hidden cursor-pointer" onClick={() => setLightbox(pair.before)}>
                <img src={pair.before} alt="Tree stump before professional grinding — Phoenix Valley, AZ" className="w-full h-auto block transform transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-0 left-0 bg-beaver-dark/90 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider backdrop-blur-sm">Before</span>
              </div>
              <div className="relative overflow-hidden cursor-pointer" onClick={() => setLightbox(pair.after)}>
                <img src={pair.after} alt="Yard after stump grinding — clean, level, ready for landscaping" className="w-full h-auto block transform transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-0 left-0 bg-beaver-orange/90 text-beaver-dark text-xs font-bold px-3 py-1 uppercase tracking-wider backdrop-blur-sm">After</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" onClick={() => navigate('/#contact')}>
            Contact Us to See More Work
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-beaver-orange transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery full view"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
