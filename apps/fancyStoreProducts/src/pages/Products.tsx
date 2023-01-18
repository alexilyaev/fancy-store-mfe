import React from 'react';
import { useCounter } from '../store/counter';

export function Page1() {
  const { count, inc, dec } = useCounter();

  return (
    <React.Fragment>
      <h1>Products Page from fancyStoreProducts</h1>

      <div>
        <button onClick={inc}>Inc</button>
        <h2>Count: {count}</h2>
      </div>
    </React.Fragment>
  );
}
