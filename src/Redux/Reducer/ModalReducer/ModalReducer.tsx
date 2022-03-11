import React from 'react';
import { TOGGLE_MODAL, OPEN_FORM_EDIT_PROJECT, SET_SUBMIT_EDIT_PROJECT } from './ModalConstant';
import { ActionsModal } from './ModalActions';
import { ReducerModalInitialState } from '@Models/Modal.types';

const initialState = {
  visible: false,
  ComponentContentDrawer: <p>Detail Content</p>,
  callBackSubmit: () => {},
} as ReducerModalInitialState;

const modalReducer = (state = initialState, action: ActionsModal) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return { ...state, visible: action.payload };
    }
    case OPEN_FORM_EDIT_PROJECT: {
      return {
        ...state,
        visible: action.payload.visible,
        ComponentContentDrawer: action.payload.ComponentContentDrawer,
      };
    }
    case SET_SUBMIT_EDIT_PROJECT: {
      state = { ...state, callBackSubmit: action.payload };
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default modalReducer;
