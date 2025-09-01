import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  isTransitioning: boolean;
  onTransitionComplete?: () => void;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  isTransitioning,
  onTransitionComplete
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isTransitioning) {
      setProgress(0);
      
      // Simulate loading progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
              onTransitionComplete?.();
            }, 300);
            return 100;
          }
          return prev + Math.random() * 15 + 5;
        });
      }, 100);

      return () => clearInterval(progressInterval);
    }
  }, [isTransitioning, onTransitionComplete]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-dark-950/95 backdrop-blur-sm flex items-center justify-center">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 text-center">
        {/* Geometric Loading Spinner */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-primary-500/20 rounded-full animate-spin-slow">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary-500 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
          </div>
          
          {/* Middle Ring */}
          <div className="absolute inset-2 border-4 border-secondary-500/30 rounded-full animate-spin-reverse">
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-secondary-500 rounded-full transform -translate-x-1/2 -translate-y-0.5"></div>
          </div>
          
          {/* Inner Core */}
          <div className="absolute inset-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse-glow"></div>
          
          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-dark-800 rounded-full overflow-hidden mx-auto mb-6">
          <div 
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h3 className="text-xl font-montserrat font-bold text-white animate-pulse">
            Loading
            <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>.</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
          </h3>
          <p className="text-dark-300 text-sm font-inter">
            Preparing your experience
          </p>
        </div>

        {/* Tech Grid Pattern */}
        <div className="absolute -inset-32 opacity-10 pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            animation: 'gridMove 10s linear infinite'
          }}></div>
        </div>
      </div>
    </div>
  );
};