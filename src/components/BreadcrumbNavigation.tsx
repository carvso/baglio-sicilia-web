
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from './ui/breadcrumb';

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
    <Breadcrumb className="sticky top-[64px] z-30 bg-transparent py-0.5 border-b border-muted-foreground/10">
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {index === 0 && (
                  <Home size={14} className="text-muted-foreground mr-1" />
                )}
                {crumb.path && !isLast ? (
                  <BreadcrumbLink asChild>
                    <Link to={crumb.path} className="text-muted-foreground hover:text-primary font-normal px-1 py-0.5 rounded transition-colors">
                      {crumb.label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-primary font-semibold px-1 py-0.5">
                    {crumb.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNavigation;
