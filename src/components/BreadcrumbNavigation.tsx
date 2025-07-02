
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
      className="bg-transparent sticky top-[64px] z-30 py-4"
    >
      <div className="w-full">
        <div className="flex justify-start">
          {/* Professional Navy Container */}
          <div className="bg-baglio-ebano rounded-r-lg px-6 py-3 shadow-sm">
            <ol className="flex items-center space-x-3 text-sm md:text-base min-w-0">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                
                return (
                  <li key={index} className="flex items-center space-x-3 min-w-0">
                    {index === 0 && (
                      <Home size={16} className="text-baglio-crema flex-shrink-0" />
                    )}
                    
                    {crumb.path && !isLast ? (
                      <Link 
                        to={crumb.path}
                        className={cn(
                          "text-baglio-crema hover:text-baglio-oro transition-colors duration-200",
                          "focus:outline-none focus:ring-2 focus:ring-baglio-oro focus:ring-offset-2 focus:ring-offset-baglio-ebano",
                          "rounded px-2 py-1 truncate font-medium"
                        )}
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span 
                        className={cn(
                          isLast 
                            ? "text-baglio-oro font-semibold" 
                            : "text-baglio-crema font-medium",
                          "truncate px-2 py-1"
                        )}
                        aria-current={isLast ? "page" : undefined}
                      >
                        {crumb.label}
                      </span>
                    )}
                    
                    {!isLast && (
                      <ChevronRight size={14} className="text-baglio-crema/70 flex-shrink-0" />
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
