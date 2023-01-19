import React from 'react';
import PageContent from 'fancyStore/PageContent';
import Products from '../components/Products';
import { Box } from '@mui/material';

function ProductsPage() {
  return (
    <PageContent>
      <h1>Products Page from fancyStoreProducts</h1>

      <Box display="flex" gap="20px">
        <Products />
      </Box>
    </PageContent>
  );
}

export default ProductsPage;
