import { ActionType, createAsyncAction } from 'typesafe-actions';
import { UsersProfileQueryResponse } from '../api/usersProfileQuery';

export const UsersProfileQueryActions = createAsyncAction(
  '[UsersProfileQueryActions] Request',
  '[UsersProfileQueryActions] Success',
  '[UsersProfileQueryActions] Error'
)<{}, UsersProfileQueryResponse, Error>();

export type UsersProfileQueryActions = ActionType<typeof UsersProfileQueryActions>;
