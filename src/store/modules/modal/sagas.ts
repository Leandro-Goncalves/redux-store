import { all, takeLatest, put } from 'redux-saga/effects'
import { changeStateModalCartFailure, changeStateModalCartRequest, changeStateModalCartSuccess } from './actions';
import { ActionTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof changeStateModalCartRequest>

function* checkProductStock({ payload }:CheckProductStockRequest) {
  
  const { ProdutcsLength } = payload;

  if(ProdutcsLength) {
    yield put(changeStateModalCartSuccess(ProdutcsLength))
  } else {
    yield put(changeStateModalCartFailure(ProdutcsLength))
  }

}

export default all([
  takeLatest(ActionTypes.changeStateModalCartRequest, checkProductStock)
]);