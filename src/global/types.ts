export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export type NewProduct = Omit<Product, 'id'>;

export type RootStackParamList = {
  Login: undefined;
  BottomRoutes: undefined;
};

export type BottomTabParamList = {
  RegisterProduct: undefined;
  StockList: undefined;
  StockExit: undefined;
};
