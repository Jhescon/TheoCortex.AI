import React, { useEffect, useState } from 'react';
import { Brain } from 'lucide-react';

interface AINavigationLoaderProps {
  isVisible: boolean;
  onComplete: () => void;
  duration?: number;
}

export const AINavigationLoader: React.FC<AINavigationLoaderProps> = ({
  isVisible,
  onComplete,
  duration = 1800
}) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'initializing' | 'processing' | 'complete'>('initializing');

  useEffect(() => {
    if (!isVisible) {
      setProgress(0);
      setPhase('initializing');
      return;
    }

    // Phase 1: Initializing (0-30%)
    const initTimer = setTimeout(() => {
      setPhase('processing');
    }, 300);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (duration / 50));
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setPhase('complete');
          setTimeout(onComplete, 200);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => {
      clearTimeout(initTimer);
      clearInterval(progressInterval);
    };
  }, [isVisible, duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-dark-950/95 backdrop-blur-xl flex items-center justify-center">
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent animate-scan-line"></div>
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="neural-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0, 102, 255, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-grid)" className="animate-circuit-flow" />
          </svg>
        </div>

        {/* Floating Data Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-60 animate-data-stream"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 text-center">
        {/* Brain Icon with Glow Effects */}
        <div className="relative mb-8">
          {/* Outer Glow Ring */}
          <div className="absolute inset-0 w-32 h-32 mx-auto">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500/30 to-secondary-500/30 animate-ai-pulse blur-xl"></div>
          </div>
          
          {/* Progress Circle */}
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(0, 102, 255, 0.2)"
                strokeWidth="2"
              />
              {/* Progress Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#progress-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-100 ease-out"
              />
              <defs>
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0066FF" />
                  <stop offset="50%" stopColor="#3399FF" />
                  <stop offset="100%" stopColor="#6600FF" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Brain Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <Brain className="w-12 h-12 text-white animate-brain-rotate" />
                <div className="absolute inset-0 bg-primary-500/40 rounded-full blur-lg animate-ai-glow"></div>
                <div className="absolute inset-0 bg-secondary-500/30 rounded-full blur-xl animate-ai-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h3 className="font-montserrat font-bold text-2xl text-white animate-digital-flicker">
            {phase === 'initializing' && 'INITIALIZING AI SYSTEM'}
            {phase === 'processing' && 'PROCESSING REQUEST'}
            {phase === 'complete' && 'SYSTEM READY'}
          </h3>
          
          {/* Processing Dots */}
          <div className="flex items-center justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          
          {/* Progress Percentage */}
          <div className="text-primary-400 font-mono text-lg font-bold">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Neural Network Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-primary-500/40 to-transparent animate-neural-pulse"
              style={{
                left: `${20 + Math.random() * 60}%`,
                height: '100%',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};