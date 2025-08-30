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
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Prevent duplicate animations by checking if already started
    if (hasStarted) return;
    
    // Initialize state
    setDisplayText('');
    setShowCursor(true);
    
    // Mark as started to prevent duplicates
    setHasStarted(true);
    
    // Single animation cycle
    const animationTimer = setTimeout(() => {
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Animation complete
          clearInterval(typeInterval);
          setShowCursor(false);
          
          // Execute callback
          if (onComplete) {
            onComplete();
          }
        }
      }, speed);
      
      // Return cleanup function
      return () => clearInterval(typeInterval);
    }, delay);

    // Cleanup timeout
    return () => clearTimeout(animationTimer);
  }, []); // Empty dependency array prevents re-execution

  return (
    <span className={`${className}`}>
      {displayText}
      {showCursor && (
        <span className="animate-pulse text-primary-500">|</span>
      )}
    </span>
  );
};