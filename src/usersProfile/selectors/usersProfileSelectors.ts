import * as R from 'ramda';
import { createSelector } from 'reselect';
import {RootState} from '../../store/rootState';
import { UserProfileData } from '../api/usersProfileQuery';

export const selectUserProfileState = (state: RootState) => state.usersProfile;
export const selectUsers = createSelector([selectUserProfileState], R.pathOr([], ['users']));
export const selectIsUserProfileEmpty = createSelector([selectUsers], users => users.length === 0);
export const selectUserProfile = (userId: number) => createSelector(
  [selectUsers],
  users => {
    const userIdx = R.findIndex(R.propEq('id', Number(userId)))(users);
    return R.pathOr({} as UserProfileData, [userIdx], users);
  });
export const selectUserName = (userId: number) =>
  createSelector([selectUserProfile(userId)], R.pathOr('' ,['name']));
export const selectIsLoading = createSelector([selectUserProfileState], R.pathOr(false, ['isLoading']));