import { default as React, FunctionComponent } from 'react';
import styled from 'styled-components';
import { H4 } from '../../../layout/Typography/Typography';
import { AlbumItem } from '../../api/albumsQuery';
import { Link } from 'react-router-dom';
import { ReactComponent as PictureIcon } from './assets/pictures.svg';

const AlbumItemWrapper = styled(Link)(({ theme }) => ({
  transition: 'box-shadow .15s ease-in, transform .2s ease-in',
  width: 180,
  minHeight: 180,
  maxHeight: 260,
  display: 'block',
  margin: 4,
  position: 'relative',
  backgroundColor: theme.palette.elements.secondary,
  borderRadius: 4,
  border: `1px solid ${theme.palette.elements.lighter}`,
  padding: '16px 8px',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  textDecoration: 'none',

  '&:hover': {
    boxShadow: '0px 0px 16px 3px rgba(0,0,0,0.75)',
    transform: 'scale(1.05, 1.05)',
  },
}));

const Icon = styled('div')(({ theme }) => ({
  width: 65,
  height: 65,
  minHeight: 65,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: 16,
}));

export type AlbumsListItemProps = {
  album: AlbumItem;
};

export const AlbumsListItem: FunctionComponent<AlbumsListItemProps> = ({ album, ...rest }) => (
  <AlbumItemWrapper to={`/album/${album.id}/${album.userId}`} {...rest}>
    <Icon><PictureIcon width={65} height={65} /></Icon>
    <H4 style={{ textAlign: 'center' }}>{album.title}</H4>
  </AlbumItemWrapper>
);
