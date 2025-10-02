import React, { useEffect } from 'react';
import { 
  Brain, 
  CheckCircle, 
  Calendar, 
  Mail, 
  ArrowRight,
  Home,
  Sparkles
} from 'lucide-react';
import { InteractiveButton } from '../components/InteractiveButton';

export const ThankYou: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-950 to-black text-dark-50 font-inter relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: `linear-gradient(45deg, #38bdf8, #0066FF)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
        <div className="glass-card text-center relative overflow-hidden group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Success Icon */}
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div className="absolute inset-0 w-24 h-24 mx-auto bg-primary-500/20 rounded-full blur-xl animate-pulse-glow"></div>
          </div>

          {/* Main Heading */}
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tighter animate-fade-in-up">
            <span className="mr-4">🎉</span>
            <span className="text-gradient">Thank You</span>
            <span className="text-white"> for Booking!</span>
          </h1>

          {/* Success Message */}
          <div className="space-y-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-xl md:text-2xl text-dark-200 leading-relaxed font-light max-w-xl mx-auto">
              Your <span className="text-primary-400 font-semibold">30-minute strategy consultation</span> has been successfully scheduled.
            </p>
            
            <div className="flex items-center justify-center space-x-3 text-lg text-dark-300">
              <Mail className="w-5 h-5 text-primary-400" />
              <span>A confirmation email has been sent with your meeting details.</span>
            </div>
          </div>

          {/* Motivational Message */}
          <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 border border-primary-500/30 rounded-xl p-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Sparkles className="w-6 h-6 text-primary-400" />
                <Brain className="w-6 h-6 text-secondary-400" />
                <Sparkles className="w-6 h-6 text-primary-400" />
              </div>
              <p className="text-xl text-primary-300 font-medium leading-relaxed">
                We look forward to helping you <span className="text-gradient font-semibold">scale your business with AI</span>.
              </p>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h3 className="font-montserrat font-bold text-xl mb-6 text-primary-400">
              What Happens Next?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Check Your Email</h4>
                  <p className="text-dark-400">Confirmation with Zoom link</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center border border-secondary-400/30">
                  <Calendar className="w-6 h-6 text-secondary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Add to Calendar</h4>
                  <p className="text-dark-400">Set reminder for your call</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center border border-primary-400/30">
                  <Brain className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Prepare Questions</h4>
                  <p className="text-dark-400">Think about your goals</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <InteractiveButton 
              size="lg" 
              icon={Home}
              href="/"
              className="mb-6"
            >
              Back to Home
            </InteractiveButton>
            
            <p className="text-dark-400 text-sm">
              Questions? Email us at{' '}
              <a 
                href="mailto:theocortex.ai@gmail.com" 
                className="text-primary-400 hover:text-primary-300 transition-colors duration-300 underline"
              >
                theocortex.ai@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Brand Footer */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-3 text-dark-400 text-sm">
          <Brain className="w-5 h-5 text-primary-500" />
          <span className="font-montserrat font-semibold">
            THEO<span className="text-primary-500">CORTEX</span><span className="text-dark-500">.AI</span>
          </span>
        </div>
      </div>
    </div>
  );
};