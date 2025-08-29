import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
  disabled?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  disabled = false
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-950 hover:from-cyan-300 hover:to-blue-400 hover:shadow-glow-lg';
      case 'secondary':
        return 'bg-gray-800/50 text-white border border-gray-700/50 hover:bg-gray-700/50 hover:border-cyan-400/50';
      case 'ghost':
        return 'text-cyan-400 hover:text-white hover:bg-cyan-400/10';
      default:
        return 'bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-950 hover:from-cyan-300 hover:to-blue-400';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        font-space font-semibold tracking-wide rounded-xl
        transition-all duration-300 ease-out
        transform hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-gray-950
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        flex items-center justify-center space-x-2
        group relative overflow-hidden
        ${className}
      `}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
      
      <span className="relative z-10">{children}</span>
      {Icon && (
        <Icon className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};