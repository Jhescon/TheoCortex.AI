import React, { useEffect, useState } from 'react';
import { 
  Brain, 
  CheckCircle, 
  Mail, 
  Calendar, 
  Clock, 
  ArrowRight,
  Home,
  Sparkles,
  Zap,
  MessageSquare,
  Instagram,
  Linkedin
} from 'lucide-react';
import { InteractiveButton } from '../components/InteractiveButton';

export const ThankYou: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Trigger animations
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const nextSteps = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Check Your Email",
      description: "Confirmation details and Zoom link sent to your inbox"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Add to Calendar",
      description: "Calendar invite included for easy scheduling"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Prepare Questions",
      description: "Think about your biggest automation challenges"
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
            
            <div className="flex items-center space-x-4 md:space-x-8 ml-4 md:ml-0">
              <InteractiveButton 
                onClick={() => window.location.href = '/'} 
                variant="secondary" 
                className="flex items-center space-x-1 px-3 py-2 text-sm md:px-8 md:py-4 md:text-base flex-shrink-0 min-h-[44px] min-w-[44px]"
                aria-label="Return to homepage"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </InteractiveButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Success Card */}
          <div className={`glass-card text-center mb-16 group transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}>
            
            {/* Success Icon */}
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl animate-pulse-glow"></div>
              
              {/* Sparkle Effects */}
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -left-2">
                <Sparkles className="w-6 h-6 text-primary-400 animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className={`font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tighter transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              🎉 <span className="text-gradient">THANK YOU</span> FOR BOOKING!
            </h1>

            {/* Confirmation Message */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <p className="text-xl md:text-2xl text-dark-300 mb-6 leading-relaxed font-light">
                Your <strong className="text-white">30-minute strategy consultation</strong> has been successfully scheduled.
              </p>
              
              <div className="flex items-center justify-center space-x-3 mb-6 p-4 bg-primary-900/20 border border-primary-500/30 rounded-xl">
                <Mail className="w-6 h-6 text-primary-400" />
                <p className="text-primary-300 font-medium">
                  A confirmation email has been sent with your meeting details.
                </p>
              </div>

              <p className="text-lg text-dark-400 mb-8 leading-relaxed font-light">
                We look forward to helping you <span className="text-primary-400 font-semibold">scale your business with AI automation</span>.
              </p>
            </div>

            {/* Call to Action */}
            <div className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <InteractiveButton 
                size="lg" 
                icon={Home}
                href="/"
                className="mb-8"
              >
                Back to Homepage
              </InteractiveButton>
            </div>
          </div>

          {/* What Happens Next Section */}
          <div className={`transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 tracking-tighter">
                WHAT HAPPENS <span className="text-gradient">NEXT?</span>
              </h2>
              <p className="text-lg text-dark-300 font-light">
                Here's what to expect before our consultation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {nextSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`glass-card text-center group cursor-pointer transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{animationDelay: `${1000 + index * 200}ms`}}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-400">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-4 tracking-wide group-hover:text-primary-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed font-light font-inter group-hover:text-white transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className={`glass-card text-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="font-montserrat font-bold text-2xl mb-6 tracking-wide">
              NEED TO MAKE <span className="text-gradient">CHANGES?</span>
            </h3>
            <p className="text-dark-300 mb-6 leading-relaxed font-light">
              If you need to reschedule or have any questions before our call, don't hesitate to reach out.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a 
                href="mailto:theocortex.ai@gmail.com" 
                className="flex items-center space-x-3 text-primary-400 hover:text-primary-300 transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">theocortex.ai@gmail.com</span>
              </a>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.instagram.com/theocortex.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-dark-400 hover:text-primary-400 transition-all duration-300 hover:scale-110 transform" 
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-dark-400 hover:text-primary-400 transition-all duration-300 hover:scale-110 transform" 
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Motivational Footer */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Zap className="w-8 h-8 text-primary-400" />
              <h4 className="font-montserrat font-bold text-2xl text-gradient">
                GET READY TO SCALE
              </h4>
              <Zap className="w-8 h-8 text-secondary-400" />
            </div>
            <p className="text-lg text-dark-300 font-light italic">
              Your AI-powered business transformation starts soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};