import React, { useEffect } from 'react';
import { Gallery } from './Gallery';
import { ScrollReveal } from './ScrollReveal';

export const GalleryPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Before & After Gallery | Hungry Beaver Stump Grinding';
  }, []);

  return (
    <div className="pt-24"> {/* Add padding for fixed navbar */}
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
    </div>
  );
};
