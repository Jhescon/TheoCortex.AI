import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Menu, 
  X, 
  Globe, 
  Bot, 
  Database, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Target, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Clock, 
  Sparkles, 
  ChevronDown,
  Instagram,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { ScrollReveal } from './components/ScrollReveal';
import { InteractiveButton } from './components/InteractiveButton';
import { TypingEffect } from './components/TypingEffect';
import { ParallaxBackground } from './components/ParallaxBackground';
import { ContactForm } from './components/ContactForm';
import { BookCall } from './pages/BookCall';
import { WebsiteDesignFunnels } from './pages/WebsiteDesignFunnels';
import { SmartAIAgents } from './pages/SmartAIAgents';
import { CRMIntegration } from './pages/CRMIntegration';

type Page = 'home' | 'contact' | 'book-call' | 'website-design' | 'ai-agents' | 'crm-integration';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Fixed navigation handler - prevents double-click issue
  const handleNavigation = (targetId: string, e?: React.MouseEvent) => {
    // Prevent default behavior that causes scroll-to-top
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Close mobile menu immediately
    setIsMobileMenuOpen(false);

    // Handle page navigation vs section navigation
    if (targetId.startsWith('/')) {
      // Page navigation
      const pageMap: Record<string, Page> = {
        '/contact': 'contact',
        '/book-call': 'book-call',
        '/website-design': 'website-design',
        '/ai-agents': 'ai-agents',
        '/crm-integration': 'crm-integration'
      };
      
      const page = pageMap[targetId] || 'home';
      setCurrentPage(page);
      
      // Scroll to top for new pages
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (targetId.startsWith('#')) {
      // Section navigation - ensure we're on home page first
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Wait for page to load, then scroll to section
        setTimeout(() => {
          const element = document.querySelector(targetId);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      } else {
        // Already on home page, scroll to section immediately
        setTimeout(() => {
          const element = document.querySelector(targetId);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  };

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Render different pages
  if (currentPage === 'contact') {
    return <ContactForm />;
  }

  if (currentPage === 'book-call') {
    return <BookCall />;
  }

  if (currentPage === 'website-design') {
    return <WebsiteDesignFunnels />;
  }

  if (currentPage === 'ai-agents') {
    return <SmartAIAgents />;
  }

  if (currentPage === 'crm-integration') {
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-xl border-b border-dark-800/50 transition-all duration-300">
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-4 group flex-shrink-0 touch-manipulation"
            >
              <div className="relative">
                <Brain className="w-10 h-10 text-primary-500 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl animate-pulse-glow"></div>
              </div>
              <span className="text-2xl font-bold font-montserrat tracking-tight transition-all duration-300 group-hover:text-primary-400">
                THEO<span className="text-primary-500">CORTEX</span><span className="text-dark-400 font-inter">.AI</span>
              </span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavigation('#services')} className="nav-link">Services</button>
              <button onClick={() => handleNavigation('#about')} className="nav-link">About</button>
              <button onClick={() => handleNavigation('#how-it-works')} className="nav-link">How It Works</button>
              <button onClick={() => handleNavigation('#faq')} className="nav-link">FAQ</button>
              <InteractiveButton onClick={() => handleNavigation('/contact')} size="md">
                Get Started
              </InteractiveButton>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden mobile-nav-button touch-manipulation"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-gradient-to-r from-primary-400 to-secondary-400 transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-gradient-to-r from-primary-400 to-secondary-400 transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-gradient-to-r from-primary-400 to-secondary-400 transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay touch-manipulation">
          <div className="mobile-menu-content">
            <div className="space-y-4">
              {/* Navigation Items */}
              <button
                onClick={(e) => handleNavigation('#services', e)}
                className="mobile-nav-item touch-manipulation"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30">
                      <Globe className="w-5 h-5 text-primary-400" />
                    </div>
                    <span className="font-montserrat font-semibold text-lg">Services</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-400" />
                </div>
              </button>

              <button
                onClick={(e) => handleNavigation('#about', e)}
                className="mobile-nav-item touch-manipulation"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30">
                      <Users className="w-5 h-5 text-primary-400" />
                    </div>
                    <span className="font-montserrat font-semibold text-lg">About</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-400" />
                </div>
              </button>

              <button
                onClick={(e) => handleNavigation('#how-it-works', e)}
                className="mobile-nav-item touch-manipulation"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30">
                      <Zap className="w-5 h-5 text-primary-400" />
                    </div>
                    <span className="font-montserrat font-semibold text-lg">How It Works</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-400" />
                </div>
              </button>

              <button
                onClick={(e) => handleNavigation('#faq', e)}
                className="mobile-nav-item touch-manipulation"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30">
                      <MessageSquare className="w-5 h-5 text-primary-400" />
                    </div>
                    <span className="font-montserrat font-semibold text-lg">FAQ</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-400" />
                </div>
              </button>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={(e) => handleNavigation('/contact', e)}
                  className="w-full btn-primary touch-manipulation"
                >
                  <span>Get Started</span>
                  <ExternalLink className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 relative">
        <ParallaxBackground speed={0.3} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        </ParallaxBackground>
        
        <div className="section-container text-center relative z-10">
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight tracking-tighter">
              <div className="text-gradient mb-4">
                <TypingEffect 
                  text="AI AUTOMATION" 
                  delay={500}
                  speed={120}
                  onComplete={() => setTypingComplete(true)}
                />
              </div>
              {typingComplete && (
                <ScrollReveal delay={200} direction="fade">
                  <div className="text-white font-light tracking-wider text-4xl md:text-5xl lg:text-6xl">
                    FOR MODERN BUSINESS
                  </div>
                </ScrollReveal>
              )}
            </h1>
          </div>
          
          {typingComplete && (
            <ScrollReveal delay={800} direction="up">
              <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                Stop chasing leads. Start converting them automatically.
              </p>
              <p className="text-lg text-dark-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
                We build AI-powered systems that capture, qualify, and convert leads while you focus on what matters most—growing your business.
              </p>
            </ScrollReveal>
          )}

          {typingComplete && (
            <ScrollReveal delay={1200} direction="scale">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <InteractiveButton size="lg" icon={Calendar} onClick={() => handleNavigation('/book-call')}>
                  Book Free Strategy Call
                </InteractiveButton>
                <InteractiveButton variant="secondary" size="lg" onClick={() => handleNavigation('#services')}>
                  Explore Services
                </InteractiveButton>
              </div>
            </ScrollReveal>
          )}

          {/* Stats */}
          {typingComplete && (
            <ScrollReveal delay={1400} direction="fade">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { number: "300%", label: "Increase in Lead Quality" },
                  { number: "24/7", label: "Automated Lead Capture" },
                  { number: "85%", label: "Time Saved on Follow-ups" }
                ].map((stat, index) => (
                  <div key={index} className="glass-card group cursor-pointer">
                    <div className="text-3xl font-montserrat font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <p className="text-dark-300 text-sm group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                OUR <span className="text-gradient">SERVICES</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed font-light">
                Complete AI automation solutions designed to transform your business operations
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Website Design & Funnels",
                description: "High-converting websites and sales funnels that turn visitors into customers",
                features: ["Responsive Design", "Conversion Optimization", "SEO Ready", "Fast Loading"],
                cta: "Learn More",
                link: "/website-design"
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "Smart AI Agents",
                description: "24/7 AI assistants that qualify leads and book appointments automatically",
                features: ["Lead Qualification", "24/7 Availability", "Natural Conversations", "CRM Integration"],
                cta: "Discover AI Agents",
                link: "/ai-agents"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "CRM Integration & Appointment Setting",
                description: "Seamless CRM setup with automated follow-ups and booking systems",
                features: ["CRM Setup", "Automated Follow-ups", "Calendar Integration", "Lead Tracking"],
                cta: "Explore CRM Solutions",
                link: "/crm-integration"
              }
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up" stagger={true}>
                <div className="glass-card group cursor-pointer h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mb-6 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-400">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed font-light font-inter mb-6 group-hover:text-white transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                        <span className="text-dark-400 text-sm group-hover:text-dark-300 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <InteractiveButton 
                    variant="ghost" 
                    icon={ArrowRight}
                    onClick={() => handleNavigation(service.link)}
                    className="w-full justify-center mt-auto"
                  >
                    {service.cta}
                  </InteractiveButton>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-dark-900/10 to-transparent relative">
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-8 tracking-tighter">
                  WHY <span className="text-gradient">THEOCORTEX.AI</span>?
                </h2>
                <div className="space-y-6 text-lg text-dark-300 leading-relaxed font-light">
                  <p>
                    We're not just another tech agency. We're automation specialists who understand that your time is your most valuable asset.
                  </p>
                  <p>
                    While others build generic solutions, we create custom AI systems that work specifically for your business, your audience, and your goals.
                  </p>
                  <p>
                    Our mission is simple: eliminate the manual work that's holding you back so you can focus on scaling and growing.
                  </p>
                </div>
                
                <div className="mt-12 space-y-4">
                  {[
                    { icon: <Target className="w-6 h-6" />, text: "Custom solutions, not cookie-cutter templates" },
                    { icon: <Zap className="w-6 h-6" />, text: "Fast implementation with immediate results" },
                    { icon: <Users className="w-6 h-6" />, text: "Ongoing support and optimization" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary-400">
                          {item.icon}
                        </div>
                      </div>
                      <span className="text-dark-300 group-hover:text-white transition-colors duration-300">{item.text}</span>
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
                    Meet Your AI Automation Partner
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-lg mb-2">Discovery Call</h4>
                      <p className="text-dark-300 text-sm">We analyze your current process and identify automation opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-lg mb-2">Custom Build</h4>
                      <p className="text-dark-300 text-sm">We create and implement your personalized AI automation system</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-lg mb-2">Launch & Optimize</h4>
                      <p className="text-dark-300 text-sm">Your system goes live and we continuously optimize for better results</p>
                    </div>
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
                From consultation to conversion—here's how we transform your business
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Free Strategy Call",
                description: "We analyze your current process and identify the biggest opportunities for automation."
              },
              {
                step: "02",
                icon: <Target className="w-8 h-8" />,
                title: "Custom Strategy",
                description: "We create a tailored automation plan that fits your business model and goals."
              },
              {
                step: "03",
                icon: <Zap className="w-8 h-8" />,
                title: "Build & Deploy",
                description: "Our team builds and implements your custom AI automation system."
              },
              {
                step: "04",
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Monitor & Optimize",
                description: "We track performance and continuously optimize for better results."
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
      <section id="faq" className="py-20 bg-gradient-to-b from-primary-900/5 to-transparent relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can you implement AI automation for my business?",
                answer: "Most implementations take 2-4 weeks depending on complexity. We start with a strategy call to understand your needs, then build and deploy your custom system. You'll see initial results within the first week of going live."
              },
              {
                question: "Do I need technical knowledge to use these AI systems?",
                answer: "Not at all. We handle all the technical setup and provide simple dashboards for monitoring. Our systems are designed to work automatically in the background while you focus on running your business."
              },
              {
                question: "What kind of results can I expect?",
                answer: "Our clients typically see 200-400% increases in lead quality, 85% reduction in manual follow-up time, and 24/7 lead capture. Results vary by industry, but automation consistently improves efficiency and conversion rates."
              },
              {
                question: "How much does AI automation cost?",
                answer: "Investment varies based on your specific needs and business size. We offer flexible packages starting from basic automation to comprehensive AI systems. Book a free strategy call to get a custom quote for your situation."
              },
              {
                question: "Can you integrate with my existing tools and CRM?",
                answer: "Yes! We specialize in integrating with popular platforms like GoHighLevel, HubSpot, Salesforce, Zapier, and many others. We'll work with your current tech stack to create seamless automation."
              }
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up" stagger={true}>
                <div className="glass-card group cursor-pointer">
                  <h3 className="font-montserrat font-bold text-xl mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300">
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
              Stop losing leads to manual processes. Let's build an AI system that works 24/7 for your business.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <InteractiveButton size="lg" icon={Calendar} onClick={() => handleNavigation('/book-call')}>
                Book Free Strategy Call
              </InteractiveButton>
              <InteractiveButton variant="secondary" size="lg" onClick={() => handleNavigation('/contact')}>
                Get Custom Quote
              </InteractiveButton>
            </div>
            <p className="text-dark-400 text-lg font-light italic font-inter">
              No commitments. Just results-focused strategy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-dark-900/50 to-dark-950 border-t border-dark-800/30 py-20 relative">
        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:space-x-12">
            <button onClick={() => handleNavigation('/')} className="flex items-center space-x-4 mb-8 md:mb-0 group cursor-pointer touch-manipulation">
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
            </button>
            
            <div className="flex items-center space-x-8 mb-8 md:mb-0">
              <button onClick={() => handleNavigation('/')} className="nav-link text-sm footer-nav-link">Home</button>
              <button onClick={() => handleNavigation('#services')} className="nav-link text-sm footer-nav-link">Services</button>
              <button onClick={() => handleNavigation('#about')} className="nav-link text-sm footer-nav-link">About</button>
              <button onClick={() => handleNavigation('#how-it-works')} className="nav-link text-sm footer-nav-link">
                <span className="md:hidden">How It<br />Works</span>
                <span className="hidden md:inline">How It Works</span>
              </button>
              <button onClick={() => handleNavigation('#faq')} className="nav-link text-sm footer-nav-link">FAQ</button>
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