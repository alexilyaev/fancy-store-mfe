import styles from './Products.module.css';

import React, { useMemo } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useCart } from 'fancyStore/hooks';
import { useProducts } from '../hooks/useProducts';
import ProductItem from './ProductItem';

interface Props {
  cartSummaryComponent?: () => JSX.Element;
}

function Products({ cartSummaryComponent: CartSummaryComponent }: Props) {
  const cartItems = useCart(state => state.items);
  const { data: products, isLoading } = useProducts();

  const itemsInCart = useMemo(() => {
    const itemsMap: Record<number, boolean> = {};

    cartItems.forEach(item => {
      itemsMap[item.id] = true;
    });

    return itemsMap;
  }, [cartItems]);

  const renderProducts = () => {
    if (isLoading || !products) {
      return <CircularProgress />;
    }

    return (
      <div className={styles.root}>
        {products.map(product => {
          return (
            <ProductItem
              key={product.id}
              item={product}
              isInCart={itemsInCart[product.id]}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h2>Products</h2>
        {!!CartSummaryComponent && <CartSummaryComponent />}
      </Box>

      {renderProducts()}
    </div>
  );
}

export default Products;
