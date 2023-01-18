import('./bootstrap').then(({ mount }) => {
  const localRoot = document.getElementById('fancyStoreCart');

  mount({
    mountPoint: localRoot!,
    routingStrategy: 'browser',
  });
});

export {};
