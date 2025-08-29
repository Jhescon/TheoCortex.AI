import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Bot, 
  MessageSquare, 
  Clock, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Users,
  Calendar,
  Sparkles,
  Shield,
  TrendingUp,
  Instagram,
  Linkedin
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { TypingEffect } from '../components/TypingEffect';
import { ParallaxBackground } from '../components/ParallaxBackground';

export const SmartAIAgents: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // CRITICAL: Aggressive scroll to top with multiple fallbacks
    const forceScrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Additional fallbacks for stubborn browsers
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0;
      }
      
      // Force viewport to top
      if (window.pageYOffset !== 0) {
        window.pageYOffset = 0;
      }
      
      // CSS-based force positioning
      document.body.style.scrollBehavior = 'auto';
      window.scroll({ top: 0, left: 0, behavior: 'auto' });
      
      // Reset scroll behavior
      setTimeout(() => {
        document.body.style.scrollBehavior = '';
      }, 100);
    };
    
    // Execute multiple times to ensure it works
    forceScrollToTop();
    
    // Execute again immediately
    setTimeout(forceScrollToTop, 1);
    
    // Final check
    setTimeout(forceScrollToTop, 10);
    
    // Emergency fallback
    setTimeout(forceScrollToTop, 50);
  }, []);

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "AI Chat Agents",
      description: "Custom AI assistants that speak your brand voice and engage customers naturally"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Lead Qualification",
      description: "Never miss a lead again with round-the-clock automated qualification and scheduling"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Automation",
      description: "Intelligent automation for DMs, forms, and emails that feels personal and human"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Seamless Handoff",
      description: "Smooth transitions to your calendar or CRM when leads are ready to convert"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Trained Responses",
      description: "AI trained on your FAQs, offers, and business knowledge for accurate responses"
    }
  ];

  const capabilities = [
    "Natural conversation flow",
    "Lead scoring and qualification",
    "Appointment booking integration",
    "Multi-platform deployment",
    "Custom training on your data",
    "Real-time analytics and insights"
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
              <InteractiveButton 
                href="/" 
                variant="secondary" 
                className="flex items-center space-x-2 px-4 py-2 text-sm md:px-8 md:py-4 md:text-base flex-shrink-0"
                aria-label="Return to homepage"
              >
                <span>←</span>
                <span className="md:hidden">Back</span>
                <span className="hidden md:inline">Back to Homepage</span>
              </InteractiveButton>
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
                  text="AI THAT WORKS" 
                  delay={500}
                  speed={120}
                  onComplete={() => setTypingComplete(true)}
                />
              </div>
              {typingComplete && (
                <ScrollReveal delay={200} direction="fade">
                  <div className="text-white font-bold tracking-tighter">
                    WHILE YOU REST
                  </div>
                </ScrollReveal>
              )}
            </h1>
          </div>
          
          {typingComplete && (
            <ScrollReveal delay={800} direction="up">
              <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                Our smart agents qualify leads, answer questions, and book appointments 24/7.
              </p>
              <p className="text-lg text-dark-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
                We build custom AI assistants that sound human, understand your clients, and save you time. 
                From chat support to lead qualification, they're trained to boost results without burnout.
              </p>
            </ScrollReveal>
          )}

          {/* Stats Highlight */}
          {typingComplete && (
            <ScrollReveal delay={1200} direction="scale">
              <div className="glass-card max-w-md mx-auto mb-16 group cursor-pointer">
                <div className="flex items-center justify-center space-x-4">
                  <Bot className="w-8 h-8 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-3xl font-montserrat font-bold text-gradient">+250%</div>
                    <p className="text-dark-300 text-sm group-hover:text-white transition-colors duration-300">
                      lead qualification speed with automated conversations
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                WHAT YOU <span className="text-gradient">GET</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 120} direction="up" stagger={true}>
                <div className="glass-card group cursor-pointer h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mb-6 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional Capabilities */}
          <ScrollReveal delay={400}>
            <div className="glass-card max-w-4xl mx-auto">
              <h3 className="font-montserrat font-bold text-2xl mb-8 text-center">
                Advanced <span className="text-gradient">AI Capabilities</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-dark-300 group-hover:text-white transition-colors duration-300">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900/10 to-transparent relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                HOW OUR <span className="text-gradient">AI AGENTS WORK</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <Brain className="w-8 h-8" />,
                title: "Custom Training",
                description: "We train your AI agent on your business knowledge, FAQs, and brand voice for authentic interactions."
              },
              {
                step: "02",
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Smart Conversations",
                description: "Your AI engages visitors, qualifies leads, and answers questions 24/7 with human-like responses."
              },
              {
                step: "03",
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Seamless Handoff",
                description: "Qualified leads are automatically scheduled or passed to your team for closing."
              }
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 160} direction="scale" stagger={true}>
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

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                WHY BUSINESSES <span className="text-gradient">LOVE OUR AI</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                {[
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Save 20+ Hours Weekly",
                    description: "No more manual lead qualification or repetitive customer questions"
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Never Miss a Lead",
                    description: "24/7 availability means every visitor gets immediate attention"
                  },
                  {
                    icon: <Sparkles className="w-6 h-6" />,
                    title: "Human-Like Interactions",
                    description: "Advanced AI that feels natural and builds trust with prospects"
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Higher Conversion Rates",
                    description: "Instant responses and smart qualification boost your sales"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <div className="text-primary-400">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="glass-card">
                <div className="text-center mb-8">
                  <Bot className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                  <h3 className="font-montserrat font-bold text-2xl mb-4">
                    Your AI Agent in Action
                  </h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="bg-dark-800/30 rounded-lg p-4 border-l-4 border-primary-400">
                    <p className="text-primary-400 font-semibold mb-1">Visitor:</p>
                    <p className="text-dark-300">"Hi, I'm interested in your services. Can you tell me more?"</p>
                  </div>
                  <div className="bg-dark-800/30 rounded-lg p-4 border-l-4 border-secondary-400">
                    <p className="text-secondary-400 font-semibold mb-1">AI Agent:</p>
                    <p className="text-dark-300">"Absolutely! I'd love to help. What specific challenges are you looking to solve with automation?"</p>
                  </div>
                  <div className="bg-dark-800/30 rounded-lg p-4 border-l-4 border-primary-400">
                    <p className="text-primary-400 font-semibold mb-1">Visitor:</p>
                    <p className="text-dark-300">"I'm spending too much time on lead follow-up and want to automate it."</p>
                  </div>
                  <div className="bg-dark-800/30 rounded-lg p-4 border-l-4 border-secondary-400">
                    <p className="text-secondary-400 font-semibold mb-1">AI Agent:</p>
                    <p className="text-dark-300">"Perfect! That's exactly what we specialize in. Would you like to schedule a free strategy call to discuss your specific needs?"</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="section-container text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-8 tracking-tighter">
              WANT AN AI AGENT THAT <span className="text-gradient">HANDLES LEADS FOR YOU?</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Let's build a custom AI assistant that works 24/7 to qualify leads and book appointments for your business.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mb-8">
              <InteractiveButton size="lg" icon={ExternalLink} href="#book-call">
                Book a Free Strategy Call
              </InteractiveButton>
            </div>
            <p className="text-dark-400 text-lg font-light italic font-inter">
              See how AI can transform your lead generation.
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
              <a href="/" className="nav-link text-sm footer-nav-link">Home</a>
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