import { all } from 'redux-saga/effects';
import { albumSaga } from "../albums/saga/albumSaga";

export function* rootSaga(): any {
  yield all([
    albumSaga(),
])}
