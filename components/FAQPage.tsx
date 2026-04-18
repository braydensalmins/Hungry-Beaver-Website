import React, { useEffect } from 'react';
import { FAQ } from './FAQ';
import { ScrollReveal } from './ScrollReveal';

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How deep do you grind the stumps?", "acceptedAnswer": { "@type": "Answer", "text": "We typically grind 6 to 8 inches below ground level. This is sufficient for covering with topsoil and growing grass. If you plan to replant a tree in the exact same spot, let us know, as we can grind deeper for special requests (additional fees may apply)." } },
    { "@type": "Question", "name": "Do I need to be home when you do the work?", "acceptedAnswer": { "@type": "Answer", "text": "No. As long as we have clear access to the stump (unlocked gates, minimum 36-inch width for our machine), you do not need to be home. We can complete the job and send you an invoice electronically." } },
    { "@type": "Question", "name": "What do you do with the wood chips?", "acceptedAnswer": { "@type": "Answer", "text": "The wood chips stay in the ground hole — they settle over time and are great for soil health. After every job we level the grind area and rake the surrounding yard clean before we leave." } },
    { "@type": "Question", "name": "What about underground pipes or wires?", "acceptedAnswer": { "@type": "Answer", "text": "Before every job, we call 811 (Blue Stake) to have all public utilities marked. For private lines like irrigation, sprinklers, or landscape lighting, please mark them or let us know their location prior to your appointment." } },
    { "@type": "Question", "name": "How soon can you get the job done?", "acceptedAnswer": { "@type": "Answer", "text": "We can usually schedule your stump removal within 24-48 hours of your quote acceptance. We pride ourselves on fast, reliable service." } },
    { "@type": "Question", "name": "Is there a minimum charge?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we have a $200 minimum service fee. This covers our travel, fuel, and equipment setup time for smaller jobs." } },
    { "@type": "Question", "name": "How long does stump grinding take?", "acceptedAnswer": { "@type": "Answer", "text": "Most residential jobs take between 30 and 90 minutes depending on the number and size of stumps. Larger stumps or surface root grinding may take longer." } },
    { "@type": "Question", "name": "Will grass grow back over the ground site?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once the stump is ground down, you can fill the hole with topsoil and spread grass seed. Within a few weeks you'll have new growth." } },
    { "@type": "Question", "name": "Do you handle HOA-required stump removal?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We work with homeowners who need stumps removed to satisfy HOA requirements. We can grind deep enough to allow for re-seeding and provide documentation of the work completed for your HOA records." } },
    { "@type": "Question", "name": "Do you offer discounts for multiple stumps?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Volume pricing is available. The more stumps you have, the better the per-stump rate. Just list all the stumps when you request a quote and we'll give you a combined price." } },
    { "@type": "Question", "name": "Do you work with landscapers and tree services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we love working with other trade professionals. We're a reliable stump grinding subcontractor for tree services, landscapers, and property managers throughout the Valley." } },
    { "@type": "Question", "name": "What cities do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve Phoenix, Scottsdale, Mesa, Tempe, Gilbert, Chandler, Glendale, Peoria, Surprise, Queen Creek, Ahwatukee, Avondale, Goodyear, and Paradise Valley." } }
  ]
};

export const FAQPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Stump Grinding FAQs | Hungry Beaver Phoenix AZ';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', "Got questions about stump grinding in Phoenix? We answer the most common ones — cost, timeline, what's left behind, and more. No fluff, just answers.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://hungrybeaverstumpgrinding.com/faq');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Stump Grinding FAQs | Hungry Beaver Phoenix AZ');
    if (ogDesc) ogDesc.setAttribute('content', "Got questions about stump grinding in Phoenix? We answer the most common ones — cost, timeline, what's left behind, and more. No fluff, just answers.");
    if (ogUrl) ogUrl.setAttribute('content', 'https://hungrybeaverstumpgrinding.com/faq');
    document.getElementById('faq-schema')?.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.text = JSON.stringify(FAQ_SCHEMA);
    document.head.appendChild(script);
    return () => { document.getElementById('faq-schema')?.remove(); };
  }, []);

  return (
    <div className="pt-6">
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
    </div>
  );
};
