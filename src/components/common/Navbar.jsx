import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-5 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-6 py-3 rounded-2xl ref-navbar">
          
          {/* Logo / Domain Tag from Reference Video: rifqi.dev -> almutasim.dev */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-mono text-sm tracking-wider text-slate-300 hover:text-white transition-colors"
          >
            almutasim.dev
          </a>

          {/* Desktop Nav Links from Reference Video */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono">
            {navItems.map((item) => {
              const isActive = activeSection === item.id || 
                (item.id === 'portfolio' && (activeSection === 'portfolio' || activeSection === 'projects' || activeSection === 'skills'));
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 max-w-6xl mx-auto p-4 rounded-2xl ref-navbar space-y-3 text-left font-mono text-sm"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05]"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
