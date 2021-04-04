import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { getError } from '../helpers/getError';
import { types } from '../types/types';
import { closeModal } from './uiActions';

export const seatTypeStartList = () => {
  return async (dispatch) => {
    dispatch(seatTypeStartListAll());
    const resp = await fetchWithToken('seat-types');
    const body = await resp.json();

    if (body.ok) {
      dispatch(seatTypeListAll(body.seatTypes));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const seatTypeStartListAll = () => ({
  type: types.seatTypeStartList,
});

const seatTypeListAll = (data) => {
  return {
    type: types.seatTypeListAll,
    payload: data,
  };
};

export const seatTypeStartAddNew = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken('seat-types', data, 'POST');
    const body = await resp.json();

    if (body.ok) {
      dispatch(seatTypeAddNew(body.seatType));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const seatTypeAddNew = (data) => ({
  type: types.seatTypeAddNew,
  payload: data,
});

export const seatTypeStartModify = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`seat-types/${data.id}`, data, 'PUT');
    const body = await resp.json();

    if (body.ok) {
      dispatch(seatTypeModify(body.seatType));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const seatTypeModify = (data) => ({
  type: types.seatTypeModify,
  payload: data,
});

export const seatTypeStartDelete = (id) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`seat-types/${id}`, {}, 'DELETE');
    const body = await resp.json();

    if (body.ok) {
      dispatch(seatTypeDelete(body.seatType));
      dispatch(closeModal());
      Swal.fire(
        'Eliminar Tipo de asiento',
        'El tipo de asiento fue eliminado',
        'success'
      );
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const seatTypeDelete = (data) => ({
  type: types.seatTypeDelete,
  payload: data,
});
