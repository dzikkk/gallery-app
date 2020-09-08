import { default as React, FunctionComponent } from 'react';
import { DefaultTemplate } from '../../layout/DefaultTemplate/DefaultTemplate';
import { Footer } from '../../layout/Footer/Footer';
import { NavMenuContainer } from '../../NavMenu/components/NavMenuContainer';
import { UserProfileContainer } from '../components/UserProfile/UserProfileContainer';

export const UserProfileScene: FunctionComponent = () => (
  <>
    <DefaultTemplate header={NavMenuContainer} footer={Footer}>
      <UserProfileContainer />
    </DefaultTemplate>
  </>
);