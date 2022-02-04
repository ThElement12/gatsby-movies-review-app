import searchReducer from "./searchString";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    search: searchReducer
})

export default allReducers;
