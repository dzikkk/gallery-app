import * as React from 'react';
import { DefaultTemplate } from '../../layout/DefaultTemplate/DefaultTemplate';
import { Footer } from '../../layout/Footer/Footer';
import { NavMenuContainer } from '../../NavMenu/components/NavMenuContainer';
import { AlbumDataFetch } from '../components/AlbumDataFetch/AlbumDataFetch';
import { AlbumsListContainer } from '../components/AlbumsList/AlbumsListContainer';

export const AlbumScene: React.FunctionComponent = () => (
  <>
    <AlbumDataFetch />
    <DefaultTemplate header={NavMenuContainer} footer={Footer}>
      <AlbumsListContainer />
    </DefaultTemplate>
  </>
)