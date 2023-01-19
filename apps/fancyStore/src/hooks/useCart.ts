import { create } from 'zustand';
import { Cart } from '../types/cart';

export const useCart = create<Cart>((set, get) => ({
  items: [],
  addItem: itemToAdd => {
    set(state => ({ items: state.items.concat(itemToAdd) }));
  },
  removeItem: itemId => {
    set(state => ({
      items: state.items.filter(item => item.id !== itemId),
    }));
  },
}));
