import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Globe, 
  Bot, 
  Database, 
  Calendar, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle, 
  Zap, 
  Target, 
  Users, 
  BarChart3, 
  MessageSquare, 
  ChevronDown,
  Instagram,
  Linkedin
} from 'lucide-react';
import { ScrollReveal } from './components/ScrollReveal';
import { InteractiveButton } from './components/InteractiveButton';
import { TypingEffect } from './components/TypingEffect';
import { ParallaxBackground } from './components/ParallaxBackground';
import { ContactForm } from './components/ContactForm';
import { BookCall } from './pages/BookCall';
import { SmartAIAgents } from './pages/SmartAIAgents';
import { CRMIntegration } from './pages/CRMIntegration';
import { WebsiteDesignFunnels } from './pages/WebsiteDesignFunnels';

type Page = 'home' | 'book-call' | 'smart-ai-agents' | 'crm-integration' | 'website-design-funnels' | 'contact-form';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      switch (hash) {
        case 'book-call':
          setCurrentPage('book-call');
          break;
        case 'smart-ai-agents':
          setCurrentPage('smart-ai-agents');
          break;
        case 'crm-integration':
          setCurrentPage('crm-integration');
          break;
        case 'website-design-funnels':
          setCurrentPage('website-design-funnels');
          break;
        case 'contact-form':
          setCurrentPage('contact-form');
          break;
        default:
          setCurrentPage('home');
      }
    };

    // Set initial page based on hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'book-call':
        return <BookCall />;
      case 'smart-ai-agents':
        return <SmartAIAgents />;
      case 'crm-integration':
        return <CRMIntegration />;
      case 'website-design-funnels':
        return <WebsiteDesignFunnels />;
      case 'contact-form':
        return <ContactForm />;
      default:
        return <HomePage typingComplete={typingComplete} setTypingComplete={setTypingComplete} />;
    }
  };

  return renderCurrentPage();
}

