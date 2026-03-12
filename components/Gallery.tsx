import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from './Button';

const images = [
  { src: '/before-1.jpeg', label: 'Before' },
  { src: '/after-1.jpeg',  label: 'After'  },
  { src: '/before-2.jpeg', label: 'Before' },
  { src: '/after-2.jpeg',  label: 'After'  },
  { src: '/before-3.jpeg', label: 'Before' },
  { src: '/after-3.jpeg',  label: 'After'  },
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
          <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Our Work</h2>
          <h3 className="text-4xl font-display font-bold text-beaver-dark">BEFORE & AFTER</h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">See the difference professional grinding makes. We leave your yard ready for landscaping.</p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 mb-12">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="relative break-inside-avoid mb-4 overflow-hidden cursor-pointer group"
              onClick={() => setLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={`${item.label} stump grinding`}
                className="w-full h-auto block transform transition-transform duration-500 group-hover:scale-105"
              />
              <span className={`absolute top-0 left-0 text-xs font-bold px-3 py-1 uppercase tracking-wider backdrop-blur-sm ${
                item.label === 'Before'
                  ? 'bg-beaver-dark/90 text-white'
                  : 'bg-beaver-orange/90 text-beaver-dark'
              }`}>
                {item.label}
              </span>
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
