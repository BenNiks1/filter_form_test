import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
  fetchData: dataReducer,
  filtered: filterReducer,
});
