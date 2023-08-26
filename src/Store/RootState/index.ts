import {combineReducers} from "@reduxjs/toolkit";
import ProductReducer from "../Reducers/ClientSlice/Product/ProductSlice";
import BasketReducer from "../Reducers/ClientSlice/Basket/BasketSlice";
import FavoriteReducer from "../Reducers/ClientSlice/Favorite/FavoriteSlice";
import NotificationReducer from "../Reducers/ClientSlice/Notification/NotificationSlice";

export const rootReducer = combineReducers({
    ProductReducer,
    BasketReducer,
    FavoriteReducer,
    NotificationReducer
})












