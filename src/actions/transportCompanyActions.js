import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { getError } from '../helpers/getError';
import { types } from '../types/types';
import { closeModal } from './uiActions';

export const transportCompanyStartList = () => {
  return async (dispatch) => {
    dispatch(transportCompanyStartListAll());
    const resp = await fetchWithToken('transport-companies');
    const body = await resp.json();

    if (body.ok) {
      dispatch(transportCompanyListAll(body.transportCompanies));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const transportCompanyStartListAll = () => ({
  type: types.transportCompanyStartList,
});

const transportCompanyListAll = (data) => {
  return {
    type: types.transportCompanyListAll,
    payload: data,
  };
};

export const transportCompanyStartAddNew = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken('transport-companies', data, 'POST');
    const body = await resp.json();

    if (body.ok) {
      dispatch(transportCompanyAddNew(body.transportCompany));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const transportCompanyAddNew = (data) => ({
  type: types.transportCompanyAddNew,
  payload: data,
});

export const transportCompanyStartModify = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(
      `transport-companies/${data.id}`,
      data,
      'PUT'
    );
    const body = await resp.json();

    if (body.ok) {
      dispatch(transportCompanyModify(body.transportCompany));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const transportCompanyModify = (data) => ({
  type: types.transportCompanyModify,
  payload: data,
});

export const transportCompanyStartDelete = (id) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(
      `transport-companies/${id}`,
      {},
      'DELETE'
    );
    const body = await resp.json();

    if (body.ok) {
      dispatch(transportCompanyDelete(body.transportCompany));
      dispatch(closeModal());
      Swal.fire('Eliminar Empresa', 'La empresa fue eliminada', 'success');
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const transportCompanyDelete = (data) => ({
  type: types.transportCompanyDelete,
  payload: data,
});
