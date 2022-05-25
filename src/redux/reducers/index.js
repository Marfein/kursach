import {combineReducers} from "redux";

import filtersReducer from "./filters";
import dishesReducer from "./dishes";
import cartReducer from "./cart";

const rootReducer = combineReducers({
    filters: filtersReducer,
    dishes: dishesReducer,
    cart: cartReducer,
});

export default rootReducer;