import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-6 h-6';
      case 'md':
        return 'w-12 h-12';
      case 'lg':
        return 'w-20 h-20';
      default:
        return 'w-12 h-12';
    }
  };

  return (
    <div className={`${getSizeClasses()} ${className}`}>
      <div className="relative w-full h-full">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-primary-500/20 rounded-full"></div>
        
        {/* Spinning ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-primary-500 rounded-full animate-spin"></div>
        
        {/* Inner pulse */}
        <div className="absolute inset-2 bg-primary-500/10 rounded-full animate-pulse-glow"></div>
      </div>
    </div>
  );
};