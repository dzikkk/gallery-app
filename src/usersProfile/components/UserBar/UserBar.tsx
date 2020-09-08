import { default as React, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppTheme } from '../../../layout/theme/appTheme';

const UserBarWrapper = styled('div')<AppTheme>(({ theme }) => ({
  width: '100%',
  height: 60,
  backgroundColor: theme.palette.elements.accent,
}));

const UserNameLink = styled(Link)<AppTheme>(({ theme }) => ({
  transition: 'color .3s ease-in, background .3s ease-in',
  textDecoration: 'none',
  lineHeight: '60px',
  textAlign: 'center',
  display: 'block',
  color: theme.palette.text.primary,
  ...theme.typography.h3,
  '&:hover': {
    backgroundColor: theme.palette.elements.dark,
    color: theme.palette.text.light,
  },
}));

export type UserBarProps = {
  userName: string;
  userId: number;
};

export const UserBar: FunctionComponent<UserBarProps> = ({ userName, userId }) => (
  <UserBarWrapper>
    <UserNameLink to={`/users/${userId}`}>{userName}</UserNameLink>
  </UserBarWrapper>
);
  