import { types } from '../types/types';

const initialState = {
  list: [],
  loading: false,
};

export const busStationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.busStationStartList:
      return {
        ...state,
        loading: true,
      };

    case types.busStationListAll:
      return {
        ...state,
        list: [...action.payload],
        loading: false,
      };

    case types.busStationAddNew:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case types.busStationModify:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case types.busStationDelete:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
