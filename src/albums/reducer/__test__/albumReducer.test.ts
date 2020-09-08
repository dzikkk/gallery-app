import { AlbumQueryActions } from "../../actions/AlbumQueryActions";
import { AlbumState, albumModel } from "../../state/albumState";
import { albumReducer } from "../albumReducer";
import { AlbumItem } from "../../api/albumsQuery";

describe('albumReducer', () => {
  it('change isLoading while request action started', () => {
    const action = AlbumQueryActions.request();
    const expectedState = {
      isLoading: true,
    } as AlbumState;
    
    expect(albumReducer({} as AlbumState, action)).toEqual(expectedState);
  })

  it('add response payload to albumsList', () => {
    const testPayload = [
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
    const action = AlbumQueryActions.success(testPayload);
    const expectedState = {
      isLoading: false,
      albumsList: testPayload,
    } as AlbumState;
    
    expect(albumReducer(albumModel.build({ albumsList: [] }), action)).toEqual(expectedState);
  })
})
