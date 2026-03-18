import React, { useEffect } from 'react';
import { Gallery } from './Gallery';
import { ScrollReveal } from './ScrollReveal';

export const GalleryPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Before & After Gallery | Hungry Beaver Stump Grinding';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'See before and after photos of professional stump grinding jobs across the Phoenix Valley by Hungry Beaver Stump Grinding.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://hungrybeaverstumpgrinding.com/gallery');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Before & After Gallery | Hungry Beaver Stump Grinding');
    if (ogDesc) ogDesc.setAttribute('content', 'See before and after photos of professional stump grinding jobs across the Phoenix Valley by Hungry Beaver Stump Grinding.');
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
