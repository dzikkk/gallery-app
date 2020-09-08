import { getType } from "typesafe-actions";
import { AlbumQueryActions } from "../AlbumQueryActions";


describe('AlbumQueryActions', () => {
  it('create request action with correct type', () => {
    expect(getType(AlbumQueryActions.request)).toEqual('[AlbumQueryAction] Request');
  });
  it('create success action with correct type', () => {
    expect(getType(AlbumQueryActions.success)).toEqual('[AlbumQueryAction] Success');
  });
  it('create failure action with correct type', () => {
    expect(getType(AlbumQueryActions.failure)).toEqual('[AlbumQueryAction] Error');
  });
});
