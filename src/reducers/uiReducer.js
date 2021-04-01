import { modalTypes } from '../types/modalTypes';
import { types } from '../types/types';

const initialState = {
  openModal: false,
  modalType: modalTypes.new,
  active: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModalAddNew:
      return {
        ...state,
        openModal: true,
        modalType: modalTypes.new,
        active: action.payload,
      };

    case types.uiOpenModalModify:
      return {
        ...state,
        openModal: true,
        modalType: modalTypes.modify,
        active: action.payload,
      };

    case types.uiOpenModalView:
      return {
        ...state,
        openModal: true,
        modalType: modalTypes.view,
        active: action.payload,
      };

    case types.uiCloseModal:
      return {
        ...state,
        openModal: false,
        active: null,
      };

    default:
      return state;
  }
};
