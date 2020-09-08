import { UserProfileData } from '../api/usersProfileQuery';

export type UsersProfileState = {
  users: UserProfileData[];
  isLoading?: boolean;
}

export const usersProfileDefaultModel: UsersProfileState = {
  users: [],
  isLoading: false,
}

export const usersProfileModel = {
  build: (params: Partial<UsersProfileState> = usersProfileDefaultModel): UsersProfileState => ({
    users: [],
    ...params,
  })
}