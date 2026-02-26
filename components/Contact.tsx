import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';
import { Button } from './Button';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Quote Request from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AAddress: ${formData.address}%0D%0ADetails: ${formData.details}`;
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info Column */}
          <div>
            <h2 className="text-beaver-orange font-bold tracking-widest uppercase mb-2">Get in Touch</h2>
            <h3 className="text-5xl font-display font-bold text-beaver-dark mb-6">READY TO GRIND?</h3>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We know you want this done fast. For the quickest response, text us a photo of your stump.
            </p>

            <div className="bg-beaver-dark text-white p-6 rounded-lg mb-10 shadow-xl border-l-4 border-beaver-orange transform -rotate-1">
                <div className="flex items-center gap-4 mb-2">
                    <MessageSquare className="text-beaver-orange w-8 h-8" />
                    <h4 className="text-2xl font-bold font-display uppercase">Fastest Way: Text Us</h4>
                </div>
                <p className="text-gray-300 mb-4 pl-12">
                    Snap a photo of the stump. Text it to <strong>{PHONE_NUMBER}</strong>. We usually reply with a price in 15 minutes or less.
                </p>
                <div className="pl-12">
                   <a href={`sms:${PHONE_NUMBER}`} className="inline-block bg-beaver-orange text-beaver-dark font-bold px-6 py-2 rounded hover:bg-orange-600 transition-colors uppercase text-sm tracking-wide">
                        Text Now
                   </a>
                </div>
            </div>

            <div className="space-y-8 pl-2">
              <div className="flex items-start">
                <div className="mr-6 mt-1">
                  <Phone className="w-6 h-6 text-beaver-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-beaver-dark uppercase mb-1">Call Us</h4>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-2xl font-display font-bold text-gray-800 hover:text-beaver-orange transition-colors">
                    {PHONE_NUMBER}
                  </a>
                  <p className="text-gray-500 mt-1 text-sm">Mon-Fri: 7am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                 <div className="mr-6 mt-1">
                  <Mail className="w-6 h-6 text-beaver-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-beaver-dark uppercase mb-1">Email Us</h4>
                   <a href={`mailto:${EMAIL_ADDRESS}`} className="text-xl font-bold text-gray-800 hover:text-beaver-orange transition-colors">
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                 <div className="mr-6 mt-1">
                  <MapPin className="w-6 h-6 text-beaver-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-beaver-dark uppercase mb-1">Service Area</h4>
                   <p className="text-lg text-gray-800">
                    Serving Phoenix, Scottsdale, Mesa, Tempe, and Gilbert.
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <form className="bg-gray-50 p-8 md:p-12 border border-gray-200 shadow-lg rounded-sm" onSubmit={handleSubmit}>
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-display font-bold text-beaver-dark uppercase">Request a Quote</h4>
              <div className="flex items-center text-xs text-green-600 font-bold bg-green-100 px-2 py-1 rounded">
                <Clock size={12} className="mr-1" /> Replies in ~2 hrs
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-gray-200 p-3 focus:border-beaver-orange focus:outline-none transition-colors" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-gray-200 p-3 focus:border-beaver-orange focus:outline-none transition-colors" 
                  placeholder="(480) ..." 
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
               <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Job Address</label>
               <input 
                 type="text" 
                 name="address"
                 value={formData.address}
                 onChange={handleChange}
                 className="w-full bg-white border-2 border-gray-200 p-3 focus:border-beaver-orange focus:outline-none transition-colors" 
                 required
               />
            </div>

            <div className="mb-8">
               <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Stump Details</label>
               <textarea 
                 rows={4} 
                 name="details"
                 value={formData.details}
                 onChange={handleChange}
                 className="w-full bg-white border-2 border-gray-200 p-3 focus:border-beaver-orange focus:outline-none transition-colors" 
                 placeholder="e.g. 2 stumps in the backyard, about 20 inches wide. Gate is unlocked."
                 required
               ></textarea>
            </div>

            <Button variant="primary" className="w-full" type="submit">
              Send Request
            </Button>
            <p className="text-center text-xs text-gray-400 mt-4">Your information is safe with us.</p>
          </form>

        </div>
      </div>
    </section>
  );
};