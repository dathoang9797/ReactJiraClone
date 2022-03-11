import { ReducerLoadingInitialState } from '@Models/Loading.types';
import { PAGE_LOADING } from './LoadingConstant';

export const pageLoadingAction = (loading: ReducerLoadingInitialState['loading']) => {
  return {
    type: PAGE_LOADING,
    payload: loading,
  } as const;
};

export type ActionsLoading = ReturnType<typeof pageLoadingAction>;
