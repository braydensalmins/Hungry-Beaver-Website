import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';
import { Button } from './Button';

const SERVICE_LINKS = [
  { name: 'Residential', href: '/services/residential', live: true },
  { name: 'Commercial', href: '#', live: false },
  { name: 'Municipal', href: '#', live: false },
  { name: 'Raised Roots', href: '#', live: false },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Pricing', href: '/calculator' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const hash = href.substring(1); // #services
      const element = document.getElementById(hash.substring(1));
      
      if (location.pathname === '/' && element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleQuoteClick = () => {
    navigate('/quote');
  };

  return (
    <nav className="bg-beaver-dark text-white sticky top-0 z-50 border-b-4 border-beaver-orange shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo / Brand */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-6">
            <img 
              src="/beaver-icon.png" 
              alt="Hungry Beaver Stump Grinding Logo" 
              className="h-16 md:h-20 w-auto object-contain rounded-md relative top-[1px]"
            />
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-2xl font-display font-bold text-beaver-orange tracking-tighter leading-none">
                HUNGRY BEAVER
              </span>
              <span className="text-xs md:text-sm font-display font-bold tracking-[0.18em] text-white uppercase leading-none">
                Stump Grinding
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.name === 'Services' ? (
                <div key="services" className="relative group">
                  <button className="flex items-center gap-1 text-white hover:text-beaver-orange font-display font-bold uppercase tracking-wide text-sm transition-colors">
                    Services <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-44 bg-gray-900 border border-gray-700 shadow-xl hidden group-hover:block z-50">
                    {SERVICE_LINKS.map((s) =>
                      s.live ? (
                        <Link
                          key={s.name}
                          to={s.href}
                          className="block px-4 py-3 text-sm text-gray-200 hover:text-beaver-orange hover:bg-gray-800 font-bold uppercase tracking-wide border-b border-gray-800 last:border-b-0 transition-colors"
                        >
                          {s.name}
                        </Link>
                      ) : (
                        <span
                          key={s.name}
                          className="block px-4 py-3 text-sm text-gray-500 font-bold uppercase tracking-wide border-b border-gray-800 last:border-b-0 cursor-not-allowed"
                        >
                          {s.name} <span className="normal-case font-normal text-xs ml-1">(soon)</span>
                        </span>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-white hover:text-beaver-orange font-display font-bold uppercase tracking-wide text-sm transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="group flex flex-col items-end px-4 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              <span className="text-xs text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors">Call or Text</span>
              <span className="flex items-center gap-2 text-white font-bold text-lg leading-none group-hover:text-beaver-orange transition-colors">
                <Phone size={18} className="text-beaver-orange" />
                {PHONE_NUMBER}
              </span>
            </a>
            <Button variant="primary" size="sm" onClick={handleQuoteClick} className="font-display font-bold !text-white">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 pb-6 px-4 border-t border-gray-800">
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) =>
              link.name === 'Services' ? (
                <div key="services">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex justify-between items-center text-gray-300 hover:text-white font-bold uppercase text-lg py-2 border-b border-gray-800"
                  >
                    Services
                    <ChevronDown size={18} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 py-1 bg-gray-800/40 border-b border-gray-800">
                      {SERVICE_LINKS.map((s) =>
                        s.live ? (
                          <Link
                            key={s.name}
                            to={s.href}
                            onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                            className="block py-2 text-sm text-gray-300 hover:text-beaver-orange font-bold uppercase tracking-wide"
                          >
                            {s.name}
                          </Link>
                        ) : (
                          <span key={s.name} className="block py-2 text-sm text-gray-500 font-bold uppercase tracking-wide cursor-not-allowed">
                            {s.name} <span className="normal-case font-normal text-xs">(soon)</span>
                          </span>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleScroll(e, link.href);
                  }}
                  className="text-gray-300 hover:text-white font-bold uppercase block text-lg py-2 border-b border-gray-800"
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="pt-4">
               <Button variant="primary" className="w-full justify-center" onClick={() => {
                 setIsOpen(false);
                 handleQuoteClick();
               }}>
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};