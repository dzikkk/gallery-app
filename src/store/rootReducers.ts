import { combineReducers } from 'redux';
import { RootState } from './rootState';
import { connectRouter } from 'connected-react-router';
import { albumReducer } from '../albums/reducer/albumReducer';


export const rootReducer = (history: any) => combineReducers<RootState>({
  router: connectRouter(history),
  album: albumReducer,
})
