import { types } from '../types/types';

export const openModalAddNew = () => ({
  type: types.uiOpenModalAddNew,
});

export const openModalModify = (data) => ({
  type: types.uiOpenModalModify,
  payload: data,
});

export const openModalView = (data) => ({
  type: types.uiOpenModalView,
  payload: data,
});

export const closeModal = () => ({
  type: types.uiCloseModal,
});
