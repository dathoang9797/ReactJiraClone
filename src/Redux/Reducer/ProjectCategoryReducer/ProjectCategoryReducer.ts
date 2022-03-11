import { ReducerProjectCategoryInitialState } from '@Models/ProjectCategory.types';
import { ActionsProjectCategory } from './ProjectCategoryAction';
import { FETCH_PROJECTS_CATEGORY } from './ProjectCategoryConstant';

const initialState = {
  arrProjectCategory: [],
} as ReducerProjectCategoryInitialState;

const userReducer = (state = initialState, action: ActionsProjectCategory) => {
  switch (action.type) {
    case FETCH_PROJECTS_CATEGORY: {
      return { ...state, arrProjectCategory: [...action.payload.content] };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
