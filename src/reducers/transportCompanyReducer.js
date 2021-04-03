import { types } from '../types/types';

const initialState = {
  list: [],
  loading: false,
};

export const transportCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.transportCompanyStartList:
      return {
        ...state,
        loading: true,
      };

    case types.transportCompanyListAll:
      return {
        ...state,
        list: [...action.payload],
        loading: false,
      };

    case types.transportCompanyAddNew:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case types.transportCompanyModify:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case types.transportCompanyDelete:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
