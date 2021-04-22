import { ADD_FILTER_ITEMS, DELETE_FILTER_ITEMS, FETCH_DATA } from "./types";

export const fetchData = (items) => {
  return {
    type: FETCH_DATA,
    payload: items,
  };
};

export const addFilterItems = (value) => {
  return {
    type: ADD_FILTER_ITEMS,
    payload: value,
  };
};

export const deleteFilterItems = (value) => {
  return {
    type: DELETE_FILTER_ITEMS,
    payload: value,
  };
};
