import { ReducerProjectInitialState } from '@Models/Project.types';
import { ActionsProject } from './ProjectAction';
import { CREATE_PROJECT } from './ProjectConstant';

const initialState = {} as ReducerProjectInitialState;

const userReducer = (state = initialState, action: ActionsProject) => {
  switch (action.type) {
    case CREATE_PROJECT: {
      state = { project: { ...action.payload.content } };
      return { ...state };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
