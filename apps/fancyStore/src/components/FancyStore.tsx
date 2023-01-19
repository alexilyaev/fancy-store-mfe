import React from 'react';
import Products from 'fancyStoreProducts/Products';
import Cart from 'fancyStoreCart/Cart';
import CartSummary from 'fancyStoreCart/CartSummary';
import { Box } from '@mui/material';
import PageContent from './PageContent';

function FancyStore() {
  return (
    <PageContent>
      <h1>Fancy Store</h1>

      <Box display="flex" gap="20px">
        <Products cartSummaryComponent={CartSummary} />
        <Cart />
      </Box>
    </PageContent>
  );
}

export default FancyStore;
