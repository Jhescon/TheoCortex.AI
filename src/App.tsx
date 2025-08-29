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

  // Dedicated mobile navigation handler to prevent double-click issues
  const handleMobileNavClick = (targetId: string) => {
    // Immediately close menu for instant visual feedback
    setIsMobileMenuOpen(false);
    
    // Small delay to allow menu animation, then navigate
    setTimeout(() => {
      const element = document.getElementById(targetId.replace('#', ''));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 150);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
                <a href="#services" className="nav-link py-2">Services</a>
                <a href="#about" className="nav-link py-2">About</a>
                <a href="#how-it-works" className="nav-link py-2">How It Works</a>
                <a href="#faq" className="nav-link py-2">FAQ</a>
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
                <ScrollReveal key={index} delay={3000 + index * 100} direction="scale">
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
          <ScrollReveal delay={3400} direction="scale">
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
          <ScrollReveal delay={3600} direction="fade">
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border border-red-500/30 group-hover:border-red-400/50 transition-all duration-300 group-hover:scale-110">
                      <div className="text-red-400 group-hover:scale-110 transition-transform duration-300">
                        {pain.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-dark-300 font-light leading-relaxed font-inter group-hover:text-white transition-colors duration-300">
                        {pain.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Visual Contrast */}
            <ScrollReveal delay={400} direction="right">
              <div className="space-y-8">
                <div className="glass-card group cursor-pointer border-red-500/30 hover:border-red-400/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30 group-hover:scale-110 transition-transform duration-300">
                      <X className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-red-400 mb-4">MANUAL CHAOS</h3>
                    <div className="space-y-2 text-dark-400 font-inter text-sm">
                      <p>• Missed opportunities</p>
                      <p>• Slow response times</p>
                      <p>• Inconsistent follow-up</p>
                      <p>• Overwhelmed team</p>
                      <p>• Limited growth potential</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card group cursor-pointer border-primary-500/30 hover:border-primary-400/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-primary-400 mb-4">AI AUTOMATION</h3>
                    <div className="space-y-2 text-dark-300 font-inter text-sm">
                      <p>• Instant lead response</p>
                      <p>• 24/7 availability</p>
                      <p>• Perfect follow-up</p>
                      <p>• Scalable systems</p>
                      <p>• Unlimited growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="services" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/5 via-transparent to-secondary-900/5"></div>
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-24">
              <h2 className="font-montserrat font-bold text-5xl md:text-7xl mb-8 tracking-tighter">
                WE BUILD <span className="text-gradient">SMART SYSTEMS</span>
              </h2>
              <h3 className="font-montserrat font-bold text-3xl md:text-4xl mb-8 text-white">
                SO YOU CAN FOCUS ON GROWTH
              </h3>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
                Everything your business needs to automate, convert, and close—done for you.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <ScrollReveal key={index} delay={index * 200} direction="up">
                <div className="glass-card group cursor-pointer h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-6 tracking-wide group-hover:text-primary-400 transition-colors duration-300">{solution.title}</h3>
                  <p className="text-dark-300 leading-relaxed font-light font-inter mb-6 group-hover:text-white transition-colors duration-300">{solution.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-primary-400 font-bold font-montserrat text-sm">{solution.metric}</span>
                    <InteractiveButton 
                      variant="ghost" 
                      icon={ArrowRight}
                      href={(() => {
                        const routes = [
                          '#website-design-and-funnels',
                          '#smart-ai-agents', 
                          '#crm-integration-and-appointments'
                        ];
                        return routes[index];
                      })()}
                    >
                      Learn More
                    </InteractiveButton>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-24">
              <h2 className="font-montserrat font-bold text-5xl md:text-7xl mb-8 tracking-tighter">
                AUTOMATION, IN JUST <span className="text-gradient">3 STEPS</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 200} direction="up">
                <div className="text-center group cursor-pointer relative">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-montserrat font-bold text-white text-sm">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300">{step.title}</h3>
                  <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">{step.description}</p>
                  
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-12 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transform -translate-x-6"></div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* About TheoCortex.AI Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-dark-900/10 to-transparent relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-24">
              <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-8 tracking-tighter">
                ABOUT <span className="text-gradient">THEOCORTEX.AI</span>
              </h2>
              <h3 className="font-montserrat font-bold text-3xl md:text-4xl mb-8 tracking-tighter text-white">
                AUTOMATION THAT THINKS AHEAD
              </h3>
              
              {/* Enhanced Content Cards */}
              <div className="max-w-6xl mx-auto">
                {/* Main Value Proposition Card */}
                <ScrollReveal delay={200}>
                  <div className="glass-card group cursor-pointer mb-12 relative overflow-hidden">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-transparent to-secondary-500/20 animate-pulse-glow"></div>
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" fill="none">
                        <defs>
                          <pattern id="circuit-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 20h40M20 0v40" stroke="url(#circuit-gradient)" strokeWidth="0.5" opacity="0.3"/>
                            <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.4"/>
                          </pattern>
                          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0066FF"/>
                            <stop offset="100%" stopColor="#6600FF"/>
                          </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#circuit-pattern)"/>
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                          <Brain className="w-8 h-8 text-primary-400" />
                        </div>
                      </div>
                      <p className="text-xl md:text-2xl text-dark-200 leading-relaxed font-light mb-6 group-hover:text-white transition-colors duration-300">
                        TheoCortex.AI is a <span className="text-gradient font-semibold">next-generation automation agency</span> built for modern businesses that want to grow smarter.
                      </p>
                      <p className="text-lg text-dark-300 leading-relaxed font-light group-hover:text-dark-100 transition-colors duration-300">
                        We create AI-powered websites, intelligent agents, and fully integrated CRM systems so you can stop chasing leads and start scaling with confidence.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Two-Column Feature Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <ScrollReveal delay={400} direction="left">
                    <div className="glass-card group cursor-pointer h-full relative overflow-hidden">
                      {/* Animated Accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-1">
                          <Target className="w-6 h-6 text-primary-400" />
                        </div>
                        <div>
                          <h4 className="font-montserrat font-bold text-xl mb-3 text-white group-hover:text-primary-400 transition-colors duration-300">
                            Results-Focused Team
                          </h4>
                          <p className="text-dark-300 leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                            We're not just another tech company. We're a team focused on one thing: <span className="text-primary-400 font-semibold">measurable results</span> that drive your business forward.
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={600} direction="right">
                    <div className="glass-card group cursor-pointer h-full relative overflow-hidden">
                      {/* Animated Accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-xl flex items-center justify-center border border-secondary-400/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-1">
                          <Users className="w-6 h-6 text-secondary-400" />
                        </div>
                        <div>
                          <h4 className="font-montserrat font-bold text-xl mb-3 text-white group-hover:text-secondary-400 transition-colors duration-300">
                            Human-Centered Automation
                          </h4>
                          <p className="text-dark-300 leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                            We believe automation isn't about replacing people. It's about <span className="text-secondary-400 font-semibold">freeing them</span> to focus on what really matters.
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Impact Statement Card */}
                <ScrollReveal delay={800}>
                  <div className="glass-card group cursor-pointer relative overflow-hidden">
                    {/* Animated Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full animate-pulse opacity-60"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary-400 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="flex items-center justify-center space-x-2 mb-6">
                        <Zap className="w-6 h-6 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-primary-400 font-montserrat font-bold text-lg">Our Impact</span>
                        <Zap className="w-6 h-6 text-secondary-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <p className="text-lg md:text-xl text-dark-200 leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                        Every solution we create <span className="text-gradient font-semibold">eliminates manual tasks</span>, 
                        <span className="text-gradient font-semibold"> boosts conversions</span>, and gives business owners 
                        <span className="text-gradient font-semibold"> more time and freedom</span>.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
          
          {/* What Makes Us Different */}
          <ScrollReveal delay={200}>
            <div className="mb-20">
              <h3 className="font-montserrat font-bold text-3xl md:text-4xl mb-12 text-center tracking-tighter">
                WHAT MAKES US <span className="text-gradient">DIFFERENT</span>
              </h3>
              <div className="max-w-5xl mx-auto space-y-8">
                {[
                  {
                    title: "Real Strategy with Every Build",
                    description: "We go beyond templates. Our websites and funnels are backed by marketing psychology and conversion data"
                  },
                  {
                    title: "Smart AI Agents That Deliver",
                    description: "Our AI agents handle chats, qualify leads, and book appointments while staying true to your brand voice"
                  },
                  {
                    title: "Automation That Feels Human",
                    description: "Your clients get instant responses and seamless experiences without realizing it's automated"
                  },
                  {
                    title: "Scalable Systems Built to Grow With You",
                    description: "Whether you're a coach, agency, or service provider, we make sure your systems are future-ready"
                  },
                  {
                    title: "End to End Support",
                    description: "We handle strategy, design, tech, and launch. You get a smooth experience from start to finish"
                  }
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={300 + index * 100} direction="up">
                    <div className="glass-card group cursor-pointer">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-montserrat font-bold text-xl mb-3 text-white group-hover:text-primary-400 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Our Mission */}
          <ScrollReveal delay={800}>
            <div className="text-center mb-20">
              <div className="max-w-4xl mx-auto">
                <h3 className="font-montserrat font-bold text-3xl md:text-4xl mb-8 tracking-tighter">
                  OUR <span className="text-gradient">MISSION</span>
                </h3>
                <div className="glass-card group cursor-pointer">
                  <p className="text-xl md:text-2xl text-dark-300 leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                    To help businesses grow using <span className="text-primary-400 font-semibold">divine intelligence</span> by blending human insight with smart technology
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* What's Next */}
          <ScrollReveal delay={1000}>
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="font-montserrat font-bold text-3xl md:text-4xl mb-8 tracking-tighter">
                  WHAT'S <span className="text-gradient">NEXT</span>
                </h3>
                <div className="glass-card group cursor-pointer mb-12">
                  <p className="text-xl text-dark-300 leading-relaxed font-light mb-6 group-hover:text-white transition-colors duration-300">
                    We don't use generic packages or cookie-cutter solutions. Everything is tailored to your business needs.
                  </p>
                  <div className="flex items-center justify-center space-x-3 text-primary-400">
                    <Calendar className="w-6 h-6" />
                    <span className="font-montserrat font-semibold text-lg">
                      Book a Free Strategy Call and see how TheoCortex.AI can automate your growth without adding complexity
                    </span>
                  </div>
                </div>
                <InteractiveButton size="lg" icon={ExternalLink} href="#book-call">
                  BOOK YOUR FREE STRATEGY CALL
                </InteractiveButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-20 bg-gradient-to-b from-primary-900/5 to-transparent relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group cursor-pointer">
                <div className="text-5xl font-montserrat font-bold text-gradient mb-4 group-hover:scale-110 transition-transform duration-300">300%</div>
                <p className="text-dark-300 font-inter group-hover:text-white transition-colors duration-300">Average Lead Conversion Increase</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-5xl font-montserrat font-bold text-gradient mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <p className="text-dark-300 font-inter group-hover:text-white transition-colors duration-300">Automated Customer Engagement</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-5xl font-montserrat font-bold text-gradient mb-4 group-hover:scale-110 transition-transform duration-300">20+</div>
                <p className="text-dark-300 font-inter group-hover:text-white transition-colors duration-300">Hours Saved Per Week</p>
              </div>
            </div>
          </ScrollReveal>
          </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-24">
              <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-8 tracking-tighter">
                FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div className="glass-card overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-8 text-left flex items-center justify-between hover:bg-dark-800/20 transition-all duration-300 group focus-visible"
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="font-montserrat font-bold text-lg tracking-wide pr-4 group-hover:text-primary-400 transition-colors duration-300">{faq.question}</span>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <ChevronUp className="w-6 h-6 text-primary-400 transform group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-primary-400 transform group-hover:scale-110 transition-transform duration-300" />
                      )}
                    </div>
                  </button>
                  <div 
                    id={`faq-${index}`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-8 pb-8 border-t border-dark-700/20">
                      <p className="text-dark-300 leading-relaxed font-light font-inter pt-6">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-primary-900/10 to-secondary-900/10 relative">
        <div className="section-container text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-montserrat font-bold text-5xl md:text-7xl mb-8 tracking-tighter">
              READY TO <span className="text-gradient">AUTOMATE YOUR BUSINESS</span>
            </h2>
            <h3 className="font-montserrat font-bold text-4xl md:text-5xl mb-12 text-white">
              AND GET YOUR TIME BACK?
            </h3>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl text-dark-300 mb-16 max-w-3xl mx-auto font-light">
              Book a free discovery call and let's build your custom AI system today.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mb-8 flex justify-center">
              <InteractiveButton size="lg" icon={ExternalLink} href="#book-call">
                BOOK FREE STRATEGY CALL
              </InteractiveButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p className="text-dark-400 text-lg font-light italic font-inter text-center mx-auto">
              No obligations. Just clarity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-dark-900/50 to-dark-950 border-t border-dark-800/30 py-20 relative">
        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:space-x-12">
            <div className="flex items-center space-x-4 mb-8 md:mb-0 group cursor-pointer">
              <div className="relative">
                <Brain className="w-10 h-10 text-primary-500 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl animate-pulse-glow"></div>
              </div>
              <div>
                <span className="text-xl font-bold font-montserrat tracking-tight group-hover:text-primary-400 transition-colors duration-300">
                  THEO<span className="text-primary-500">CORTEX</span><span className="text-dark-400 font-inter">.AI</span>
                </span>
                <p className="text-dark-400 font-inter text-sm mt-1">Built with Higher Thinking.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-8 mb-8 md:mb-0 text-center">
              <a href="#home" className="nav-link text-sm">Home</a>
              <a href="#services" className="nav-link text-sm footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
              <a href="#about" className="nav-link text-sm footer-nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a>
              <a href="#how-it-works" className="nav-link text-sm footer-nav-link" onClick={(e) => handleNavClick(e, '#how-it-works')}>
                <span className="hidden xs:inline">How It Works</span>
                <span className="xs:hidden leading-tight">How It<br />Works</span>
              </a>
              <a href="#faq" className="nav-link text-sm footer-nav-link" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a>
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
}

export default App;