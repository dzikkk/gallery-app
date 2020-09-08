import { default as React, FunctionComponent, useEffect } from 'react';
import { AlbumQueryActions } from '../../actions/AlbumQueryActions';
import { selectIsAlbumsEmpty, selectAlbumsList, selectIsLoading } from '../../selectors/albumSelectors';
import { AlbumsList } from './AlbumsList';
import { useSelector, useDispatch } from 'react-redux';


const useSelectors = () => ({
  isAlbumsEmpty: useSelector(selectIsAlbumsEmpty),
  albumsList: useSelector(selectAlbumsList),
  isLoading: useSelector(selectIsLoading),
});

const useActions = () => {
  const dispatch = useDispatch();

  return {
    fetchAlbumsList: () => dispatch(AlbumQueryActions.request()),
  }
};

export const AlbumsListContainer: FunctionComponent = () => {
  const { isAlbumsEmpty, albumsList, isLoading } = useSelectors();
  const { fetchAlbumsList } = useActions();

  useEffect(() => {
    if (isAlbumsEmpty && !isLoading) {
      fetchAlbumsList();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAlbumsEmpty, isLoading]);

  return (
    <AlbumsList
      isLoading={isLoading}
      albumsList={albumsList}
      isAlbumsEmpty={isAlbumsEmpty}
    />
  );
}