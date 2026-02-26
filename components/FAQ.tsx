import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "How deep do you grind the stumps?",
    answer: "We typically grind 6 to 8 inches below ground level. This is sufficient for covering with topsoil and growing grass. If you plan to replant a tree in the exact same spot, let us know, as we can grind deeper for special requests (additional fees may apply)."
  },
  {
    question: "Do I need to be home when you do the work?",
    answer: "No. As long as we have clear access to the stump (unlocked gates, minimum 36-inch width for our machine), you do not need to be home. We can complete the job and send you an invoice electronically."
  },
  {
    question: "What do you do with the wood chips?",
    answer: "With our Standard Grind service, we leave the mulch in the hole. It settles over time and makes excellent garden mulch. With our Full Service package, we backfill the hole and haul away the excess debris for a clean finish."
  },
  {
    question: "What about underground pipes or wires?",
    answer: "We highly recommend calling 811 (Blue Stake) a few days before your appointment to have public utilities marked. For private lines like sprinklers or landscape lighting, please mark them or let us know their location. We are careful, but we cannot see what is underground."
  },
  {
    question: "How soon can you get the job done?",
    answer: "We can usually schedule your stump removal within 24-48 hours of your quote acceptance. We pride ourselves on fast, reliable service."
  },
  {
    question: "Is there a minimum charge?",
    answer: "Yes, we have a $150 minimum service fee. This covers our travel, fuel, and equipment setup time for smaller jobs."
  },
  {
    question: "How long does stump grinding take?",
    answer: "Most residential jobs take between 30 and 90 minutes depending on the number and size of stumps. Larger stumps or surface root grinding may take longer. We'll give you a time estimate when we quote the job."
  },
  {
    question: "Will grass grow back over the ground site?",
    answer: "Yes. Once the stump is ground down, you can fill the hole with topsoil and spread grass seed. Within a few weeks you'll have new growth. We can also leave the wood chip mulch in place to help the soil retain moisture during germination."
  },
  {
    question: "Do you handle HOA-required stump removal?",
    answer: "Absolutely. We work with homeowners who need stumps removed to satisfy HOA requirements. We can grind deep enough to allow for re-seeding and, if needed, provide documentation of the work completed for your HOA records."
  },
  {
    question: "Do you offer discounts for multiple stumps?",
    answer: "Yes! Volume pricing is available. The more stumps you have, the better the per-stump rate. Just list all the stumps when you request a quote and we'll give you a combined price."
  },
  {
    question: "Do you work with landscapers and tree services?",
    answer: "Yes, we love working with other trade professionals. We're a reliable stump grinding subcontractor for tree services, landscapers, and property managers throughout the Valley. Call us to discuss a partnership or recurring work arrangement."
  },
  {
    question: "What cities do you serve?",
    answer: "We serve Phoenix, Scottsdale, Mesa, Tempe, Gilbert, Chandler, Glendale, Peoria, Surprise, Queen Creek, Ahwatukee, Avondale, Goodyear, and Paradise Valley. See our Service Areas page for more details."
  }
];

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-gray-200 last:border-b-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-bold text-beaver-dark uppercase pr-8 group-hover:text-beaver-orange transition-colors">
          {question}
        </span>
        {isOpen ? (
          <div className="bg-beaver-orange p-1 rounded-full">
            <Minus size={20} className="text-beaver-dark" />
          </div>
        ) : (
          <div className="bg-gray-200 p-1 rounded-full group-hover:bg-beaver-dark transition-colors">
             <Plus size={20} className="text-gray-600 group-hover:text-white" />
          </div>
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed pl-1 border-l-4 border-beaver-orange ml-1">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-beaver-cream rounded-full mb-4">
            <HelpCircle className="text-beaver-orange w-8 h-8" />
          </div>
          <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Common Questions</h2>
          <h3 className="text-4xl font-display font-bold text-beaver-dark">GOOD TO KNOW</h3>
        </div>

        <div className="bg-beaver-cream p-6 md:p-10 shadow-lg border-t-4 border-beaver-dark">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </section>
  );
};
