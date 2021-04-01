import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { getError } from '../helpers/getError';
import { types } from '../types/types';
import { closeModal } from './uiActions';

export const provinceStartList = () => {
  return async (dispatch) => {
    dispatch(provinceStartListAll());
    const resp = await fetchWithToken('provinces');
    const body = await resp.json();

    if (body.ok) {
      dispatch(provinceListAll(body.provinces));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const provinceStartListAll = () => ({
  type: types.provinceStartList,
});

const provinceListAll = (data) => {
  return {
    type: types.provinceListAll,
    payload: data,
  };
};

export const provinceStartAddNew = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken('provinces', data, 'POST');
    const body = await resp.json();

    if (body.ok) {
      dispatch(provinceAddNew(body.province));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const provinceAddNew = (data) => ({
  type: types.provinceAddNew,
  payload: data,
});

export const provinceStartModify = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`provinces/${data.id}`, data, 'PUT');
    const body = await resp.json();

    if (body.ok) {
      dispatch(provinceModify(body.province));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const provinceModify = (data) => ({
  type: types.provinceModify,
  payload: data,
});

export const provinceStartDelete = (id) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`provinces/${id}`, {}, 'DELETE');
    const body = await resp.json();

    if (body.ok) {
      dispatch(provinceDelete(body.province));
      dispatch(closeModal());
      Swal.fire('Eliminar Provincia', 'La provincia fue eliminada', 'success');
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const provinceDelete = (data) => ({
  type: types.provinceDelete,
  payload: data,
});
