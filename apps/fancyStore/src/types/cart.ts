import { Product } from './products';

export interface Cart {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (itemId: number) => void;
}
