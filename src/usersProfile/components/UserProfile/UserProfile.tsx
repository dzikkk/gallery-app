import { default as React, FunctionComponent } from 'react';
import styled from 'styled-components';
import { UserProfileData } from '../../api/usersProfileQuery';

const UserProfileWrapper = styled('div')(({ theme }) => ({
  height: 60,
}));

export type UserProfileProps = {
  userProfile: UserProfileData;
};

export const UserProfile: FunctionComponent<UserProfileProps> = ({ userProfile }) =>{
  
  return (
  <UserProfileWrapper>{userProfile.address.city}</UserProfileWrapper>
)};
