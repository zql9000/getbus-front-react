import Swal from 'sweetalert2';
import { fetchWithToken, fetchWithoutToken } from '../helpers/fetch';
import { getError } from '../helpers/getError';
import { types } from '../types/types';

export const startLogin = (username, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      'auth',
      { username, password },
      'POST'
    );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(
        login({
          userId: body.userId,
          name: body.name,
          lastName: body.lastName,
          roleId: body.roleId,
          role: body.role,
        })
      );
    } else {
      Swal.fire('Error', getError(body), 'error');
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken('auth/renew');
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(
        login({
          userId: body.userId,
          name: body.name,
          lastName: body.lastName,
          roleId: body.roleId,
          role: body.role,
        })
      );
    } else {
      dispatch(checkingFinish());
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

export const startLogout = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({
  type: types.authLogout,
});
