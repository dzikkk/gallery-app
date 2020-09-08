import { getType } from "typesafe-actions";
import { UsersProfileQueryActions } from "../actions/UsersProfileQueryActions";
import { usersProfileModel, UsersProfileState } from "../state/usersProfileState";

export function usersProfileReducer(
  state: UsersProfileState = usersProfileModel.build(),
  action: UsersProfileQueryActions
): UsersProfileState {
  switch (action.type) {
    case getType(UsersProfileQueryActions.request):
      return {
        ...state,
        isLoading: true,
      };
    case getType(UsersProfileQueryActions.success):
      return {
        isLoading: false,
        users: action.payload,
      };
  }

  return state;
}
