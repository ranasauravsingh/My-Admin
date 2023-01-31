import { combineReducers } from "redux";
import { categoryData } from "./categoryReducer";
import { productData } from "./productReducer";

const rootReducer = combineReducers({ categoryData, productData });

export default rootReducer;
