
import React from 'react';
import { Link } from 'react-router-dom';

type CTAButtonProps = {
  children: React.ReactNode;
  to: string;
  outline?: boolean;
  className?: string;
  onClick?: () => void;
};

const CTAButton = ({ children, to, outline = false, className = '', onClick }: CTAButtonProps) => {
  const baseClasses = outline 
    ? 'cta-button-outline' 
    : 'cta-button';
  
  return (
    <Link 
      to={to} 
      className={`${baseClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default CTAButton;
