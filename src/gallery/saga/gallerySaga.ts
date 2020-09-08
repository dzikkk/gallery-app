import { put, takeLatest, call } from 'redux-saga/effects';
import { GalleryQueryActions } from '../actions/GalleryQueryActions';
import { PayloadAction } from 'typesafe-actions';
import { GalleryQueryPayload, galleryQuery, GalleryQueryResponse } from '../api/galleryQuery';

function* fetchGallerySaga(action: PayloadAction<string, GalleryQueryPayload>) {
  const succes = GalleryQueryActions.success;
  const failed = GalleryQueryActions.failure;

  try {
    const data: GalleryQueryResponse = yield call(galleryQuery, action.payload);
    yield put(succes(data));
  } catch (error) {
    yield put(failed(error));
  }
}

export function* gallerySaga() {
  yield takeLatest(GalleryQueryActions.request, fetchGallerySaga); 
}