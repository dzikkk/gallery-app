import { FunctionComponent, useEffect } from 'react';
import { selectIsLoading, selectIsGalleryEmpty } from '../../selectors/gallerySelectors';
import { useSelector, useDispatch } from 'react-redux';
import { GalleryQueryActions } from '../../actions/GalleryQueryActions';
import { GalleryQueryPayload } from '../../api/galleryQuery';
import { useParams } from 'react-router-dom';


const useSelectors = () => ({
  isGallerysEmpty: useSelector(selectIsGalleryEmpty),
  isLoading: useSelector(selectIsLoading),
});

const useActions = () => {
  const dispatch = useDispatch();

  return {
    fetchGallerysList: (albumId: GalleryQueryPayload) => dispatch(GalleryQueryActions.request(albumId)),
  };
};

export const GalleryDataFetch: FunctionComponent = () => {
  const { isGallerysEmpty, isLoading } = useSelectors();
  const { fetchGallerysList } = useActions();
  const { albumId } = useParams();

  useEffect(() => {
    if (isGallerysEmpty && !isLoading) {
      fetchGallerysList(albumId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGallerysEmpty, isLoading, albumId]);

  return null;
}