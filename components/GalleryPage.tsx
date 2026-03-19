import React, { useEffect } from 'react';
import { Gallery } from './Gallery';
import { ScrollReveal } from './ScrollReveal';

export const GalleryPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Stump Grinding Before & After | Hungry Beaver Phoenix AZ';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'See real stump grinding results from jobs across the Phoenix Valley. Residential, commercial stump removals — all done by Hungry Beaver.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://hungrybeaverstumpgrinding.com/gallery');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Stump Grinding Before & After | Hungry Beaver Phoenix AZ');
    if (ogDesc) ogDesc.setAttribute('content', 'See real stump grinding results from jobs across the Phoenix Valley. Residential, commercial stump removals — all done by Hungry Beaver.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://hungrybeaverstumpgrinding.com/gallery');
  }, []);

  return (
    <div className="pt-6">
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
    </div>
  );
};
