import * as React from 'react';
import { DefaultTemplate } from '../../layout/DefaultTemplate/DefaultTemplate';
import { NavMenuContainer } from '../../NavMenu/components/NavMenuContainer';
import { AlbumDataFetch } from '../components/AlbumDataFetch/AlbumDataFetch';

export const AlbumScene: React.FunctionComponent = () => (
  <>
    <AlbumDataFetch />
    <DefaultTemplate header={NavMenuContainer}>TEST</DefaultTemplate>
  </>
)