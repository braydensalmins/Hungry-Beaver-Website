import React from 'react';
import { Gallery } from './Gallery';
import { ScrollReveal } from './ScrollReveal';

export const GalleryPage: React.FC = () => {
  return (
    <div className="pt-24"> {/* Add padding for fixed navbar */}
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
    </div>
  );
};
