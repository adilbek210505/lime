import {appDispatch} from "../../../index";
import {dataB} from "../../../../Types/ClientTypes/Product";
import {
    basketDetails,
    basketMod, basketModalDetails,
    decBasket,
    deletesBasket,
    getBasket
} from "../../../Reducers/ClientSlice/Basket/BasketSlice";


export const getBasketREC = (el: dataB) => (dispatch: appDispatch) => {
    const bas: any = localStorage.getItem("basket")
    let block = JSON.parse(bas) || []
    const fount = block.find((e: any) => e.id === el.id)
    if (fount) {
        block = block.map((e: any) => e.id === fount.id ? {...e, quantity: e.quantity + 1} : e)
    } else {
        block = [...block, {...el, quantity: 1}]
    }
    dispatch(getBasket(el))
    localStorage.setItem("basket", JSON.stringify(block))
}

export const decBasketsREC = (el: any) => (dispatch: appDispatch) => {
    const baskets: any = localStorage.getItem("basket")
    let task = JSON.parse(baskets) || []
    task = task.map((e: any) => {
        if (e.id === el.id) {
            if (e.quantity > 1) {
                return {...e, quantity: e.quantity - 1}
            } else return e
        } else return e
    })
    dispatch(decBasket(el))
    localStorage.setItem("basket", JSON.stringify(task))
}
export const deleteBasketsREC = (el: any) => (dispatch: appDispatch) => {
    const baskets: any = localStorage.getItem("basket")
    let task = JSON.parse(baskets) || []
    task = task.filter((e: any) => e.id !== el.id)
    dispatch(deletesBasket(el))
    localStorage.setItem("basket", JSON.stringify(task))
}

export const basketModalREC = (data: boolean) => (dispatch: appDispatch) => {
    let modal: any = localStorage.getItem("modal")
    let mode = JSON.parse(modal) || true
    mode = mode = !data
    dispatch(basketMod(data))
    localStorage.setItem("modal", JSON.stringify(mode))
}



export const basketDetailREC = (el: any) => (dispatch: appDispatch) => {
    const basketsOne: any  = localStorage.getItem("basketOne")
    let man = JSON.parse(basketsOne) || {}
    man = el
    dispatch(basketDetails(el))
    localStorage.setItem("basketOne", JSON.stringify(man))
}



export const basketModalDetailREC = (data: any) => (dispatch: appDispatch) => {
    const basModal: any = localStorage.getItem("basModal")
    let modal = JSON.parse(basModal) || true
    modal = modal = !data
    dispatch(basketModalDetails(data))
    localStorage.setItem("basModal", JSON.stringify(modal))
}