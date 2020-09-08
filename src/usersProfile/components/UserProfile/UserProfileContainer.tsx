import { default as React, FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UserProfileData } from '../../api/usersProfileQuery';
import { selectIsUserProfileEmpty, selectUserProfile } from '../../selectors/usersProfileSelectors';
import { UsersProfileQueryActions } from '../../actions/UsersProfileQueryActions';
import { UserProfile } from './UserProfile';

const useSelectors = (userId: UserProfileData['id']) => ({
  isUserProfileEmpty: useSelector(selectIsUserProfileEmpty),
  userProfile: useSelector(selectUserProfile(userId)),
});

const useActions = () => {
  const dispatch = useDispatch();

  return {
    fetchUsersProfile: () => dispatch(UsersProfileQueryActions.request({})),
  };
};

export const UserProfileContainer: FunctionComponent = () => {
  const { userId } = useParams();
  const { isUserProfileEmpty, userProfile } = useSelectors(userId);
  const { fetchUsersProfile } = useActions();

  useEffect(() => {
    if (isUserProfileEmpty) fetchUsersProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return isUserProfileEmpty ? null : (<UserProfile userProfile={userProfile} />);
};