// HomePage Component
const HomePage: React.FC<{ typingComplete: boolean; setTypingComplete: (value: boolean) => void }> = ({ 
  typingComplete, 
  setTypingComplete 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Design & Funnels",
      description: "Custom websites and high-converting funnels that turn visitors into paying clients.",
      features: ["Responsive Design", "Conversion Optimization", "Brand Integration", "SEO Ready"],
      href: "#website-design-funnels"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Smart AI Agents",
      description: "24/7 AI assistants that qualify leads, answer questions, and book appointments automatically.",
      features: ["Lead Qualification", "24/7 Availability", "Natural Conversations", "CRM Integration"],
      href: "#smart-ai-agents"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "CRM Integration & Appointment Setting",
      description: "Seamless systems that capture, nurture, and convert leads without manual effort.",
      features: ["Automated Follow-ups", "Calendar Sync", "Lead Tracking", "Analytics Dashboard"],
      href: "#crm-integration"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you implement AI automation?",
      answer: "Most basic automations are live within 1-2 weeks. Complex integrations may take 3-4 weeks depending on your current systems."
    },
    {
      question: "Do I need technical knowledge to use these systems?",
      answer: "Not at all. We handle all the technical setup and provide simple dashboards for you to monitor and manage everything."
    },
    {
      question: "What if I already have a website or CRM?",
      answer: "Perfect! We integrate with existing systems like GoHighLevel, HubSpot, Calendly, and most popular platforms."
    },
    {
      question: "How much does AI automation cost?",
      answer: "Investment varies based on your needs. We'll discuss pricing during your free strategy call after understanding your specific requirements."
    },
    {
      question: "What kind of results can I expect?",
      answer: "Clients typically see 40-60% time savings, 25-50% increase in lead response rates, and significantly improved conversion rates within the first month."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
            <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="flex items-center space-x-4 group flex-shrink-0">
              <div className="relative">
                <Brain className="w-10 h-10 text-primary-500 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl animate-pulse-glow"></div>
              </div>
              <span className="text-2xl font-bold font-montserrat tracking-tight transition-all duration-300 group-hover:text-primary-400">
                THEO<span className="text-primary-500">CORTEX</span><span className="text-dark-400 font-inter">.AI</span>
              </span>
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="nav-link">Services</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#faq" className="nav-link">FAQ</a>
              <InteractiveButton 
                href="#book-call" 
                isNavigation={true}
                className="flex items-center space-x-2"
              >
                Book Free Call
              </InteractiveButton>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-dark-300 hover:text-primary-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-dark-800/50">
            <div className="section-container py-6 space-y-4">
              <a href="#services" className="block nav-link py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="block nav-link py-2" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#how-it-works" className="block nav-link py-2" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="#faq" className="block nav-link py-2" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              <div className="pt-4">
                <InteractiveButton 
                  href="#book-call" 
                  isNavigation={true}
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Free Call
                </InteractiveButton>
              </div>
            </div>
          </div>
        )}
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
                FOR MODERN BUSINESS
              </div>
            </h1>
          </div>
          
          <div className={`transition-all duration-800 delay-300 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Stop chasing leads manually. Let AI handle the heavy lifting while you focus on what matters most.
            </p>
            <p className="text-lg text-dark-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-800 delay-500">
              We build custom AI systems that qualify leads, book appointments, and nurture prospects 24/7. 
              Transform your business operations with intelligent automation that feels human.
            </p>
          </div>

          <div className={`transition-all duration-800 delay-700 ${typingComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <InteractiveButton 
                size="lg" 
                icon={Calendar} 
                href="#book-call"
                isNavigation={true}
              >
                Book Free Call
              </InteractiveButton>
              <InteractiveButton 
                variant="secondary" 
                size="lg" 
                href="#services"
              >
                See Our Services
              </InteractiveButton>
            </div>
            
            <div className="glass-card max-w-md mx-auto group cursor-pointer">
              <div className="flex items-center justify-center space-x-4">
                <Zap className="w-8 h-8 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="text-3xl font-montserrat font-bold text-gradient">+40%</div>
                  <p className="text-dark-300 text-sm group-hover:text-white transition-colors duration-300">
                    average increase in qualified leads with AI automation
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
              Complete AI automation solutions designed to scale your business effortlessly.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`glass-card group cursor-pointer h-full animate-fade-in-sequential stagger-${9 + index}`}>
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
                    <li key={featureIndex} className="flex items-center space-x-3 group-hover:text-white transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                      <span className="text-dark-300 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <InteractiveButton 
                  variant="secondary" 
                  className="w-full" 
                  icon={ArrowRight}
                  href={service.href}
                  isNavigation={true}
                >
                  Learn More
                </InteractiveButton>
              </div>
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
                  WHY <span className="text-gradient">THEOCORTEX.AI?</span>
                </h2>
                <div className="space-y-6 text-lg text-dark-300 leading-relaxed font-light">
                  <p>
                    We're not just another tech agency. We're automation specialists who understand that your time is your most valuable asset.
                  </p>
                  <p>
                    While others build generic solutions, we create custom AI systems tailored to your specific business needs. Every automation is designed to feel natural, work seamlessly, and deliver measurable results.
                  </p>
                  <p>
                    Our clients don't just save time—they transform their entire business operations and scale without the overwhelm.
                  </p>
                </div>
                <div className="mt-8">
                  <InteractiveButton 
                    href="#contact-form" 
                    isNavigation={true}
                    icon={MessageSquare}
                  >
                    Start Your Transformation
                  </InteractiveButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "50+", label: "Businesses Automated" },
                  { number: "24/7", label: "AI Availability" },
                  { number: "40%", label: "Time Saved Average" },
                  { number: "2x", label: "Lead Response Rate" }
                ].map((stat, index) => (
                  <div key={index} className="glass-card text-center group cursor-pointer">
                    <div className="text-4xl font-montserrat font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <p className="text-dark-300 text-sm group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </p>
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
              <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed font-light">
                Simple process, powerful results. Here's how we transform your business operations.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Strategy Call",
                description: "We analyze your current processes and identify automation opportunities that will save you the most time."
              },
              {
                step: "02",
                icon: <Brain className="w-8 h-8" />,
                title: "Custom Build",
                description: "Our team creates and implements AI systems tailored specifically to your business needs and workflows."
              },
              {
                step: "03",
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Launch & Optimize",
                description: "We launch your automation, monitor performance, and continuously optimize for better results."
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
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100} stagger={true}>
                <div className="glass-card group cursor-pointer">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full text-left flex items-center justify-between p-2 focus:outline-none"
                  >
                    <h3 className="font-montserrat font-bold text-lg group-hover:text-primary-400 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-6 h-6 text-primary-400 transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="mt-4 pt-4 border-t border-dark-700/50">
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
              Book your free strategy call and discover how AI can transform your business operations.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mb-8">
              <InteractiveButton 
                size="lg" 
                icon={ArrowRight} 
                href="#book-call"
                isNavigation={true}
              >
                Book Your Free Call Now
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
            <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="flex items-center space-x-4 mb-8 md:mb-0 group cursor-pointer">
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
              <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="nav-link text-sm footer-nav-link">Home</a>
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

export default App;