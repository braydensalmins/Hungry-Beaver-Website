import React from 'react';
import { MapPin } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

const CITY_BLURBS: Record<string, string> = {
  Phoenix: "Phoenix is our home base and our most active service area. From Arcadia and Biltmore to South Phoenix and the West Side, we grind stumps across every Phoenix neighborhood. Whether it's an old citrus tree stump in a historic yard or a freshly removed mesquite, we offer same-day estimates and fast scheduling throughout the city. Call or text for a free Phoenix stump grinding quote.",
  Scottsdale: "Scottsdale properties — from Old Town bungalows to North Scottsdale estates — demand clean, detail-oriented work. We bring compact equipment that won't tear up pavers or manicured lawns, and we're experienced working on high-end residential lots where appearance matters. Same-day estimates available for all Scottsdale stump grinding and removal jobs.",
  Mesa: "Mesa is one of our busiest service areas, a mix of established neighborhoods and newer subdivisions across a huge footprint. Whether you're near downtown Mesa, Eastmark, or anywhere in between, we offer reliable stump grinding with fast turnarounds and upfront pricing. Text us a photo for a same-day Mesa stump grinding estimate.",
  Tempe: "Tempe's mature tree canopy means lots of older stumps — especially around neighborhoods near ASU, Tempe Town Lake, and South Tempe. We work efficiently on smaller residential lots common in the area and can handle stumps left behind from city tree removals or HOA-mandated work. Contact us for fast Tempe stump removal scheduling.",
  Gilbert: "Gilbert's rapid growth means plenty of new construction lots and established suburban yards that need stump grinding done right. We're familiar with the irrigation systems common in Gilbert neighborhoods and take care to avoid underground lines before we start. Same-day estimates available throughout Gilbert.",
  Chandler: "Chandler homeowners and HOAs trust us for clean, compliant stump grinding that meets community standards. We work in subdivisions throughout Chandler — from Ocotillo to Sun Lakes — and can coordinate with HOA requirements on timing and cleanup. Get a free Chandler stump grinding quote today.",
  Glendale: "From the sports district near State Farm Stadium to quiet residential streets throughout Glendale, we provide fast and affordable stump grinding across the city. We handle both front and backyard stumps with equipment compact enough for tight gate access. Text us a photo for a same-day Glendale estimate.",
  Peoria: "Peoria's blend of newer master-planned communities and established neighborhoods keeps us busy on the northwest side of the Valley. We offer same-day text estimates for Peoria stump grinding jobs and can typically schedule within 1–2 days. No stump too big or too awkward — we come prepared.",
  Surprise: "We cover the entire West Valley including Surprise, where large lots and mature desert trees often leave behind stubborn stumps. Whether it's a single backyard stump or multiple stumps on a larger property, we provide honest pricing and show up on time. Call or text for a Surprise stump grinding quote.",
  "Queen Creek": "Queen Creek's rural lots, horse properties, and newer subdivisions all present unique stump grinding challenges — and we're equipped for all of them. We handle multi-stump jobs on acreage properties as well as single stumps in tight suburban backyards. Serving Queen Creek and the surrounding San Tan Valley area.",
  Ahwatukee: "Ahwatukee's South Mountain location and mature landscaping make it one of the more tree-heavy areas in the Valley. We serve the Ahwatukee Foothills neighborhood regularly and are familiar with the lot layouts and common tree species in the area. Fast, clean stump grinding — text us a photo for a same-day estimate.",
  Avondale: "Avondale is growing fast, and with new construction and tree removals happening throughout the city, stump grinding demand is high. We serve residential and commercial customers in Avondale with the same upfront pricing and professional service we bring to every job. Contact us for same-day West Valley scheduling.",
  Goodyear: "Goodyear's newer communities and established properties both benefit from clean stump removal that protects turf, irrigation systems, and surrounding landscaping. We're experienced working in Goodyear subdivisions and can work around sprinkler lines and landscaping features. Get a free Goodyear stump grinding estimate today.",
  "Paradise Valley": "Paradise Valley luxury estates require a higher level of care — and we deliver it. We use compact, precise equipment to protect premium landscaping, pavers, and hardscape, and we clean up completely before we leave. Hillside lots and complex root systems are no problem. Text or call us for a Paradise Valley stump grinding consultation.",
};

export const ServiceAreas: React.FC = () => {
  return (
    <section id="service-areas" className="py-24 bg-beaver-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Where We Work</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-beaver-dark">GREATER PHOENIX VALLEY</h3>
          <div className="w-24 h-2 bg-beaver-orange mx-auto mt-6 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We serve 14+ cities across the Valley. Text us a photo for a same-day estimate — no matter where you are.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICE_AREAS.map((city) => (
            <div
              key={city}
              className="bg-white p-6 border-b-4 border-beaver-orange shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-beaver-dark w-9 h-9 flex items-center justify-center shrink-0">
                  <MapPin className="text-beaver-orange w-5 h-5" />
                </div>
                <h4 className="text-xl font-display font-bold text-beaver-dark uppercase">{city}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{CITY_BLURBS[city]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
