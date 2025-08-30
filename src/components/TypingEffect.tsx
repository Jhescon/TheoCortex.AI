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
  speed = 100,
  className = '',
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset state when text changes
    setDisplayText('');
    setIsComplete(false);
    
    const startTimer = setTimeout(() => {
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Typing animation complete
          clearInterval(typeInterval);
          setIsComplete(true);
          
          // Call onComplete callback after a brief pause to show final cursor
          setTimeout(() => {
            if (onComplete) {
              onComplete();
            }
          }, 500); // 500ms pause to show completed text with cursor
        }
      }, speed);
      
      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, delay, speed, onComplete]);

  return (
    <span className={`${className}`}>
      {displayText}
      {!isComplete && (
        <span className="animate-blink text-primary-500">|</span>
      )}
    </span>
  );
};