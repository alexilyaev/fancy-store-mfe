import React, { lazy } from 'react';
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
  BrowserRouter,
} from 'react-router-dom';
import { Layout } from '../components/Layout';
import { productsUrlPath, cartUrlPath, storeUrlPath } from './constants';

const FancyStoresLazy = lazy(() => import('../components/FancyStore'));
const FancyStoreProductsLazy = lazy(
  () => import('../components/FancyStoreProducts')
);
const FancyStoreCartLazy = lazy(() => import('../components/FancyStoreCart'));

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={`/${storeUrlPath}`} />} />
          <Route path={`/${storeUrlPath}/*`} element={<FancyStoresLazy />} />
          <Route
            path={`/${productsUrlPath}/*`}
            element={<FancyStoreProductsLazy />}
          />
          <Route path={`/${cartUrlPath}/*`} element={<FancyStoreCartLazy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
