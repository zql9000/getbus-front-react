import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { getError } from '../helpers/getError';
import { types } from '../types/types';
import { closeModal } from './uiActions';

export const busStationStartList = () => {
  return async (dispatch) => {
    dispatch(busStationStartListAll());
    const resp = await fetchWithToken('bus-stations');
    const body = await resp.json();

    if (body.ok) {
      dispatch(busStationListAll(body.busStations));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const busStationStartListAll = () => ({
  type: types.busStationStartList,
});

const busStationListAll = (data) => {
  return {
    type: types.busStationListAll,
    payload: data,
  };
};

export const busStationStartAddNew = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken('bus-stations', data, 'POST');
    const body = await resp.json();

    if (body.ok) {
      dispatch(busStationAddNew(body.busStation));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const busStationAddNew = (data) => ({
  type: types.busStationAddNew,
  payload: data,
});

export const busStationStartModify = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`bus-stations/${data.id}`, data, 'PUT');
    const body = await resp.json();

    if (body.ok) {
      dispatch(busStationModify(body.busStation));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const busStationModify = (data) => ({
  type: types.busStationModify,
  payload: data,
});

export const busStationStartDelete = (id) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`bus-stations/${id}`, {}, 'DELETE');
    const body = await resp.json();

    if (body.ok) {
      dispatch(busStationDelete(body.busStation));
      dispatch(closeModal());
      Swal.fire('Eliminar Terminal', 'La terminal fue eliminada', 'success');
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const busStationDelete = (data) => ({
  type: types.busStationDelete,
  payload: data,
});
