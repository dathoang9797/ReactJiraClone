import { ReducerModalInitialState } from '@Models/Modal.types';
import {
  TOGGLE_MODAL,
  OPEN_FORM_EDIT_PROJECT,
  SET_SUBMIT_EDIT_PROJECT,
} from '@Redux/Reducer/ModalReducer/ModalConstant';

export const toggleAction = (payload: ReducerModalInitialState['visible']) => {
  return {
    type: TOGGLE_MODAL,
    payload,
  } as const;
};

export const openFormEditProject = (payload: Omit<ReducerModalInitialState, 'callBackSubmit'>) => {
  return {
    type: OPEN_FORM_EDIT_PROJECT,
    payload,
  } as const;
};

export const setSubmitEditProject = (payload: ReducerModalInitialState['callBackSubmit']) => {
  return {
    type: SET_SUBMIT_EDIT_PROJECT,
    payload,
  } as const;
};

export type ActionsModal = ReturnType<
  typeof toggleAction | typeof openFormEditProject | typeof setSubmitEditProject
>;
