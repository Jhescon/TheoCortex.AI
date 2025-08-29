import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Clock, 
  Target, 
  MessageSquare, 
  BarChart3, 
  Sparkles, 
  ChevronDown,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin
} from 'lucide-react';
import { ScrollReveal } from './components/ScrollReveal';
import { InteractiveButton } from './components/InteractiveButton';
import { TypingEffect } from './components/TypingEffect';
import { AnimatedText } from './components/AnimatedText';
import { ContactForm } from './components/ContactForm';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle navigation clicks with smooth scrolling
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

  // Mobile navigation handler - simplified for single-click functionality
  const handleMobileNavigation = (targetId: string) => {
    // Close menu immediately
    setIsMobileMenuOpen(false);
    
    // Navigate after a brief delay to ensure menu closes
    setTimeout(() => {
      const element = document.getElementById(targetId.replace('#', ''));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  // Handle contact navigation for mobile
  const handleMobileContactNavigation = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      setCurrentPage('contact');
    }, 100);
  };

  if (currentPage === 'contact') {
    return <ContactForm />;
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
            {/* Logo */}
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-4 group flex-shrink-0">
              <div className="relative">
                <Brain className="w-10 h-10 text-primary-500 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl animate-pulse-glow"></div>
              </div>
              <span className="text-2xl font-bold font-montserrat tracking-tight transition-all duration-300 group-hover:text-primary-400">
                THEO<span className="text-primary-500">CORTEX</span><span className="text-dark-400 font-inter">.AI</span>
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="nav-link">Services</a>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="nav-link">About</a>
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')} className="nav-link">How It Works</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="nav-link">FAQ</a>
              <InteractiveButton onClick={() => setCurrentPage('contact')}>
                Book Free Call
              </InteractiveButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-dark-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}>
            <div className="py-4 space-y-2 border-t border-dark-800/50">
              {/* Mobile Navigation Links - Fixed for single-click */}
              <button
                onClick={() => handleMobileNavigation('#services')}
                className="w-full text-left nav-link text-lg py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-all duration-200"
              >
                Services
              </button>
              <button
                onClick={() => handleMobileNavigation('#about')}
                className="w-full text-left nav-link text-lg py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-all duration-200"
              >
                About
              </button>
              <button
                onClick={() => handleMobileNavigation('#how-it-works')}
                className="w-full text-left nav-link text-lg py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-all duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => handleMobileNavigation('#faq')}
                className="w-full text-left nav-link text-lg py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-all duration-200"
              >
                FAQ
              </button>
              <div className="pt-4">
                <button
                  onClick={handleMobileContactNavigation}
                  className="w-full btn-primary text-center py-3 rounded-lg"
                >
                  Book Free Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 relative">
        <div className="section-container text-center relative z-10">
          
          {/* Main Headline */}
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
                    THAT ACTUALLY WORKS
                  </div>
                </ScrollReveal>
              )}
            </h1>
          </div>
          
          {/* Subheadline */}
          {typingComplete && (
            <ScrollReveal delay={800} direction="up">
              <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                Stop chasing leads manually. We build AI systems that capture, qualify, and book appointments automatically.
              </p>
            </ScrollReveal>
          )}

          {/* CTA Buttons */}
          {typingComplete && (
            <ScrollReveal delay={1200} direction="scale">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <InteractiveButton size="lg" icon={ArrowRight} onClick={() => setCurrentPage('contact')}>
                  Book Free Strategy Call
                </InteractiveButton>
                <InteractiveButton variant="secondary" size="lg" onClick={(e) => handleNavClick(e, '#services')}>
                  See Our Services
                </InteractiveButton>
              </div>
            </ScrollReveal>
          )}

          {/* Trust Indicators */}
          {typingComplete && (
            <ScrollReveal delay={1400} direction="fade">
              <div className="flex flex-wrap items-center justify-center space-x-8 text-dark-400 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>30-Day Results Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  <span>Done-For-You Setup</span>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-dark-900/10 to-transparent relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tighter">
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
                icon: <Brain className="w-12 h-12" />,
                title: "Website Design & Funnels",
                description: "High-converting websites and sales funnels that turn visitors into customers",
                features: ["Custom responsive design", "Conversion optimization", "Brand-consistent styling", "Mobile-first approach"],
                link: "/website-design-funnels"
              },
              {
                icon: <MessageSquare className="w-12 h-12" />,
                title: "Smart AI Agents",
                description: "24/7 AI assistants that qualify leads and book appointments automatically",
                features: ["Natural conversation flow", "Lead qualification", "Appointment booking", "Multi-platform deployment"],
                link: "/smart-ai-agents"
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "CRM Integration & Appointment Setting",
                description: "Seamless CRM setup with automated follow-ups and booking systems",
                features: ["CRM setup & integration", "Automated follow-ups", "Calendar synchronization", "Lead pipeline management"],
                link: "/crm-integration"
              }
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up" stagger={true}>
                <div className="glass-card group cursor-pointer h-full">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mb-6 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-400">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-dark-300 mb-6 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-dark-400 group-hover:text-dark-200 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <InteractiveButton 
                    variant="secondary" 
                    icon={ExternalLink}
                    onClick={() => window.location.href = service.link}
                    className="w-full"
                  >
                    Learn More
                  </InteractiveButton>
                </div>
              </ScrollReveal>
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
                    We're not just another tech agency. We're automation specialists who understand that your time is your most valuable asset.
                  </p>
                  <p>
                    While others build generic solutions, we create custom AI systems that work specifically for your business, your audience, and your goals.
                  </p>
                  <p>
                    Our clients typically see results within 30 days - more qualified leads, higher conversion rates, and hours of time saved every week.
                  </p>
                </div>
                <div className="mt-8">
                  <InteractiveButton icon={ArrowRight} onClick={() => setCurrentPage('contact')}>
                    Start Your Automation Journey
                  </InteractiveButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Users className="w-8 h-8" />, stat: "500+", label: "Leads Generated" },
                  { icon: <TrendingUp className="w-8 h-8" />, stat: "85%", label: "Conversion Increase" },
                  { icon: <Clock className="w-8 h-8" />, stat: "20+", label: "Hours Saved Weekly" },
                  { icon: <Star className="w-8 h-8" />, stat: "98%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="glass-card text-center group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary-400">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-montserrat font-bold text-gradient mb-2">{stat.stat}</div>
                    <p className="text-dark-300 text-sm group-hover:text-white transition-colors duration-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-primary-900/5 to-transparent relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tighter">
                HOW IT <span className="text-gradient">WORKS</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
                Simple, proven process that gets you results fast
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Discovery Call",
                description: "We analyze your current process and identify automation opportunities"
              },
              {
                step: "02",
                icon: <Zap className="w-8 h-8" />,
                title: "Custom Build",
                description: "We create and deploy your personalized AI automation system"
              },
              {
                step: "03",
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Results & Scale",
                description: "Watch your leads increase while your workload decreases"
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
      <section className="py-20 relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tighter">
                CLIENT <span className="text-gradient">SUCCESS STORIES</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "TheoCortex transformed our lead generation. We went from manually chasing prospects to having qualified leads book themselves automatically.",
                author: "Sarah M.",
                role: "Business Coach",
                rating: 5
              },
              {
                quote: "The AI agent handles 80% of our customer inquiries perfectly. It's like having a 24/7 sales assistant that never sleeps.",
                author: "Mike R.",
                role: "Digital Agency Owner",
                rating: 5
              }
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 200} direction="up" stagger={true}>
                <div className="glass-card group cursor-pointer">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${i * 100}ms`}} />
                    ))}
                  </div>
                  <blockquote className="text-lg text-dark-300 font-light italic font-inter mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-montserrat font-bold text-white">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-white">{testimonial.author}</p>
                      <p className="text-dark-400 font-inter">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-b from-dark-900/10 to-transparent relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tighter">
                FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can you set up AI automation for my business?",
                answer: "Most clients see their first automated lead within 7-14 days. We handle everything from setup to training, so you don't need any technical knowledge."
              },
              {
                question: "Do I need technical skills to use your AI systems?",
                answer: "Not at all! We build everything for you and provide simple training. If you can use email, you can manage our AI systems."
              },
              {
                question: "What if the AI doesn't understand my industry?",
                answer: "We train each AI specifically on your business, industry, and customer questions. It learns your language and responds just like you would."
              },
              {
                question: "How much does AI automation cost?",
                answer: "Investment varies based on your needs. Most clients save more in time and increased conversions than they invest. We'll discuss pricing on your free strategy call."
              },
              {
                question: "Can you integrate with my existing tools?",
                answer: "Yes! We work with most popular CRMs, booking systems, and marketing tools. If you use it, we can probably connect to it."
              }
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up" stagger={true}>
                <details className="glass-card group cursor-pointer">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="font-montserrat font-bold text-lg tracking-wide group-hover:text-primary-400 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-primary-400 group-hover:rotate-180 transition-transform duration-300" />
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
              Book your free strategy call and discover how AI automation can transform your business in 30 days or less.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mb-8">
              <InteractiveButton size="lg" icon={ArrowRight} onClick={() => setCurrentPage('contact')}>
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
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-4 mb-8 md:mb-0 group cursor-pointer">
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
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="nav-link text-sm footer-nav-link">Home</a>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="nav-link text-sm footer-nav-link">Services</a>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="nav-link text-sm footer-nav-link">About</a>
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')} className="nav-link text-sm footer-nav-link">
                <span className="md:hidden">How It<br />Works</span>
                <span className="hidden md:inline">How It Works</span>
              </a>
              <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="nav-link text-sm footer-nav-link">FAQ</a>
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

export default App;