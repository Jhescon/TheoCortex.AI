import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  delay = 0,
  speed = 60,
  className = '',
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Initialize state - prevent duplicate animations
    setDisplayText('');
    setShowCursor(true);
    
    // Single animation cycle with optimized timing
    const animationTimer = setTimeout(() => {
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Animation complete - cleanup and callback
          clearInterval(typeInterval);
          setShowCursor(false);
          
          // Immediate callback execution for faster flow
          if (onComplete) {
            onComplete();
          }
        }
      }, speed);
      
      // Cleanup function to prevent memory leaks
      return () => clearInterval(typeInterval);
    }, delay);

    // Cleanup timeout to prevent duplicate animations
    return () => clearTimeout(animationTimer);
  }, [text, delay, speed, onComplete]);

  return (
    <span className={`${className}`}>
      {displayText}
      {showCursor && (
        <span className="animate-pulse text-primary-500">|</span>
      )}
    </span>
  );
};