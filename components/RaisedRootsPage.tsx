import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { PRICING_ROWS, PHONE_NUMBER } from '../constants';
import {
  CheckCircle2, ShieldCheck, MessageSquare,
  Search, Target, Hammer, Leaf,
  Wrench, AlertTriangle, SquareSlash, Droplets, Phone,
} from 'lucide-react';
import { HowToMeasure } from './HowToMeasure';

const PROBLEMS = [
  {
    Icon: Wrench,
    name: 'Mower & Equipment Damage',
    description: 'Surface roots catch blades, damage mowers, and destroy string trimmers. One pass over a raised root can cost you hundreds in repairs.',
  },
  {
    Icon: AlertTriangle,
    name: 'Tripping Hazards',
    description: 'Roots in walkways, patios, driveways, and play areas create serious liability. Grinding them flush eliminates the risk.',
  },
  {
    Icon: SquareSlash,
    name: 'Cracked Driveways & Sidewalks',
    description: 'Roots lifting concrete or pavers cause uneven surfaces and costly repairs. We grind the root before the damage gets worse.',
  },
  {
    Icon: Droplets,
    name: 'Irrigation Damage',
    description: 'Surface roots interfere with sprinkler lines, drip tubing, and underground irrigation. Targeted grinding removes the problem without full excavation.',
  },
];

const STEPS = [
  {
    number: '01',
    Icon: Search,
    name: 'Assess',
    description: 'We walk the affected area, map the full root spread, and identify the grinding depth needed to bring roots flush to grade.',
  },
  {
    number: '02',
    Icon: Target,
    name: 'Mark Zone',
    description: 'We mark the grinding boundary to protect surrounding concrete, pavers, irrigation, and lawn from the machine.',
  },
  {
    number: '03',
    Icon: Hammer,
    name: 'Grind Flush',
    description: 'The carbide-tipped cutting wheel takes roots flush to grade — no digging, no excavation, no damage to your hardscape.',
  },
  {
    number: '04',
    Icon: Leaf,
    name: 'Clean Up',
    description: 'Wood chips and mulch are raked and removed. The area is left level, clean, and ready for topsoil or sod.',
  },
];

export const RaisedRootsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Raised Root Grinding | Hungry Beaver Stump Grinding';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Raised root grinding across the Greater Phoenix Valley. We grind surface roots flush to grade — no excavation, no lawn damage. Protects mowers, hardscape, and irrigation. Call 480-283-4560.';
  }, []);

  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="bg-beaver-dark text-white pt-10 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-beaver-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Targeted Grinding</span>
            </div>
            <div className="hidden sm:block w-1 h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-beaver-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">No Full Removal Required</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4 leading-[1.05]">
            RAISED ROOT<br />
            <span className="text-beaver-orange">GRINDING</span>
          </h1>

          <p className="text-xl md:text-2xl font-display font-bold text-gray-300 mb-6 uppercase tracking-wide">
            Grinding surface roots flush to grade — protecting your mower, hardscape, and lawn.
          </p>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Raised surface roots don't require a full stump removal job. Our targeted grinding brings roots flush to grade without digging, excavating, or disturbing your surrounding lawn or concrete. Fast, affordable, and cleaner than you'd expect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/contact')}
              className="shadow-lg shadow-orange-900/20 flex items-center gap-2"
            >
              <Phone size={20} />
              Get a Raised Root Quote
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
              <CheckCircle2 size={18} className="text-beaver-orange" /> No Excavation
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> Protects Hardscape
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> Same-Day Available
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Problems We Solve ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Problems We Solve</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">
              RAISED ROOTS CAUSE REAL DAMAGE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROBLEMS.map((item) => (
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
              FLUSH TO GRADE IN A SINGLE VISIT
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

      {/* ── Section 4: Key Difference Callout ── */}
      <section className="py-20 bg-beaver-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Good to Know</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            NOT THE SAME AS STUMP GRINDING
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Raised root grinding is a targeted service — often faster and more affordable than a full stump removal job. We only grind what's above grade. No digging. No excavation. No damage to your concrete, pavers, or lawn.
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Raised root jobs are priced by the spread and complexity of the roots — not the diameter of a stump. The best way to get an accurate number is to text us a photo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => { window.location.href = `sms:${PHONE_NUMBER}`; }}
              className="flex items-center gap-2"
            >
              <MessageSquare size={20} />
              Text Us a Photo for a Fast Estimate
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-beaver-dark"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* ── Section 5: Pricing ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Pricing Reference</p>
            <h2 className="text-4xl font-display font-bold text-beaver-dark">STUMP GRINDING RATES</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              These rates apply to standard stump grinding. Raised root jobs are priced separately based on root spread — contact us for a custom quote.
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
            *Raised root grinding is priced by root spread and complexity, not stump diameter. Text us a photo for the most accurate estimate.
          </p>
        </div>
      </section>

      <HowToMeasure />
    </>
  );
};
