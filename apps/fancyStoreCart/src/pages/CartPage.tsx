import React from 'react';
import PageContent from 'fancyStore/PageContent';
import { Box } from '@mui/material';
import Cart from '../components/Cart';

function CartPage() {
  return (
    <PageContent>
      <h1>Cart Page from fancyStoreCart</h1>

      <Box display="flex" gap="20px">
        <Cart />
      </Box>
    </PageContent>
  );
}

export default CartPage;
