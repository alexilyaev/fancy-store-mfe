import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = createRoot(document.getElementById('fancyStore')!);
root.render(<App />);

export {};
