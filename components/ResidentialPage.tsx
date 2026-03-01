import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { PRICING_ROWS, PHONE_NUMBER } from '../constants';
import {
  CheckCircle2, ShieldCheck, MessageSquare,
  ClipboardList, Hammer, Leaf, Truck, Calculator,
} from 'lucide-react';
import { HowToMeasure } from './HowToMeasure';

const FAQ_ANSWER_PARAGRAPHS = [
  `When we arrive, we assess the stump, measure it at the widest point at ground level, and position our commercial grinder. The carbide-tipped cutting wheel works down through the wood in passes, grinding 6–8 inches below grade — deep enough to top-dress with topsoil and grow grass over.`,

  `The machine leaves a pile of wood chips where the stump used to be. With our Standard Grind, we leave the mulch in place to decompose naturally. With Full Service, we backfill, rake the area clean, and haul the excess off your property. Most Phoenix Valley residential stump removal jobs take 30–90 minutes start to finish.`,
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does residential stump grinding work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: FAQ_ANSWER_PARAGRAPHS.join(' '),
      },
    },
  ],
};

const STEPS = [
  {
    number: '01',
    Icon: ClipboardList,
    name: 'Assess',
    description: 'We arrive on-site, walk the area, and measure your stump to confirm the estimate. We check for nearby irrigation lines or obstacles before starting.',
  },
  {
    number: '02',
    Icon: Hammer,
    name: 'Grind',
    description: 'Our commercial grinder chips the stump down 6–8 inches below grade using a carbide-tipped cutting wheel — quiet enough for residential neighborhoods.',
  },
  {
    number: '03',
    Icon: Leaf,
    name: 'Clean Up',
    description: 'Wood chips are left in the hole (Standard) or backfilled and raked clean (Full Service). We\'ll ask which finish you prefer when we quote the job.',
  },
  {
    number: '04',
    Icon: Truck,
    name: 'Haul Away',
    description: 'Full Service includes hauling all excess debris off-site. Your yard is ready for topsoil and seed the same day we leave.',
  },
];

export const ResidentialPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Residential Stump Grinding | Hungry Beaver Stump Grinding';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Hungry Beaver Stump Grinding offers fast, affordable residential stump removal across the Greater Phoenix Valley. No hidden fees. Same-day estimates. Call 480-283-4560.';
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

        {/* ── Section 1: Hero ── */}
        <section className="bg-beaver-dark text-white pt-44 pb-20 lg:pt-52 lg:pb-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-beaver-orange" />
                <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Local, Licensed & Insured</span>
              </div>
              <div className="hidden sm:block w-1 h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <MessageSquare size={16} className="text-beaver-orange" />
                <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Same-Day Service Available</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4 leading-[1.05]">
              RESIDENTIAL<br />
              <span className="text-beaver-orange">STUMP GRINDING</span>
            </h1>

            <p className="text-xl md:text-2xl font-display font-bold text-gray-300 mb-6 uppercase tracking-wide">
              That stump is a tripping hazard, a pest magnet, and an eyesore.
            </p>

            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              We handle residential stump removal across the Greater Phoenix Valley with fast turnarounds and zero damage to your surrounding lawn. Our equipment is compact enough for backyard access, and we leave your property cleaner than we found it. Locally owned, fully insured, and priced straight — no surprises on the invoice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/calculator')}
                className="shadow-lg shadow-orange-900/20 flex items-center gap-2"
              >
                <Calculator size={20} />
                Calculate Cost
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
                <CheckCircle2 size={18} className="text-beaver-orange" /> 5-Star Rated
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-beaver-orange" /> Same-Day Estimates
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-beaver-orange" /> No Lawn Damage
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: How It Works ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">The Process</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
                FROM YOUR YARD TO CLEAN GROUND IN HOURS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((step) => (
                <div key={step.number} className="flex flex-col items-start p-6 border-t-4 border-beaver-orange bg-beaver-cream shadow-sm">
                  <span className="text-5xl font-display font-bold text-beaver-orange leading-none mb-4">{step.number}</span>
                  <step.Icon size={28} className="text-beaver-dark mb-3" />
                  <h3 className="text-lg font-display font-bold text-beaver-dark uppercase tracking-wide mb-2">{step.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: FAQ — How Stump Grinding Works ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
                HOW STUMP GRINDING WORKS
              </h2>
            </div>

            <div className="bg-white border-t-4 border-beaver-orange shadow-sm p-8 md:p-12">
              <h3 className="text-lg font-bold text-beaver-dark uppercase tracking-wide mb-6 border-b border-gray-200 pb-4">
                What actually happens during a residential stump grinding job?
              </h3>
              {FAQ_ANSWER_PARAGRAPHS.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-5 last:mb-0">{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Pricing ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Transparent Pricing</p>
              <h2 className="text-4xl font-display font-bold text-beaver-dark">NO HIDDEN FEES. JUST HONEST WORK.</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Use this guide to get a ballpark before you call. Every job is confirmed with a firm quote — no surprises on the invoice.
              </p>
            </div>

            {/* Pricing Table */}
            <div className="overflow-x-auto mb-4 shadow-sm border border-gray-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-beaver-dark text-white uppercase text-xs tracking-wider">
                    <th className="px-5 py-4 font-bold w-1/4">Stump Size</th>
                    <th className="px-5 py-4 font-bold w-1/5">Estimated Cost</th>
                    <th className="px-5 py-4 font-bold w-1/3">Major Cost Factors</th>
                    <th className="px-5 py-4 font-bold">The Hungry Beaver Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING_ROWS.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-beaver-cream'}>
                      <td className="px-5 py-5 font-bold text-beaver-dark text-sm align-top">{row.size}</td>
                      <td className="px-5 py-5 align-top">
                        <span className="text-beaver-orange font-bold text-lg">{row.range}</span>
                      </td>
                      <td className="px-5 py-5 align-top">
                        <ul className="space-y-1">
                          {row.factors.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="mt-1.5 w-1.5 h-1.5 bg-beaver-orange rounded-full flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-5 py-5 align-top text-sm text-gray-700 italic">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Disclaimer */}
            <p className="text-sm text-gray-400 italic mb-14 px-1">
              *Pricing varies based on access, depth, and site conditions. Final price determined at on-site or virtual quote.
            </p>

          </div>

        </section>

        <HowToMeasure showCalculatorCTA />

    </>
  );
};
