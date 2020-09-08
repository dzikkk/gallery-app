import { combineReducers } from 'redux';
import { RootState } from './rootState';
import { connectRouter } from 'connected-react-router';
import { albumReducer } from '../albums/reducer/albumReducer';
import { galleryReducer } from '../gallery/reducer/galleryReducer';
import { usersProfileReducer } from '../usersProfile/reducer/usersProfileReducer';

export const rootReducer = (history: any) => combineReducers<RootState>({
  router: connectRouter(history),
  album: albumReducer,
  gallery: galleryReducer,
  usersProfile: usersProfileReducer,
})
