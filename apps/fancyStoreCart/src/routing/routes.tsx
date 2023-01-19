import React from 'react';
import { Outlet } from 'react-router-dom';
import MainProvider from 'fancyStore/MainProvider';
import { NavigationManager } from '../components/NavigationManager';
import CartPage from '../pages/CartPage';

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
        element: <CartPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },
];
