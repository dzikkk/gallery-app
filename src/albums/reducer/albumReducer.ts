import { getType } from "typesafe-actions";
import { AlbumQueryActions } from "../actions/AlbumQueryActions";
import { albumModel, AlbumState } from "../state/albumState";
import * as R from 'ramda';

export function albumReducer(
  state: AlbumState = albumModel.build(),
  action: AlbumQueryActions,
): AlbumState {
  switch(action.type) {
    case getType(AlbumQueryActions.request):
      return {
        ...state,
        isLoading: true,
      }
    case getType(AlbumQueryActions.success):
      return {
        isLoading: false,
        albumsList: R.sortBy(R.prop('userId'), [ ...state.albumsList, ...action.payload ]),
      }
  }

  return state;
}
