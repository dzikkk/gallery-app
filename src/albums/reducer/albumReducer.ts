import { getType } from "typesafe-actions";
import { AlbumQueryAction } from "../actions/AlbumQueryActions";
import { albumModel, AlbumState } from "../state/albumState";

export function albumReducer(
  state: AlbumState = albumModel.build(),
  action: AlbumQueryAction,
): AlbumState {
  switch(action.type) {
    case getType(AlbumQueryAction.request):
      return {
        ...state,
        isLoading: true,
      }
    case getType(AlbumQueryAction.success):
      return {
        isLoading: false,
        albumsList: [ ...state.albumsList, ...action.payload ]
      }
  }

  return state;
}
