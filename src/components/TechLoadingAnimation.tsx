import React, { useState, useEffect } from 'react';

interface TechLoadingAnimationProps {
  onComplete?: () => void;
  duration?: number;
  showProgress?: boolean;
  className?: string;
}

export const TechLoadingAnimation: React.FC<TechLoadingAnimationProps> = ({
  onComplete,
  duration = 3000,
  showProgress = true,
  className = ''
}) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'initializing' | 'processing' | 'complete'>('initializing');

  useEffect(() => {
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      // Update phases based on progress
      if (newProgress < 30) {
        setPhase('initializing');
      } else if (newProgress < 90) {
        setPhase('processing');
      } else {
        setPhase('complete');
      }
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else if (onComplete) {
        setTimeout(onComplete, 500); // Small delay before completion
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, [duration, onComplete]);

  const getPhaseText = () => {
    switch (phase) {
      case 'initializing':
        return 'INITIALIZING AI SYSTEMS';
      case 'processing':
        return 'PROCESSING DATA STREAMS';
      case 'complete':
        return 'NEURAL NETWORK READY';
      default:
        return 'LOADING';
    }
  };

  return (
    <div className={`fixed inset-0 bg-dark-950 flex items-center justify-center z-50 ${className}`}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 tech-grid-pattern"></div>
        <div className="absolute inset-0 tech-circuit-bg"></div>
      </div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute tech-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#6600FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Animated neural network paths */}
        <path
          d="M100,200 Q300,100 500,200 T900,200"
          stroke="url(#neuralGradient)"
          strokeWidth="2"
          fill="none"
          className="tech-neural-path"
          style={{ animationDelay: '0s' }}
        />
        <path
          d="M100,400 Q400,300 700,400 T900,400"
          stroke="url(#neuralGradient)"
          strokeWidth="2"
          fill="none"
          className="tech-neural-path"
          style={{ animationDelay: '0.5s' }}
        />
        <path
          d="M100,600 Q350,500 600,600 T900,600"
          stroke="url(#neuralGradient)"
          strokeWidth="2"
          fill="none"
          className="tech-neural-path"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M100,800 Q450,700 800,800"
          stroke="url(#neuralGradient)"
          strokeWidth="2"
          fill="none"
          className="tech-neural-path"
          style={{ animationDelay: '1.5s' }}
        />
      </svg>

      {/* Main Loading Container */}
      <div className="relative z-10 text-center">
        
        {/* Central Loading Ring */}
        <div className="relative mb-12">
          {/* Outer Ring */}
          <div className="w-32 h-32 mx-auto relative">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(6, 102, 255, 0.1)"
                strokeWidth="2"
                fill="none"
              />
              
              {/* Progress Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#progressGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-300 ease-out tech-progress-ring"
              />
              
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0066FF" />
                  <stop offset="50%" stopColor="#00FFFF" />
                  <stop offset="100%" stopColor="#6600FF" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Central Brain Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center tech-brain-container">
                <svg className="w-8 h-8 text-white tech-brain-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Orbiting Elements */}
          <div className="absolute inset-0 tech-orbit-container">
            <div className="tech-orbit-element tech-orbit-1"></div>
            <div className="tech-orbit-element tech-orbit-2"></div>
            <div className="tech-orbit-element tech-orbit-3"></div>
          </div>
        </div>

        {/* Progress Percentage */}
        {showProgress && (
          <div className="mb-8">
            <div className="text-4xl font-montserrat font-bold text-gradient tech-progress-text">
              {Math.round(progress)}%
            </div>
          </div>
        )}

        {/* Phase Text */}
        <div className="mb-8">
          <h2 className="text-xl font-montserrat font-bold text-white tech-phase-text tracking-wider">
            {getPhaseText()}
          </h2>
        </div>

        {/* Data Stream Indicators */}
        <div className="flex justify-center space-x-4 mb-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-8 bg-gradient-to-t from-primary-500 to-transparent rounded-full tech-data-bar"
              style={{
                animationDelay: `${i * 0.2}s`,
                opacity: progress > (i * 20) ? 1 : 0.3
              }}
            />
          ))}
        </div>

        {/* Status Dots */}
        <div className="flex justify-center space-x-3">
          {['initializing', 'processing', 'complete'].map((statusPhase, index) => (
            <div
              key={statusPhase}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                phase === statusPhase || 
                (statusPhase === 'initializing' && progress > 0) ||
                (statusPhase === 'processing' && progress > 30) ||
                (statusPhase === 'complete' && progress > 90)
                  ? 'bg-primary-400 tech-status-active' 
                  : 'bg-dark-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="tech-scan-line"></div>
      </div>

      {/* Corner Tech Elements */}
      <div className="absolute top-8 left-8 tech-corner-element">
        <div className="w-8 h-8 border-l-2 border-t-2 border-primary-400/50"></div>
      </div>
      <div className="absolute top-8 right-8 tech-corner-element">
        <div className="w-8 h-8 border-r-2 border-t-2 border-primary-400/50"></div>
      </div>
      <div className="absolute bottom-8 left-8 tech-corner-element">
        <div className="w-8 h-8 border-l-2 border-b-2 border-primary-400/50"></div>
      </div>
      <div className="absolute bottom-8 right-8 tech-corner-element">
        <div className="w-8 h-8 border-r-2 border-b-2 border-primary-400/50"></div>
      </div>
    </div>
  );
};