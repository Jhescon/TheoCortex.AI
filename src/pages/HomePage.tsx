import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Target, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Globe, 
  Smartphone, 
  Database, 
  Calendar,
  ChevronDown,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Clock,
  Star,
  TrendingUp,
  Shield,
  Sparkles,
  ExternalLink,
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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Design & Funnels",
      description: "Custom websites and high-converting funnels that turn visitors into paying clients",
      features: ["Responsive Design", "Conversion Optimization", "Brand Integration", "SEO Ready"],
      link: "/services/website-design-funnels"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Smart AI Agents",
      description: "24/7 AI assistants that qualify leads, answer questions, and book appointments automatically",
      features: ["Lead Qualification", "24/7 Availability", "Natural Conversations", "CRM Integration"],
      link: "/services/smart-ai-agents"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "CRM Integration & Appointment Setting",
      description: "Seamless systems that capture, nurture, and convert leads without manual effort",
      features: ["Automated Follow-ups", "Calendar Sync", "Lead Tracking", "Analytics Dashboard"],
      link: "/services/crm-integration"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Business Coach",
      content: "TheoCortex transformed my lead generation. I went from chasing prospects to having qualified leads book calls automatically.",
      rating: 5
    },
    {
      name: "Mike R.",
      role: "Digital Agency Owner",
      content: "The AI agent handles 80% of my initial client conversations. It's like having a full-time sales assistant that never sleeps.",
      rating: 5
    },
    {
      name: "Lisa K.",
      role: "Consultant",
      content: "My conversion rate doubled after implementing their funnel system. The ROI was immediate and substantial.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How quickly can you set up my AI automation system?",
      answer: "Most clients see their first automated lead responses within 7-14 days. We prioritize getting your system live quickly while ensuring everything works perfectly."
    },
    {
      question: "Do I need technical skills to manage the system?",
      answer: "Not at all. We handle all the technical setup and provide simple dashboards for you to monitor performance. If you can use email, you can manage your AI system."
    },
    {
      question: "What if the AI agent doesn't understand my business?",
      answer: "We train your AI agent specifically on your business, services, and common questions. It learns your brand voice and can handle complex inquiries just like you would."
    },
    {
      question: "How much does it cost?",
      answer: "Investment varies based on your needs and business size. Most clients see ROI within the first month. We'll discuss pricing during your free strategy call."
    },
    {
      question: "Can you integrate with my existing tools?",
      answer: "Yes! We work with popular CRMs like GoHighLevel, HubSpot, Salesforce, and many others. We'll connect everything seamlessly to your current workflow."
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
              <a href="#services" className="nav-link">Services</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#faq" className="nav-link">FAQ</a>
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-8 ml-4 md:ml-0">
              <InteractiveButton 
                href="/book-call" 
                variant="primary" 
                className="hidden sm:flex px-3 py-2 text-sm md:px-8 md:py-4 md:text-base flex-shrink-0"
              >
                <span className="sm:hidden md:inline">Book Free Call</span>
                <span className="hidden sm:inline md:hidden">Book Call</span>
              </InteractiveButton>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-dark-300 hover:text-primary-400 transition-colors duration-300 touch-manipulation"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-dark-800/50 py-6 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="nav-link text-lg px-4 py-2 footer-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                <a href="#about" className="nav-link text-lg px-4 py-2 footer-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                <a href="#how-it-works" className="nav-link text-lg px-4 py-2 footer-nav-link" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
                <a href="#faq" className="nav-link text-lg px-4 py-2 footer-nav-link" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
                <div className="px-4 pt-4">
                  <InteractiveButton href="/book-call" variant="primary" className="w-full">
                    Book Free Call
                  </InteractiveButton>
                </div>
              </div>
            </div>
          )}
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
              Stop chasing leads. Start converting them automatically with AI systems that work 24/7.
            </p>
            <p className="text-lg text-dark-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-800 delay-500">
              We build custom AI agents, high-converting websites, and automated systems that turn your business into a lead-generating machine.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 transition-all duration-800 delay-700 ${typingComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <InteractiveButton size="lg" icon={ArrowRight} href="/book-call">
              Book Free Strategy Call
            </InteractiveButton>
            <InteractiveButton variant="secondary" size="lg" href="#services">
              See Our Services
            </InteractiveButton>
          </div>

          {/* Social Proof */}
          <div className={`transition-all duration-800 delay-900 ${typingComplete ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-dark-400 text-sm mb-4 font-light">Trusted by 100+ businesses to automate their growth</p>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-dark-300 text-sm">4.9/5 from client reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="section-container relative z-10">
          <div className="text-center mb-16 animate-fade-in-sequential stagger-3">
            <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tighter">
              OUR <span className="text-gradient">SERVICES</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
              Complete AI automation solutions designed to scale your business
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`glass-card group cursor-pointer h-full animate-scale-in-smooth stagger-${4 + index}`}>
                <a href={service.link} className="block h-full">
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
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                        <span className="text-dark-400 text-sm group-hover:text-dark-200 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-primary-400 font-medium group-hover:text-primary-300 transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-primary-900/5 to-transparent relative">
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-8 tracking-tighter">
                  WHY <span className="text-gradient">THEOCORTEX.AI</span>?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30 flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-xl mb-2">Lightning Fast Setup</h4>
                      <p className="text-dark-300 leading-relaxed font-light">Most clients see results within 2 weeks. We don't waste time with lengthy implementations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30 flex-shrink-0">
                      <Target className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-xl mb-2">Results-Focused</h4>
                      <p className="text-dark-300 leading-relaxed font-light">We're not just building tech—we're building systems that directly impact your bottom line.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30 flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-xl mb-2">Proven Track Record</h4>
                      <p className="text-dark-300 leading-relaxed font-light">100+ successful implementations with an average 3x increase in qualified leads.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="glass-card">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl mb-4">Average Client Results</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-gradient mb-2">3x</div>
                    <p className="text-dark-300 text-sm">More Qualified Leads</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-gradient mb-2">75%</div>
                    <p className="text-dark-300 text-sm">Time Saved Weekly</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-gradient mb-2">2x</div>
                    <p className="text-dark-300 text-sm">Conversion Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-gradient mb-2">24/7</div>
                    <p className="text-dark-300 text-sm">Lead Response</p>
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
              <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tighter">
                HOW IT <span className="text-gradient">WORKS</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
                Simple process, powerful results
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Strategy Call",
                description: "We analyze your business and identify the biggest opportunities for automation and growth."
              },
              {
                step: "02",
                icon: <Zap className="w-8 h-8" />,
                title: "Custom Build",
                description: "Our team creates your personalized AI systems, websites, and automation workflows."
              },
              {
                step: "03",
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Launch & Scale",
                description: "We launch your system, monitor performance, and continuously optimize for better results."
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
                  <h3 className="font-montserrat font-bold text-2xl mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300">
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
      <section className="py-20 bg-gradient-to-b from-dark-900/10 to-transparent relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tighter">
                CLIENT <span className="text-gradient">SUCCESS STORIES</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
                Real results from real businesses
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up" stagger={true}>
                <div className="glass-card group cursor-pointer h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-dark-300 font-light italic font-inter mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tighter">
                FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
                Everything you need to know about our AI automation services
              </p>
            </div>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up" stagger={true}>
                <div className="glass-card mb-4 group cursor-pointer">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-center justify-between p-6 focus:outline-none"
                  >
                    <h3 className="font-montserrat font-bold text-lg pr-8 group-hover:text-primary-400 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-6 h-6 text-primary-400 flex-shrink-0 transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <p className="text-dark-300 leading-relaxed font-light font-inter">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="section-container text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-8 tracking-tighter">
              READY TO <span className="text-gradient">AUTOMATE YOUR GROWTH?</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Book a free strategy call and discover how AI automation can transform your business in the next 30 days.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <InteractiveButton size="lg" icon={Calendar} href="/book-call">
                Book Free Strategy Call
              </InteractiveButton>
              <InteractiveButton variant="secondary" size="lg" href="/contact">
                Get Custom Quote
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