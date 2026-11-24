import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { NewProduct, Product } from '../global/types';

type StockExitResult =
  | { success: true }
  | {
      success: false;
      reason: 'product-not-found' | 'invalid-quantity' | 'insufficient-stock';
    };

interface StockContextValue {
  products: Product[];
  addProduct: (product: NewProduct) => void;
  removeStock: (productId: string, quantity: number) => StockExitResult;
}

const initialProducts: Product[] = [
  { id: 'demo-ceramica', name: 'Caneca de cerâmica', price: 42, quantity: 3 },
  { id: 'demo-cesto', name: 'Cesto de palha artesanal', price: 68, quantity: 12 },
  { id: 'demo-tear', name: 'Pano de tear manual', price: 55, quantity: 7 },
];

const StockContext = createContext<StockContextValue | undefined>(undefined);

export function StockProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const productsRef = useRef(initialProducts);

  const addProduct = useCallback((product: NewProduct) => {
    const updatedProducts = [
      {
        ...product,
        id: `product-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      },
      ...productsRef.current,
    ];

    productsRef.current = updatedProducts;
    setProducts(updatedProducts);
  }, []);

  const removeStock = useCallback(
    (productId: string, quantity: number): StockExitResult => {
      const currentProducts = productsRef.current;
      const selectedProduct = currentProducts.find((product) => product.id === productId);

      if (!selectedProduct) {
        return { success: false, reason: 'product-not-found' };
      }

      if (!Number.isInteger(quantity) || quantity <= 0) {
        return { success: false, reason: 'invalid-quantity' };
      }

      if (quantity > selectedProduct.quantity) {
        return { success: false, reason: 'insufficient-stock' };
      }

      const updatedProducts = currentProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - quantity }
          : product,
      );
      productsRef.current = updatedProducts;
      setProducts(updatedProducts);

      return { success: true };
    },
    [],
  );

  const value = useMemo(
    () => ({ products, addProduct, removeStock }),
    [products, addProduct, removeStock],
  );

  return <StockContext.Provider value={value}>{children}</StockContext.Provider>;
}

export function useStock(): StockContextValue {
  const context = useContext(StockContext);

  if (!context) {
    throw new Error('useStock deve ser usado dentro de StockProvider.');
  }

  return context;
}
