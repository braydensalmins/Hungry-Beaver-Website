import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { CheckCircle2, ShieldCheck, MapPin, MessageSquare } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-beaver-dark text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-beaver-dark via-beaver-dark/80 to-beaver-dark/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 lg:pt-20 lg:pb-32 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          
          {/* Factual Trust Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-beaver-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Local, Insured & Bonded</span>
            </div>
            <div className="hidden sm:block w-1 h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-beaver-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Fast Text Estimates</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
            WE GRIND STUMPS. <br />
            <span className="text-beaver-orange text-glow">YOU GET YOUR YARD BACK.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Fast, reliable, and affordable stump removal in the Greater Phoenix Valley. <br className="hidden md:block"/>
            Text us a photo and get a firm price in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-lg shadow-orange-900/20" onClick={() => navigate('/quote')}>
              Get a Free Quote
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-beaver-dark" onClick={() => window.location.href = `sms:${PHONE_NUMBER}`}>
              Text Us a Photo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold text-gray-400 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> 5-Star Rated
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> Same-Day Estimates
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-beaver-orange" /> Serving 14+ Valley Cities
            </div>
          </div>
        </div>
      </div>
      
      {/* Section transition gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-800 pointer-events-none z-0" />
    </div>
  );
};