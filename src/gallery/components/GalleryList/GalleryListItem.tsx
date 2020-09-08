import { default as React, FunctionComponent } from "react";
import styled from "styled-components";
import { GalleryItem } from "../../api/galleryQuery";

const GalleryItemWrapper = styled('img')(({ theme }) => ({
  transition: 'box-shadow .15s ease-in, transform .2s ease-in',
  width: 160,
  minHeight: 160,
  maxHeight: 160,
  display: 'flex',
  position: 'relative',
  backgroundColor: 'aqua',
  borderRadius: 2,
  border: 'none',
  padding: 2,
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  textDecoration: 'none',

  '&:hover': {
    boxShadow: '0px 0px 16px 3px rgba(0,0,0,0.75)',
    transform: 'scale(1.35, 1.35)',
    zIndex: 1,
  },
}));

type GalleryListProps = GalleryItem;

export const GalleryListItem: FunctionComponent<GalleryListProps> = ({ thumbnailUrl, title, url, ...rest }) => (
  <GalleryItemWrapper src={thumbnailUrl} alt={title} />
);
