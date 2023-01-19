import styles from './Cart.module.css';

import React from 'react';
import {
  Box,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from 'fancyStore/hooks';

function Cart() {
  const { items, removeItem } = useCart();

  const renderCart = () => {
    if (items.length === 0) {
      return (
        <Box p={4} textAlign="center">
          <Typography variant="h6" color="text.secondary">
            Please add items to the cart
          </Typography>
        </Box>
      );
    }

    return (
      <List dense>
        {items.map(item => {
          return (
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeItem(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={item.title} secondary={`$${item.price}`} />
            </ListItem>
          );
        })}
      </List>
    );
  };

  return (
    <div className={styles.root}>
      <h2>Cart</h2>

      <Card className={styles.cart}>{renderCart()}</Card>
    </div>
  );
}

export default Cart;
