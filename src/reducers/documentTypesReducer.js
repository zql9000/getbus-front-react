import { types } from '../types/types';

const initialState = {
  list: [],
  loading: false,
};

export const documentTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.documentTypeStartList:
      return {
        ...state,
        loading: true,
      };

    case types.documentTypeListAll:
      return {
        ...state,
        list: [...action.payload],
        loading: false,
      };

    case types.documentTypeAddNew:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case types.documentTypeModify:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case types.documentTypeDelete:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
