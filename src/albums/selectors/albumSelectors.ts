import * as R from 'ramda';
import { createSelector } from 'reselect';
import {RootState} from '../../store/rootState';

export const selectAlbumState = (state: RootState) => state.album;

export const selectAlbumsList = createSelector([selectAlbumState], albumState => R.pathOr([], ['albumsList'], albumState));
export const selectIsAlbumsEmpty = createSelector([selectAlbumsList], albums => albums.length === 0);
export const selectIsLoading = createSelector([selectAlbumState], albumsState => albumsState.isLoading);