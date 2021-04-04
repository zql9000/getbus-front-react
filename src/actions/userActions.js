import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { getError } from '../helpers/getError';
import { types } from '../types/types';
import { closeModal } from './uiActions';

export const userStartList = () => {
  return async (dispatch) => {
    dispatch(userStartListAll());
    const resp = await fetchWithToken('users');
    const body = await resp.json();

    if (body.ok) {
      dispatch(userListAll(body.users));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const userStartListAll = () => ({
  type: types.userStartList,
});

const userListAll = (data) => {
  return {
    type: types.userListAll,
    payload: data,
  };
};

export const userStartAddNew = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken('users', data, 'POST');
    const body = await resp.json();

    if (body.ok) {
      dispatch(userAddNew(body.user));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const userAddNew = (data) => ({
  type: types.userAddNew,
  payload: data,
});

export const userStartModify = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`users/${data.id}`, data, 'PUT');
    const body = await resp.json();

    if (body.ok) {
      dispatch(userModify(body.user));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const userModify = (data) => ({
  type: types.userModify,
  payload: data,
});

export const userStartDelete = (id) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`users/${id}`, {}, 'DELETE');
    const body = await resp.json();

    if (body.ok) {
      dispatch(userDelete(body.user));
      dispatch(closeModal());
      Swal.fire('Eliminar Usuario', 'El usuario fue eliminado', 'success');
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const userDelete = (data) => ({
  type: types.userDelete,
  payload: data,
});
