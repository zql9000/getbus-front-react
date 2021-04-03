import { types } from '../types/types';

const initialState = {
  list: [],
  loading: false,
};

export const vehicleTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.vehicleTypeStartList:
      return {
        ...state,
        loading: true,
      };

    case types.vehicleTypeListAll:
      return {
        ...state,
        list: [...action.payload],
        loading: false,
      };

    case types.vehicleTypeAddNew:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case types.vehicleTypeModify:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case types.vehicleTypeDelete:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
