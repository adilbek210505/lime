import {dataB} from "../../../../Types/ClientTypes/Product";
import {appDispatch} from "../../../index";
import {favoriteModal, getFavorite} from "../../../Reducers/ClientSlice/Favorite/FavoriteSlice";


export const getFavoriteREC = (el: any) => (dispatch: appDispatch) => {
    const fav: any = localStorage.getItem("favorite")
    let mode = JSON.parse(fav) || []
    const count = mode.find((e: any) => e.id === el.id)
    if (count) {
        mode = mode.filter((e: any) => e.id !== el.id)
    } else {
        mode = [...mode, {...el}]
    }
    dispatch(getFavorite(el))
    localStorage.setItem("favorite", JSON.stringify(mode))
}


export const favoriteModalREC = (el: boolean) => (dispatch: appDispatch)  => {
    const mode: any = localStorage.getItem("favMODE")
    let modal = JSON.parse(mode) || true
    modal = modal = !el
    dispatch(favoriteModal(el))
    localStorage.setItem("favMODE", JSON.stringify(modal))
}