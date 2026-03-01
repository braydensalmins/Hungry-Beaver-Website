import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { PRICING_ROWS, PHONE_NUMBER } from '../constants';
import {
  CheckCircle2, ShieldCheck, MessageSquare,
  ClipboardList, Hammer, Leaf, Truck,
  Users, Building2, TreePine, Layers, BadgePercent, Phone,
} from 'lucide-react';
import { HowToMeasure } from './HowToMeasure';

const WHO_WE_SERVE = [
  {
    Icon: Building2,
    name: 'HOAs & Communities',
    description: 'Common areas, walking paths, and landscaping projects. We work around resident schedules and leave properties clean.',
  },
  {
    Icon: Users,
    name: 'Property Managers',
    description: 'Multi-unit properties, apartment complexes, and commercial lots. Fast turnaround, minimal tenant disruption.',
  },
  {
    Icon: TreePine,
    name: 'Landscaping Contractors',
    description: 'Need stumps cleared before your crew arrives? We coordinate directly with contractors and are in and out fast.',
  },
  {
    Icon: Layers,
    name: 'Developers & Land Clearing',
    description: 'Clearing lots for new construction? We handle high-volume stump removal with the equipment and manpower to get it done.',
  },
];

const STEPS = [
  {
    number: '01',
    Icon: ClipboardList,
    name: 'Site Walk',
    description: 'We walk the full property, map every stump, check gate widths and obstacles, and confirm access logistics before quoting.',
  },
  {
    number: '02',
    Icon: Truck,
    name: 'Coordinate',
    description: 'We schedule around your tenants, contractors, or HOA calendar — minimizing disruption to daily operations.',
  },
  {
    number: '03',
    Icon: Hammer,
    name: 'Grind',
    description: 'Commercial grinder chips each stump 6–8 inches below grade. Multiple stumps handled in a single mobilization to keep costs low.',
  },
  {
    number: '04',
    Icon: Leaf,
    name: 'Clear & Go',
    description: 'Full cleanup included. Excess debris hauled off-site. We leave your property job-ready for the next crew or topsoil.',
  },
];

export const CommercialPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Commercial Stump Grinding | Hungry Beaver Stump Grinding';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Commercial stump grinding for HOAs, property managers, landscaping contractors, and developers across the Greater Phoenix Valley. Volume discounts available. Call 480-283-4560.';
  }, []);

  return (
    <>
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
              <BadgePercent size={16} className="text-beaver-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Volume Discounts Available</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4 leading-[1.05]">
            COMMERCIAL<br />
            <span className="text-beaver-orange">STUMP GRINDING</span>
          </h1>

          <p className="text-xl md:text-2xl font-display font-bold text-gray-300 mb-6 uppercase tracking-wide">
            Clearing stumps for HOAs, developers, and property managers across the Valley.
          </p>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We handle commercial stump removal of all sizes — from a single lot clearance to recurring maintenance contracts. Fully insured, fast to mobilize, and priced fairly on volume. One call covers it all.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/contact')}
              className="shadow-lg shadow-orange-900/20 flex items-center gap-2"
            >
              <Phone size={20} />
              Get a Commercial Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-beaver-dark"
              onClick={() => { window.location.href = `sms:${PHONE_NUMBER}`; }}
            >
              <MessageSquare size={20} className="mr-2" />
              Text Us a Photo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold text-gray-400 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> Multi-Stump Jobs
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> Recurring Discounts
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Who We Serve ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Who We Serve</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
              BUILT FOR COMMERCIAL WORK
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_WE_SERVE.map((item) => (
              <div key={item.name} className="flex flex-col items-start p-6 border-t-4 border-beaver-orange bg-beaver-cream shadow-sm">
                <item.Icon size={32} className="text-beaver-orange mb-4" />
                <h3 className="text-lg font-display font-bold text-beaver-dark uppercase tracking-wide mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: How It Works ── */}
      <section className="py-20 bg-beaver-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">The Process</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
              FROM SITE WALK TO CLEAN GROUND
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step) => (
              <div key={step.number} className="flex flex-col items-start p-6 border-t-4 border-beaver-orange bg-white shadow-sm">
                <span className="text-5xl font-display font-bold text-beaver-orange leading-none mb-4">{step.number}</span>
                <step.Icon size={28} className="text-beaver-dark mb-3" />
                <h3 className="text-lg font-display font-bold text-beaver-dark uppercase tracking-wide mb-2">{step.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Volume & Recurring Discounts ── */}
      <section className="py-20 bg-beaver-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Save More</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            THE MORE STUMPS, THE BETTER THE RATE
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Mobilization is the biggest cost in any job. When we're already on-site, knocking out additional stumps costs us less — and we pass those savings on to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 border border-white/20 p-8 text-left">
              <BadgePercent size={36} className="text-beaver-orange mb-4" />
              <h3 className="text-xl font-display font-bold uppercase mb-3">Volume Jobs</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Clearing multiple stumps in one visit? We offer custom pricing for 3 or more stumps on a single job. The larger the volume, the better the per-stump rate.
              </p>
              <p className="text-beaver-orange font-bold text-sm uppercase tracking-wide">Contact us for a custom quote</p>
            </div>

            <div className="bg-white/10 border border-white/20 p-8 text-left">
              <ClipboardList size={36} className="text-beaver-orange mb-4" />
              <h3 className="text-xl font-display font-bold uppercase mb-3">Recurring Work</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                HOA maintenance contracts, seasonal clearance, or ongoing property management partnerships. Recurring clients get priority scheduling and preferred rates.
              </p>
              <p className="text-beaver-orange font-bold text-sm uppercase tracking-wide">Ask about maintenance contracts</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2"
            >
              <Phone size={20} />
              Call for Commercial Pricing
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-beaver-dark"
              onClick={() => { window.location.href = `sms:${PHONE_NUMBER}`; }}
            >
              Text Us Instead
            </Button>
          </div>
        </div>
      </section>

      {/* ── Section 5: Pricing ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Transparent Pricing</p>
            <h2 className="text-4xl font-display font-bold text-beaver-dark">NO HIDDEN FEES. JUST HONEST WORK.</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Use this as a ballpark — every commercial job is confirmed with a firm quote. Multi-stump jobs qualify for volume pricing not reflected below.
            </p>
          </div>

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

          <p className="text-sm text-gray-400 italic mb-14 px-1">
            *Pricing varies based on access, depth, and site conditions. Commercial multi-stump jobs qualify for volume pricing — contact us for a custom quote.
          </p>
        </div>
      </section>

      <HowToMeasure showCalculatorCTA />
    </>
  );
};
