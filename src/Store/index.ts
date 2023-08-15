import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./RootState";

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type appStore = ReturnType<typeof setUpStore>
export type appDispatch = appStore["dispatch"]