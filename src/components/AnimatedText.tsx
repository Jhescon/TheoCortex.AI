import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
  variant?: 'typewriter' | 'fade-in' | 'slide-up';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  className = '',
  variant = 'fade-in'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (variant === 'typewriter') {
        let currentIndex = 0;
        const typeInterval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayText(text.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typeInterval);
          }
        }, 50);
        return () => clearInterval(typeInterval);
      } else {
        setIsVisible(true);
        setDisplayText(text);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, variant]);

  const getVariantClasses = () => {
    switch (variant) {
      case 'typewriter':
        return 'font-mono';
      case 'fade-in':
        return `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'slide-up':
        return `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`;
      default:
        return '';
    }
  };

  return (
    <span className={`${getVariantClasses()} ${className}`}>
      {displayText}
      {variant === 'typewriter' && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};