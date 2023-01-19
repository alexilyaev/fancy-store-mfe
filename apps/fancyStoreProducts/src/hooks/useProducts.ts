import { useQuery } from '@tanstack/react-query';
import { Product } from 'fancyStore/types';

const URLS = {
  PRODUCTS: 'api/products',
};

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  const data: Product[] = await res.json();

  return data;
}

export function useProducts() {
  return useQuery([URLS.PRODUCTS], fetchProducts, {
    refetchOnWindowFocus: false,
  });
}
