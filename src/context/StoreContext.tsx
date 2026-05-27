import { createContext, useState, useEffect, type ReactElement } from 'react';
import { getProducts, getProductById } from '../services/api';

interface Store {
  products: Iproduct[];
  cart: Iproduct[];
  loading: boolean;
  addToCart: (product: Iproduct) => void;
  removeFromCart: (id: number) => void;
  getProductById: (id: number) => Promise<Iproduct | null>;
}

export const StoreContext = createContext<Store | null>(null);

interface Icategory {
  id: number,
  name: string,
  slug: string,
  image: string,
  creationAt: string,
  updatedAt: string
}

export interface Iproduct {
  id: number,
  title: string,
  slug: string,
  price: number,
  description: string,
  category: Icategory,
  images: string[],
  creationAt: string,
  updatedAt: string
}

export function StoreProvider({ children }: { children: ReactElement }) {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [cart, setCart] = useState<Iproduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const addToCart = (product: Iproduct) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    const productIndex = cart.findIndex(item => item.id === id);
    if (productIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(productIndex, 1);
      setCart(newCart);
    }
  };


  return (
    <StoreContext.Provider value={{
      products,
      cart,
      loading,
      addToCart,
      removeFromCart,
      getProductById
    }}>
      {children}
    </StoreContext.Provider>
  );
}
