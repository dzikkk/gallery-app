import { RouterState } from 'connected-react-router';
import { AlbumState, albumModel } from '../albums/state/albumState';
import { history } from './history';
import { galleryModel, GalleryState } from '../gallery/state/galleryState';
import { usersProfileModel, UsersProfileState } from '../usersProfile/state/usersProfileState';

export type RootState = {
  album: AlbumState,
  router: RouterState,
  gallery: GalleryState,
  usersProfile: UsersProfileState,
}

export const rootState: RootState = {
  router: history,
  album: albumModel.build(),
  gallery: galleryModel.build(),
  usersProfile: usersProfileModel.build(),
}