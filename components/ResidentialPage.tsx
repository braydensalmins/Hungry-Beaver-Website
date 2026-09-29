import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { PHONE_NUMBER } from '../constants';
import {
  CheckCircle2, ShieldCheck, MessageSquare,
  ClipboardList, Hammer, Leaf, Truck, Calculator,
  DoorOpen, Droplets, Home, TreePine,
} from 'lucide-react';

const FAQ_ANSWER_PARAGRAPHS = [
  `When we arrive, we assess the stump, measure it at the widest point at ground level, and position our commercial grinder. The carbide-tipped cutting wheel works down through the wood in passes, grinding 6–8 inches below grade — deep enough to top-dress with topsoil and grow grass over.`,

  `The machine leaves a pile of wood chips where the stump used to be. We level the grind area, rake the surrounding yard clean, and leave your property tidy before we pack up. The wood chips remain in the ground hole and settle naturally over time — great for soil health. Most Phoenix Valley residential stump removal jobs take 30–90 minutes start to finish.`,
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
    description: 'Wood chips fill the ground hole and settle naturally. We level the grind area and rake the surrounding yard clean before we leave.',
  },
  {
    number: '04',
    Icon: Truck,
    name: 'Job Ready',
    description: 'Your yard is leveled, raked, and clean. Ready for topsoil, sod, or seed the same day we leave.',
  },
];

const BACKYARD_DETAILS = [
  {
    Icon: DoorOpen,
    name: 'Tight Gate Access',
    description: "Our machine fits through a 36-inch gate, so we can reach most backyards without going over a wall or pulling fencing. Leave the gate unlocked and you don't need to be home.",
  },
  {
    Icon: Droplets,
    name: 'Irrigation & Utilities',
    description: "We call 811 (Blue Stake) before every job so public utilities are marked. Private lines like sprinklers, drip tubing, and landscape lighting aren't covered by 811, so flag them for us and we'll work around them.",
  },
  {
    Icon: Home,
    name: 'HOA Requirements',
    description: 'Need a stump gone to satisfy your HOA? We grind deep enough for re-seeding and can provide documentation of the completed work for your HOA records.',
  },
  {
    Icon: TreePine,
    name: 'Mesquite, Palo Verde & Ficus',
    description: 'Mesquite and palo verde are some of the hardest woods around, and older mesquites and ficus often have surface roots spreading several feet from the base. We account for that in the quote upfront.',
  },
];

const AFTER_GRIND = [
  {
    name: 'The Stump Is Gone Below Grade',
    description: 'We grind 6–8 inches below ground level. The hole is filled with the wood chips from the grind, which settle over time and are good for the soil.',
  },
  {
    name: 'Planting Grass or Sod',
    description: 'Rake out some of the chips, top off the area with topsoil, then seed or lay sod. Grinding to 6–8 inches leaves plenty of depth for grass to take.',
  },
  {
    name: 'Planting a New Tree in the Same Spot',
    description: 'Tell us before the job. We can grind deeper on request so there is room for a new root ball (additional fees may apply).',
  },
];

export const ResidentialPage: React.FC = () => {

  useEffect(() => {
    document.title = 'Residential Stump Grinding Phoenix AZ | Hungry Beaver';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Get rid of that backyard stump for good. Hungry Beaver specializes in residential stump grinding across Phoenix & the Valley. Fast quotes, clean results.';
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://hungrybeaverstumpgrinding.com/services/residential');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Residential Stump Grinding Phoenix AZ | Hungry Beaver');
    if (ogDesc) ogDesc.setAttribute('content', 'Get rid of that backyard stump for good. Hungry Beaver specializes in residential stump grinding across Phoenix & the Valley. Fast quotes, clean results.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://hungrybeaverstumpgrinding.com/services/residential');
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

        {/* ── Section 1: Hero ── */}
        <section className="bg-beaver-dark text-white pt-10 pb-20 lg:pt-20 lg:pb-28">
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
                to="/calculator"
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

        {/* ── Section 4: Backyard Jobs ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Residential Details</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
                BUILT FOR PHOENIX BACKYARDS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BACKYARD_DETAILS.map((item) => (
                <div key={item.name} className="flex flex-col items-start p-6 border-t-4 border-beaver-orange bg-beaver-cream shadow-sm">
                  <item.Icon size={32} className="text-beaver-orange mb-4" />
                  <h3 className="text-lg font-display font-bold text-beaver-dark uppercase tracking-wide mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: After the Grind ── */}
        <section className="py-20 bg-beaver-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">After the Grind</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                WHAT YOUR YARD LOOKS LIKE AFTERWARD
              </h2>
            </div>
            <div className="space-y-8">
              {AFTER_GRIND.map((item) => (
                <div key={item.name} className="border-l-4 border-beaver-orange pl-6">
                  <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-2">{item.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 6: Pricing ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Pricing</p>
            <h2 className="text-4xl font-display font-bold text-beaver-dark mb-6">WHAT A BACKYARD STUMP COSTS</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Residential jobs are priced by the stump's diameter measured at ground level, with a $200 minimum. Gate access, surface roots, and how deep you want us to grind can move the number. You get a firm price before we start — no surprises on the invoice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button variant="primary" size="lg" to="/calculator" className="flex items-center gap-2">
                <Calculator size={20} />
                Calculate Your Cost
              </Button>
              <Button variant="outline" size="lg" to="/stump-grinding-cost-phoenix">Phoenix Pricing Guide</Button>
            </div>
            <Link to="/calculator#measure" className="text-beaver-orange font-bold hover:underline">
              How to measure your stump correctly
            </Link>
          </div>
        </section>

    </>
  );
};
