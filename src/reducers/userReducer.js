import { types } from '../types/types';

const initialState = {
  list: [],
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userStartList:
      return {
        ...state,
        loading: true,
      };

    case types.userListAll:
      return {
        ...state,
        list: [...action.payload],
        loading: false,
      };

    case types.userAddNew:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case types.userModify:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case types.userDelete:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
