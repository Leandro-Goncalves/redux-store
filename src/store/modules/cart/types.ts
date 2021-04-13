export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCTS_TO_CARD_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCTS_TO_CARD_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCTS_TO_CARD_FAILURE',

  buyProducs = 'BUY_PRODUCS',
  cancelProducs = 'CANCEL_PRODUCS',
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}