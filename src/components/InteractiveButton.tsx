import React, { useState } from 'react';
import { type LucideIcon } from 'lucide-react';
import { LoadingSpinner } from './LoadingSpinner';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  target?: string;
}

export const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  loading = false,
  href,
  target
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (href) {
      // For href navigation, let the browser handle it naturally
      return;
    }
    
    if (onClick && !disabled && !loading && !isLoading) {
      setIsLoading(true);
      try {
        await onClick();
      } finally {
        setTimeout(() => setIsLoading(false), 100);
      }
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'ghost':
        return 'text-primary-400 hover:text-white hover:bg-primary-500/10 font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300';
      default:
        return 'btn-primary';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-8 py-4 text-base';
      case 'lg':
        return 'px-12 py-6 text-lg';
      default:
        return 'px-8 py-4 text-base';
    }
  };

  const isButtonLoading = loading || isLoading;
  const isDisabled = disabled || isButtonLoading;

  const buttonContent = (
    <>
      {isButtonLoading ? (
        <LoadingSpinner size="sm" className="mr-2" />
      ) : (
        Icon && iconPosition === 'left' && (
          <Icon className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
        )
      )}
      
      <span className="relative z-10">{children}</span>
      
      {!isButtonLoading && Icon && iconPosition === 'right' && (
        <Icon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:rotate-12" />
      )}
    </>
  );

  const buttonClasses = `
    ${getVariantClasses()}
    ${variant !== 'ghost' ? getSizeClasses() : ''}
    ${isDisabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}
    flex items-center justify-center
    group relative overflow-hidden
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={buttonClasses}
        aria-disabled={isDisabled}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
      className={buttonClasses}
      aria-label={typeof children === 'string' ? children : undefined}
      onTouchStart={() => {}} // Enable :active pseudo-class on iOS
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
      {buttonContent}
    </button>
  );
};