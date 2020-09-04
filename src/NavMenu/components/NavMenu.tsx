import { default as React, FunctionComponent } from 'react';
import styled from 'styled-components';
import { AppTheme } from '../../layout/theme/appTheme';

const MenuWrapper = styled('div')<AppTheme>(({ theme }) => ({
  width: theme.palette.primary.main,
  height: 60,
  backgroundColor: '#50c6f1',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 20,
  boxShadow: '0px 7px 24px -10px rgba(0,0,0,0.73)',
}));

export const NavMenu: FunctionComponent = () => {

  return <MenuWrapper>HEADER</MenuWrapper>;
}