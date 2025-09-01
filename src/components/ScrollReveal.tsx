import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -20px 0px'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const finalDelay = isMobile ? Math.max(delay * 0.5, 0) : delay;
          setTimeout(() => {
            setIsVisible(true);
          }, finalDelay);
        }
      },
      {
        threshold: isMobile ? 0.05 : threshold,
        rootMargin: isMobile ? '0px 0px 0px 0px' : rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, rootMargin]);

  const getAnimationClass = () => {
    if (!isVisible) {
      return 'opacity-0 transform';
    }

    switch (direction) {
      case 'up':
        return 'animate-fade-in-up opacity-100';
      case 'down':
        return 'animate-fade-in-down opacity-100';
      case 'left':
        return 'animate-fade-in-left opacity-100';
      case 'right':
        return 'animate-fade-in-right opacity-100';
      case 'scale':
        return 'animate-scale-in opacity-100';
      case 'fade':
      default:
        return 'animate-fade-in opacity-100';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-500 ease-out ${getAnimationClass()} ${className}`}
      style={{
        transform: !isVisible ? 
          (direction === 'up' ? 'translateY(30px)' : 
           direction === 'down' ? 'translateY(-30px)' :
           direction === 'left' ? 'translateX(-30px)' :
           direction === 'right' ? 'translateX(30px)' :
           direction === 'scale' ? 'scale(0.95)' : 'none') : 
          'none',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};