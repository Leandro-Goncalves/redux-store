export enum ActionTypes {
  changeStateModalCartRequest = 'CHANGE_STATE_MODAL_CART_REQUEST',
  changeStateModalCartSuccess = 'CHANGE_STATE_MODAL_CART_SUCCESS',
  changeStateModalCartFailure = 'CHANGE_STATE_MODAL_CART_FAILURE',
}

export interface IModal {
  isModalCartOpen: boolean;
}