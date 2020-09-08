import { default as React, FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserBar } from './UserBar';
import { selectUserName, selectIsUserProfileEmpty } from '../../selectors/usersProfileSelectors';
import { UsersProfileQueryActions } from '../../actions/UsersProfileQueryActions';

const useSelectors = (userId: number) => ({
  userName: useSelector(selectUserName(userId)),
  isUsersProfileEmpty: useSelector(selectIsUserProfileEmpty),
});

const useActions = () => {
  const dispatch = useDispatch();
  return ({
    fetchUsers: () => dispatch(UsersProfileQueryActions.request({})),
  });
};

export type UserBarProps = {
  userId: number;
};

export const UserBarContainer: FunctionComponent<UserBarProps> = ({ userId }) => {
  const { userName, isUsersProfileEmpty } = useSelectors(userId);
  const { fetchUsers } = useActions();

  useEffect(() => {
    if (isUsersProfileEmpty) fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return <UserBar userId={userId} userName={userName} />;
};