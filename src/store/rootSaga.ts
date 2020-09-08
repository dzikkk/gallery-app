import { all } from 'redux-saga/effects';
import { albumSaga } from "../albums/saga/albumSaga";
import { gallerySaga } from '../gallery/saga/gallerySaga';
import { usersProfileSaga } from '../usersProfile/saga/usersProfileSaga';

export function* rootSaga(): any {
  yield all([albumSaga(), gallerySaga(), usersProfileSaga()]);}
