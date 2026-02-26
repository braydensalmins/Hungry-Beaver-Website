import { Phone, TreePine, Ruler, Truck, ShieldCheck, Clock } from 'lucide-react';
import { ServiceItem, PricingTier } from './types';

export const COMPANY_NAME = "Hungry Beaver Stump Grinding";
export const PHONE_NUMBER = "480-283-4560";
export const EMAIL_ADDRESS = "hungrybeaverstumpgrinding@gmail.com";

export const SERVICES: ServiceItem[] = [
  {
    title: "Stump Grinding",
    description: "Complete removal of unsightly stumps to 6-8 inches below grade, or deeper for special requests.",
    icon: TreePine,
  },
  {
    title: "Root Pruning",
    description: "Grinding surface roots to protect mowers and improve lawn aesthetics.",
    icon: Ruler,
  },
  {
    title: "Debris Cleanup",
    description: "We can leave the mulch for your garden or haul it away for a clean finish.",
    icon: Truck,
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Standard Grind",
    price: "$7.00 / inch",
    features: ["Grind 6-8\" below grade", "Mulch left in hole", "No cleanup included", "$150 Minimum"],
  },
  {
    name: "Full Service",
    price: "$14.00 / inch",
    features: ["Grind 6-8\" below grade", "Mulch backfilled", "Excess hauled away", "Site raked clean"],
  },
];

export const BEAVER_SYSTEM_INSTRUCTION = `You are "Chomp", the AI mascot for Hungry Beaver Stump Grinding. 
Your personality is friendly, blue-collar, professional, and reliable. You are helpful but direct.
You answer questions about stump grinding, pricing, and the process.
Key Information:
- We are based in Phoenix, AZ.
- Pricing is generally around $7 per inch for standard grind and $14 per inch for full service.
- There is a $150 minimum service fee.
- We offer grinding, root pruning, and cleanup.
- Measuring: Measure the widest point where the stump meets the ground, including roots.
- We are fully insured and safety-focused.
Keep answers short (under 3 sentences usually). Use a helpful, confident tone.
If asked about scheduling, tell them to use the contact form or call us directly.`;