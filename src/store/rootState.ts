import { RouterState } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { AlbumState, albumModel } from '../albums/state/albumState';

export type RootState = {
  album: AlbumState,
  router: RouterState
}

export const rootState: RootState = {
  router: createBrowserHistory(),
  album: albumModel.build(),
}