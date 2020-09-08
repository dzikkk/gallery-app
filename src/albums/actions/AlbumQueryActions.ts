import { ActionType, createAsyncAction } from 'typesafe-actions';
import { AlbumsQueryResponse } from '../api/albumsQuery';

export const AlbumQueryActions = createAsyncAction(
  '[AlbumQueryAction] Request',
  '[AlbumQueryAction] Success',
  '[AlbumQueryAction] Error'
) <void, AlbumsQueryResponse, Error>();

export type AlbumQueryActions = ActionType<typeof AlbumQueryActions>;
