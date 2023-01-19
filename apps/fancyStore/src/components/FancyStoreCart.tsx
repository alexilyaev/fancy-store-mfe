import React, { useEffect, useRef } from 'react';
import { mount } from 'fancyStoreCart/bootstrap';
import { cartUrlPath } from '../routing/constants';
import { useLocation, useNavigate } from 'react-router-dom';

const fancyStoreCartBasename = `/${cartUrlPath}`;

function FancyStoreCart() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside fancyStoreCart mfe.
  useEffect(() => {
    const fancyStoreCartNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${fancyStoreCartBasename}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener(
      '[fancyStoreCart] navigated',
      fancyStoreCartNavigationEventHandler
    );

    return () => {
      window.removeEventListener(
        '[fancyStoreCart] navigated',
        fancyStoreCartNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for fancyStore location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(fancyStoreCartBasename)) {
      window.dispatchEvent(
        new CustomEvent('[fancyStore] navigated', {
          detail: location.pathname.replace(fancyStoreCartBasename, ''),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);

  // Mount fancyStoreCart MFE
  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }

    mount({
      mountPoint: wrapperRef.current!,
      initialPathname: location.pathname.replace(fancyStoreCartBasename, ''),
    });

    isFirstRunRef.current = false;
  }, [location]);

  return <div ref={wrapperRef} id="fancyStoreCart-mfe" />;
}

export default FancyStoreCart;
