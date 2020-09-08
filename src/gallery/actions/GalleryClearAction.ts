import { ActionType, createAction } from 'typesafe-actions';

export const GalleryClearAction = {
  clear: createAction('[GalleryClearAction] Clear')()
};

export type GalleryClearAction = ActionType<typeof GalleryClearAction>;
