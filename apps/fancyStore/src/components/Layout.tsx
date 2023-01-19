import styles from './Layout.module.css';

import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';

import {
  productsUrlPath,
  cartUrlPath,
  storeUrlPath,
} from '../routing/constants';

const pages = [
  {
    path: `/${storeUrlPath}`,
    text: 'Store',
  },
  {
    path: `/${productsUrlPath}`,
    text: 'Products',
  },
  {
    path: `/${cartUrlPath}`,
    text: 'Cart',
  },
];

export function Layout() {
  return (
    <>
      <AppBar position="static">
        <Toolbar className={styles.appBar} disableGutters>
          {pages.map(page => (
            <NavLink key={page.path} to={page.path}>
              {page.text}
            </NavLink>
          ))}
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
}
