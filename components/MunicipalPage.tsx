import React, { useEffect } from 'react';
import { Button } from './Button';
import { PHONE_NUMBER } from '../constants';
import {
  CheckCircle2, ShieldCheck, MessageSquare,
  ClipboardList, Hammer, Leaf, FileText,
  TreePine, Landmark, GraduationCap, Zap, Phone,
} from 'lucide-react';

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

  useEffect(() => {
    document.title = 'Municipal Stump Grinding Phoenix AZ | Hungry Beaver';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Reliable stump grinding for cities, parks, and public spaces across the Phoenix Valley. Licensed, insured, and equipped for high-volume municipal projects.';
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://hungrybeaverstumpgrinding.com/services/municipal');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Municipal Stump Grinding Phoenix AZ | Hungry Beaver');
    if (ogDesc) ogDesc.setAttribute('content', 'Reliable stump grinding for cities, parks, and public spaces across the Phoenix Valley. Licensed, insured, and equipped for high-volume municipal projects.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://hungrybeaverstumpgrinding.com/services/municipal');
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
              to="/quote"
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
              to="/quote"
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Pricing</p>
          <h2 className="text-4xl font-display font-bold text-beaver-dark mb-6">EVERY PROJECT GETS A FIRM QUOTE</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Municipal and right-of-way jobs are always confirmed with a firm on-site quote. Price depends on how many stumps are on the list, their size at ground level, site access, grinding depth, and any scheduling windows we need to work within.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" to="/quote">Request a Municipal Quote</Button>
            <Button variant="outline" size="lg" to="/calculator">See Standard Rates</Button>
          </div>
        </div>
      </section>
    </>
  );
};
