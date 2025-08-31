import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Globe, 
  Smartphone, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Palette,
  Code,
  Zap,
  Target,
  BarChart3,
  Users,
  Sparkles,
  Instagram,
  Linkedin,
  Bot,
  Database,
  Calendar,
  MessageSquare,
  Clock,
  Shield,
  Mail,
  Building,
  FileText
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { TypingEffect } from '../components/TypingEffect';
import { ParallaxBackground } from '../components/ParallaxBackground';

interface HomePageProps {
  onNavigate?: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Ensure page starts at top without animation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Design & Funnels",
      description: "High-converting websites and sales funnels that turn visitors into paying clients",
      href: "/website-design-funnels"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Smart AI Agents",
      description: "24/7 AI assistants that qualify leads, answer questions, and book appointments automatically",
      href: "/smart-ai-agents"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "CRM Integration & Appointment Setting",
      description: "Seamless CRM setup with automated follow-ups and appointment booking systems",
      href: "/crm-integration"
    }
  ];

  const benefits = [
    "Save 20+ hours per week on manual tasks",
    "Never miss a lead with 24/7 automation",
    "Increase conversion rates by 40%+",
    "Professional setup and ongoing support",
    "Custom solutions for your business",
    "ROI-focused implementation"
  ];

  const testimonials = [
    {
      quote: "TheoCortex transformed our lead generation. We went from manually chasing prospects to having qualified leads book themselves.",
      author: "Sarah M.",
      role: "Business Coach",
      rating: 5
    },
    {
      quote: "The AI agent handles 80% of our customer questions. Our team can finally focus on closing deals instead of answering the same questions.",
      author: "Mike R.",
      role: "Agency Owner",
      rating: 5
    },
    {
      quote: "Setup was seamless and the results were immediate. Our booking rate increased by 60% in the first month.",
      author: "Lisa K.",
      role: "Consultant",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How quickly can you set up automation for my business?",
      answer: "Most setups are completed within 1-2 weeks. Simple integrations can be done in just a few days, while complex custom solutions may take up to 3 weeks."
    },
    {
      question: "Do I need technical knowledge to use these systems?",
      answer: "Not at all! We handle all the technical setup and provide simple training. Our systems are designed to be user-friendly for business owners, not developers."
    },
    {
      question: "What if the automation doesn't work for my specific business?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not seeing results, we'll refine the system or provide a full refund."
    },
    {
      question: "Can you integrate with my existing CRM and tools?",
      answer: "Yes! We work with all major CRMs including GoHighLevel, HubSpot, Salesforce, and many others. We'll assess your current stack and ensure seamless integration."
    },
    {
      question: "How much does it cost?",
      answer: "Pricing varies based on your specific needs and complexity. We offer packages starting from $2,997 for basic automation up to $9,997 for comprehensive AI systems. Book a call for a custom quote."
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
            
            <div className="flex items-center space-x-4 md:space-x-8 ml-4 md:ml-0">
              <a href="#services" className="nav-link text-sm hidden md:inline">Services</a>
              <a href="#about" className="nav-link text-sm hidden md:inline">About</a>
              <a href="#how-it-works" className="nav-link text-sm hidden md:inline">How It Works</a>
              <a href="#faq" className="nav-link text-sm hidden md:inline">FAQ</a>
              <InteractiveButton 
                href="/book-call"
                onNavigate={onNavigate}
                variant="primary" 
                className="flex items-center space-x-1 px-3 py-2 text-sm md:px-8 md:py-4 md:text-base flex-shrink-0 min-h-[44px] min-w-[44px]"
                aria-label="Book a free strategy call"
              >
                <span className="hidden sm:inline">Book Call</span>
                <span className="sm:hidden">Call</span>
              </InteractiveButton>
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
            <h1 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight tracking-tighter">
              <div className="text-gradient mb-4">
                <TypingEffect 
                  text="AI AUTOMATION" 
                  delay={800}
                  speed={80}
                  onComplete={() => setTypingComplete(true)}
                />
              </div>
              <div className={`text-white font-bold tracking-tighter transition-all duration-800 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                THAT ACTUALLY WORKS
              </div>
            </h1>
          </div>
          
          <div className={`transition-all duration-800 delay-300 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              We build AI systems that save you time, convert more leads, and scale your business automatically.
            </p>
            <p className="text-lg text-dark-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-800 delay-500">
              From smart chatbots to automated funnels, we create AI solutions that feel human and deliver results.
            </p>
          </div>

          <div className={`transition-all duration-800 delay-700 ${typingComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <InteractiveButton size="lg" icon={ExternalLink} href="/book-call" onNavigate={onNavigate}>
                Book Free Strategy Call
              </InteractiveButton>
              <InteractiveButton variant="secondary" size="lg" href="#services">
                See Our Services
              </InteractiveButton>
            </div>
            
            <div className="glass-card max-w-md mx-auto group cursor-pointer">
              <div className="flex items-center justify-center space-x-4">
                <TrendingUp className="w-8 h-8 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="text-3xl font-montserrat font-bold text-gradient">+40%</div>
                  <p className="text-dark-300 text-sm group-hover:text-white transition-colors duration-300">
                    average conversion increase with our AI systems
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
              Complete AI automation solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`glass-card group cursor-pointer h-full animate-slide-in-right stagger-${9 + index}`}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mb-6 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-400">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-dark-300 leading-relaxed font-light font-inter mb-6 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
                <InteractiveButton 
                  variant="ghost" 
                  icon={ArrowRight} 
                  href={service.href}
                  onNavigate={onNavigate}
                  className="w-full justify-center"
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
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-8 tracking-tighter">
                  WHY <span className="text-gradient">THEOCORTEX.AI?</span>
                </h2>
                <p className="text-xl text-dark-300 mb-8 leading-relaxed font-light">
                  We're not just another tech agency. We're automation specialists who understand business.
                </p>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-dark-300 group-hover:text-white transition-colors duration-300">{benefit}</span>
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
                    Built for Business Owners
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-montserrat font-bold text-lg mb-2">Strategy First</h4>
                      <p className="text-dark-300 text-sm">We start with your business goals, not the technology</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-montserrat font-bold text-lg mb-2">Custom Solutions</h4>
                      <p className="text-dark-300 text-sm">Every system is tailored to your specific industry and needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-montserrat font-bold text-lg mb-2">Ongoing Support</h4>
                      <p className="text-dark-300 text-sm">We don't just build and leave—we optimize and improve</p>
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
                Our proven process for implementing AI automation in your business
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Strategy Call",
                description: "We analyze your current workflow and identify automation opportunities"
              },
              {
                step: "02",
                icon: <Code className="w-8 h-8" />,
                title: "Custom Build",
                description: "Our team creates AI systems tailored specifically to your business needs"
              },
              {
                step: "03",
                icon: <Zap className="w-8 h-8" />,
                title: "Integration",
                description: "We seamlessly integrate with your existing tools and train your team"
              },
              {
                step: "04",
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Optimize",
                description: "We monitor performance and continuously improve your automation"
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
              <ScrollReveal key={index} delay={index * 200} direction="up" stagger={true}>
                <div className="glass-card group cursor-pointer h-full">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Sparkles key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${i * 100}ms`}} />
                    ))}
                  </div>
                  <blockquote className="text-dark-300 font-light italic font-inter mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-montserrat font-bold text-white text-sm">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-white">{testimonial.author}</p>
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
            {faqItems.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up" stagger={true}>
                <div className="glass-card group cursor-pointer">
                  <h3 className="font-montserrat font-bold text-xl mb-4 group-hover:text-primary-400 transition-colors duration-300">
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
              READY TO AUTOMATE YOUR <span className="text-gradient">SUCCESS?</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Book a free strategy call and discover how AI automation can transform your business in just 30 days.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mb-8">
              <InteractiveButton size="lg" icon={ExternalLink} href="/book-call" onNavigate={onNavigate}>
                Get Started Today
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
              <a href="/#services" className="nav-link text-sm footer-nav-link">Services</a>
              <a href="/#about" className="nav-link text-sm footer-nav-link">About</a>
              <a href="/#how-it-works" className="nav-link text-sm footer-nav-link">
                <span className="md:hidden">How It<br />Works</span>
                <span className="hidden md:inline">How It Works</span>
              </a>
              <a href="/#faq" className="nav-link text-sm footer-nav-link">FAQ</a>
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