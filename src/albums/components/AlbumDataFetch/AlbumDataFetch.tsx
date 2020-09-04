import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlbumQueryAction } from "../../actions/AlbumQueryActions";
import { selectIsAlbumsEmpty, selectIsLoading } from "../../selectors/albumSelectors";


const useSelectors = () => ({
  isAlbumsEmpty: useSelector(selectIsAlbumsEmpty),
  isLoading: useSelector(selectIsLoading),
});

const useActions = () => {
  const dispatch = useDispatch();

  return {
    fetchAlbumsList: () => dispatch(AlbumQueryAction.request()),
  }
};

export const AlbumDataFetch: FunctionComponent = () => {
  const { isAlbumsEmpty, isLoading } = useSelectors();
  const { fetchAlbumsList } = useActions();
 
  useEffect(() => {
    if (isAlbumsEmpty && !isLoading) {
      fetchAlbumsList();
    }
  }, [isAlbumsEmpty, isLoading]);

  return null;
}