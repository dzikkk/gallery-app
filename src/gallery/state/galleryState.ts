import { GalleryItem } from "../api/galleryQuery"

export type GalleryState = {
  galleryList: GalleryItem[];
  isLoading?: boolean;
}

export const galleryDefaultModel: GalleryState = {
  galleryList: [],
  isLoading: false,
}

export const galleryModel = {
  build: (params: Partial<GalleryState> = galleryDefaultModel): GalleryState => ({
    galleryList: [],
    ...params,
  })
}