
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

type CTAButtonProps = {
  children: React.ReactNode;
  to: string;
  outline?: boolean;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const CTAButton = ({ 
  children, 
  to, 
  outline = false, 
  className = '',
  onClick,
  fullWidth = false,
  size = 'md'
}: CTAButtonProps) => {
  const isMobile = useIsMobile();
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  };
  
  const baseClasses = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1',
    sizeClasses[size],
    {
      'bg-baglio-oro text-baglio-ebanoIntenso hover:bg-baglio-oroImperiale': !outline,
      'border-2 border-baglio-oro text-baglio-oro hover:bg-baglio-oro hover:text-baglio-ebanoIntenso bg-transparent': outline,
      'w-full justify-center': isMobile && fullWidth
    },
    className
  );
  
  return (
    <Link 
      to={to} 
      className={baseClasses}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default CTAButton;
