import {combineReducers} from "redux";

import filtersReducer from "./filters";
import dishesReducer from "./dishes";


const rootReducer = combineReducers({
    filters: filtersReducer,
    dishes: dishesReducer,
});

export default rootReducer;