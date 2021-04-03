import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { getError } from '../helpers/getError';
import { types } from '../types/types';
import { closeModal } from './uiActions';

export const documentTypeStartList = () => {
  return async (dispatch) => {
    dispatch(documentTypeStartListAll());
    const resp = await fetchWithToken('document-types');
    const body = await resp.json();

    if (body.ok) {
      dispatch(documentTypeListAll(body.documentTypes));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const documentTypeStartListAll = () => ({
  type: types.documentTypeStartList,
});

const documentTypeListAll = (data) => {
  return {
    type: types.documentTypeListAll,
    payload: data,
  };
};

export const documentTypeStartAddNew = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken('document-types', data, 'POST');
    const body = await resp.json();

    if (body.ok) {
      dispatch(documentTypeAddNew(body.documentType));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const documentTypeAddNew = (data) => ({
  type: types.documentTypeAddNew,
  payload: data,
});

export const documentTypeStartModify = (data) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`document-types/${data.id}`, data, 'PUT');
    const body = await resp.json();

    if (body.ok) {
      dispatch(documentTypeModify(body.documentType));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const documentTypeModify = (data) => ({
  type: types.documentTypeModify,
  payload: data,
});

export const documentTypeStartDelete = (id) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`document-types/${id}`, {}, 'DELETE');
    const body = await resp.json();

    if (body.ok) {
      dispatch(documentTypeDelete(body.documentType));
      dispatch(closeModal());
      Swal.fire(
        'Eliminar Tipo de documento',
        'El tipo de documento fue eliminado',
        'success'
      );
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const documentTypeDelete = (data) => ({
  type: types.documentTypeDelete,
  payload: data,
});
