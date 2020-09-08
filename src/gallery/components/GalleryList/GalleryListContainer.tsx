import { default as React, FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectGalleryList, selectIsGalleryEmpty } from '../../selectors/gallerySelectors';
import { GalleryQueryActions } from '../../actions/GalleryQueryActions';
import { GalleryItem } from '../../api/galleryQuery';
import { useParams } from 'react-router-dom';
import { GalleryList } from './GalleryList';
import { GalleryClearAction } from '../../actions/GalleryClearAction';


const useSelectors = () => ({
  isGalleryEmpty: useSelector(selectIsGalleryEmpty),
  galleryList: useSelector(selectGalleryList),
  isLoading: useSelector(selectIsLoading),
});

const useActions = () => {
  const dispatch = useDispatch();

  return {
    fetchAlbumsList: (albumId: GalleryItem['albumId']) => dispatch(GalleryQueryActions.request(albumId)),
    clearGallery: () => dispatch(GalleryClearAction.clear())
  };
};

export const GalleryListContainer: FunctionComponent = () => {
  const { isGalleryEmpty, galleryList, isLoading } = useSelectors();
  const { fetchAlbumsList, clearGallery } = useActions();
  const { albumId, userId } = useParams();

  useEffect(() => {
    fetchAlbumsList(albumId);

    return () => {
      clearGallery();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <GalleryList galleryList={galleryList} isLoading={isLoading} isGalleryEmpty={isGalleryEmpty} userId={userId} />;
}