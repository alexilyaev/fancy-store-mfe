import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import {
  productsUrlPath,
  cartUrlPath,
  storeUrlPath,
} from '../routing/constants';

export function Layout() {
  return (
    <>
      <nav>
        <Link to={`/${storeUrlPath}`}>Store</Link>
        <Link to={`/${productsUrlPath}`}>Products</Link>
        <Link to={`/${cartUrlPath}`}>Cart</Link>
      </nav>
      <Outlet />
    </>
  );
}
