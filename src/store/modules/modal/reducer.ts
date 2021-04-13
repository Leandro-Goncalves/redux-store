import { Reducer } from "redux";
import { ActionTypes, IModal } from "./types";
import produce from 'immer';


const INITIAL_STATE: IModal = {
  isModalCartOpen: false
}

const modalCart: Reducer<IModal> = (state = INITIAL_STATE, action) => {
  
  return produce(state, draft => {
    switch(action.type){

      case ActionTypes.changeStateModalCartSuccess: {

        draft.isModalCartOpen = !draft.isModalCartOpen

        break;
      }

      default: {
        return draft;
      }
    }
  });
}

export default modalCart;
