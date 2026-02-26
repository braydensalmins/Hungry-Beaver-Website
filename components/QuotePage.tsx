import React, { useEffect } from 'react';
import { Contact } from './Contact';
import { ScrollReveal } from './ScrollReveal';

export const QuotePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Request a Free Quote | Hungry Beaver Stump Grinding';
  }, []);

  return (
    <div className="pt-24">
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
};
