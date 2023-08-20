import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FavoriteState} from "../../../../Types/ClientTypes/Favorite";
import {dataB} from "../../../../Types/ClientTypes/Product";


const fav: any = localStorage.getItem("favorite")
const mode: any = localStorage.getItem("favMODE")

const initialState: FavoriteState = {
    favorite: JSON.parse(fav) || [],
    favoriteMode: JSON.parse(mode) || true
}

export const FavoriteReducer = createSlice({
    name: "PRODUCT",
    initialState,
    reducers: {
        getFavorite(state, {payload}: PayloadAction<dataB>) {
            const count = state.favorite.find(el => el.id === payload.id)
            if (count) {
                state.favorite = state.favorite.filter(el => el.id !== payload.id)
            } else {
                state.favorite = [...state.favorite, {...payload}]
            }
        },
        favoriteModal(state, {payload}) {
            state.favoriteMode = !payload
        }
    }
})

export const {getFavorite, favoriteModal} = FavoriteReducer.actions
export default FavoriteReducer.reducer