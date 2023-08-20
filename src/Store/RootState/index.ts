import {combineReducers} from "@reduxjs/toolkit";
import ProductReducer from "../Reducers/ClientSlice/Product/ProductSlice";
import BasketReducer from "../Reducers/ClientSlice/Basket/BasketSlice";

export const rootReducer = combineReducers({
    ProductReducer,
    BasketReducer
})












