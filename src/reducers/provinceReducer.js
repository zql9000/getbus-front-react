import { types } from '../types/types';

const initialState = {
  list: [],
  loading: false,
};

export const provinceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.provinceStartList:
      return {
        ...state,
        loading: true,
      };

    case types.provinceListAll:
      return {
        ...state,
        list: [...action.payload],
        loading: false,
      };

    case types.provinceAddNew:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case types.provinceModify:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case types.provinceDelete:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
