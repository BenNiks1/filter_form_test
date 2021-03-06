import { FETCH_DATA } from "./types";

const initialState = {
  data: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
