import React from 'react';
import { Outlet } from 'react-router-dom';
import MainProvider from 'fancyStore/MainProvider';
import { NavigationManager } from '../components/NavigationManager';
import ProductsPage from '../pages/ProductsPage';

export const routes = [
  {
    path: '/',
    element: (
      <MainProvider>
        <NavigationManager>
          <Outlet />
        </NavigationManager>
      </MainProvider>
    ),
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
    ],
  },
];
