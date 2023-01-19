import React, { useEffect, useRef } from 'react';
import { mount } from 'fancyStoreProducts/bootstrap';
import { productsUrlPath } from '../routing/constants';
import { useLocation, useNavigate } from 'react-router-dom';

const fancyStoreProductsBasename = `/${productsUrlPath}`;

function FancyStoreProducts() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside fancyStoreProducts mfe.
  useEffect(() => {
    const fancyStoreProductsNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${fancyStoreProductsBasename}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener(
      '[fancyStoreProducts] navigated',
      fancyStoreProductsNavigationEventHandler
    );

    return () => {
      window.removeEventListener(
        '[fancyStoreProducts] navigated',
        fancyStoreProductsNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for fancyStore location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(fancyStoreProductsBasename)) {
      window.dispatchEvent(
        new CustomEvent('[fancyStore] navigated', {
          detail: location.pathname.replace(fancyStoreProductsBasename, ''),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);

  // Mount fancyStoreProducts MFE
  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }

    mount({
      mountPoint: wrapperRef.current!,
      initialPathname: location.pathname.replace(
        fancyStoreProductsBasename,
        ''
      ),
    });

    isFirstRunRef.current = false;
  }, [location]);

  return <div ref={wrapperRef} id="fancyStoreProducts-mfe" />;
}

export default FancyStoreProducts;
