import { put, takeLatest, call } from 'redux-saga/effects';
import { AlbumQueryActions } from '../actions/AlbumQueryActions';
import { albumsQuery, AlbumsQueryResponse } from '../api/albumsQuery';
import { UsersProfileQueryActions } from '../../usersProfile/actions/UsersProfileQueryActions';

function* fetchAlbumsSaga() {
  const succes = AlbumQueryActions.success;
  const failed = AlbumQueryActions.failure;

  try {
    const data: AlbumsQueryResponse = yield call(albumsQuery);
    yield put(succes(data));
    yield put(UsersProfileQueryActions.request({}));
  } catch (error) {
    yield put(failed(error));
  }
}

export function* albumSaga() {
  yield takeLatest(AlbumQueryActions.request, fetchAlbumsSaga)
}