import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER, EMAIL_ADDRESS, SERVICE_AREAS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-beaver-dark text-white py-12 border-t-8 border-beaver-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-beaver-orange mb-4">{COMPANY_NAME.toUpperCase()}</h3>
            <p className="text-gray-400 text-sm">
              Professional stump grinding services for residential and commercial properties.
              Reliable. Efficient. Licensed.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/#services" className="hover:text-beaver-orange">Services</Link></li>
              <li><Link to="/calculator" className="hover:text-beaver-orange">Pricing</Link></li>
              <li><Link to="/gallery" className="hover:text-beaver-orange">Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-beaver-orange">FAQ</Link></li>
              <li><Link to="/service-areas" className="hover:text-beaver-orange">Service Areas</Link></li>
              <li><Link to="/contact" className="hover:text-beaver-orange">Contact Us</Link></li>
              <li><Link to="/quote" className="hover:text-beaver-orange">Get a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-4 text-gray-200">Service Areas</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              {SERVICE_AREAS.map(city => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-4 text-gray-200">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href={`tel:${PHONE_NUMBER}`} className="hover:text-beaver-orange">{PHONE_NUMBER}</a></li>
              <li><a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-beaver-orange">{EMAIL_ADDRESS}</a></li>
              <li className="pt-2 text-xs">Mon–Fri: 7am – 6pm</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-600 pt-8 border-t border-gray-800">
          © {new Date().getFullYear()} Hungry Beaver Stump Grinding | Serving the Greater Phoenix Valley
        </div>
      </div>
    </footer>
  );
};
