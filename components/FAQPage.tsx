import React, { useEffect } from 'react';
import { FAQ } from './FAQ';
import { ScrollReveal } from './ScrollReveal';

export const FAQPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Stump Grinding FAQ | Hungry Beaver — Phoenix, AZ';
  }, []);

  return (
    <div className="pt-24"> {/* Add padding for fixed navbar */}
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
    </div>
  );
};
