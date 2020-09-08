import { getType } from "typesafe-actions";
import { GalleryQueryActions } from "../actions/GalleryQueryActions";
import { galleryModel, GalleryState } from "../state/galleryState";
import { GalleryClearAction } from "../actions/GalleryClearAction";

export function galleryReducer(
  state: GalleryState = galleryModel.build(),
  action: GalleryQueryActions | GalleryClearAction,
): GalleryState {
  switch(action.type) {
    case getType(GalleryQueryActions.request):
      return {
        ...state,
        isLoading: true,
      }
    case getType(GalleryQueryActions.success):
      return {
        isLoading: false,
        galleryList: action.payload,
      }
    case getType(GalleryClearAction.clear):
      return {
        isLoading: false,
        galleryList: [],
      }
  }

  return state;
}
