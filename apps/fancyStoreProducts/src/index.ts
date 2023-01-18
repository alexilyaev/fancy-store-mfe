import('./bootstrap').then(({ mount }) => {
  const localRoot = document.getElementById('fancyStoreProducts');

  mount({
    mountPoint: localRoot!,
    routingStrategy: 'browser',
  });
});

export {};
