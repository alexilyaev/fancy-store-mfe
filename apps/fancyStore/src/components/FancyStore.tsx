import React from 'react';
import { useCounter } from 'fancyStoreProducts/counterStore';

function FancyStore() {
  const { count, inc, dec } = useCounter();

  return (
    <div>
      <h1>FancyStore</h1>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default FancyStore;
