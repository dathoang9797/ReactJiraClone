import { ThunkAction, Action, configureStore, createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import UserReducer from '@Redux/Reducer/UserReducer/UserReducer';
import LoadingReducer from '@Redux/Reducer/LoadingReducer';
import ProjectReducer from '@Redux/Reducer/ProjectReducer/ProjectReducer';
import ProjectCategoryReducer from '@Redux/Reducer/ProjectCategoryReducer/ProjectCategoryReducer';
import ProjectCyberBugsReducer from '@Redux/Reducer/ProjectCyberBugsReducer/ProjectCyberBugsReducer';
import ModalReducer from '@Redux/Reducer/ModalReducer/ModalReducer';

const rootReducer = combineReducers({
  UserReducer,
  LoadingReducer,
  ProjectReducer,
  ProjectCategoryReducer,
  ProjectCyberBugsReducer,
  ModalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type RootAction = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
