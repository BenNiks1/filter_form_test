import { FETCH_DATA } from "./types";

export const fetchData = (items) => {
  return {
    type: FETCH_DATA,
    payload: items,
  };
};
