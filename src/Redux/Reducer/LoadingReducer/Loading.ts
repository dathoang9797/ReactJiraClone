import { ReducerLoadingInitialState } from '@Models/Loading.types';
import { ActionsLoading } from './LoadingAction';
import { PAGE_LOADING } from './LoadingConstant';

const initialState = { loading: false } as ReducerLoadingInitialState;

const loadingReducer = (state = initialState, action: ActionsLoading) => {
  switch (action.type) {
    case PAGE_LOADING: {
      state = { loading: action.payload };
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default loadingReducer;
