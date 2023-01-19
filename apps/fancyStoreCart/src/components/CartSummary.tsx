import styles from './CartSummary.module.css';

import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from 'fancyStore/hooks';

function CartSummary() {
  const items = useCart(state => state.items);

  return (
    <div className={styles.root}>
      {items.length} <ShoppingCartIcon />
    </div>
  );
}

export default CartSummary;
