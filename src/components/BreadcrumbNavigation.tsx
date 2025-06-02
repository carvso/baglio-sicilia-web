
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const BreadcrumbNavigation = () => {
  const location = useLocation();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const path = location.pathname;
    
    // Define breadcrumb mappings
    const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
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

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/' || breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav 
      role="navigation" 
      aria-label="breadcrumb"
      className="bg-elite-darker/95 backdrop-blur-sm border-b border-elite-gold/10 sticky top-0 z-30"
    >
      <div className="baglio-container">
        <div className="flex items-center py-3 px-4 md:px-0 overflow-x-auto">
          <ol className="flex items-center space-x-2 text-sm md:text-base min-w-0">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              
              return (
                <li key={index} className="flex items-center space-x-2 min-w-0">
                  {index === 0 && (
                    <Home size={16} className="text-foreground flex-shrink-0" />
                  )}
                  
                  {crumb.path && !isLast ? (
                    <Link 
                      to={crumb.path}
                      className={cn(
                        "text-foreground hover:text-elite-goldLight transition-colors duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-elite-gold focus:ring-offset-2 focus:ring-offset-elite-darker",
                        "rounded px-1 py-0.5 truncate"
                      )}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span 
                      className={cn(
                        isLast 
                          ? "text-elite-gold font-medium" 
                          : "text-foreground",
                        "truncate"
                      )}
                      aria-current={isLast ? "page" : undefined}
                    >
                      {crumb.label}
                    </span>
                  )}
                  
                  {!isLast && (
                    <ChevronRight size={14} className="text-foreground/60 flex-shrink-0" />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default BreadcrumbNavigation;
