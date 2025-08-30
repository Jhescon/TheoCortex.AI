import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Target, 
  Users, 
  BarChart3, 
  Clock, 
  Shield, 
  Sparkles, 
  ChevronDown,
  Globe,
  Bot,
  Database,
  Palette,
  Code,
  TrendingUp,
  MessageSquare,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin
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

type Page = 'home' | 'book-call' | 'website-design' | 'ai-agents' | 'crm-integration' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // FIXED: Proper navigation handler that prevents double-click issue
  const handleNavigation = (targetId: string) => {
    // Close mobile menu immediately
    setIsMobileMenuOpen(false);
    
    // Handle page navigation vs section navigation
    if (targetId.startsWith('/')) {
      // Page navigation
      const pageMap: Record<string, Page> = {
        '/': 'home',
        '/book-call': 'book-call',
        '/website-design': 'website-design',
        '/ai-agents': 'ai-agents',
        '/crm-integration': 'crm-integration',
        '/contact': 'contact'
      };
      
      const page = pageMap[targetId] || 'home';
      setCurrentPage(page);
      
      // Scroll to top for page changes
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (targetId.startsWith('#')) {
      // Section navigation - ensure we're on home page first
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Wait for page to load, then scroll to section
        setTimeout(() => {
          const element = document.getElementById(targetId.substring(1));
          if (element) {
            const headerHeight = 80; // Fixed header height
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
          const element = document.getElementById(targetId.substring(1));
          if (element) {
            const headerHeight = 80; // Fixed header height
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Render different pages based on currentPage state
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

  if (currentPage === 'contact') {
    return <ContactForm />;
  }

  // Home page content
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
              <InteractiveButton onClick={() => handleNavigation('/contact')}>
                Get Started
              </InteractiveButton>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden mobile-nav-button touch-manipulation"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay touch-manipulation">
            <div className="mobile-menu-content">
              <div className="space-y-4">
                <button
                  onClick={() => handleNavigation('#services')}
                  className="mobile-nav-item touch-manipulation"
                >
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-primary-400" />
                    <span className="font-montserrat font-semibold">Services</span>
                  </div>
                  <p className="text-dark-400 text-sm mt-1">AI automation solutions</p>
                </button>

                <button
                  onClick={() => handleNavigation('#about')}
                  className="mobile-nav-item touch-manipulation"
                >
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary-400" />
                    <span className="font-montserrat font-semibold">About</span>
                  </div>
                  <p className="text-dark-400 text-sm mt-1">Our story and mission</p>
                </button>

                <button
                  onClick={() => handleNavigation('#how-it-works')}
                  className="mobile-nav-item touch-manipulation"
                >
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-primary-400" />
                    <span className="font-montserrat font-semibold">How It Works</span>
                  </div>
                  <p className="text-dark-400 text-sm mt-1">Our proven process</p>
                </button>

                <button
                  onClick={() => handleNavigation('#faq')}
                  className="mobile-nav-item touch-manipulation"
                >
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-primary-400" />
                    <span className="font-montserrat font-semibold">FAQ</span>
                  </div>
                  <p className="text-dark-400 text-sm mt-1">Common questions</p>
                </button>

                <div className="pt-4 border-t border-dark-700/50">
                  <button
                    onClick={() => handleNavigation('/contact')}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-montserrat font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 touch-manipulation"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
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
                  <div className="text-white font-light tracking-wider">
                    FOR MODERN BUSINESS
                  </div>
                </ScrollReveal>
              )}
            </h1>
          </div>
          
          {typingComplete && (
            <ScrollReveal delay={800} direction="up">
              <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                Transform your business with intelligent automation that works 24/7. 
                From lead generation to customer engagement, we build systems that scale.
              </p>
            </ScrollReveal>
          )}

          {typingComplete && (
            <ScrollReveal delay={1200} direction="scale">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <InteractiveButton size="lg" icon={ArrowRight} onClick={() => handleNavigation('/contact')}>
                  Get Started Free
                </InteractiveButton>
                <InteractiveButton variant="secondary" size="lg" onClick={() => handleNavigation('/book-call')}>
                  Book Strategy Call
                </InteractiveButton>
              </div>
            </ScrollReveal>
          )}

          {/* Stats */}
          {typingComplete && (
            <ScrollReveal delay={1400} direction="fade">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { number: "300%", label: "Lead Generation Increase" },
                  { number: "24/7", label: "Automated Operations" },
                  { number: "50+", label: "Hours Saved Monthly" }
                ].map((stat, index) => (
                  <div key={index} className="glass-card group cursor-pointer">
                    <div className="text-3xl font-montserrat font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <p className="text-dark-300 group-hover:text-white transition-colors duration-300">
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
              <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
                Comprehensive AI solutions designed to transform your business operations
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Website Design & Funnels",
                description: "High-converting websites and sales funnels that turn visitors into customers",
                features: ["Responsive Design", "Conversion Optimization", "SEO Ready", "Fast Loading"],
                cta: "Learn More",
                link: "/website-design"
              },
              {
                icon: <Bot className="w-12 h-12" />,
                title: "Smart AI Agents",
                description: "24/7 AI assistants that qualify leads and handle customer interactions",
                features: ["Lead Qualification", "24/7 Availability", "Natural Conversations", "CRM Integration"],
                cta: "Explore AI Agents",
                link: "/ai-agents"
              },
              {
                icon: <Database className="w-12 h-12" />,
                title: "CRM Integration & Appointment Setting",
                description: "Seamless CRM setup with automated booking and follow-up systems",
                features: ["CRM Setup", "Automated Follow-ups", "Calendar Sync", "Lead Tracking"],
                cta: "See Integration",
                link: "/crm-integration"
              }
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up" stagger={true}>
                <div className="glass-card group cursor-pointer h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mb-6 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
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
                    onClick={() => handleNavigation(service.link)}
                    className="w-full justify-center"
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
                    While others focus on flashy features, we build systems that actually work—saving you hours every week and converting more leads into paying customers.
                  </p>
                  <p>
                    Our approach combines cutting-edge AI technology with proven business strategy, ensuring every automation we build drives real results for your bottom line.
                  </p>
                </div>
                <div className="mt-8">
                  <InteractiveButton onClick={() => handleNavigation('/contact')} icon={ArrowRight}>
                    Start Your Transformation
                  </InteractiveButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Proven Results",
                    description: "300% average increase in lead generation for our clients"
                  },
                  {
                    icon: <Clock className="w-8 h-8" />,
                    title: "Time Savings",
                    description: "50+ hours saved monthly through intelligent automation"
                  },
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "Custom Solutions",
                    description: "Tailored systems built specifically for your business needs"
                  }
                ].map((item, index) => (
                  <div key={index} className="glass-card group cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <div className="text-primary-400">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-montserrat font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
              <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
                Our proven 3-step process to transform your business with AI automation
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Discovery Call",
                description: "We analyze your current processes and identify automation opportunities that will have the biggest impact on your business."
              },
              {
                step: "02",
                icon: <Code className="w-8 h-8" />,
                title: "Custom Build",
                description: "Our team designs and builds your personalized AI automation system, integrating seamlessly with your existing tools."
              },
              {
                step: "03",
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Launch & Scale",
                description: "We deploy your system, provide training, and continuously optimize performance to maximize your ROI."
              }
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 200} direction="scale" stagger={true}>
                <div className="text-center group cursor-pointer">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-montserrat font-bold text-white">{step.step}</span>
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
                question: "How long does it take to implement AI automation?",
                answer: "Most projects are completed within 2-4 weeks, depending on complexity. We provide regular updates and can often deliver initial results within the first week."
              },
              {
                question: "Do I need technical knowledge to use these systems?",
                answer: "Not at all! We design everything to be user-friendly and provide comprehensive training. Our systems are built for business owners, not developers."
              },
              {
                question: "What if I already have existing tools and systems?",
                answer: "We specialize in integrating with your current setup. Whether it's your CRM, website, or booking system, we make everything work together seamlessly."
              },
              {
                question: "How much can I expect to save with automation?",
                answer: "Our clients typically save 20-50 hours per month and see a 200-400% increase in lead conversion rates. The ROI usually pays for itself within 60 days."
              },
              {
                question: "What kind of support do you provide after launch?",
                answer: "We provide ongoing support, monitoring, and optimization. Your success is our success, so we're always available to help you get the most from your automation."
              }
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up" stagger={true}>
                <details className="glass-card group cursor-pointer">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="font-montserrat font-bold text-lg group-hover:text-primary-400 transition-colors duration-300 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-6 h-6 text-primary-400 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0" />
                  </summary>
                  <div className="mt-4 pt-4 border-t border-dark-700/50">
                    <p className="text-dark-300 leading-relaxed font-light font-inter">
                      {faq.answer}
                    </p>
                  </div>
                </details>
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
              READY TO <span className="text-gradient">AUTOMATE YOUR SUCCESS</span>?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Join hundreds of businesses already using AI automation to scale faster and work smarter.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <InteractiveButton size="lg" icon={ArrowRight} onClick={() => handleNavigation('/contact')}>
                Start Your Free Consultation
              </InteractiveButton>
              <InteractiveButton variant="secondary" size="lg" onClick={() => handleNavigation('/book-call')}>
                Book Strategy Call
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