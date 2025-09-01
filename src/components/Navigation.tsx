import React, { useState, useEffect } from 'react';
import { Brain, Menu, X, ArrowRight, Calendar, Globe, Users, Cog, HelpCircle } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

export const Navigation: React.FC = () => {
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationLinks = [
    { 
      href: '/#services', 
      label: 'Services',
      icon: <Cog className="w-5 h-5" />,
      description: 'Our AI solutions'
    },
    { 
      href: '/#about', 
      label: 'About',
      icon: <Users className="w-5 h-5" />,
      description: 'Our story & team'
    },
    { 
      href: '/#how-it-works', 
      label: 'How It Works',
      icon: <Globe className="w-5 h-5" />,
      description: 'Our process'
    },
    { 
      href: '/#faq', 
      label: 'FAQ',
      icon: <HelpCircle className="w-5 h-5" />,
      description: 'Common questions'
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-950/95 backdrop-blur-xl border-b border-dark-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-4 group flex-shrink-0">
            <div className="relative">
              <Brain className="w-10 h-10 text-primary-500 transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl animate-pulse-glow"></div>
            </div>
            <span className="text-2xl font-bold font-montserrat tracking-tight transition-all duration-300 group-hover:text-primary-400">
              THEO<span className="text-primary-500">CORTEX</span><span className="text-dark-400 font-inter">.AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
            
            <InteractiveButton href="/book-call">
              Book Call
            </InteractiveButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mobile-menu-container">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-3 text-dark-300 hover:text-primary-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 rounded-xl bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 hover:border-primary-500/50 hover:bg-dark-700/40 active:scale-95 touch-manipulation"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="w-6 h-6 transition-transform duration-300" />
                )}
              </div>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`
              fixed inset-0 bg-dark-950/95 backdrop-blur-2xl z-50
              transition-all duration-300 ease-out
              ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
            `}>
              {/* Close button */}
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 text-dark-300 hover:text-primary-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 rounded-xl bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 hover:border-primary-500/50 hover:bg-dark-700/40 active:scale-95 touch-manipulation"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
                {/* Logo in mobile menu */}
                <div className="mb-12">
                  <a href="/" onClick={handleMobileNavClick} className="flex items-center space-x-4 group">
                    <div className="relative">
                      <Brain className="w-12 h-12 text-primary-500 transition-transform duration-300 group-hover:rotate-12" />
                      <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl animate-pulse-glow"></div>
                    </div>
                    <span className="text-3xl font-bold font-montserrat tracking-tight transition-all duration-300 group-hover:text-primary-400">
                      THEO<span className="text-primary-500">CORTEX</span><span className="text-dark-400 font-inter">.AI</span>
                    </span>
                  </a>
                </div>

                {/* Navigation Links */}
                <div className="space-y-4 w-full max-w-sm mb-12">
                  {navigationLinks.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleMobileNavClick}
                      className={`
                        group relative block w-full text-center py-6 px-8 rounded-2xl
                        bg-gradient-to-r from-dark-800/40 to-dark-700/40 
                        border border-dark-600/50 backdrop-blur-xl
                        text-white hover:text-primary-400 
                        hover:bg-gradient-to-r hover:from-primary-500/10 hover:to-secondary-500/10
                        hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20
                        transition-all duration-300 ease-out
                        transform hover:scale-[1.02] active:scale-[0.98]
                        touch-manipulation overflow-hidden
                        mobile-nav-item
                      `}
                      style={{ animationDelay: `${index * 100}ms` }}
                      aria-label={`Navigate to ${link.label}`}
                    >
                      {/* Tech glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                              {link.icon}
                            </div>
                          </div>
                          <div className="text-left">
                            <div className="font-montserrat font-bold text-lg tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                              {link.label}
                            </div>
                            <div className="text-dark-400 text-sm group-hover:text-dark-300 transition-colors duration-300">
                              {link.description}
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-400/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-primary-400 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      {/* Bottom tech accent line */}
                      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Scan line effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    </a>
                  ))}
                </div>
                
                {/* Mobile CTA Button */}
                <div className="w-full max-w-sm">
                  <a
                    href="/book-call"
                    onClick={handleMobileNavClick}
                    className="
                      group relative block w-full text-center py-6 px-8 rounded-2xl
                      bg-gradient-to-r from-primary-500 to-secondary-500 
                      text-white font-montserrat font-bold text-lg tracking-wide
                      hover:from-primary-400 hover:to-secondary-400
                      shadow-lg hover:shadow-xl hover:shadow-primary-500/30
                      transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] 
                      touch-manipulation overflow-hidden
                      mobile-nav-item
                    "
                    style={{ animationDelay: `${navigationLinks.length * 100}ms` }}
                    aria-label="Book a consultation call"
                  >
                    {/* Animated background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    
                    <div className="relative z-10 flex items-center justify-center space-x-3">
                      <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      <span>Book Strategy Call</span>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </a>
                </div>

                {/* Tech decoration */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-primary-500/30 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};