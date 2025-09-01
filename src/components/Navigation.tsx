import React, { useState, useEffect } from 'react';
import { Brain, Menu, ArrowRight, Calendar } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);

// Auto-close mobile menu when clicking navigation links
const handleMobileNavClick = () => {
  setIsMobileMenuOpen(false);
};

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-dark-950/95 backdrop-blur-xl border-b border-dark-800/50' 
      : 'bg-transparent'
  }`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-primary-400" />
          <span className="text-xl font-bold text-white">AI Agency</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { href: '/#services', label: 'Services' },
            { href: '/#about', label: 'About' },
            { href: '/#how-it-works', label: 'How It Works' },
            { href: '/#faq', label: 'FAQ' }
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-dark-300 hover:text-primary-400 transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          
          <InteractiveButton href="/book-call">
            Book Call
          </InteractiveButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative p-3 text-dark-300 hover:text-primary-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 rounded-xl bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 hover:border-primary-500/50 hover:bg-dark-700/40 active:scale-95 touch-manipulation"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="relative w-6 h-6">
            {/* Animated hamburger icon */}
            <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div className={`
      md:hidden absolute top-full left-0 right-0 
      bg-dark-950/98 backdrop-blur-2xl border-b border-dark-800/50
      transition-all duration-300 ease-out
      ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
    `}>
      <div className="px-6 py-8 space-y-2">
        {[
          { href: '/#services', label: 'Services' },
          { href: '/#about', label: 'About' },
          { href: '/#how-it-works', label: 'How It Works' },
          { href: '/#faq', label: 'FAQ' }
        ].map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleMobileNavClick}
            className={`
              group relative block w-full text-left py-4 px-6 rounded-xl
              bg-dark-800/20 border border-dark-700/30 backdrop-blur-sm
              text-dark-300 hover:text-white hover:bg-dark-700/40 hover:border-primary-500/50
              transition-all duration-300 ease-out
              transform hover:scale-[1.02] active:scale-[0.98]
              touch-manipulation
              animate-fade-in-up
            `}
            style={{ animationDelay: `${index * 100}ms` }}
            aria-label={`Navigate to ${link.label}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-base tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                {link.label}
              </span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-3 h-3 text-primary-400 group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </div>
            
            {/* Subtle tech accent line */}
            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        ))}
        
        {/* Mobile CTA Button */}
        <div className="pt-6 mt-6 border-t border-dark-800/50">
          <InteractiveButton 
            href="/book-call"
            onClick={handleMobileNavClick}
            className="w-full justify-center bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl hover:shadow-primary-500/25 touch-manipulation"
            aria-label="Book a consultation call"
          >
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span className="font-montserrat font-semibold tracking-wide">Book Strategy Call</span>
            </div>
          </InteractiveButton>
        </div>
      </div>
    </div>
  </nav>
);