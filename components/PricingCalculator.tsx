import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Button } from './Button';
import { Ruler, Info, Mail } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_kkvaw56';
const EMAILJS_ESTIMATE_TEMPLATE_ID = 'template_965uql4';
const EMAILJS_PUBLIC_KEY = '1EOA4fObIeEsDgeQE';

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits.length ? `(${digits}` : '';
  if (digits.length <= 6) return `(${digits.slice(0,3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
};

export const PricingCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [diameter, setDiameter] = useState<number | ''>('');
  const [stumpCount, setStumpCount] = useState<number>(1);
  const [contactInfo, setContactInfo] = useState({
    firstName: '', lastName: '', email: '', phone: '', zip: ''
  });
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const calculateEstimate = (pricePerInch: number) => {
    if (!diameter || typeof diameter !== 'number') return 0;
    return diameter * pricePerInch;
  };

  const stdEstimateRaw = calculateEstimate(7);
  const stdTotal = Math.max(stdEstimateRaw, 150);
  const fullTotal = Math.max(calculateEstimate(10), 150);
  const hasEstimate = diameter && typeof diameter === 'number' && diameter > 0;

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo(prev => ({ ...prev, phone: formatPhone(e.target.value) }));
  };

  const handleEmailEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus('sending');
    try {
      await Promise.all([
        // Email to customer
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_ESTIMATE_TEMPLATE_ID,
          {
            to_email: contactInfo.email,
            first_name: contactInfo.firstName,
            last_name: contactInfo.lastName,
            phone: contactInfo.phone,
            zip: contactInfo.zip,
            diameter: diameter,
            stump_count: stumpCount,
            std_estimate: stdEstimateRaw < 150 ? 'Minimum: $150' : `$${stdTotal.toFixed(0)}`,
            full_estimate: stdEstimateRaw < 150 ? 'Minimum: $150' : `$${fullTotal.toFixed(0)}`,
          },
          EMAILJS_PUBLIC_KEY
        ),
        // Notification to business
        emailjs.send(
          EMAILJS_SERVICE_ID,
          'template_ajuanqi',
          {
            from_name: `${contactInfo.firstName} ${contactInfo.lastName}`,
            phone: contactInfo.phone,
            address: `Zip: ${contactInfo.zip}`,
            message: `Estimate request from calculator.\nEmail: ${contactInfo.email}\nStump width: ${diameter}"\nStump count: ${stumpCount}\nStandard estimate: ${stdEstimateRaw < 150 ? 'Minimum: $150' : `$${stdTotal.toFixed(0)}`}\nFull service estimate: ${stdEstimateRaw < 150 ? 'Minimum: $150' : `$${fullTotal.toFixed(0)}`}`,
          },
          EMAILJS_PUBLIC_KEY
        ),
      ]);
      setEmailStatus('success');
    } catch {
      setEmailStatus('error');
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Quick Estimator</h2>
          <h3 className="text-3xl font-display font-bold text-beaver-dark">ENTER YOUR STUMP DETAILS</h3>
        </div>

        <div className="bg-beaver-dark p-6 md:p-10 text-white shadow-2xl relative rounded-sm">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <Ruler size={140} />
          </div>

          <div className="space-y-6 relative z-10">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-300">Total Width of All Stumps (Inches)</label>
              <input
                type="number"
                min="0"
                value={diameter}
                onChange={(e) => setDiameter(e.target.value === '' ? '' : Number(e.target.value))}
                className="w-full bg-gray-800 border-2 border-gray-600 text-white p-4 focus:border-beaver-orange focus:outline-none text-xl font-bold placeholder-gray-600 transition-colors rounded-sm"
                placeholder="e.g. 24"
              />
              <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                <Info size={12} className="text-beaver-orange" /> Measure the widest point at ground level, including roots
              </p>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-300">Number of Stumps</label>
              <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2">
                {[1, 2, 3, 4, 5].map(num => (
                  <button
                    key={num}
                    onClick={() => setStumpCount(num)}
                    className={`flex-1 py-3 px-4 font-bold border-2 transition-colors rounded-sm min-w-[50px] ${stumpCount === num ? 'bg-beaver-orange border-beaver-orange text-beaver-dark' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-700">
              {/* Email Estimate Form — only shown when estimate is calculated */}
              {hasEstimate && emailStatus !== 'success' && (
                <form onSubmit={handleEmailEstimate} className="mt-2 border-t border-gray-700 pt-6 space-y-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Mail size={16} className="text-beaver-orange" />
                    <span className="text-sm font-bold uppercase tracking-wide text-gray-300">Email This Estimate to Yourself</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-1">First Name</label>
                      <input type="text" name="firstName" value={contactInfo.firstName} onChange={handleContactChange}
                        className="w-full bg-gray-800 border-2 border-gray-600 text-white p-2 focus:border-beaver-orange focus:outline-none text-sm rounded-sm" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Last Name</label>
                      <input type="text" name="lastName" value={contactInfo.lastName} onChange={handleContactChange}
                        className="w-full bg-gray-800 border-2 border-gray-600 text-white p-2 focus:border-beaver-orange focus:outline-none text-sm rounded-sm" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Email</label>
                    <input type="email" name="email" value={contactInfo.email} onChange={handleContactChange}
                      className="w-full bg-gray-800 border-2 border-gray-600 text-white p-2 focus:border-beaver-orange focus:outline-none text-sm rounded-sm" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Phone</label>
                    <input type="tel" name="phone" value={contactInfo.phone} onChange={handlePhoneChange}
                      placeholder="(480) 555-1234"
                      className="w-full bg-gray-800 border-2 border-gray-600 text-white p-2 focus:border-beaver-orange focus:outline-none text-sm rounded-sm" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Project Zip Code</label>
                    <input type="text" name="zip" value={contactInfo.zip} onChange={handleContactChange}
                      placeholder="85001" maxLength={5}
                      className="w-full bg-gray-800 border-2 border-gray-600 text-white p-2 focus:border-beaver-orange focus:outline-none text-sm rounded-sm" required />
                  </div>
                  <Button variant="primary" className="w-full" type="submit" disabled={emailStatus === 'sending'}>
                    {emailStatus === 'sending' ? 'Sending...' : 'Email My Estimate'}
                  </Button>
                  {emailStatus === 'error' && (
                    <p className="text-xs text-red-400 text-center mt-1">Something went wrong. Call or text us directly.</p>
                  )}
                </form>
              )}

              {emailStatus === 'success' && (
                <div className="mt-4 border-t border-gray-700 pt-6">
                  <div className="bg-green-900/40 border border-green-600 text-green-300 text-sm font-bold text-center py-3 rounded-sm">
                    Estimate sent to {contactInfo.email}!
                  </div>
                </div>
              )}

              <Button variant="primary" className="w-full mt-6" onClick={() => navigate('/quote')}>
                Request Official Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
