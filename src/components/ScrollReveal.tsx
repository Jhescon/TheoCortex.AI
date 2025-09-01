import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  className?: string;
  threshold?: number;
  rootMargin?: string;
  stagger?: boolean;
  staggerDelay?: number;
  mobileOptimized?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  stagger = false,
  staggerDelay = 100,
  mobileOptimized = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Remove delays on mobile for immediate animations
          const finalDelay = isMobile ? 0 : (stagger ? delay + (Math.random() * staggerDelay) : delay);
          setTimeout(() => {
            setIsVisible(true);
          }, finalDelay);
        }
      },
      {
        threshold,
        // More aggressive mobile detection for faster triggers
        rootMargin: isMobile ? '0px 0px -20px 0px' : rootMargin
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
  }, [delay, threshold, rootMargin, stagger, staggerDelay, isMobile]);

  const getAnimationClass = () => {
    if (!isVisible) {
      return 'opacity-0 transform';
    }

    // Use optimized mobile animations
    if (isMobile && mobileOptimized) {
      return 'mobile-optimized opacity-100';
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
      className={`transition-all ${isMobile ? 'duration-300' : 'duration-700'} ease-out ${getAnimationClass()} ${className}`}
      style={{
        transform: !isVisible ? 
          (direction === 'up' ? 'translateY(30px)' : 
           direction === 'down' ? 'translateY(-30px)' :
           direction === 'left' ? 'translateX(-30px)' :
           direction === 'right' ? 'translateX(30px)' :
           direction === 'scale' ? 'scale(0.95)' : 'none') : 
          'none',
      }}
    >
      {children}
    </div>
  );
};