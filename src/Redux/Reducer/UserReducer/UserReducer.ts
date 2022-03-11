import { ActionsUser } from './UserAction';
import { USER_SIGNIN } from './UserConstant';
import { ReducerUserInitialState, UserModel } from '@Models/User.types';
import { USER_LOGIN } from '@Utils/Constants/settingSystems';
const initialState = { user: {} } as ReducerUserInitialState;

let userLogin = {} as UserModel;
if (localStorage.getItem(USER_LOGIN)) {
  userLogin = JSON.parse(localStorage.getItem(USER_LOGIN) ?? '');
}

const userReducer = (state = initialState, action: ActionsUser) => {
  switch (action.type) {
    case USER_SIGNIN: {
      return { ...state, user: action.payload.content };
    }

    default: {
      return { ...state, user: userLogin };
    }
  }
};

export default userReducer;
