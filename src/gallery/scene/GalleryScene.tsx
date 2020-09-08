import { default as React, FunctionComponent } from 'react';
import { DefaultTemplate } from '../../layout/DefaultTemplate/DefaultTemplate';
import { Footer } from '../../layout/Footer/Footer';
import { NavMenuContainer } from '../../NavMenu/components/NavMenuContainer';
import { GalleryDataFetch } from '../components/GalleryDataFetch/GalleryDataFetch';
import { GalleryListContainer } from '../components/GalleryList/GalleryListContainer';

export const GalleryScene: FunctionComponent = () => (
  <>
    <GalleryDataFetch />
    <DefaultTemplate header={NavMenuContainer} footer={Footer}>
      <GalleryListContainer />
    </DefaultTemplate>
  </>
)