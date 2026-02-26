import React from 'react';
import { FAQ } from './FAQ';
import { ScrollReveal } from './ScrollReveal';

export const FAQPage: React.FC = () => {
  return (
    <div className="pt-24"> {/* Add padding for fixed navbar */}
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
    </div>
  );
};
