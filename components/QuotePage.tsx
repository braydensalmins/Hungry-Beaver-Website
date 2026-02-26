import React from 'react';
import { Contact } from './Contact';
import { ScrollReveal } from './ScrollReveal';

export const QuotePage: React.FC = () => {
  return (
    <div className="pt-24">
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
};
