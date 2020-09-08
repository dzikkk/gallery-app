import * as React from 'react';
import { NavMenu } from './NavMenu';
import { useHistory } from 'react-router-dom';

export const NavMenuContainer = () => {
  const history = useHistory();
  const onGoBack = () => history.goBack();

  return <NavMenu onGoBack={onGoBack} />;
}
