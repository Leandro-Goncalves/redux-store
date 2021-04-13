import { ActionTypes } from "./types";

  export function changeStateModalCartRequest(ProdutcsLength:number) {
    return {
      type: ActionTypes.changeStateModalCartRequest,
      payload: {ProdutcsLength}
    }
  }

  export function changeStateModalCartSuccess(ProdutcsLength:number) {
    return {
      type: ActionTypes.changeStateModalCartSuccess,
      payload: {ProdutcsLength}
    }
  }

  export function changeStateModalCartFailure(ProdutcsLength:number) {
    return {
      type: ActionTypes.changeStateModalCartFailure,
      payload: {ProdutcsLength}
    }
  }
