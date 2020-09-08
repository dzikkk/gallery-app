import { getReq } from "../../core/fetchHelpers/fetchHelpers";

export type GalleryItem = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type GalleryQueryResponse = GalleryItem[];
export type GalleryQueryPayload = string | number;

export const galleryQuery = (albumId: string | number) => getReq(`/photos?albumId=${albumId}`);