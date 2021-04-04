import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { getError } from '../helpers/getError';
import { types } from '../types/types';
import { closeModal } from './uiActions';

export const roleStartList = () => {
  return async (dispatch) => {
    dispatch(roleStartListAll());
    const resp = await fetchWithToken('roles');
    const body = await resp.json();

    if (body.ok) {
      dispatch(roleListAll(body.roles));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const roleStartListAll = () => ({
  type: types.roleStartList,
});

const roleListAll = (data) => {
  return {
    type: types.roleListAll,
    payload: data,
  };
};

export const roleStartAddNew = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken('roles', data, 'POST');
    const body = await resp.json();

    if (body.ok) {
      dispatch(roleAddNew(body.role));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const roleAddNew = (data) => ({
  type: types.roleAddNew,
  payload: data,
});

export const roleStartModify = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`roles/${data.id}`, data, 'PUT');
    const body = await resp.json();

    if (body.ok) {
      dispatch(roleModify(body.role));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const roleModify = (data) => ({
  type: types.roleModify,
  payload: data,
});

export const roleStartDelete = (id) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`roles/${id}`, {}, 'DELETE');
    const body = await resp.json();

    if (body.ok) {
      dispatch(roleDelete(body.role));
      dispatch(closeModal());
      Swal.fire('Eliminar Rol', 'El rol fue eliminado', 'success');
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const roleDelete = (data) => ({
  type: types.roleDelete,
  payload: data,
});
