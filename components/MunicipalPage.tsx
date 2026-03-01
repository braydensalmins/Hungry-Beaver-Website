import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { PRICING_ROWS, PHONE_NUMBER } from '../constants';
import {
  CheckCircle2, ShieldCheck, MessageSquare,
  ClipboardList, Hammer, Leaf, FileText,
  TreePine, Landmark, GraduationCap, Zap, Phone,
} from 'lucide-react';
import { HowToMeasure } from './HowToMeasure';

const WHO_WE_SERVE = [
  {
    Icon: Landmark,
    name: 'City Parks Departments',
    description: 'Parks, medians, trailheads, and public greenways. We work around public hours and leave sites clean and ready.',
  },
  {
    Icon: TreePine,
    name: 'Public Works',
    description: 'Right-of-way stumps, road clearance, and utility corridors. We coordinate with your crews and meet scheduling requirements.',
  },
  {
    Icon: GraduationCap,
    name: 'School Districts',
    description: 'Campus grounds, athletic fields, and play areas. We schedule around school hours to minimize disruption.',
  },
  {
    Icon: Zap,
    name: 'Utility & Special Districts',
    description: 'Easements, utility access lanes, and HOA common areas requiring government-level documentation and compliance.',
  },
];

const STEPS = [
  {
    number: '01',
    Icon: ClipboardList,
    name: 'Review Requirements',
    description: 'We confirm permit needs, scheduling windows, and any site restrictions before mobilizing.',
  },
  {
    number: '02',
    Icon: MessageSquare,
    name: 'Coordinate Access',
    description: 'We work around public hours and foot traffic. Safety setup and signage coordinated with your team as needed.',
  },
  {
    number: '03',
    Icon: Hammer,
    name: 'Grind',
    description: 'Commercial grinder removes stumps 6–8 inches below grade without disruption to surrounding hardscape or infrastructure.',
  },
  {
    number: '04',
    Icon: FileText,
    name: 'Document & Clear',
    description: 'Full site cleanup included. We can provide job photos and documentation for city records on request.',
  },
];

export const MunicipalPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Municipal Stump Removal | Hungry Beaver Stump Grinding';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Municipal stump removal for city parks, public works, school districts, and utility districts across the Greater Phoenix Valley. Fully insured, COI available. Call 480-283-4560.';
  }, []);

  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="bg-beaver-dark text-white pt-10 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-beaver-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Licensed & Insured</span>
            </div>
            <div className="hidden sm:block w-1 h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-beaver-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">COI Available on Request</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4 leading-[1.05]">
            MUNICIPAL<br />
            <span className="text-beaver-orange">STUMP REMOVAL</span>
          </h1>

          <p className="text-xl md:text-2xl font-display font-bold text-gray-300 mb-6 uppercase tracking-wide">
            Serving parks departments, public works, and government properties across the Valley.
          </p>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We're equipped and insured for government and public-sector stump removal — right-of-way clearance, park maintenance, school grounds, and more. Fast to mobilize, compliant with permit requirements, and fully documented. One contractor, zero headaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/contact')}
              className="shadow-lg shadow-orange-900/20 flex items-center gap-2"
            >
              <Phone size={20} />
              Request a Municipal Quote
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
              <CheckCircle2 size={18} className="text-beaver-orange" /> COI Available
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> Right-of-Way Work
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> Licensed & Insured
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
              BUILT FOR PUBLIC-SECTOR WORK
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
              COMPLIANT, DOCUMENTED, DONE RIGHT
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

      {/* ── Section 4: Insurance & Compliance ── */}
      <section className="py-20 bg-beaver-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Insurance & Compliance</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            PAPERWORK READY WHEN YOU NEED IT
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We carry full general liability insurance and can provide a Certificate of Insurance (COI) naming your municipality, district, or agency. If your project requires documentation, we've got it covered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 border border-white/20 p-8 text-left">
              <ShieldCheck size={36} className="text-beaver-orange mb-4" />
              <h3 className="text-xl font-display font-bold uppercase mb-3">General Liability Coverage</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Fully insured for public and private property work. We carry the coverage required for government contracts and right-of-way projects.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 p-8 text-left">
              <FileText size={36} className="text-beaver-orange mb-4" />
              <h3 className="text-xl font-display font-bold uppercase mb-3">COI & Documentation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Need a COI naming your municipality or agency? Job photos for city records? We provide documentation on request — no extra hoops.
              </p>
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
              Contact Us for Municipal Pricing
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
              Use this as a ballpark. Municipal and right-of-way jobs are always confirmed with a firm on-site quote.
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
            *Pricing varies based on access, depth, and site conditions. Municipal and right-of-way projects are quoted on-site.
          </p>
        </div>
      </section>

      <HowToMeasure showCalculatorCTA />
    </>
  );
};
