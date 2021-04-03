import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { getError } from '../helpers/getError';
import { types } from '../types/types';
import { closeModal } from './uiActions';

export const vehicleTypeStartList = () => {
  return async (dispatch) => {
    dispatch(vehicleTypeStartListAll());
    const resp = await fetchWithToken('vehicle-types');
    const body = await resp.json();

    if (body.ok) {
      dispatch(vehicleTypeListAll(body.vehicleTypes));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const vehicleTypeStartListAll = () => ({
  type: types.vehicleTypeStartList,
});

const vehicleTypeListAll = (data) => {
  return {
    type: types.vehicleTypeListAll,
    payload: data,
  };
};

export const vehicleTypeStartAddNew = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken('vehicle-types', data, 'POST');
    const body = await resp.json();

    if (body.ok) {
      dispatch(vehicleTypeAddNew(body.vehicleType));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const vehicleTypeAddNew = (data) => ({
  type: types.vehicleTypeAddNew,
  payload: data,
});

export const vehicleTypeStartModify = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`vehicle-types/${data.id}`, data, 'PUT');
    const body = await resp.json();

    if (body.ok) {
      dispatch(vehicleTypeModify(body.vehicleType));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const vehicleTypeModify = (data) => ({
  type: types.vehicleTypeModify,
  payload: data,
});

export const vehicleTypeStartDelete = (id) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`vehicle-types/${id}`, {}, 'DELETE');
    const body = await resp.json();

    if (body.ok) {
      dispatch(vehicleTypeDelete(body.vehicleType));
      dispatch(closeModal());
      Swal.fire(
        'Eliminar Tipo de Vehículo',
        'El tipo de vehículo fue eliminado',
        'success'
      );
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const vehicleTypeDelete = (data) => ({
  type: types.vehicleTypeDelete,
  payload: data,
});
