import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
import modal from './modal/sagas';

export default function* rootSaga() {
  yield all([
    cart,
    modal
  ])
}