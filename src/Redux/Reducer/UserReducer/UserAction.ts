import { USER_SIGNIN } from './UserConstant';
import { UserModel } from '@Models/User.types';
import { ResponseModalAPI } from '@Models/Global.types';

export const signInUserAction = (user: ResponseModalAPI<UserModel>) => {
  return {
    type: USER_SIGNIN,
    payload: user,
  } as const;
};

export type ActionsUser = ReturnType<typeof signInUserAction>;
