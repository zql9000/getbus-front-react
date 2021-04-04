import { types } from '../types/types';

const initialState = {
  list: [],
  loading: false,
};

export const permissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.permissionStartList:
      return {
        ...state,
        loading: true,
      };

    case types.permissionListAll:
      return {
        ...state,
        list: [...action.payload],
        loading: false,
      };

    default:
      return state;
  }
};
