import { default as React, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Loading } from '../../../layout/Loading/Loading';
import { AlbumItem } from '../../api/albumsQuery';
import * as R  from 'ramda';
import { AlbumsListItem } from './AlbumListItem';
import { UserBarContainer } from '../../../usersProfile/components/UserBar/UserBarContainer';

const AlbumsListWrapper = styled('div')(({ theme }) => ({
    overflowY: 'auto',
    overflowX: 'hidden',
    height: 'calc(100% - 120px)',
}));

const AuthorAlbumsWrapper = styled('div')(({ theme }) => ({
  width: '100vw',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
}));


const createAlbumItem = (album: AlbumItem) => (<AlbumsListItem key={`album-item-${album.id}`} album={album} />);
const transformAlbumsList = (albums: AlbumItem[]) => [
  <UserBarContainer key={`author-header-${albums[0].userId}`} userId={albums[0].userId} />,
  <AuthorAlbumsWrapper key={`albums-wrapper-${albums[0].userId}`}>
    {R.map(createAlbumItem)(albums)}
  </AuthorAlbumsWrapper>,
];
//@ts-ignore
const createAlbumsList = R.map(R.map(transformAlbumsList), R.groupWith(R.eqProps('userId')));


export type AlbumsListProps = {
  isAlbumsEmpty: boolean,
  albumsList: AlbumItem[],
  isLoading: boolean,
}

export const AlbumsList: FunctionComponent<AlbumsListProps> = ({
  isAlbumsEmpty,
  albumsList,
  isLoading,
}) => {
  if (isLoading) {
    return <Loading />;
  }

  if (isAlbumsEmpty) {
    return <div>Nie mam nic do pokazania</div>;
  }

  return <AlbumsListWrapper>{createAlbumsList(albumsList)}</AlbumsListWrapper>;
}
  