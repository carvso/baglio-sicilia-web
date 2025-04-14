
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

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
  
  const baseClasses = outline 
    ? 'cta-button-outline' 
    : 'cta-button';
  
  const mobileClasses = isMobile && fullWidth ? 'w-full justify-center' : '';
  
  return (
    <Link 
      to={to} 
      className={`${baseClasses} ${mobileClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default CTAButton;
