import React, { useEffect } from 'react';
import { Contact } from './Contact';
import { ScrollReveal } from './ScrollReveal';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Hungry Beaver Stump Grinding — Phoenix';
  }, []);

  return (
    <div className="pt-24">
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
};
