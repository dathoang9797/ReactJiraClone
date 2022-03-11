import { AppThunk } from '@Redux/store';
import { UserModel } from '@Models/User.types';
import { signInUserAction } from '@Redux/Reducer/UserReducer/UserAction';
import { pageLoadingAction } from '@Redux/Reducer/LoadingReducer/LoadingAction';
import { TOKEN, USER_LOGIN } from '@Utils/Constants/settingSystems';
import UserServiceAPI from '@Services/UserService';
import History from '@Utils/libs/History';
import axios from 'axios';
import { countdown } from '@Utils/TimeOut/countdown';
import { checkError } from '@Utils/Error/handleErrors';

export const signInUserThunk = (userSignIn: Pick<UserModel, 'email' | 'passWord'>): AppThunk => {
  return async (dispatchThunk) => {
    dispatchThunk(pageLoadingAction(true));
    const result = await UserServiceAPI.signIn(userSignIn);

    if (axios.isAxiosError(result)) {
      dispatchThunk(pageLoadingAction(false));
      await countdown(500);
      return checkError(result);
    }

    if (!result) {
      dispatchThunk(pageLoadingAction(false));
      await countdown(500);
      throw new Error('Sign in fail');
    }

    await countdown(500);
    localStorage.setItem(TOKEN, result?.data.content.accessToken ?? '');
    localStorage.setItem(USER_LOGIN, JSON.stringify(result?.data));
    dispatchThunk(pageLoadingAction(false));
    dispatchThunk(signInUserAction(result.data));
    History.push('/');
  };
};
