import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { getError } from '../helpers/getError';
import { types } from '../types/types';
import { closeModal } from './uiActions';

export const cityStartList = () => {
  return async (dispatch) => {
    dispatch(cityStartListAll());
    const resp = await fetchWithToken('cities');
    const body = await resp.json();

    if (body.ok) {
      dispatch(cityListAll(body.cities));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const cityStartListAll = () => ({
  type: types.cityStartList,
});

const cityListAll = (data) => {
  return {
    type: types.cityListAll,
    payload: data,
  };
};

export const cityStartAddNew = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken('cities', data, 'POST');
    const body = await resp.json();

    if (body.ok) {
      dispatch(cityAddNew(body.city));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const cityAddNew = (data) => ({
  type: types.cityAddNew,
  payload: data,
});

export const cityStartModify = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`cities/${data.id}`, data, 'PUT');
    const body = await resp.json();

    if (body.ok) {
      dispatch(cityModify(body.city));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const cityModify = (data) => ({
  type: types.cityModify,
  payload: data,
});

export const cityStartDelete = (id) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`cities/${id}`, {}, 'DELETE');
    const body = await resp.json();

    if (body.ok) {
      dispatch(cityDelete(body.city));
      dispatch(closeModal());
      Swal.fire('Eliminar Provincia', 'La provincia fue eliminada', 'success');
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const cityDelete = (data) => ({
  type: types.cityDelete,
  payload: data,
});
