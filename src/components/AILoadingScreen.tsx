import React from 'react';
import { Brain } from 'lucide-react';

interface AILoadingScreenProps {
  isVisible: boolean;
}

export const AILoadingScreen: React.FC<AILoadingScreenProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-dark-950 flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 grid-pattern animate-pulse"></div>
        <div className="absolute inset-0 geometric-bg"></div>
      </div>

      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-neural-pulse"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: `linear-gradient(45deg, #0066FF, #6600FF)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 text-center">
        {/* Circular Progress Ring */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 animate-spin-slow blur-sm"></div>
          
          {/* Progress circle */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(6, 102, 255, 0.1)"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#progressGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset="283"
              className="animate-progress-circle"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0066FF" />
                <stop offset="50%" stopColor="#3399FF" />
                <stop offset="100%" stopColor="#6600FF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Brain Icon Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pulsing glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-xl animate-ai-glow opacity-60"></div>
              
              {/* Brain icon */}
              <div className="relative w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center animate-brain-pulse">
                <Brain className="w-8 h-8 text-white animate-brain-rotate" />
              </div>
              
              {/* Inner pulse rings */}
              <div className="absolute inset-2 border border-primary-400/30 rounded-full animate-ping"></div>
              <div className="absolute inset-4 border border-secondary-400/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h3 className="font-montserrat font-bold text-2xl text-gradient animate-digital-flicker">
            INITIALIZING AI SYSTEM
          </h3>
          <div className="flex items-center justify-center space-x-2 text-primary-400">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          <p className="text-dark-300 font-inter text-sm animate-pulse">
            Loading advanced automation solutions...
          </p>
        </div>

        {/* Data stream effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-8 bg-gradient-to-t from-transparent via-primary-400 to-transparent opacity-60 animate-data-stream"
              style={{
                left: `${Math.cos((i * 60) * Math.PI / 180) * 80}px`,
                top: `${Math.sin((i * 60) * Math.PI / 180) * 80}px`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};