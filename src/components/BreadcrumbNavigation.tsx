
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
      className="bg-transparent sticky top-[64px] z-30 py-0.5"
    >
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex justify-start min-w-max">
          {/* Compact elegant container */}
          <div className="bg-baglio-ebano/95 backdrop-blur-sm rounded-r-xl px-3 py-1.5 shadow-lg border border-baglio-oro/20">
            <ol className="flex items-center space-x-1.5 text-xs sm:text-sm min-w-0">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                
                return (
                  <li key={index} className="flex items-center space-x-1.5 min-w-0">
                    {index === 0 && (
                      <Home size={12} className="text-baglio-crema flex-shrink-0 sm:size-3" />
                    )}
                    
                    {crumb.path && !isLast ? (
                      <Link 
                        to={crumb.path}
                        className={cn(
                          "text-baglio-crema hover:text-baglio-oro transition-all duration-300",
                          "focus:outline-none focus:ring-1 focus:ring-baglio-oro/50 focus:ring-offset-1 focus:ring-offset-baglio-ebano",
                          "rounded-md px-1.5 py-0.5 truncate font-medium hover:bg-baglio-oro/10",
                          "touch-target-44 min-h-[44px] sm:min-h-auto flex items-center",
                          "max-w-[120px] sm:max-w-none"
                        )}
                      >
                        <span className="truncate">
                          {crumb.label.length > 12 && typeof window !== 'undefined' && window.innerWidth < 640 
                            ? `${crumb.label.substring(0, 12)}...` 
                            : crumb.label}
                        </span>
                      </Link>
                    ) : (
                      <span 
                        className={cn(
                          isLast 
                            ? "text-baglio-oro font-semibold" 
                            : "text-baglio-crema font-medium",
                          "truncate px-1.5 py-0.5 rounded-md",
                          "max-w-[120px] sm:max-w-none block"
                        )}
                        aria-current={isLast ? "page" : undefined}
                        title={crumb.label}
                      >
                        {crumb.label.length > 15 && typeof window !== 'undefined' && window.innerWidth < 640 
                          ? `${crumb.label.substring(0, 15)}...` 
                          : crumb.label}
                      </span>
                    )}
                    
                    {!isLast && (
                      <ChevronRight 
                        size={10} 
                        className="text-baglio-crema/60 flex-shrink-0 sm:size-3 transition-opacity duration-300" 
                      />
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
