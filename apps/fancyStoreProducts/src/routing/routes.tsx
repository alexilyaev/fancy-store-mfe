import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationManager } from '../components/NavigationManager';
import { Page1 } from '../pages/Products';

export const routes = [
  {
    path: '/',
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: <Page1 />,
      },
      {
        path: 'products',
        element: <Page1 />,
      },
    ],
  },
];
