import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Bot, 
  Database, 
  Zap, 
  Users, 
  Target, 
  BarChart3, 
  Clock, 
  Shield, 
  Sparkles, 
  MessageSquare, 
  Calendar, 
  TrendingUp, 
  Star, 
  ChevronDown, 
  ExternalLink,
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

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle navigation with smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Fixed mobile navigation handler - single click solution
  const handleMobileNavClick = (targetId: string) => {
    // Immediately close menu for instant feedback
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

  // Handle page navigation
  const handlePageNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  // Render different pages based on current page
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
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-4 group flex-shrink-0"
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
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="nav-link">Services</a>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="nav-link">About</a>
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')} className="nav-link">How It Works</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="nav-link">FAQ</a>
              <InteractiveButton onClick={() => handlePageNavigation('contact')}>
                Book Free Call
              </InteractiveButton>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-dark-300 hover:text-white transition-colors duration-200 touch-manipulation"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}>
            <div className="py-4 space-y-2 border-t border-dark-800/50">
              <button
                onClick={() => handleMobileNavClick('#services')}
                className="w-full text-left nav-link text-lg py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-all duration-200 touch-manipulation"
              >
                Services
              </button>
              <button
                onClick={() => handleMobileNavClick('#about')}
                className="w-full text-left nav-link text-lg py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-all duration-200 touch-manipulation"
              >
                About
              </button>
              <button
                onClick={() => handleMobileNavClick('#how-it-works')}
                className="w-full text-left nav-link text-lg py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-all duration-200 touch-manipulation"
              >
                How It Works
              </button>
              <button
                onClick={() => handleMobileNavClick('#faq')}
                className="w-full text-left nav-link text-lg py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-all duration-200 touch-manipulation"
              >
                FAQ
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => handlePageNavigation('contact'), 100);
                }}
                className="w-full mt-4 btn-primary text-center py-3 rounded-lg touch-manipulation"
              >
                Book Free Call
              </button>
            </div>
          </div>
        </div>
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
                  <div className="text-white font-light tracking-wider text-4xl md:text-5xl lg:text-6xl">
                    THAT ACTUALLY WORKS
                  </div>
                </ScrollReveal>
              )}
            </h1>
          </div>
          
          {typingComplete && (
            <ScrollReveal delay={800} direction="up">
              <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                We build smart systems that handle your leads, bookings, and follow-ups automatically.
              </p>
              <p className="text-lg text-dark-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
                Stop chasing prospects and start converting them with AI that works 24/7 while you focus on what matters most.
              </p>
            </ScrollReveal>
          )}

          {/* CTA Buttons */}
          {typingComplete && (
            <ScrollReveal delay={1200} direction="scale">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <InteractiveButton 
                  size="lg" 
                  icon={ArrowRight}
                  onClick={() => handlePageNavigation('contact')}
                >
                  Get Your Free Strategy Call
                </InteractiveButton>
                <InteractiveButton 
                  variant="secondary" 
                  size="lg"
                  onClick={() => handleMobileNavClick('#how-it-works')}
                >
                  See How It Works
                </InteractiveButton>
              </div>
            </ScrollReveal>
          )}

          {/* Stats */}
          {typingComplete && (
            <ScrollReveal delay={1400} direction="fade">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { number: "300%", label: "Increase in Lead Response" },
                  { number: "24/7", label: "Automated Lead Qualification" },
                  { number: "85%", label: "Time Saved on Follow-ups" }
                ].map((stat, index) => (
                  <div key={index} className="glass-card text-center group cursor-pointer">
                    <div className="text-4xl font-montserrat font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <p className="text-dark-300 font-light group-hover:text-white transition-colors duration-300">
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
                Complete AI automation solutions designed to transform your business operations
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Website Design & Funnels",
                description: "High-converting websites and sales funnels that turn visitors into customers automatically.",
                features: ["Responsive Design", "Conversion Optimization", "A/B Testing", "Analytics Integration"],
                cta: "Learn More",
                page: 'website-design'
              },
              {
                icon: <Bot className="w-12 h-12" />,
                title: "Smart AI Agents",
                description: "Custom AI assistants that qualify leads, answer questions, and book appointments 24/7.",
                features: ["Lead Qualification", "24/7 Availability", "Natural Conversations", "CRM Integration"],
                cta: "Discover AI Agents",
                page: 'ai-agents'
              },
              {
                icon: <Database className="w-12 h-12" />,
                title: "CRM Integration & Appointment Setting",
                description: "Seamless automation that connects your tools and never lets a lead slip through the cracks.",
                features: ["CRM Setup", "Automated Follow-ups", "Calendar Sync", "Lead Tracking"],
                cta: "Explore CRM Solutions",
                page: 'crm-integration'
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
                    icon={ArrowRight}
                    onClick={() => handlePageNavigation(service.page)}
                    className="mt-auto"
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
                    While others build generic solutions, we create custom AI systems that learn your business, speak your language, and work exactly how you need them to.
                  </p>
                  <p>
                    Our clients typically see results within the first month—more qualified leads, higher conversion rates, and hours of time saved every week.
                  </p>
                </div>
                <div className="mt-8">
                  <InteractiveButton icon={ExternalLink} onClick={() => handlePageNavigation('contact')}>
                    Start Your Automation Journey
                  </InteractiveButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-6">
                {[
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "Results-Focused",
                    description: "Every system we build is designed to increase your revenue and save your time."
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Custom Solutions",
                    description: "No cookie-cutter approaches. We build automation that fits your unique business."
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Reliable Support",
                    description: "We're here for the long haul with ongoing optimization and support."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center border border-primary-400/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <div className="text-primary-400">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-xl mb-2 group-hover:text-primary-400 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                        {item.description}
                      </p>
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
                description: "We analyze your current workflow and identify automation opportunities that will have the biggest impact on your business."
              },
              {
                step: "02",
                icon: <Zap className="w-8 h-8" />,
                title: "Custom Build",
                description: "Our team creates and implements your personalized AI automation system, integrating seamlessly with your existing tools."
              },
              {
                step: "03",
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Launch & Optimize",
                description: "We launch your system, monitor performance, and continuously optimize to ensure maximum results and ROI."
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Business Coach",
                content: "TheoCortex transformed my lead generation. I went from manually following up with prospects to having an AI system that qualifies and books calls automatically. My conversion rate increased by 40%.",
                rating: 5
              },
              {
                name: "Mike R.",
                role: "Digital Agency Owner",
                content: "The AI agents they built for us handle customer inquiries 24/7. We've seen a 60% reduction in response time and our team can focus on high-value work instead of repetitive tasks.",
                rating: 5
              },
              {
                name: "Lisa K.",
                role: "E-commerce Founder",
                content: "Their CRM integration saved us countless hours. Every lead is automatically tracked and followed up with personalized sequences. It's like having a full-time sales team that never sleeps.",
                rating: 5
              }
            ].map((testimonial, index) => (
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
                      <span className="font-montserrat font-bold text-white text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-white">{testimonial.name}</p>
                      <p className="text-dark-400 text-sm font-inter">{testimonial.role}</p>
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
            {[
              {
                question: "How quickly can you implement AI automation for my business?",
                answer: "Most implementations take 2-4 weeks depending on complexity. We start with a strategy call to understand your needs, then build and deploy your custom system. You'll see initial results within the first week of launch."
              },
              {
                question: "Do I need technical knowledge to use these AI systems?",
                answer: "Not at all! We design everything to be user-friendly. You'll get a simple dashboard to monitor performance, and we provide full training. Our systems work in the background while you focus on running your business."
              },
              {
                question: "What if the AI doesn't understand my industry or customers?",
                answer: "We train each AI system specifically on your business knowledge, FAQs, and customer interactions. The AI learns your industry terminology, common objections, and how to respond in your brand voice."
              },
              {
                question: "How much does AI automation cost compared to hiring staff?",
                answer: "Our automation typically costs 70-80% less than hiring full-time staff for the same tasks. Plus, AI works 24/7 without breaks, sick days, or turnover. Most clients see ROI within the first month."
              },
              {
                question: "Can you integrate with my existing CRM and tools?",
                answer: "Yes! We work with all major CRMs including GoHighLevel, HubSpot, Salesforce, and more. We also integrate with your existing website, booking systems, and marketing tools for seamless operation."
              }
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up" stagger={true}>
                <details className="glass-card group cursor-pointer">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h4 className="font-montserrat font-bold text-lg group-hover:text-primary-400 transition-colors duration-300 pr-4">
                      {faq.question}
                    </h4>
                    <ChevronDown className="w-5 h-5 text-primary-400 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0" />
                  </summary>
                  <div className="mt-4 pt-4 border-t border-dark-700/50">
                    <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
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
              READY TO <span className="text-gradient">AUTOMATE YOUR SUCCESS?</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Stop losing leads and start converting them automatically. Book your free strategy call today.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mb-8">
              <InteractiveButton size="lg" icon={Calendar} onClick={() => handlePageNavigation('contact')}>
                Book Your Free Strategy Call
              </InteractiveButton>
            </div>
            <p className="text-dark-400 text-lg font-light italic font-inter">
              No obligations. Just results-focused strategy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-dark-900/50 to-dark-950 border-t border-dark-800/30 py-20 relative">
        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:space-x-12">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-4 mb-8 md:mb-0 group cursor-pointer"
            >
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
              <button onClick={() => handleMobileNavClick('#services')} className="nav-link text-sm footer-nav-link">Services</button>
              <button onClick={() => handleMobileNavClick('#about')} className="nav-link text-sm footer-nav-link">About</button>
              <button onClick={() => handleMobileNavClick('#how-it-works')} className="nav-link text-sm footer-nav-link">
                <span className="md:hidden">How It<br />Works</span>
                <span className="hidden md:inline">How It Works</span>
              </button>
              <button onClick={() => handleMobileNavClick('#faq')} className="nav-link text-sm footer-nav-link">FAQ</button>
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