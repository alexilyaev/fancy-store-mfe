import styles from './ProductItem.module.css';

import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useCart } from 'fancyStore/hooks';
import { Product } from 'fancyStore/types';

interface Props {
  item: Product;
  isInCart: boolean;
}

function ProductItem({ item, isInCart }: Props) {
  const { addItem, removeItem } = useCart();

  const description =
    item.description.length > 100
      ? `${item.description.slice(0, 100)}...`
      : item.description;

  return (
    <Card className={styles.root}>
      <div>
        <CardHeader title={item.title} subheader={item.category} />
        <CardMedia
          component="img"
          height="194"
          image={item.image}
          alt={item.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </div>
      <CardActions className={styles.actions}>
        <Typography variant="body1" color="text.primary">
          ${item.price}
        </Typography>
        <div>
          {isInCart ? (
            <Button
              color="error"
              size="small"
              onClick={() => removeItem(item.id)}
            >
              <RemoveShoppingCartIcon /> Remove
            </Button>
          ) : (
            <Button size="small" onClick={() => addItem(item)}>
              <AddShoppingCartIcon /> Add to Cart
            </Button>
          )}
        </div>
      </CardActions>
    </Card>
  );
}

export default ProductItem;
