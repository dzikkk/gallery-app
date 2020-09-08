import { put, takeLatest, call } from 'redux-saga/effects';
import { UsersProfileQueryActions } from '../actions/UsersProfileQueryActions';
import { usersProfileQuery, UsersProfileQueryResponse } from '../api/usersProfileQuery';

function* fetchUsersProfileSaga() {
  const succes = UsersProfileQueryActions.success;
  const failed = UsersProfileQueryActions.failure;

  try {
    const data: UsersProfileQueryResponse = yield call(usersProfileQuery);
    yield put(succes(data));
  } catch (error) {
    yield put(failed(error));
  }
}

export function* usersProfileSaga() {
  yield takeLatest(UsersProfileQueryActions.request, fetchUsersProfileSaga);
}