import Axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import { AlbumQueryAction } from '../actions/AlbumQueryActions';
import { albumsQuery, AlbumsQueryResponse } from '../api/albumsQuery';

function* fetchAlbumsSaga() {
  const succes = AlbumQueryAction.success;
  const failed = AlbumQueryAction.failure;

  try {
    const data: AlbumsQueryResponse = yield call(albumsQuery);
    yield put(succes(data));
  } catch (error) {
    yield put(failed(error));
  }

}

export function* albumSaga() {
  yield takeLatest(AlbumQueryAction.request, fetchAlbumsSaga)
}