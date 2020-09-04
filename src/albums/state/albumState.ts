import { AlbumItem } from "../api/albumsQuery"

export type AlbumState = {
  albumsList: AlbumItem[];
  isLoading?: boolean;
}

export const albumDefaultModel: AlbumState = {
  albumsList: [],
  isLoading: false,
}

export const albumModel = {
  build: (params: Partial<AlbumState> = albumDefaultModel): AlbumState => ({
    albumsList: [],
    ...params,
  })
}