
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, Calendar, Camera, Contact } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const SecondaryNavigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: <Home size={16} /> 
    },
    { 
      path: '/eventi', 
      label: 'Eventi', 
      icon: <Calendar size={16} /> 
    },
    { 
      path: '/gallery', 
      label: 'Gallery', 
      icon: <Camera size={16} /> 
    },
    { 
      path: '/contatti', 
      label: 'Contatti', 
      icon: <Contact size={16} /> 
    }
  ];

  return (
    <nav 
      className="sticky top-16 md:top-20 z-40 bg-elite-dark/95 backdrop-blur-sm border-b border-elite-gold/20"
      role="navigation"
      aria-label="Navigazione secondaria"
    >
      <div className="baglio-container">
        <div className="flex justify-center md:justify-start overflow-x-auto">
          <div className="flex space-x-0 md:space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || 
                              (item.path === '/eventi' && location.pathname.startsWith('/eventi'));
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-2 px-4 md:px-6 py-3 md:py-4",
                    "text-sm md:text-base font-medium transition-all duration-300",
                    "hover:text-elite-goldLight hover:bg-elite-gold/10",
                    "border-b-2 border-transparent hover:border-elite-goldLight",
                    "min-h-[48px] min-w-[80px] md:min-w-[100px] justify-center md:justify-start",
                    "focus:outline-none focus:ring-2 focus:ring-elite-gold focus:ring-offset-2 focus:ring-offset-elite-dark",
                    {
                      'text-elite-gold border-elite-gold bg-elite-gold/5': isActive,
                      'text-foreground': !isActive,
                    }
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isMobile && (
                    <span className="flex-shrink-0">
                      {item.icon}
                    </span>
                  )}
                  <span className="whitespace-nowrap">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavigation;
