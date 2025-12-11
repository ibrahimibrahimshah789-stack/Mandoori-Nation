import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { COMPANY_NAME, CONTACT_EMAIL } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="font-heading font-bold text-2xl text-primary tracking-tight">
              {COMPANY_NAME}
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-accent border-b-2 border-accent pb-1'
                      : 'text-gray-600 hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full top-20 left-0 shadow-lg animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-3 text-base font-medium rounded-md ${
                    isActive
                      ? 'text-accent bg-orange-50'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-heading font-bold text-xl mb-4">{COMPANY_NAME}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering brands through innovative design and digital excellence. We build the future, one pixel at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <NavLink to={link.path} className="text-gray-300 hover:text-white hover:underline decoration-accent underline-offset-4 text-sm transition-all">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Web Design</li>
              <li className="hover:text-white cursor-pointer">Brand Identity</li>
              <li className="hover:text-white cursor-pointer">SEO Marketing</li>
              <li className="hover:text-white cursor-pointer">Content Strategy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Contact Us</h4>
            <div className="flex items-start space-x-3 text-sm text-gray-300 mb-2">
              <Mail size={18} className="mt-1 flex-shrink-0" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                {CONTACT_EMAIL}
              </a>
            </div>
            <p className="text-sm text-gray-300 mt-4">
              Monday - Friday<br/>
              9:00 AM - 6:00 PM EST
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
