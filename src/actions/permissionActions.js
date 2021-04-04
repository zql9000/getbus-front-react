import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { getError } from '../helpers/getError';
import { types } from '../types/types';

export const permissionStartList = () => {
  return async (dispatch) => {
    dispatch(permissionStartListAll());
    const resp = await fetchWithToken('permissions');
    const body = await resp.json();

    if (body.ok) {
      dispatch(permissionListAll(body.permissions));
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const permissionStartListAll = () => ({
  type: types.permissionStartList,
});

const permissionListAll = (data) => {
  return {
    type: types.permissionListAll,
    payload: data,
  };
};
