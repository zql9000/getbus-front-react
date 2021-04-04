import { types } from '../types/types';

const initialState = {
  list: [],
  loading: false,
};

export const seatTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.seatTypeStartList:
      return {
        ...state,
        loading: true,
      };

    case types.seatTypeListAll:
      return {
        ...state,
        list: [...action.payload],
        loading: false,
      };

    case types.seatTypeAddNew:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case types.seatTypeModify:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case types.seatTypeDelete:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
