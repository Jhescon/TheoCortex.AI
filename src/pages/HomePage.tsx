import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Bot, 
  Database, 
  Zap, 
  Users, 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Star,
  Menu,
  X,
  Cog,
  HelpCircle,
  Instagram,
  Linkedin
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { TypingEffect } from '../components/TypingEffect';
import { ParallaxBackground } from '../components/ParallaxBackground';

export const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Ensure page starts at top without animation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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

  // Auto-close mobile menu when clicking navigation links
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationLinks = [
    { 
      href: '#services', 
      label: 'Services',
      icon: <Cog className="w-5 h-5" />,
      description: 'Our AI solutions'
    },
    { 
      href: '#about', 
      label: 'About',
      icon: <Users className="w-5 h-5" />,
      description: 'Our story & team'
    },
    { 
      href: '#how-it-works', 
      label: 'How It Works',
      icon: <Globe className="w-5 h-5" />,
      description: 'Our process'
    },
    { 
      href: '#faq', 
      label: 'FAQ',
      icon: <HelpCircle className="w-5 h-5" />,
      description: 'Common questions'
    }
  ];

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Design & Funnels",
      description: "Custom websites and high-converting funnels that turn visitors into paying clients.",
      href: "/website-design-funnels"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Smart AI Agents",
      description: "24/7 AI assistants that qualify leads, answer questions, and book appointments automatically.",
      href: "/smart-ai-agents"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "CRM Integration & Appointment Setting",
      description: "Seamless CRM setup with automated follow-ups and booking systems that never miss a lead.",
      href: "/crm-integration"
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Lead Qualification",
      description: "AI agents that pre-qualify prospects before they reach your calendar"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Automated Follow-ups",
      description: "Smart sequences that nurture leads without manual intervention"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Calendar Integration",
      description: "Seamless booking system that syncs with your existing calendar"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Custom AI Training",
      description: "AI trained specifically on your business and industry knowledge"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Business Coach",
      content: "TheoCortex.AI transformed my lead generation. I went from chasing prospects to having qualified leads book themselves.",
      rating: 5
    },
    {
      name: "Mike R.",
      role: "Digital Agency Owner",
      content: "The AI agents handle all our initial client inquiries. It's like having a 24/7 sales team that never sleeps.",
      rating: 5
    },
    {
      name: "Lisa K.",
      role: "Consultant",
      content: "I was skeptical about AI, but now I can't imagine running my business without it. Game-changer!",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How quickly can you set up my AI automation?",
      answer: "Most setups are completed within 1-2 weeks. We start with a strategy call to understand your needs, then build and deploy your custom solution."
    },
    {
      question: "Do I need technical knowledge to use these systems?",
      answer: "Not at all! We handle all the technical setup and provide simple training. You'll be able to manage everything through user-friendly dashboards."
    },
    {
      question: "What if the AI doesn't understand my industry?",
      answer: "We train each AI specifically on your business, industry, and common customer questions. The AI learns your brand voice and expertise."
    },
    {
      question: "Can you integrate with my existing tools?",
      answer: "Yes! We work with popular CRMs like GoHighLevel, HubSpot, and many others. We'll connect everything seamlessly."
    },
    {
      question: "What's included in the free consultation?",
      answer: "We'll audit your current process, identify automation opportunities, and create a custom roadmap for your business. No obligations."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-dark-50 font-inter relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute inset-0 geometric-bg"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `linear-gradient(45deg, #0066FF, #6600FF)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
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

            {/* Mobile Navigation - Redesigned */}
            <div className="md:hidden mobile-menu-container">
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-3 text-dark-300 hover:text-primary-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 rounded-xl bg-dark-800/40 backdrop-blur-sm border border-dark-700/60 hover:border-primary-500/60 hover:bg-dark-700/50 active:scale-95 touch-manipulation group"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <div className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'}`}>
                    <Menu className="w-6 h-6" />
                  </div>
                  <div className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-45 opacity-0'}`}>
                    <X className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Tech glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </button>

              {/* Mobile Menu Overlay - Completely Redesigned */}
              <div className={`
                fixed inset-0 bg-dark-950/98 backdrop-blur-2xl z-50
                transition-all duration-400 ease-out
                ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
              `}>
                {/* Close Button */}
                <div className="absolute top-6 right-6">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 text-dark-300 hover:text-primary-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 rounded-xl bg-dark-800/40 backdrop-blur-sm border border-dark-700/60 hover:border-primary-500/60 hover:bg-dark-700/50 active:scale-95 touch-manipulation group"
                    aria-label="Close mobile menu"
                  >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </button>
                </div>

                {/* Navigation Content */}
                <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
                  {/* Logo in mobile menu */}
                  <div className="mb-12 mobile-nav-item">
                    <a href="/" onClick={handleMobileNavClick} className="flex items-center space-x-4 group">
                      <div className="relative">
                        <Brain className="w-12 h-12 text-primary-500 group-hover:rotate-12 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl animate-pulse-glow"></div>
                      </div>
                      <span className="text-3xl font-bold font-montserrat tracking-tight group-hover:text-primary-400 transition-colors duration-300">
                        THEO<span className="text-primary-500">CORTEX</span><span className="text-dark-400 font-inter">.AI</span>
                      </span>
                    </a>
                  </div>

                  {/* Redesigned Navigation Buttons */}
                  <div className="space-y-4 w-full max-w-sm mb-12">
                    {navigationLinks.map((link, index) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={handleMobileNavClick}
                        className="mobile-nav-button group relative block w-full overflow-hidden"
                        style={{ animationDelay: `${(index + 1) * 100}ms` }}
                        aria-label={`Navigate to ${link.label}`}
                      >
                        {/* Tech scan line effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                        
                        {/* Main content */}
                        <div className="relative z-10 flex items-center justify-between p-6">
                          <div className="flex items-center space-x-4">
                            {/* Icon container */}
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-400/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                              <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                                {link.icon}
                              </div>
                            </div>
                            
                            {/* Text content */}
                            <div className="text-left">
                              <div className="font-montserrat font-bold text-lg tracking-wide text-white group-hover:text-primary-400 group-hover:translate-x-1 transition-all duration-300">
                                {link.label}
                              </div>
                              <div className="text-dark-400 text-sm group-hover:text-dark-300 transition-colors duration-300">
                                {link.description}
                              </div>
                            </div>
                          </div>
                          
                          {/* Arrow indicator */}
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-400/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <ArrowRight className="w-5 h-5 text-primary-400 group-hover:translate-x-0.5 transition-transform duration-300" />
                          </div>
                        </div>
                        
                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    ))}
                  </div>
                  
                  {/* Enhanced CTA Button */}
                  <div className="w-full max-w-sm mobile-nav-item" style={{ animationDelay: `${(navigationLinks.length + 1) * 100}ms` }}>
                    <a
                      href="/book-call"
                      onClick={handleMobileNavClick}
                      className="group relative block w-full text-center py-6 px-8 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-montserrat font-bold text-lg tracking-wide hover:from-primary-400 hover:to-secondary-400 shadow-lg hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] touch-manipulation overflow-hidden"
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
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 mobile-nav-item" style={{ animationDelay: `${(navigationLinks.length + 2) * 100}ms` }}>
                    <div className="flex space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-primary-500/40 rounded-full animate-pulse"
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <ParallaxBackground speed={0.3} className="absolute inset-0 animate-fade-in-sequential stagger-1">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        </ParallaxBackground>
        
        <div className="section-container text-center relative z-10">
          <div className="mb-12 animate-fade-in-sequential stagger-2">
            <h1 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl mb-2 leading-tight tracking-tighter">
              <div className="text-gradient mb-2">
                <TypingEffect 
                  text="AI THAT WORKS" 
                  delay={800}
                  speed={80}
                  onComplete={() => setTypingComplete(true)}
                />
              </div>
              <div className={`text-white font-bold tracking-tighter transition-all duration-800 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                WHILE YOU REST
              </div>
            </h1>
          </div>
          
          <div className={`transition-all duration-800 delay-300 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              We build AI systems that qualify leads, book appointments, and grow your business automatically.
            </p>
            <p className="text-lg text-dark-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-800 delay-500">
              Stop chasing leads and start converting them. Our custom AI agents work 24/7 to turn your website visitors into paying clients.
            </p>
          </div>

          <div className={`transition-all duration-800 delay-700 ${typingComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <InteractiveButton size="lg" icon={Calendar} href="/book-call">
                Book Free Strategy Call
              </InteractiveButton>
              <InteractiveButton variant="secondary" icon={ArrowRight} href="#services">
                See Our Services
              </InteractiveButton>
            </div>
            
            <div className="glass-card max-w-md mx-auto group cursor-pointer">
              <div className="flex items-center justify-center space-x-4">
                <TrendingUp className="w-8 h-8 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="text-3xl font-montserrat font-bold text-gradient">+300%</div>
                  <p className="text-dark-300 text-sm group-hover:text-white transition-colors duration-300">
                    average increase in qualified leads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="section-container relative z-10">
          <div className="text-center mb-16 animate-fade-in-sequential stagger-8">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
              OUR <span className="text-gradient">SERVICES</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed font-light">
              Complete AI automation solutions designed to scale your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`glass-card group cursor-pointer h-full animate-scale-in-smooth stagger-${9 + index}`}>
                <a href={service.href} className="block h-full">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-400">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-4 text-center tracking-wide group-hover:text-primary-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed font-light font-inter text-center group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-center mt-6 text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                    <span className="text-sm font-medium mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-dark-900/10 to-transparent relative">
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                  WHY <span className="text-gradient">THEOCORTEX.AI?</span>
                </h2>
                <p className="text-xl text-dark-300 mb-8 leading-relaxed font-light">
                  We're not just another tech company. We're business owners who understand the struggle of manual processes and missed opportunities.
                </p>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center border border-primary-400/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <div className="text-primary-400">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-montserrat font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="glass-card">
                <div className="text-center mb-8">
                  <Brain className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                  <h3 className="font-montserrat font-bold text-2xl mb-4">
                    Built for <span className="text-gradient">Real Results</span>
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-dark-800/30 rounded-xl border border-dark-700/50">
                    <span className="text-dark-300">Setup Time</span>
                    <span className="font-montserrat font-bold text-primary-400">1-2 Weeks</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-dark-800/30 rounded-xl border border-dark-700/50">
                    <span className="text-dark-300">Lead Response</span>
                    <span className="font-montserrat font-bold text-primary-400">Instant</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-dark-800/30 rounded-xl border border-dark-700/50">
                    <span className="text-dark-300">Availability</span>
                    <span className="font-montserrat font-bold text-primary-400">24/7/365</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-dark-800/30 rounded-xl border border-dark-700/50">
                    <span className="text-dark-300">ROI Timeline</span>
                    <span className="font-montserrat font-bold text-primary-400">30 Days</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                HOW IT <span className="text-gradient">WORKS</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed font-light">
                Simple, proven process that gets you results fast
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Strategy Call",
                description: "We analyze your business and identify the best automation opportunities for maximum impact."
              },
              {
                step: "02",
                icon: <Zap className="w-8 h-8" />,
                title: "Custom Build",
                description: "Our team creates your personalized AI system, trained on your business knowledge and processes."
              },
              {
                step: "03",
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Launch & Scale",
                description: "We deploy your system and monitor performance, making optimizations for continuous improvement."
              }
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 200} direction="scale" stagger={true}>
                <div className="text-center group cursor-pointer">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-montserrat font-bold text-white text-sm">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-primary-900/5 to-transparent relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                CLIENT <span className="text-gradient">SUCCESS STORIES</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up" stagger={true}>
                <div className="glass-card group cursor-pointer h-full">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${i * 100}ms`}} />
                    ))}
                  </div>
                  <blockquote className="text-dark-300 font-light italic font-inter mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-montserrat font-bold text-white text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-white">{testimonial.name}</p>
                      <p className="text-dark-400 font-inter text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up" stagger={true}>
                <div className="glass-card group cursor-pointer">
                  <h3 className="font-montserrat font-bold text-lg mb-4 group-hover:text-primary-400 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="section-container text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-8 tracking-tighter">
              READY TO <span className="text-gradient">AUTOMATE YOUR SUCCESS?</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Book your free strategy call and discover how AI can transform your business in just 30 days.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mb-8">
              <InteractiveButton size="lg" icon={Calendar} href="/book-call">
                Book Your Free Strategy Call
              </InteractiveButton>
            </div>
            <p className="text-dark-400 text-lg font-light italic font-inter">
              No obligations. Just results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-dark-900/50 to-dark-950 border-t border-dark-800/30 py-20 relative">
        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:space-x-12">
            <a href="/" className="flex items-center space-x-4 mb-8 md:mb-0 group cursor-pointer">
              <div className="relative">
                <Brain className="w-10 h-10 text-primary-500 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl animate-pulse-glow"></div>
              </div>
              <div>
                <span className="text-xl font-bold font-montserrat tracking-tight group-hover:text-primary-400 transition-colors duration-300">
                  THEO<span className="text-primary-500">CORTEX</span><span className="text-dark-400 font-inter">.AI</span>
                </span>
                <p className="text-dark-400 font-inter text-sm mt-1">
                  <a href="mailto:theocortex.ai@gmail.com" className="hover:text-primary-400 transition-colors duration-300">
                    theocortex.ai@gmail.com
                  </a>
                </p>
              </div>
            </a>
            
            <div className="flex items-center space-x-8 mb-8 md:mb-0">
              <a href="/" className="nav-link text-sm footer-nav-link">Home</a>
              <a href="#services" className="nav-link text-sm footer-nav-link">Services</a>
              <a href="#about" className="nav-link text-sm footer-nav-link">About</a>
              <a href="#how-it-works" className="nav-link text-sm footer-nav-link">
                <span className="md:hidden">How It<br />Works</span>
                <span className="hidden md:inline">How It Works</span>
              </a>
              <a href="#faq" className="nav-link text-sm footer-nav-link">FAQ</a>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="https://www.instagram.com/theocortex.ai/" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-400 transition-all duration-300 hover:scale-110 transform" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-all duration-300 hover:scale-110 transform" aria-label="X (formerly Twitter)">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-all duration-300 hover:scale-110 transform" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-dark-800/30 pt-10 text-center">
            <p className="text-dark-400 font-light font-inter">
              © 2025 THEOCORTEX.AI – ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};