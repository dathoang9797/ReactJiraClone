//User Service Modal
export type UserModel = {
  id?: never;
  accessToken?: string;
  avatar?: string;
  email: string;
  passWord: string;
  name: string;
  phoneNumber: string;
};

export type ReducerUserInitialState = {
  user: UserModel;
};
