import { ActionType, createAsyncAction } from 'typesafe-actions';
import { GalleryQueryResponse, GalleryQueryPayload } from '../api/galleryQuery';

export const GalleryQueryActions = createAsyncAction(
  '[GalleryQueryActions] Request',
  '[GalleryQueryActions] Success',
  '[GalleryQueryActions] Error'
)<GalleryQueryPayload, GalleryQueryResponse, Error>();

export type GalleryQueryActions = ActionType<typeof GalleryQueryActions>;
