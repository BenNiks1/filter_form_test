import { ADD_FILTER_ITEMS, DELETE_FILTER_ITEMS } from "./types";

const initialState = {
  filteredType: [],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER_ITEMS:
      return { ...state, filteredType: state.filteredType.concat([action.payload]) };
    case DELETE_FILTER_ITEMS:
      return {
        ...state,
        filteredType: state.filteredType.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};