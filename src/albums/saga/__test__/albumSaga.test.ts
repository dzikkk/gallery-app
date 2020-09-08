import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import { albumSaga } from '../albumSaga';
import { AlbumQueryActions } from '../../actions/AlbumQueryActions';
import { albumsQuery } from '../../api/albumsQuery';
import { UsersProfileQueryActions } from '../../../usersProfile/actions/UsersProfileQueryActions';

describe('albumSaga', () => {
  it('dispatches success action', () => {
    const response = [{
        userId: 1,
        id: 1,
        title: 'test 1',
      },
      {
        userId: 2,
        id: 2,
        title: 'test 2',
      }]

    return expectSaga(albumSaga)
      .provide([
        [call(albumsQuery), response],
      ])
      .put(AlbumQueryActions.success(response))
      .put(UsersProfileQueryActions.request({}))
      .dispatch(AlbumQueryActions.request())
      .silentRun();
  });

  it('dispatches failure action', () => {
    const failure = new Error('error');

    return expectSaga(albumSaga)
      .provide([[call(albumsQuery), throwError(failure)]])
      .put(AlbumQueryActions.failure(failure))
      .dispatch(AlbumQueryActions.request())
      .silentRun();
  });
})