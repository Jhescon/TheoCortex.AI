import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  ChevronDown, 
  ChevronUp, 
  Bot, 
  Database, 
  Mail, 
  Users, 
  Globe, 
  ExternalLink, 
  Linkedin, 
  Instagram,
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  Shield, 
  Cpu, 
  Code, 
  Sparkles, 
  Target, 
  Rocket, 
  Award, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Workflow,
  Menu,
  X
} from 'lucide-react';
import { ScrollReveal } from './components/ScrollReveal';
import { InteractiveButton } from './components/InteractiveButton';
import { TypingEffect } from './components/TypingEffect';
import { ParallaxBackground } from './components/ParallaxBackground';
import { ContactForm } from './components/ContactForm';
import { WebsiteDesignFunnels } from './pages/WebsiteDesignFunnels';
import { SmartAIAgents } from './pages/SmartAIAgents';
import { CRMIntegration } from './pages/CRMIntegration';

// Smooth scroll navigation handler
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Enhanced routing with immediate scroll to top
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // CRITICAL: Force immediate scroll to top with multiple methods
      const forceScrollToTop = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        if (window.pageYOffset !== 0) {
          window.pageYOffset = 0;
        }
      };
      
      // Execute immediately
      forceScrollToTop();
      
      // Execute again after a tiny delay to ensure it takes effect
      setTimeout(() => {
        forceScrollToTop();
        
        // Then change the page content
        if (hash === '#book-call') {
          setCurrentPage('book-call');
        } else if (hash === '#website-design-and-funnels') {
          setCurrentPage('website-design-and-funnels');
        } else if (hash === '#smart-ai-agents') {
          setCurrentPage('smart-ai-agents');
        } else if (hash === '#crm-integration-and-appointments') {
          setCurrentPage('crm-integration-and-appointments');
        } else {
          setCurrentPage('home');
        }
      }, 1);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Only prevent default for same-page navigation (hash links)
    // Only prevent default for same-page hash navigation
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(targetId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For cross-page navigation, let the browser handle it naturally (no preventDefault)
    // For external links or different pages, let the browser handle navigation naturally
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileNavClick = (path: string) => {
    setMobileMenuOpen(false);
    window.location.hash = path;
  };

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Save 20+ hours per week on repetitive tasks"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Increase lead conversion by 300%+"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      text: "24/7 automated customer engagement"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Enterprise-grade security & reliability"
    }
  ];

  const painPoints = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      text: "You're juggling DMs, emails, and client calls 24/7"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: "Your website looks nice—but doesn't sell"
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "You lose leads because you don't follow up fast enough"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "You want to scale, but your systems aren't built for growth"
    }
  ];

  const solutions = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Design & Funnels",
      description: "Strategic, beautiful websites and sales funnels that convert leads into paying clients.",
      metric: "+38% lead response rate",
      color: "from-primary-400 to-secondary-400"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Smart AI Agents",
      description: "Custom-built AI assistants that chat, qualify, and book leads while you sleep.",
      metric: "+250% qualification speed",
      color: "from-secondary-400 to-primary-400"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "CRM Integration & Appointment Setting",
      description: "Never miss a lead again. Track, nurture, and schedule automatically.",
      metric: "+180% booking rate",
      color: "from-primary-500 to-secondary-500"
    }
  ];

  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Book Your Free Call",
      description: "We audit your current system and goals."
    },
    {
      number: "02",
      icon: <Workflow className="w-8 h-8" />,
      title: "We Build Your AI Stack",
      description: "Custom website, agent, CRM, and automations."
    },
    {
      number: "03",
      icon: <Rocket className="w-8 h-8" />,
      title: "You Scale on Autopilot",
      description: "Save time, convert more, grow with less stress."
    }
  ];

  const faqs = [
    {
      question: "What exactly does TheoCortex.AI do?",
      answer: "We help businesses automate growth using AI-powered websites, smart agents, and CRM integration. Our systems are built to convert leads, book appointments, and simplify customer engagement with less manual effort."
    },
    {
      question: "How do your smart AI agents work?",
      answer: "Our AI agents are custom-built to handle DMs, live chat, email, and lead qualification. They engage, respond, and schedule calls automatically — all while sounding human and professional."
    },
    {
      question: "What platforms do you work with for CRM integration?",
      answer: "We integrate with leading CRM tools like GoHighLevel, HubSpot, and others. Whether you're just starting or already have a system, we make sure it's optimized for follow-ups and automation."
    },
    {
      question: "Will the website and funnel be mobile-friendly?",
      answer: "Yes, everything we build is fully responsive and optimized for mobile, tablet, and desktop. Your site will look amazing and convert well on every device."
    },
    {
      question: "Can your services fit any type of business?",
      answer: "Definitely. We've worked with coaches, consultants, agencies, and service providers. If you generate leads or take bookings, our system can help you automate and grow."
    },
    {
      question: "How long does it take to get everything set up?",
      answer: "Setup time depends on the project, but most clients see results and working automations within a few weeks. We'll walk you through this during your free call."
    },
    {
      question: "What kind of results can I expect?",
      answer: "Clients usually see a boost in qualified leads, higher booking rates, and a dramatic drop in manual work. We'll show you real examples during your strategy session."
    },
    {
      question: "Do I need to know anything technical?",
      answer: "Not at all. We handle all the tech and integrations for you. You focus on your business, we'll handle the backend."
    },
    {
      question: "How much do your services cost?",
      answer: "We don't list prices publicly because every business has different needs. We'll go over everything in your free strategy call and give you a clear recommendation."
    },
    {
      question: "How do I get started?",
      answer: "Click \"Book a Free Strategy Call,\" choose a time, and we'll meet on Zoom to explore how TheoCortex.AI can help you grow."
    }
  ];

  // Render different pages based on current route
  if (currentPage === 'book-call') {
    return <ContactForm />;
  } else if (currentPage === 'website-design-and-funnels') {
    return <WebsiteDesignFunnels />;
  } else if (currentPage === 'smart-ai-agents') {
    return <SmartAIAgents />;
  } else if (currentPage === 'crm-integration-and-appointments') {
    return <CRMIntegration />;
  }

  return (
    <div className="min-h-screen bg-dark-950 text-dark-50 font-inter relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute inset-0 geometric-bg"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-xl border-b border-dark-800/50 transition-all duration-300">
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <Brain className="w-10 h-10 text-primary-500 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl animate-pulse-glow"></div>
              </div>
              <span className="text-2xl font-bold font-montserrat tracking-tight transition-all duration-300 group-hover:text-primary-400">
                THEO<span className="text-primary-500">CORTEX</span><span className="text-dark-400 font-inter">.AI</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link">Home</a>
              <a href="#services" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'services')}>Services</a>
              <a href="#about" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
              <a href="#how-it-works" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'how-it-works')}>
                <span className="md:hidden">How It<br />Works</span>
                <span className="hidden md:inline">How It Works</span>
              </a>
              <a href="#faq" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'faq')}>FAQ</a>
              <InteractiveButton icon={ExternalLink} href="#book-call">
                Book Free Call
              </InteractiveButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-dark-300 hover:text-primary-400 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-dark-800/50">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="nav-link py-2">Home</a>
                <a 
                  href="#services" 
                  className="nav-link py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  Services
                </a>
                <a 
                  href="/#about" 
                  className="nav-link py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  About
                </a>
                <a 
                  href="/#how-it-works" 
                  className="nav-link py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  How It Works
                </a>
                <a 
                  href="#faq" 
                  className="nav-link py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  FAQ
                </a>
                {/* Book Call Button */}
                <div className="mt-8 pt-8 border-t border-dark-700/50 hidden">
                  <div
                    onClick={() => handleMobileNavClick('/book-call')}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-montserrat font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-dark-950 flex items-center justify-center space-x-3 group cursor-pointer touch-manipulation"
                  >
                    <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Book Free Call</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative">
        <ParallaxBackground speed={0.3} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        </ParallaxBackground>
        
        <div className={`section-container text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="font-inter font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 leading-[1.1] tracking-tight text-center">
              <div className="text-gradient mb-4 animate-fade-in-primary">
                <TypingEffect 
                  text="AUTOMATE GROWTH" 
                  delay={500}
                  speed={80}
                  onComplete={() => setTypingComplete(true)}
                />
              </div>
              {typingComplete && (
                <div className="animate-fade-in-secondary" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                  <div className="text-white font-bold tracking-tight relative">
                    <span className="tech-gradient-text animate-gradient-wave">
                      WITH DIVINE INTELLIGENCE
                    </span>
                  </div>
                </div>
              )}
            </h1>
          </div>
          
          {/* Value Proposition */}
          {typingComplete && (
            <ScrollReveal delay={1200} direction="up">
              <div className="text-sm md:text-lg text-dark-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light relative group">
                {/* First Line */}
                <div className="mb-2 animate-fade-in-up" style={{animationDelay: '1.4s', animationFillMode: 'both'}}>
                  <span className="font-light tracking-wide">We Build </span>
                  <span className="text-primary-400 font-semibold relative inline-block animate-hologram-flicker" style={{animationDelay: '1.6s'}}>
                    <span className="relative z-10">AI-Powered Websites</span>
                    <span className="absolute inset-0 bg-primary-400/20 blur-sm animate-pulse-glow"></span>
                  </span>
                  <span className="font-light tracking-wide">, </span>
                  <span className="text-primary-400 font-semibold relative inline-block animate-hologram-flicker" style={{animationDelay: '1.8s'}}>
                    <span className="relative z-10">Smart Agents</span>
                    <span className="absolute inset-0 bg-primary-400/20 blur-sm animate-pulse-glow"></span>
                  </span>
                  <span className="font-light tracking-wide">, and </span>
                  <span className="text-primary-400 font-semibold relative inline-block animate-hologram-flicker" style={{animationDelay: '2s'}}>
                    <span className="relative z-10">CRM Systems</span>
                    <span className="absolute inset-0 bg-primary-400/20 blur-sm animate-pulse-glow"></span>
                  </span>
                </div>
                
                {/* Second Line */}
                <div className="animate-fade-in-up" style={{animationDelay: '2.2s', animationFillMode: 'both'}}>
                  <span className="font-light tracking-wide">that Convert Leads, Schedule Appointments, and Scale your Business </span>
                  <span className="text-white font-semibold relative inline-block animate-matrix-text" style={{animationDelay: '2.4s'}}>
                    <span className="relative z-10">on Autopilot</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 blur-sm animate-scan-line"></span>
                  </span>
                </div>
              </div>
              
              {/* Tech overlay effects */}
              <div className="absolute inset-0 pointer-events-none opacity-20 animate-fade-in" style={{animationDelay: '2.6s', animationFillMode: 'both'}}>
                {/* Data particles */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-primary-400 rounded-full animate-data-stream"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                      animationDelay: `${2.8 + i * 0.2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
                
                {/* Circuit connections */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 200" fill="none">
                  <path 
                    d="M100 100 L200 100 L210 90 L230 90 L240 100 L340 100 L350 110 L370 110 L380 100 L480 100 L490 90 L510 90 L520 100 L620 100 L630 110 L650 110 L660 100 L700 100" 
                    stroke="url(#tech-gradient)" 
                    strokeWidth="0.5" 
                    className="animate-pulse opacity-30"
                  />
                  <circle cx="210" cy="90" r="1" fill="#0066FF" className="animate-ping opacity-40" style={{animationDelay: '3s'}}/>
                  <circle cx="350" cy="110" r="1" fill="#6600FF" className="animate-ping opacity-40" style={{animationDelay: '3.2s'}}/>
                  <circle cx="490" cy="90" r="1" fill="#0066FF" className="animate-ping opacity-40" style={{animationDelay: '3.4s'}}/>
                  <circle cx="630" cy="110" r="1" fill="#6600FF" className="animate-ping opacity-40" style={{animationDelay: '3.6s'}}/>
                  <defs>
                    <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0066FF" stopOpacity="0.2"/>
                      <stop offset="50%" stopColor="#6600FF" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#0066FF" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </ScrollReveal>
          )}

          {/* Benefits Grid */}
          {typingComplete && (
          <ScrollReveal delay={2800} direction="up">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} delay={3000 + index * 100} direction="scale" mobileOptimized={true}>
                  <div className="glass-card group cursor-pointer">
                    <div className="text-primary-400 flex-shrink-0 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <span className="text-dark-300 text-sm font-medium font-inter group-hover:text-white transition-colors duration-300">{benefit.text}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
          )}
          
          {/* Primary CTA */}
          {typingComplete && (
          <ScrollReveal delay={3400} direction="scale" mobileOptimized={true}>
            <div className="mb-8">
              <InteractiveButton size="lg" icon={ExternalLink} href="#book-call">
                BOOK A FREE STRATEGY CALL
              </InteractiveButton>
            </div>
            <div className="text-center">
              <p className="text-dark-400 text-lg font-light italic font-inter text-center mx-auto">
              Let's see if AI can save you 20+ hours a week.
              </p>
            </div>
          </ScrollReveal>
          )}

          {/* Secondary Text */}
          {typingComplete && (
          <ScrollReveal delay={3600} direction="fade" mobileOptimized={true}>
            <div></div>
          </ScrollReveal>
          )}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 via-transparent to-transparent"></div>
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="font-montserrat font-bold text-5xl md:text-7xl mb-8 tracking-tighter text-white">
                STILL DOING THINGS <span className="text-red-400">MANUALLY?</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Pain Points */}
            <div className="space-y-8">
              {painPoints.map((pain, index) => (
                <ScrollReveal key={index} delay={index * 200} direction="left">
                  <div className="flex items-start space-x-6 group cursor-pointer">
                    <div className="flex