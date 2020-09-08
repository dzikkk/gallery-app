import { AlbumState, albumModel } from "../../state/albumState"
import { RootState } from "../../../store/rootState";
import { selectAlbumState, selectAlbumsList, selectIsAlbumsEmpty, selectIsLoading } from "../albumSelectors";
import { AlbumItem } from "../../api/albumsQuery";

describe('albumSelectors', () => {
  const setupState: (albumState?: Partial<AlbumState>) => RootState = (albumState = {}) => ({album: albumModel.build(albumState)} as RootState);
  
  describe('selectAlbumsList', () => {
    it('returns album from rootState', () => {
      const testAlbumState = { isLoading: false, albumsList: [] };
      const state = setupState(testAlbumState);
  
      expect(selectAlbumState(state)).toEqual(testAlbumState);
    });
  })

  describe('selectAlbumsList', () => {
    it('returns albums list from rootState', () => {
      const testAlbumsList = [
        {
          userId: 1,
          id: 1,
          title: 'test 1',
        },
        {
          userId: 2,
          id: 2,
          title: 'test 2',
        },
      ] as AlbumItem[];
      const testAlbumState = { isLoading: false, albumsList: testAlbumsList };
      const state = setupState(testAlbumState);
  
      expect(selectAlbumsList(state)).toEqual(testAlbumsList);
    });
  });

  describe('selectAlbumsList', () => {
    it('returns false when albums list is not empty', () => {
      const testAlbumsList = [
        {
          userId: 1,
          id: 1,
          title: 'test 1',
        },
        {
          userId: 2,
          id: 2,
          title: 'test 2',
        },
      ] as AlbumItem[];
      const testAlbumState = { isLoading: false, albumsList: testAlbumsList };
      const state = setupState(testAlbumState);

      expect(selectIsAlbumsEmpty(state)).toBeFalsy();
    });

    it('returns true when albums list is empty', () => {
      const testAlbumsList = [] as AlbumItem[];
      const testAlbumState = { isLoading: false, albumsList: testAlbumsList };
      const state = setupState(testAlbumState);

      expect(selectIsAlbumsEmpty(state)).toBeTruthy();
    });
  });
  
  describe('selectIsLoading', () => {
    it('returns albums list isLoading', () => {
      const testAlbumsList = [] as AlbumItem[];
      const testAlbumState = { isLoading: false, albumsList: testAlbumsList };
      const state = setupState(testAlbumState);

      expect(selectIsLoading(state)).toBeFalsy();
    });

    it('returns albums list isLoading', () => {
      const testAlbumsList = [] as AlbumItem[];
      const testAlbumState = { isLoading: true, albumsList: testAlbumsList };
      const state = setupState(testAlbumState);

      expect(selectIsLoading(state)).toBeTruthy();
    });
  });
})
