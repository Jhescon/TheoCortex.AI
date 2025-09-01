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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
                <div className="mt-8 pt-8 border-t border-dark-700/50">
                  <InteractiveButton 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setCurrentPage('contact-form');
                    }}
                    icon={Calendar}
                    className="w-full"
                  >
                    Book Free Call
                  </InteractiveButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
              <ParallaxBackground speed={0.3} className="absolute inset-0 animate-fade-in-sequential stagger-1">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
              </ParallaxBackground>
              
              <div className="section-container text-center relative z-10">
                <div className="mb-12 animate-fade-in-sequential stagger-2">
                  <h1 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight tracking-tighter">
                    <div className="text-gradient mb-4">
                      <TypingEffect 
                        text="AI AUTOMATION" 
                        delay={800}
                        speed={80}
                        onComplete={() => setTypingComplete(true)}
                      />
                    </div>
                    <div className={`text-white font-light tracking-wider text-4xl md:text-5xl lg:text-6xl transition-all duration-800 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                      THAT ACTUALLY WORKS
                    </div>
                  </h1>
                </div>
                
                <div className={`transition-all duration-800 delay-300 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                    We build AI systems that qualify leads, book appointments, and handle customer interactions 24/7.
                  </p>
                  <p className="text-lg text-dark-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-800 delay-500">
                    Stop chasing leads manually. Our smart automation handles the heavy lifting while you focus on closing deals and growing your business.
                  </p>
                </div>

                <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-800 delay-700 ${typingComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <InteractiveButton 
                    size="lg" 
                    icon={Calendar}
                    onClick={() => setCurrentPage('contact-form')}
                  >
                    Book Free Call
                  </InteractiveButton>
                  <InteractiveButton 
                    variant="secondary" 
                    size="lg" 
                    icon={ArrowRight}
                    onClick={() => scrollToSection('services')}
                  >
                    See How It Works
                  </InteractiveButton>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gradient-to-b from-dark-900/10 to-transparent relative">
              <div className="section-container relative z-10">
                <div className="text-center mb-16 animate-fade-in-sequential stagger-8">
                  <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                    OUR <span className="text-gradient">SERVICES</span>
                  </h2>
                  <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
                    Complete AI automation solutions designed to transform your business operations
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Globe className="w-8 h-8" />,
                      title: "Website Design & Funnels",
                      description: "Custom websites and high-converting funnels that turn visitors into paying clients",
                      features: ["Responsive design", "Conversion optimization", "Brand consistency", "SEO ready"],
                      page: 'website-design'
                    },
                    {
                      icon: <Bot className="w-8 h-8" />,
                      title: "Smart AI Agents",
                      description: "24/7 AI assistants that qualify leads, answer questions, and book appointments automatically",
                      features: ["Lead qualification", "24/7 availability", "Natural conversations", "CRM integration"],
                      page: 'ai-agents'
                    },
                    {
                      icon: <Database className="w-8 h-8" />,
                      title: "CRM Integration & Appointment Setting",
                      description: "Seamless systems that capture, nurture, and convert leads without manual effort",
                      features: ["Automated follow-ups", "Calendar sync", "Lead tracking", "Analytics dashboard"],
                      page: 'crm-integration'
                    }
                  ].map((service, index) => (
                    <div key={index} className={`glass-card group cursor-pointer h-full animate-scale-in-smooth stagger-${9 + index}`} onClick={() => setCurrentPage(service.page)}>
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mb-6 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary-400">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="font-montserrat font-bold text-xl mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-dark-300 mb-6 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-dark-400 group-hover:text-dark-200 transition-colors duration-300">
                            <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-6 border-t border-dark-700/50">
                        <div className="flex items-center text-primary-400 font-medium group-hover:text-primary-300 transition-colors duration-300">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 relative">
              <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <ScrollReveal direction="left">
                    <div>
                      <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-8 tracking-tighter">
                        WHY <span className="text-gradient">THEOCORTEX.AI</span>?
                      </h2>
                      <div className="space-y-6 text-lg text-dark-300 leading-relaxed font-light">
                        <p>
                          We're not just another AI company. We're business owners who understand the daily grind of chasing leads, 
                          following up manually, and losing potential clients to slow response times.
                        </p>
                        <p>
                          That's why we built TheoCortex.AI - to give businesses like yours the unfair advantage of AI automation 
                          that actually works in the real world.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                          {[
                            { number: "24/7", label: "AI Availability" },
                            { number: "3x", label: "Faster Response" },
                            { number: "85%", label: "Lead Qualification" },
                            { number: "100%", label: "Follow-up Rate" }
                          ].map((stat, index) => (
                            <div key={index} className="text-center p-4 bg-dark-800/30 rounded-xl border border-dark-700/50">
                              <div className="text-3xl font-montserrat font-bold text-gradient mb-2">{stat.number}</div>
                              <div className="text-dark-400 text-sm">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal direction="right" delay={200}>
                    <div className="relative">
                      <div className="glass-card">
                        <div className="text-center mb-8">
                          <Brain className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                          <h3 className="font-montserrat font-bold text-2xl mb-4">
                            AI That Understands Business
                          </h3>
                        </div>
                        <div className="space-y-4">
                          {[
                            "Custom-trained on your business knowledge",
                            "Integrates with your existing tools",
                            "Scales with your growth",
                            "Provides detailed analytics and insights"
                          ].map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                              <span className="text-dark-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 bg-gradient-to-b from-dark-900/10 to-transparent relative">
              <div className="section-container relative z-10">
                <ScrollReveal>
                  <div className="text-center mb-16">
                    <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                      HOW IT <span className="text-gradient">WORKS</span>
                    </h2>
                    <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
                      Simple, proven process that gets you from manual chaos to automated success
                    </p>
                  </div>
                </ScrollReveal>
                
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "01",
                      icon: <MessageSquare className="w-8 h-8" />,
                      title: "Discovery Call",
                      description: "We analyze your current process and identify automation opportunities"
                    },
                    {
                      step: "02",
                      icon: <Code className="w-8 h-8" />,
                      title: "Custom Build",
                      description: "We create and integrate AI systems tailored to your specific business needs"
                    },
                    {
                      step: "03",
                      icon: <Zap className="w-8 h-8" />,
                      title: "Launch & Test",
                      description: "We deploy your AI automation and fine-tune it for optimal performance"
                    },
                    {
                      step: "04",
                      icon: <TrendingUp className="w-8 h-8" />,
                      title: "Scale & Optimize",
                      description: "We monitor results and continuously improve your automation systems"
                    }
                  ].map((step, index) => (
                    <ScrollReveal key={index} delay={index * 150} direction="scale" stagger={true}>
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

            {/* FAQ Section */}
            <section id="faq" className="py-20 relative">
              <div className="section-container relative z-10">
                <ScrollReveal>
                  <div className="text-center mb-16">
                    <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                      FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
                    </h2>
                    <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
                      Everything you need to know about AI automation for your business
                    </p>
                  </div>
                </ScrollReveal>
                
                <div className="max-w-4xl mx-auto">
                  {[
                    {
                      question: "How quickly can I see results from AI automation?",
                      answer: "Most clients see immediate improvements in response times and lead capture within the first week. Full optimization typically takes 2-4 weeks as we fine-tune the system based on real interactions."
                    },
                    {
                      question: "Do I need technical knowledge to use these AI systems?",
                      answer: "Not at all. We handle all the technical setup and integration. You'll get a simple dashboard to monitor performance, and we provide full training on how to manage your automated systems."
                    },
                    {
                      question: "Will AI automation work with my existing CRM and tools?",
                      answer: "Yes, we specialize in integrating with popular platforms like GoHighLevel, HubSpot, Salesforce, Calendly, and many others. We'll assess your current setup and ensure seamless integration."
                    },
                    {
                      question: "What if my leads prefer talking to humans?",
                      answer: "Our AI is designed to feel natural and human-like. When appropriate, it seamlessly hands off qualified leads to your team. You get the best of both worlds - 24/7 availability with human touch when needed."
                    },
                    {
                      question: "How much does AI automation cost compared to hiring staff?",
                      answer: "AI automation typically costs 70-80% less than hiring full-time staff, works 24/7 without breaks, and never misses a lead. Most clients see ROI within the first month through increased conversions alone."
                    },
                    {
                      question: "What kind of support do you provide after launch?",
                      answer: "We provide ongoing monitoring, optimization, and support. Your AI systems are continuously improved based on performance data, and we're always available for questions or adjustments."
                    }
                  ].map((faq, index) => (
                    <ScrollReveal key={index} delay={index * 100} stagger={true}>
                      <div className="mb-6">
                        <button
                          onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                          className="w-full text-left p-6 bg-dark-800/30 rounded-xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="font-montserrat font-bold text-lg text-white group-hover:text-primary-400 transition-colors duration-300 pr-4">
                              {faq.question}
                            </h3>
                            <div className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                              <ChevronDown className="w-6 h-6 text-primary-400" />
                            </div>
                          </div>
                          {openFAQ === index && (
                            <div className="mt-4 pt-4 border-t border-dark-700/50">
                              <p className="text-dark-300 leading-relaxed font-light font-inter">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </button>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-primary-900/5 to-transparent relative">
              <div className="section-container text-center relative z-10">
                <ScrollReveal>
                  <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-8 tracking-tighter">
                    READY TO <span className="text-gradient">AUTOMATE YOUR SUCCESS?</span>
                  </h2>
                </ScrollReveal>
                
                <ScrollReveal delay={200}>
                  <p className="text-xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    Stop losing leads to slow response times. Let's build AI automation that works 24/7 to grow your business.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                    <InteractiveButton 
                      size="lg" 
                      icon={Calendar}
                      onClick={() => setCurrentPage('contact-form')}
                    >
                      Book Free Strategy Call
                    </InteractiveButton>
                    <InteractiveButton 
                      variant="secondary" 
                      size="lg" 
                      icon={MessageSquare}
                      onClick={() => scrollToSection('services')}
                    >
                      Learn More
                    </InteractiveButton>
                  </div>
                  <p className="text-dark-400 text-lg font-light italic font-inter">
                    No pressure. No commitments. Just results-focused strategy.
                  </p>
                </ScrollReveal>
              </div>
            </section>
          </>
        )}

        {currentPage === 'website-design' && <WebsiteDesignFunnels />}
        {currentPage === 'ai-agents' && <SmartAIAgents />}
        {currentPage === 'crm-integration' && <CRMIntegration />}
        {currentPage === 'contact-form' && <ContactForm />}
      </main>

      {/* Footer - Only show on home page */}
      {currentPage === 'home' && (
        <footer className="bg-gradient-to-t from-dark-900/50 to-dark-950 border-t border-dark-800/30 py-20 relative">
          <div className="section-container relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:space-x-12">
              <div className="flex items-center space-x-4 mb-8 md:mb-0 group cursor-pointer" onClick={() => setCurrentPage('home')}>
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
              </div>
              
              <div className="flex items-center space-x-8 mb-8 md:mb-0">
                <button onClick={() => setCurrentPage('home')} className="nav-link text-sm footer-nav-link">Home</button>
                <button onClick={() => scrollToSection('services')} className="nav-link text-sm footer-nav-link">Services</button>
                <button onClick={() => scrollToSection('about')} className="nav-link text-sm footer-nav-link">About</button>
                <button onClick={() => scrollToSection('how-it-works')} className="nav-link text-sm footer-nav-link">
                  <span className="md:hidden">How It<br />Works</span>
                  <span className="hidden md:inline">How It Works</span>
                </button>
                <button onClick={() => scrollToSection('faq')} className="nav-link text-sm footer-nav-link">FAQ</button>
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
      )}
    </div>
  );
}

export default App;