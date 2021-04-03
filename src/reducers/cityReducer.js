import { types } from '../types/types';

const initialState = {
  list: [],
  loading: false,
};

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cityStartList:
      return {
        ...state,
        loading: true,
      };

    case types.cityListAll:
      return {
        ...state,
        list: [...action.payload],
        loading: false,
      };

    case types.cityAddNew:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case types.cityModify:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case types.cityDelete:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
