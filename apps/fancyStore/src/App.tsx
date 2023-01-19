import React, { Suspense } from 'react';
import './index.css';
import MainProvider from './components/MainProvider';
import { Router } from './routing/Router';

export const App = () => (
  <MainProvider>
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  </MainProvider>
);
