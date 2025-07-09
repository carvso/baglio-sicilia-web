
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from './ui/breadcrumb';
import { cn } from '@/lib/utils';

interface BreadcrumbItemType {
  label: string;
  path?: string;
}

const BreadcrumbNavigation = () => {
  const location = useLocation();

  const getBreadcrumbs = (): BreadcrumbItemType[] => {
    const path = location.pathname;
    const breadcrumbMap: Record<string, BreadcrumbItemType[]> = {
      '/eventi': [
        { label: 'Home', path: '/' },
        { label: 'Eventi' }
      ],
      '/eventi-privati': [
        { label: 'Home', path: '/' },
        { label: 'Eventi', path: '/eventi' },
        { label: 'Eventi Privati' }
      ],
      '/matrimoni': [
        { label: 'Home', path: '/' },
        { label: 'Eventi', path: '/eventi' },
        { label: 'Matrimoni e Cerimonie' }
      ],
      '/eventi-aziendali': [
        { label: 'Home', path: '/' },
        { label: 'Eventi', path: '/eventi' },
        { label: 'Eventi Aziendali' }
      ],
      '/gallery': [
        { label: 'Home', path: '/' },
        { label: 'Gallery' }
      ],
      '/contatti': [
        { label: 'Home', path: '/' },
        { label: 'Contatti' }
      ]
    };
    return breadcrumbMap[path] || [];
  };

  const breadcrumbs = getBreadcrumbs();
  if (location.pathname === '/' || breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav 
      role="navigation" 
      aria-label="breadcrumb"
      className="fixed top-[88px] sm:top-[84px] left-0 right-0 z-40 animate-fade-in"
    >
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex justify-start">
          {/* Modern chip-style breadcrumb - full width strip */}
          <div className="flex items-center gap-0.5 sm:gap-1 px-3 sm:px-4 py-0.5 sm:py-0.5 w-full bg-background/80 backdrop-blur-md border-b border-border/30 shadow-sm">
            <ol className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs font-light">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                
                return (
                  <li key={index} className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                    {index === 0 && (
                      <Home 
                        size={10} 
                        className="text-muted-foreground opacity-70 flex-shrink-0 sm:w-3 sm:h-3 self-center" 
                      />
                    )}
                    
                    {crumb.path && !isLast ? (
                      <Link 
                        to={crumb.path}
                        className={cn(
                          "text-muted-foreground hover:text-foreground transition-all duration-200",
                          "focus:outline-none focus:ring-1 focus:ring-ring rounded-sm",
                          "px-1 sm:px-1.5 py-0.5 hover:bg-accent/50 font-light hover:font-normal",
                          "text-[10px] sm:text-xs whitespace-nowrap flex-shrink-0 flex items-center h-fit"
                        )}
                        title={crumb.label}
                      >
                        {crumb.label.length > 6 && typeof window !== 'undefined' && window.innerWidth < 360 
                          ? `${crumb.label.substring(0, 4)}...` 
                          : crumb.label.length > 8 && typeof window !== 'undefined' && window.innerWidth < 480
                          ? `${crumb.label.substring(0, 6)}...`
                          : crumb.label}
                      </Link>
                    ) : (
                      <span 
                        className={cn(
                          isLast 
                            ? "text-foreground font-normal bg-accent/30 px-1 sm:px-1.5 py-0.5 rounded-sm" 
                            : "text-muted-foreground font-light px-1 sm:px-1.5 py-0.5",
                          "text-[10px] sm:text-xs whitespace-nowrap flex-shrink-0 flex items-center h-fit"
                        )}
                        aria-current={isLast ? "page" : undefined}
                        title={crumb.label}
                      >
                        {crumb.label.length > 8 && typeof window !== 'undefined' && window.innerWidth < 360 
                          ? `${crumb.label.substring(0, 6)}...` 
                          : crumb.label.length > 10 && typeof window !== 'undefined' && window.innerWidth < 480
                          ? `${crumb.label.substring(0, 8)}...`
                          : crumb.label}
                      </span>
                    )}
                    
                    {!isLast && (
                      <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-muted-foreground/40 flex-shrink-0 self-center" />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BreadcrumbNavigation;
