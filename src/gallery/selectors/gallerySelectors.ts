import * as R from 'ramda';
import { createSelector } from 'reselect';
import {RootState} from '../../store/rootState';

export const selectGalleryState = (state: RootState) => state.gallery;

export const selectGalleryList = createSelector([selectGalleryState], R.pathOr([], ['galleryList']));
export const selectIsGalleryEmpty = createSelector([selectGalleryList], list => list.length === 0);
export const selectIsLoading = createSelector([selectGalleryState], R.pathOr(false, ['isLoading']));