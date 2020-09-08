import { default as React, FunctionComponent } from 'react';
import * as R  from 'ramda';
import styled from 'styled-components';
import { Loading } from '../../../layout/Loading/Loading';
import { GalleryItem } from '../../api/galleryQuery';
import { GalleryListItem } from './GalleryListItem';
import { UserBarContainer } from '../../../usersProfile/components/UserBar/UserBarContainer';

const GalleryListWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  overflowY: 'auto',
  height: 'calc(100% - 120px)',
  justifyContent: 'center',
  alignContent: 'flex-start',
}));

const createGalleryList = R.map((img: GalleryItem) => <GalleryListItem key={`gallery-image=${img.albumId}-${img.id}`} {...img} />);

export type GalleryListProps = {
  galleryList: GalleryItem[];
  isGalleryEmpty: boolean;
  isLoading: boolean;
  userId: number;
};

export const GalleryList: FunctionComponent<GalleryListProps> = ({
  isGalleryEmpty,
  galleryList,
  isLoading,
  userId,
}) => {
  if (isLoading) {
    return <Loading />;
  }

  if (isGalleryEmpty) {
    return <div>Nie mam nic do pokazania</div>;
  }

  return (
    <GalleryListWrapper>
      <UserBarContainer userId={userId} />
      {createGalleryList(galleryList)}
    </GalleryListWrapper>
  );
};
  