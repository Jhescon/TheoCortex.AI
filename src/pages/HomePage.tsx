import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Globe, 
  Bot, 
  Database, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Target, 
  Zap, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Shield, 
  Sparkles,
  ChevronDown,
  Plus,
  Minus,
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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Design & Funnels",
      description: "Custom websites and sales funnels that convert visitors into paying clients",
      features: ["Responsive Design", "Conversion Optimization", "Brand Integration", "Fast Loading"],
      link: "/website-design-funnels"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Smart AI Agents",
      description: "24/7 AI assistants that qualify leads, answer questions, and book appointments",
      features: ["Lead Qualification", "24/7 Availability", "Natural Conversations", "CRM Integration"],
      link: "/smart-ai-agents"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "CRM Integration & Appointment Setting",
      description: "Automated systems that never let a lead slip through the cracks",
      features: ["CRM Setup", "Automated Follow-ups", "Calendar Sync", "Lead Tracking"],
      link: "/crm-integration"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Business Coach",
      content: "TheoCortex transformed my lead generation. I went from manually chasing prospects to having qualified leads book themselves. Game changer!",
      rating: 5
    },
    {
      name: "Mike R.",
      role: "Digital Agency Owner",
      content: "The AI agents handle 80% of our initial client conversations. Our team can focus on strategy while AI handles the rest.",
      rating: 5
    },
    {
      name: "Lisa K.",
      role: "Consultant",
      content: "I was skeptical about AI, but their system feels so natural. Clients love the instant responses and easy booking process.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "How quickly can you set up my AI automation?",
      answer: "Most setups are completed within 1-2 weeks. Simple integrations can be done in just a few days, while complex custom solutions may take 2-3 weeks."
    },
    {
      question: "Do I need technical skills to use these systems?",
      answer: "Not at all! We handle all the technical setup and provide simple dashboards for you to monitor and manage everything. If you can use email, you can use our systems."
    },
    {
      question: "What if my leads don't like talking to AI?",
      answer: "Our AI is designed to feel natural and human-like. Most people don't even realize they're talking to AI initially. Plus, there's always a smooth handoff to your team when needed."
    },
    {
      question: "Can you integrate with my existing tools?",
      answer: "Yes! We work with most popular CRMs, calendar systems, and business tools. If you have something specific, we'll find a way to make it work together."
    },
    {
      question: "What's included in the free consultation?",
      answer: "We'll audit your current process, identify automation opportunities, and create a custom roadmap for your business. No sales pressure - just valuable insights you can use."
    },
    {
      question: "How much does AI automation cost?",
      answer: "Investment varies based on your needs and complexity. During our free consultation, we'll provide transparent pricing based on your specific requirements and goals."
    }
  ];

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
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="nav-link">Services</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#faq" className="nav-link">FAQ</a>
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-8 ml-4 md:ml-0">
              <InteractiveButton 
                href="/contact" 
                variant="primary" 
                className="flex items-center space-x-1 px-3 py-2 text-sm md:px-8 md:py-4 md:text-base flex-shrink-0 min-h-[44px] min-w-[44px]"
                aria-label="Book a consultation call"
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
          <div className="mb-8 animate-fade-in-sequential stagger-2">
            <h1 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl mb-2 leading-tight tracking-tighter">
              <div className="text-gradient mb-2">
                <TypingEffect 
                  text="AI THAT WORKS" 
                  delay={800}
                  speed={80}
                  onComplete={() => setTypingComplete(true)}
                />
              </div>
              <div className={`text-white font-bold tracking-tighter text-2xl md:text-3xl lg:text-4xl transition-all duration-800 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                WHILE YOU REST
              </div>
            </h1>
          </div>
          
          <div className={`transition-all duration-800 delay-300 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl text-dark-300 mb-6 max-w-4xl mx-auto leading-relaxed font-light">
              We build AI systems that handle leads, book appointments, and grow your business automatically.
            </p>
            <p className="text-base text-dark-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-800 delay-500">
              Stop chasing prospects manually. Our intelligent automation works 24/7 to qualify leads, 
              nurture relationships, and fill your calendar with high-quality appointments.
            </p>
          </div>

          <div className={`transition-all duration-800 delay-700 ${typingComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <InteractiveButton size="lg" icon={ArrowRight} href="/contact">
                Book Free Strategy Call
              </InteractiveButton>
              <InteractiveButton variant="secondary" size="lg" href="#services">
                Explore Services
              </InteractiveButton>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`transition-all duration-800 delay-900 ${typingComplete ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-dark-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium">No Long-Term Contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium">Results in 30 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="section-container relative z-10">
          <div className="text-center mb-16 animate-fade-in-sequential stagger-3">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
              OUR <span className="text-gradient">SERVICES</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
              Complete AI automation solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`glass-card group cursor-pointer h-full animate-fade-in-sequential stagger-${4 + index}`}>
                <a href={service.link} className="block h-full">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mb-6 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
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
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-dark-400 group-hover:text-dark-200 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-primary-400 font-medium group-hover:text-primary-300 transition-colors duration-300">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
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
                    We're not just another tech company. We're business owners who understand the daily grind of chasing leads, 
                    managing follow-ups, and trying to scale without burning out.
                  </p>
                  <p>
                    That's why we created TheoCortex.AI - to give ambitious entrepreneurs the unfair advantage of AI automation 
                    without the complexity or massive learning curve.
                  </p>
                  <p>
                    Our systems don't just automate tasks; they think strategically about your business goals and work 
                    intelligently to achieve them.
                  </p>
                </div>
                <div className="mt-8">
                  <InteractiveButton icon={ArrowRight} href="/contact">
                    Start Your Automation Journey
                  </InteractiveButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="glass-card">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <Users className="w-8 h-8" />, stat: "500+", label: "Leads Qualified" },
                    { icon: <Clock className="w-8 h-8" />, stat: "24/7", label: "AI Availability" },
                    { icon: <Target className="w-8 h-8" />, stat: "85%", label: "Conversion Rate" },
                    { icon: <Zap className="w-8 h-8" />, stat: "30s", label: "Response Time" }
                  ].map((item, index) => (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary-400">
                          {item.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-montserrat font-bold text-gradient mb-1">{item.stat}</div>
                      <div className="text-dark-300 text-sm group-hover:text-white transition-colors duration-300">{item.label}</div>
                    </div>
                  ))}
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
                title: "Free Strategy Call",
                description: "We analyze your current process and identify the biggest automation opportunities for your business."
              },
              {
                step: "02",
                icon: <Zap className="w-8 h-8" />,
                title: "Custom AI Setup",
                description: "We build and deploy your personalized AI systems, integrating with your existing tools and workflows."
              },
              {
                step: "03",
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Watch It Work",
                description: "Your AI starts working immediately - qualifying leads, booking calls, and growing your business 24/7."
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
                WHAT OUR <span className="text-gradient">CLIENTS SAY</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
          
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up" stagger={true}>
                <div className="glass-card mb-4 group cursor-pointer">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-center justify-between p-6 focus:outline-none"
                  >
                    <h3 className="font-montserrat font-bold text-lg pr-8 group-hover:text-primary-400 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {openFAQ === index ? (
                        <Minus className="w-6 h-6 text-primary-400" />
                      ) : (
                        <Plus className="w-6 h-6 text-primary-400" />
                      )}
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6 animate-fade-in-up">
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
              Book your free strategy call and discover how AI can transform your business in the next 30 days.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mb-8">
              <InteractiveButton size="lg" icon={Calendar} href="/contact">
                Book Your Free Strategy Call
              </InteractiveButton>
            </div>
            <p className="text-dark-400 text-lg font-light italic font-inter">
              No pressure. No tech skills needed. Just results.
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