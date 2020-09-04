import { ActionType, createAsyncAction } from 'typesafe-actions';
import { AlbumsQueryResponse } from '../api/albumsQuery';

export const AlbumQueryAction = createAsyncAction(
  '[AlbumQueryAction] Request',
  '[AlbumQueryAction] Success',
  '[AlbumQueryAction] Error'
) <void, AlbumsQueryResponse, Error>();

export type AlbumQueryAction = ActionType<typeof AlbumQueryAction>;
