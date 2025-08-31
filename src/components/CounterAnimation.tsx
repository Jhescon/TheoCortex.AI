import React, { useState, useEffect, useRef } from 'react';

interface CounterAnimationProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  glowColor?: 'blue' | 'green' | 'cyan' | 'purple';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CounterAnimation: React.FC<CounterAnimationProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  delay = 0,
  className = '',
  glowColor = 'blue',
  size = 'lg'
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = value;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Cubic-bezier easing function for smooth tech feel
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, duration, delay]);

  const getGlowClasses = () => {
    switch (glowColor) {
      case 'blue':
        return 'text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]';
      case 'green':
        return 'text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]';
      case 'cyan':
        return 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]';
      case 'purple':
        return 'text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]';
      default:
        return 'text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-xl md:text-2xl';
      case 'md':
        return 'text-2xl md:text-3xl';
      case 'lg':
        return 'text-3xl md:text-4xl';
      case 'xl':
        return 'text-4xl md:text-5xl';
      default:
        return 'text-3xl md:text-4xl';
    }
  };

  return (
    <div 
      ref={counterRef}
      className={`
        font-mono font-bold tracking-wider
        ${getSizeClasses()}
        ${getGlowClasses()}
        transition-all duration-300
        hover:scale-105 hover:brightness-110
        cursor-default select-none
        ${className}
      `}
      style={{
        textShadow: isVisible ? '0 0 20px currentColor' : 'none',
        filter: isVisible ? 'brightness(1.1)' : 'brightness(1)',
      }}
    >
      <span className="relative">
        {prefix}
        <span className="tabular-nums">
          {count.toLocaleString()}
        </span>
        {suffix}
        
        {/* Animated underline effect */}
        <div className={`
          absolute -bottom-1 left-0 h-0.5 bg-current
          transition-all duration-1000 ease-out
          ${isVisible ? 'w-full' : 'w-0'}
        `} />
        
        {/* Particle effect overlay */}
        {isVisible && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-current rounded-full opacity-60"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${10 + i * 20}%`,
                  animation: `techParticle ${2 + i * 0.5}s ease-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        )}
      </span>
    </div>
  );
};