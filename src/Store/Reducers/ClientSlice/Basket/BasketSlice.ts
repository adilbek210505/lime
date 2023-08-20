import {createSlice} from "@reduxjs/toolkit";
import {BasketState} from "../../../../Types/ClientTypes/Basket";


const bas: any = localStorage.getItem("basket")
const modal: any = localStorage.getItem("modal")
const basketsOne: any  = localStorage.getItem("basketOne")
const basModal: any = localStorage.getItem("basModal")

const initialState: BasketState = {
    basket: JSON.parse(bas) || [],
    basketModal: JSON.parse(modal) || true,
    basketDetail: JSON.parse(basketsOne) || {},
    basketDetailModal: JSON.parse(modal) || true,
}

export const BasketReducer = createSlice({
    name: "PRODUCT",
    initialState,
    reducers: {
        getBasket(state, {payload}) {
            const found = state.basket.find(el => el.id === payload.id)
            if (found) {
                state.basket = state.basket.map(el => el.id === found.id ? {...el, quantity: el.quantity + 1} : el)
            } else {
                state.basket = [...state.basket, {...payload, quantity: 1}]
            }
        },
        deletesBasket(state, {payload}) {
            state.basket = state.basket.filter(el => el.id !== payload.id)
        },
        decBasket(state, {payload}) {
            state.basket = state.basket.map(el => {
                if (el.id === payload.id) {
                    if (el.quantity > 1) {
                        return {...el, quantity: el.quantity - 1}
                    } else return el
                } else return el
            })
        },
        basketMod(state, {payload}) {
            state.basketModal = !payload
        },
        basketDetails(state, {payload}) {
            state.basketDetail = {...payload}
        },
        basketModalDetails(state, {payload}) {
            state.basketDetailModal = !payload
        }
    }
})

export const {basketMod,basketModalDetails,basketDetails,getBasket, decBasket, deletesBasket} = BasketReducer.actions
export default BasketReducer.reducer