
import React from 'react';
import placeholderLogo from '/placeholder.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-olive-dark py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src={placeholderLogo}
                alt="Steenbras Properties Logo" 
                className="h-12 w-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Steenbras Properties</h3>
            <p className="text-sm text-white/70 mb-4">Serviced Communal Living Hostels – Comfort. Community. Affordability.</p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-orange transition-colors">Home</a></li>
              <li><a href="#amenities" className="text-white/70 hover:text-orange transition-colors">Amenities</a></li>
              <li><a href="#apply" className="text-white/70 hover:text-orange transition-colors">Apply Now</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>123 Main Road, Cape Town</li>
              <li>Western Cape, 8001</li>
              <li>info@steenbrasproperties.co.za</li>
              <li>+27 21 555 0123</li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-olive-light hover:bg-orange transition-colors p-2 rounded-full">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="bg-olive-light hover:bg-orange transition-colors p-2 rounded-full">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="bg-olive-light hover:bg-orange transition-colors p-2 rounded-full">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-olive-light/30 mt-12 pt-6 text-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Steenbras Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
