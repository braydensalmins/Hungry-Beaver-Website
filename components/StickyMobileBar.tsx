import React from 'react';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-beaver-dark border-t border-gray-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)] pb-safe">
      <div className="grid grid-cols-3 h-16">
        <a 
          href={`sms:${PHONE_NUMBER}`}
          className="flex flex-col items-center justify-center gap-1 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors border-r border-gray-800"
        >
          <MessageSquare size={20} className="text-beaver-orange" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Text Photo</span>
        </a>
        
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="flex flex-col items-center justify-center gap-1 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors border-r border-gray-800"
        >
          <Phone size={20} className="text-beaver-orange" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>

        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
          className="flex flex-col items-center justify-center gap-1 bg-beaver-orange text-beaver-dark hover:bg-orange-600 transition-colors"
        >
          <FileText size={20} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Get Quote</span>
        </button>
      </div>
      {/* Safe area spacer for iPhone home bar */}
      <div className="h-safe bg-beaver-dark"></div>
    </div>
  );
};