import { connect, ConnectedProps } from 'react-redux';
import { FormValues } from '@Models/Global.types';
import { UserModel } from '@Models/User.types';
import { RootState, RootAction } from '@Redux/store';
import { signInUserThunk } from '@Redux/Reducer/UserReducer/UserThunk';
import { fetchProjectsCategoryThunk } from '@Redux/Reducer/ProjectCategoryReducer/ProjectCategoryThunk';
import {
  createProjectThunk,
  createProjectAuthorThunk,
} from '@Redux/Reducer/ProjectReducer/ProjectThunk';
import { fetchListProjects } from '@Redux/Reducer/ProjectCyberBugsReducer/ProjectCyberBugsThunk';
import {
  toggleAction,
  openFormEditProject,
  setSubmitEditProject,
} from '@Redux/Reducer/ModalReducer/ModalActions';
import { ReducerModalInitialState } from '@Models/Modal.types';

const mapState = (state: RootState) => ({
  userState: {
    user: state.UserReducer.user,
  },
  loadDingState: {
    loading: state.LoadingReducer.loading,
  },
  projectsCategoryState: {
    projects: state.ProjectCategoryReducer.arrProjectCategory,
  },
  projectCyberBugsState: {
    projectList: state.ProjectCyberBugsReducer.projectList,
  },
  modalState: {
    visible: state.ModalReducer.visible,
    ComponentContentDrawer: state.ModalReducer.ComponentContentDrawer,
    callBackSubmit: state.ModalReducer.callBackSubmit,
  },
});

const mapDispatch = (dispatch: RootAction) => {
  return {
    userDispatch: {
      signInUser: (payload: Pick<UserModel, 'email' | 'passWord'>) =>
        dispatch(signInUserThunk(payload)),
    },
    projectsCategoryDispatch: {
      fetchProjectsCategory: () => dispatch(fetchProjectsCategoryThunk()),
    },
    projectDispatch: {
      createProjectThunk: (payload: FormValues) => dispatch(createProjectThunk(payload)),
      createProjectAuthorThunk: (payload: FormValues) =>
        dispatch(createProjectAuthorThunk(payload)),
    },
    projectCyberBugsDispatch: {
      fetchListProjects: () => dispatch(fetchListProjects()),
    },
    modalDispatch: {
      toggleModal: (payload: ReducerModalInitialState['visible']) =>
        dispatch(toggleAction(payload)),
      openEditFormModal: (payload: Omit<ReducerModalInitialState, 'callBackSubmit'>) =>
        dispatch(openFormEditProject(payload)),
      setSubmitEditProject: (payload: ReducerModalInitialState['callBackSubmit']) => {
        dispatch(setSubmitEditProject(payload));
      },
    },
  };
};

export const connector = connect(mapState, mapDispatch);
export type PropsFromReducer = ConnectedProps<typeof connector>;
