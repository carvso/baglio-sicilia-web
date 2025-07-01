
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
};

const CTAButton = ({ 
  children, 
  to, 
  outline = false, 
  className = '',
  onClick,
  fullWidth = false
}: CTAButtonProps) => {
  const isMobile = useIsMobile();
  
  const baseClasses = cn(
    'inline-flex items-center justify-center font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-md',
    {
      'bg-baglio-oro text-baglio-ebanoIntenso hover:bg-baglio-oroImperiale': !outline,
      'border-2 border-baglio-oro text-baglio-oro hover:bg-baglio-oro hover:text-baglio-ebanoIntenso': outline,
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
