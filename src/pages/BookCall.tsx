import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Calendar, 
  Clock, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  MessageSquare, 
  BarChart3, 
  Sparkles,
  User,
  Building,
  Palette,
  TrendingUp,
  Linkedin,
  Instagram
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { TypingEffect } from '../components/TypingEffect';

export const BookCall: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "15-30 Min Strategy Session",
      description: "Quick, focused call over Zoom to understand your goals and challenges"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Current Workflow Audit",
      description: "We'll identify bottlenecks and missed opportunities in your current process"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Custom Game Plan",
      description: "Get a tailored roadmap using AI automation specific to your business"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Ask Anything",
      description: "No strings attached—bring all your questions about AI and automation"
    }
  ];

  const whoItsFor = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Coaches & Consultants",
      description: "Scale your practice without burning out"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Service-Based Businesses",
      description: "Automate client acquisition and management"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creators & Digital Agencies",
      description: "Focus on creativity while AI handles the rest"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth-Minded Entrepreneurs",
      description: "Anyone tired of manual work and missed leads"
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
              <InteractiveButton 
                onClick={() => window.location.href = '/'} 
                variant="secondary" 
                className="flex items-center space-x-1 px-3 py-2 text-sm md:px-8 md:py-4 md:text-base flex-shrink-0 min-h-[44px] min-w-[44px]"
                aria-label="Return to homepage"
              >
                <span className="text-base">←</span>
                <span className="hidden sm:inline md:hidden">Back</span>
                <span className="hidden md:inline">Back to Homepage</span>
              </InteractiveButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="section-container text-center relative z-10">
          
          {/* Main Headline */}
          <div className="mb-12 animate-fade-in-sequential stagger-2">
            <h1 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight tracking-tighter">
              <div className="text-gradient mb-4">
                <TypingEffect 
                  text="LET'S BUILD YOUR" 
                  delay={800}
                  speed={80}
                  onComplete={() => setTypingComplete(true)}
                />
              </div>
              <div className={`text-white font-light tracking-wider text-4xl md:text-5xl lg:text-6xl transition-all duration-800 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                AI-POWERED SYSTEM
              </div>
            </h1>
          </div>
          
          {/* Subheadline - appears after typing completes */}
          <div className={`transition-all duration-800 delay-300 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Book your free strategy call and discover how TheoCortex.AI can save you hours, 
              convert more leads, and scale your business automatically.
            </p>
          </div>

          {/* Small Note - appears with delay after typing */}
          <div className={`transition-all duration-800 delay-500 ${typingComplete ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-primary-400 text-lg font-medium mb-16 italic">
              No pressure. No tech skills needed. Just clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Highlights Section */}
      <section className="py-20 relative">
        <div className="section-container relative z-10">
          <div className="text-center mb-16 animate-fade-in-sequential stagger-7">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                WHAT YOU'LL GET IN YOUR <span className="text-gradient">FREE CALL</span>
              </h2>
            </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className={`glass-card text-center group cursor-pointer h-full animate-scale-in-smooth stagger-${8 + index}`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-400">
                      {highlight.icon}
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900/10 to-transparent relative">
        <div className="section-container relative z-10">
          <div className="text-center mb-16 animate-slide-in-left stagger-12">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                PERFECT FOR <span className="text-gradient">AMBITIOUS BUSINESS OWNERS</span>
              </h2>
            </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoItsFor.map((item, index) => (
              <div key={index} className={`glass-card group cursor-pointer animate-slide-in-right stagger-${13 + index}`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary-400">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="font-montserrat font-bold text-lg tracking-wide group-hover:text-primary-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                CHOOSE YOUR <span className="text-gradient">PREFERRED TIME</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto font-light">
                Select a time that works for you. We'll send you a Zoom link and calendar invite immediately.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card">
                {/* Calendar Placeholder - Replace with actual Calendly embed */}
                <div className="text-center py-16">
                  <Calendar className="w-16 h-16 text-primary-400 mx-auto mb-6" />
                  <h3 className="font-montserrat font-bold text-2xl mb-4">Calendar Integration</h3>
                  <p className="text-dark-300 mb-8 max-w-2xl mx-auto">
                    Replace this section with your Calendly, TidyCal, or preferred booking system embed code.
                  </p>
                  
                  {/* Example iframe for Calendly */}
                  <div className="bg-dark-800/30 rounded-xl p-8 border border-dark-700/50">
                    <p className="text-dark-400 text-sm mb-4">Example Calendly embed:</p>
                    <code className="text-primary-400 text-sm bg-dark-900/50 px-4 py-2 rounded block">
                      {`<iframe src="https://calendly.com/your-username/strategy-call" 
  width="100%" height="600" frameborder="0"></iframe>`}
                    </code>
                  </div>
                  
                  <div className="mt-8">
                    <InteractiveButton icon={Calendar}>
                      Book Your Strategy Call
                    </InteractiveButton>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-b from-primary-900/5 to-transparent relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="glass-card group cursor-pointer">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-6 h-6 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${i * 100}ms`}} />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-dark-300 font-light italic font-inter mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">
                  "I thought automation was too advanced for me. TheoCortex made it simple and now I don't have to chase leads anymore."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="font-montserrat font-bold text-white">RC</span>
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-white">Real Estate Coach</p>
                    <p className="text-dark-400 font-inter">Verified Client</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="section-container text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-8 tracking-tighter">
              YOU BRING THE <span className="text-gradient">VISION</span>
            </h2>
            <h3 className="font-montserrat font-bold text-4xl md:text-6xl mb-12 text-white">
              WE'LL HANDLE THE AUTOMATION
            </h3>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="mb-8">
              <InteractiveButton size="lg" icon={ArrowRight}>
                Let's Talk Strategy
              </InteractiveButton>
            </div>
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