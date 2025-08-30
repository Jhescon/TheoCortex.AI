import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Database, 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Zap,
  Users,
  Mail,
  Smartphone,
  TrendingUp,
  Shield,
  Instagram,
  Linkedin
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { TypingEffect } from '../components/TypingEffect';
import { ParallaxBackground } from '../components/ParallaxBackground';

export const CRMIntegration: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Ensure page starts at top without animation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "CRM Setup & Integration",
      description: "Seamless integration with GoHighLevel, HubSpot, Zapier, and other popular CRM platforms"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Automated Follow-ups",
      description: "Smart follow-up sequences via SMS, email, and DMs that nurture leads automatically"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Calendar Sync",
      description: "Easy appointment booking with real-time calendar synchronization and availability"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Lead Pipelines",
      description: "Organized lead tracking so you never lose track of prospects or opportunities"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboards",
      description: "Comprehensive dashboards to monitor engagement, conversions, and ROI"
    }
  ];

  const integrations = [
    "GoHighLevel",
    "HubSpot",
    "Salesforce",
    "Pipedrive",
    "Zapier",
    "ActiveCampaign",
    "Calendly",
    "Mailchimp"
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Never Lose a Lead",
      description: "Every inquiry is automatically captured, tracked, and followed up on"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Response Times",
      description: "Automated responses ensure leads get immediate attention"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Organized Lead Management",
      description: "Clear pipelines and stages keep your sales process organized"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Higher Conversion Rates",
      description: "Consistent follow-up and nurturing increases your close rate"
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
        <ParallaxBackground speed={0.3} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        </ParallaxBackground>
        
        <div className="section-container text-center relative z-10">
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight tracking-tighter">
              <div className="text-gradient mb-4">
                <TypingEffect 
                  text="NEVER MISS A" 
                  delay={500}
                  speed={120}
                  onComplete={() => setTypingComplete(true)}
                />
              </div>
              <div className={`text-white font-bold tracking-tighter transition-all duration-800 delay-200 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                LEAD AGAIN
              </div>
            </h1>
          </div>
          
          <div className={`transition-all duration-800 delay-500 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Smart systems that track, nurture, and schedule automatically.
            </p>
            <p className="text-lg text-dark-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
              We connect your CRM to your entire funnel so every inquiry is tracked, followed up, 
              and booked without manual effort.
            </p>
          </div>

          {/* Stats Highlight */}
          <div className={`transition-all duration-800 delay-800 ${typingComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="glass-card max-w-md mx-auto mb-16 group cursor-pointer">
              <div className="flex items-center justify-center space-x-4">
                <Calendar className="w-8 h-8 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="text-3xl font-montserrat font-bold text-gradient">+180%</div>
                  <p className="text-dark-300 text-sm group-hover:text-white transition-colors duration-300">
                    increase in booking rates with automation in place
                  </p>
                </div>
              </div>
            </div>
          </div>
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
              <ScrollReveal key={index} delay={index * 130} direction="up" stagger={true}>
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

          {/* Integrations */}
          <ScrollReveal delay={400}>
            <div className="glass-card max-w-4xl mx-auto">
              <h3 className="font-montserrat font-bold text-2xl mb-8 text-center">
                Popular <span className="text-gradient">CRM Integrations</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center justify-center p-4 bg-dark-800/30 rounded-xl border border-dark-700/50 group cursor-pointer hover:border-primary-400/50 transition-all duration-300">
                    <span className="text-dark-300 font-medium group-hover:text-white transition-colors duration-300">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900/10 to-transparent relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                WHY CRM AUTOMATION <span className="text-gradient">WORKS</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up" stagger={true}>
                <div className="flex items-start space-x-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center border border-primary-400/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <div className="text-primary-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                OUR <span className="text-gradient">INTEGRATION PROCESS</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <Database className="w-8 h-8" />,
                title: "CRM Assessment",
                description: "We analyze your current setup and recommend the best CRM solution for your needs."
              },
              {
                step: "02",
                icon: <Zap className="w-8 h-8" />,
                title: "Integration & Setup",
                description: "We connect all your tools and create automated workflows for seamless operation."
              },
              {
                step: "03",
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Optimize & Monitor",
                description: "We fine-tune your system and provide ongoing monitoring for peak performance."
              }
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 170} direction="scale" stagger={true}>
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

      {/* Automation Flow Visualization */}
      <section className="py-20 bg-gradient-to-b from-primary-900/5 to-transparent relative">
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 tracking-tighter">
                AUTOMATED <span className="text-gradient">LEAD JOURNEY</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="glass-card max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-6 items-center">
                {[
                  { icon: <Users className="w-6 h-6" />, title: "Lead Enters", desc: "Website form" },
                  { icon: <ArrowRight className="w-6 h-6" />, title: "→", desc: "" },
                  { icon: <Database className="w-6 h-6" />, title: "CRM Capture", desc: "Auto-saved" },
                  { icon: <ArrowRight className="w-6 h-6" />, title: "→", desc: "" },
                  { icon: <MessageSquare className="w-6 h-6" />, title: "Follow-up", desc: "SMS/Email" },
                  { icon: <ArrowRight className="w-6 h-6" />, title: "→", desc: "" },
                  { icon: <Calendar className="w-6 h-6" />, title: "Booking", desc: "Scheduled" },
                  { icon: <ArrowRight className="w-6 h-6" />, title: "→", desc: "" },
                  { icon: <CheckCircle className="w-6 h-6" />, title: "Conversion", desc: "Client won" }
                ].map((step, index) => (
                  <div key={index} className={`text-center group cursor-pointer ${step.title === "→" ? "hidden md:block" : ""}`}>
                    {step.title === "→" ? (
                      <div className="text-primary-400 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                        {step.title}
                      </div>
                    ) : (
                      <>
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-primary-400">
                            {step.icon}
                          </div>
                        </div>
                        <h4 className="font-montserrat font-bold text-sm mb-1 group-hover:text-primary-400 transition-colors duration-300">
                          {step.title}
                        </h4>
                        <p className="text-dark-400 text-xs group-hover:text-white transition-colors duration-300">
                          {step.desc}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="section-container text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-8 tracking-tighter">
              WANT TO AUTOMATE YOUR <span className="text-gradient">BOOKINGS & FOLLOW-UPS?</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Let's connect your CRM and create automated systems that never let a lead slip through the cracks.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mb-8">
              <InteractiveButton size="lg" icon={ExternalLink} href="#book-call">
                Book a Free Strategy Call
              </InteractiveButton>
            </div>
            <p className="text-dark-400 text-lg font-light italic font-inter">
              Transform your lead management today.
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
