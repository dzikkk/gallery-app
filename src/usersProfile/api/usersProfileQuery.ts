import { getReq } from "../../core/fetchHelpers/fetchHelpers";

export type UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type GeoPosition = {
  lat: string;
  lng: string;
};

export type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoPosition;
};

export type UserProfileData = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
};

export type UsersProfileQueryResponse = UserProfileData[];

export const usersProfileQuery = () => getReq(`/users`);