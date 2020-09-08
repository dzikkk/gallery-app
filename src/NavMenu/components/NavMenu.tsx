import { default as React, FunctionComponent } from 'react';
import styled from 'styled-components';
import { AppTheme } from '../../layout/theme/appTheme';
import { Link } from 'react-router-dom';

const MenuWrapper = styled('div')<AppTheme>(({ theme }) => ({
  height: 60,
  backgroundColor: theme.palette.elements.main,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 20,
  boxShadow: '0px 7px 24px -10px rgba(0,0,0,0.73)',
  position: 'relative',
  zIndex: 2,
  justifyContent: 'center',
}));

const GoBackButton = styled('button')(({ theme }) => ({
  position: 'absolute',
    left: 0,
    border: 0,
    marginLeft: 20,
    height: 40,
    width: 180,
    fontSize: 28,
}))

const AppLogo = styled(Link)<AppTheme>(({ theme }) => ({
  textDecoration: 'none',
  ...theme.typography.h2,
}));

export type NavMenuProps = {
  onGoBack: () => void;
};
export const NavMenu: FunctionComponent<NavMenuProps> = ({ onGoBack }) => {

  return (
    <MenuWrapper>
      <GoBackButton onClick={onGoBack}>BACK</GoBackButton>
      <AppLogo to={'/'}> XyZ Gallery </AppLogo>
    </MenuWrapper>
  );
}