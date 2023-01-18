import React, { ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationManagerProps {
  children: ReactElement;
}

export function NavigationManager({ children }: NavigationManagerProps) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function fancyStoreNavigationHandler(event: Event) {
      const pathname = (event as CustomEvent<string>).detail;
      if (location.pathname === pathname) {
        return;
      }
      navigate(pathname);
    }

    window.addEventListener(
      '[fancyStore] navigated',
      fancyStoreNavigationHandler
    );

    return () => {
      window.removeEventListener(
        '[fancyStore] navigated',
        fancyStoreNavigationHandler
      );
    };
  }, [location]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('[fancyStoreCart] navigated', {
        detail: location.pathname,
      })
    );
  }, [location]);

  return children;
}
