import { ActionTypes, IProduct } from "./types";

  export function addProductToCartRequest(product: IProduct) {
    return {
      type: ActionTypes.addProductToCartRequest,
      payload: {
        product
      }
    }
  }

  export function addProductToCartSuccess(product: IProduct) {
    return {
      type: ActionTypes.addProductToCartSuccess,
      payload: {
        product
      }
    }
  }

  export function addProductToCartFailure(productId: number) {
    return {
      type: ActionTypes.addProductToCartFailure,
      payload: {
        productId
      }
    }
  }

  export function buyProducts() {
    return {
      type: ActionTypes.buyProducs,
      payload: {}
    }
  }

  export function cancelProducts() {
    return {
      type: ActionTypes.cancelProducs,
      payload: {}
    }
  }
