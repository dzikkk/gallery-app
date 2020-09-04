import { getReq } from "../../core/fetchHelpers/fetchHelpers";

export type AlbumItem = {
  userId: number,
  id: number,
  title: string,
}

export type AlbumsQueryResponse = AlbumItem[];

export const albumsQuery = () => getReq('/posts');