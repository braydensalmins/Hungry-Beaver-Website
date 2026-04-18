import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { PHONE_NUMBER } from '../constants';
import { MapPin, BookOpen, CheckCircle2, MessageSquare } from 'lucide-react';

const PAGE_TITLE = 'Stump Grinding Cost Phoenix AZ (2026) | Hungry Beaver';
const PAGE_DESCRIPTION =
  'Real 2026 Phoenix stump grinding prices. See what affects cost, why Phoenix is different, and how to get a firm quote in minutes. No vague estimates.';
const PAGE_URL = 'https://hungrybeaverstumpgrinding.com/stump-grinding-cost-phoenix';

const PRICE_ROWS = [
  { size: 'Small — up to 10 inches', cost: '~$200 (minimum)' },
  { size: 'Medium — 10 to 20 inches', cost: '$200–$300' },
  { size: 'Large — 20 to 30 inches', cost: '$200–$500' },
  { size: 'Extra Large — 30 inches+', cost: 'Quote required' },
];

const COST_FACTORS = [
  {
    number: '01',
    name: 'Stump Size',
    body: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          This is the biggest pricing factor. We measure at ground level at the widest point — not the flat cut face on top. Most pricing disputes happen because homeowners measure the cut face, which is always smaller than the actual root flare at ground level.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed font-medium">
          Measure where the stump meets the ground, not the top of the stump. A stump that looks like 12 inches on top might be 18–20 inches at ground level once you account for the root flare.
        </p>
      </>
    ),
  },
  {
    number: '02',
    name: 'Access',
    body: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Can we get our commercial grinder to the stump? A wide open front yard is easy. A backyard with a 36-inch gate, rocks everywhere, and cactus on all sides takes more time and effort. Tight access doesn't necessarily mean a higher price — but it's always a factor we consider.
      </p>
    ),
  },
  {
    number: '03',
    name: 'Root Spread',
    body: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Some stumps — especially older mesquites and ficus trees common in Phoenix — have aggressive surface roots that extend several feet from the base. Grinding those surface roots takes additional time and passes with the machine. If you want them gone, let us know upfront so we can price accordingly.
      </p>
    ),
  },
  {
    number: '04',
    name: 'Grinding Depth',
    body: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Standard grinding is 6–8 inches below grade — deep enough to cover with topsoil and grow grass. If you need deeper grinding to match an existing yard grade or install new landscaping at a specific level, that's additional time and cost. One of our recent Glendale jobs required 15 inches of depth to match the surrounding yard grade — we got it done, but it's worth discussing upfront.
      </p>
    ),
  },
  {
    number: '05',
    name: 'Tree Species',
    body: (
      <ul className="space-y-1.5">
        {[
          ['Palm stumps', 'wide, fibrous, and dense but grind relatively smoothly'],
          ['Mesquite', 'extremely hard wood, takes more passes'],
          ['Ficus', 'aggressive root systems, often need surface root work'],
          ['Citrus', 'moderate hardness, usually straightforward'],
          ['Oak', 'dense hardwood, takes longer than softer species'],
        ].map(([species, note]) => (
          <li key={species} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="mt-1.5 w-1.5 h-1.5 bg-beaver-orange rounded-full flex-shrink-0" />
            <span><strong>{species}</strong> — {note}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '06',
    name: 'Number of Stumps',
    body: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Multiple stumps on the same property get volume pricing. The more stumps we grind in one visit, the better your per-stump rate. Always get a combined quote if you have more than one.
      </p>
    ),
  },
];

const PHOENIX_FACTORS = [
  {
    title: 'Caliche Soil',
    body: 'The hard calcium carbonate layer found throughout the Valley makes digging and deep grinding more difficult. If your stump has roots that have grown into a caliche layer, expect more machine time.',
  },
  {
    title: 'Rock Landscapes',
    body: 'A huge percentage of Phoenix yards have decomposed granite or river rock instead of grass. Rocks need to be cleared away before grinding and raked back into place after. This adds time but we always do it — we don\'t leave a mess.',
  },
  {
    title: 'Desert Tree Species',
    body: 'Mesquite and palo verde are some of the hardest wood species in North America. Don\'t let anyone quote you a flat rate on a mature mesquite without accounting for the hardness.',
  },
  {
    title: 'Heat',
    body: 'Phoenix summers are brutal. We schedule jobs early in the morning during summer months. This can affect availability June through September.',
  },
];

const FAQS = [
  {
    q: 'Do you charge extra for cleanup?',
    a: 'No. Raking the area and leveling the ground after grinding is included in every job.',
  },
  {
    q: 'How deep do you grind?',
    a: 'Standard is 6–8 inches below grade. We can go deeper on request — just let us know what you\'re planning to do with the space.',
  },
  {
    q: 'Do you grind surface roots?',
    a: 'Yes. Surface root grinding is an add-on service. Text us a photo and we\'ll quote the roots along with the stump.',
  },
  {
    q: 'How long does it take?',
    a: 'Most residential jobs take 30–90 minutes. Larger stumps or multiple stumps may take longer.',
  },
  {
    q: 'What cities do you serve?',
    a: 'We serve the entire Phoenix Valley including Phoenix, Scottsdale, Mesa, Tempe, Gilbert, Chandler, Glendale, Peoria, Surprise, Queen Creek, Ahwatukee, Avondale, Goodyear, Buckeye, Cave Creek, Anthem, Apache Junction, Litchfield Park, Fountain Hills, and Paradise Valley.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export const StumpGrindingCostPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = PAGE_TITLE;

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = PAGE_DESCRIPTION;

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', PAGE_URL);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', PAGE_TITLE);
    if (ogDesc) ogDesc.setAttribute('content', PAGE_DESCRIPTION);
    if (ogUrl) ogUrl.setAttribute('content', PAGE_URL);

    document.getElementById('faq-schema-cost-guide')?.remove();
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'faq-schema-cost-guide';
    schemaScript.textContent = JSON.stringify(FAQ_SCHEMA);
    document.head.appendChild(schemaScript);

    return () => {
      document.getElementById('faq-schema-cost-guide')?.remove();
    };
  }, []);

  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="bg-beaver-dark text-white pt-10 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-beaver-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Phoenix Valley</span>
            </div>
            <div className="hidden sm:block w-1 h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-beaver-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">2026 Pricing Guide</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4 leading-[1.05]">
            STUMP GRINDING COST<br />
            <span className="text-beaver-orange">IN PHOENIX</span>
          </h1>

          <p className="text-xl md:text-2xl font-display font-bold text-gray-300 mb-6 uppercase tracking-wide">
            2026 Guide — Real Numbers, Not Vague Estimates
          </p>

          <div className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed space-y-4 text-left sm:text-center">
            <p>
              If you've got a stump sitting in your Phoenix yard and you're wondering what it's going to cost to get rid of it — you're in the right place. We're going to give you real numbers, not the vague "it depends" answer you get from most contractors.
            </p>
            <p>
              At Hungry Beaver Stump Grinding, we've ground stumps all across the Phoenix Valley — from tight Glendale side yards to acre lots in Buckeye. Here's exactly what affects the price and what you should expect to pay in 2026.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/quote')}
              className="shadow-lg shadow-orange-900/20"
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-beaver-dark"
              onClick={() => { window.location.href = `sms:${PHONE_NUMBER}`; }}
            >
              Text Us a Photo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold text-gray-400 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> $200 Minimum
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> Firm Quotes by Text
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare size={18} className="text-beaver-orange" /> 15-Minute Response
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Pricing Table ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Real Phoenix Prices</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
              THE SHORT ANSWER:<br className="hidden sm:block" /> WHAT DOES STUMP GRINDING COST?
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              These are real 2026 Phoenix Valley prices based on actual jobs we've completed. Your final price depends on several factors we'll cover below.
            </p>
          </div>

          <div className="overflow-x-auto mb-4 shadow-sm border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-beaver-dark text-white uppercase text-xs tracking-wider">
                  <th className="px-5 py-4 font-bold w-1/2">Stump Size</th>
                  <th className="px-5 py-4 font-bold">Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-beaver-cream'}>
                    <td className="px-5 py-5 font-bold text-beaver-dark text-sm align-top">{row.size}</td>
                    <td className="px-5 py-5 align-top">
                      <span className="text-beaver-orange font-bold text-lg">{row.cost}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-400 italic px-1">
            *Pricing varies based on access, depth, species, and site conditions. Final price confirmed at quote — no surprises on the invoice.
          </p>
        </div>
      </section>

      {/* ── Section 3: What Affects Cost ── */}
      <section className="py-20 bg-beaver-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Pricing Breakdown</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
              WHAT AFFECTS STUMP GRINDING<br className="hidden sm:block" /> COST IN PHOENIX?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COST_FACTORS.map((factor) => (
              <div key={factor.number} className="flex flex-col items-start p-6 border-t-4 border-beaver-orange bg-white shadow-sm">
                <span className="text-5xl font-display font-bold text-beaver-orange leading-none mb-4">{factor.number}</span>
                <h3 className="text-lg font-display font-bold text-beaver-dark uppercase tracking-wide mb-3">{factor.name}</h3>
                {factor.body}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Why Phoenix Is Different ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Local Expertise</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
              WHY PHOENIX STUMP GRINDING<br className="hidden sm:block" /> IS DIFFERENT
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Phoenix presents unique challenges that contractors in other parts of the country don't deal with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHOENIX_FACTORS.map((factor) => (
              <div key={factor.title} className="bg-white border-t-4 border-beaver-orange p-6 shadow-sm">
                <h3 className="text-lg font-display font-bold text-beaver-dark uppercase tracking-wide mb-3">{factor.title}</h3>
                <p className="text-gray-600 leading-relaxed">{factor.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: $200 Minimum ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Minimum Service Fee</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
              THE $200 MINIMUM — WHAT IT COVERS
            </h2>
          </div>

          <div className="bg-white border-t-4 border-beaver-orange shadow-sm p-8 md:p-12">
            <p className="text-gray-600 leading-relaxed mb-5">
              We have a $200 minimum service fee on all jobs. This covers our drive time, fuel, trailer, equipment, and cleanup regardless of stump size. A tiny 6-inch stump costs the same as a 10-inch stump — the minimum is the floor.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For most Phoenix homeowners, the $200 minimum covers small to medium stumps completely.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 6: Rental vs Commercial ── */}
      <section className="py-20 bg-beaver-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Equipment Matters</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
              RENTAL MACHINE VS.<br className="hidden sm:block" /> COMMERCIAL GRINDER
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Home Depot rents stump grinders for around $200–$300 per day. Here's why that's not always the bargain it seems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 p-6">
              <h3 className="text-base font-bold text-beaver-dark uppercase tracking-wide mb-4 border-b border-gray-200 pb-3">
                Rental Machine
              </h3>
              <ul className="space-y-3">
                {[
                  'Underpowered compared to commercial grinders',
                  'A job our Bandit completes in 30 minutes can take a rental machine 3–4 hours',
                  "Often can't grind deep enough for proper replanting",
                  "You're responsible for damage if something goes wrong",
                  'You still have to haul it, operate it, and clean up after it',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-beaver-dark text-white border-t-4 border-beaver-orange p-6">
              <h3 className="text-base font-bold text-white uppercase tracking-wide mb-4 border-b border-white/20 pb-3">
                Our Commercial Bandit Grinder
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Our commercial Bandit grinder is built for this work. We show up, grind it fast and deep, rake up, and leave. Most jobs are done in under 90 minutes.
              </p>
              <ul className="space-y-3">
                {[
                  'Commercial-grade cutting wheel — not a rental machine',
                  'Grinds to 6–8 inches below grade in one pass',
                  'We handle setup, operation, and full cleanup',
                  'You pay one flat price — no hidden rental or fuel fees',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-200">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-beaver-orange rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: How to Get a Quote ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Fast &amp; Easy</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
              HOW TO GET AN ACCURATE<br className="hidden sm:block" /> QUOTE FAST
            </h2>
            <p className="text-gray-600 mt-4">
              The fastest way to get a firm price is to text us a photo of your stump at{' '}
              <a href={`tel:${PHONE_NUMBER}`} className="text-beaver-orange font-bold hover:underline">{PHONE_NUMBER}</a>.
            </p>
          </div>

          <div className="bg-beaver-dark text-white border-t-4 border-beaver-orange shadow-sm p-8">
            <p className="text-gray-200 font-bold uppercase tracking-wide text-sm mb-5">When you text, include:</p>
            <ul className="space-y-3">
              {[
                'A photo of the stump from the side showing height',
                'A photo from above showing the width',
                'Your city or zip code',
                'Any access concerns (tight gates, rocks, cactus, etc.)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-200">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-beaver-orange rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-300 text-sm">
              We typically respond with a firm price within 15 minutes. No site visit required for most jobs. No obligation to book.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 8: FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Common Questions</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white border-t-4 border-beaver-orange shadow-sm p-6">
                <h3 className="text-base font-bold text-beaver-dark uppercase tracking-wide mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Final CTA ── */}
      <section className="bg-beaver-dark text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-beaver-orange font-bold tracking-widest uppercase mb-3">Get Your Price Today</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            READY TO GET A PRICE?
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            Text us a photo of your stump at{' '}
            <a href={`tel:${PHONE_NUMBER}`} className="text-beaver-orange font-bold hover:underline">{PHONE_NUMBER}</a>{' '}
            and we'll have a firm price to you in minutes.
          </p>
          <p className="text-gray-400 mb-10">
            No email required, no site visit needed for most jobs, no obligation to book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/quote')}
              className="shadow-lg shadow-orange-900/20"
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-beaver-dark"
              onClick={() => { window.location.href = `sms:${PHONE_NUMBER}`; }}
            >
              Text a Photo — {PHONE_NUMBER}
            </Button>
          </div>
          <p className="mt-10 text-gray-500 text-sm italic">
            Hungry Beaver Stump Grinding — Phoenix Valley's stump specialists. We only grind stumps, and we're the best at it.
          </p>
        </div>
      </section>
    </>
  );
};
