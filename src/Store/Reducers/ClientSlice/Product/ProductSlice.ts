import {createSlice} from "@reduxjs/toolkit";
import {ProductState} from "../../../../Types/ClientTypes/Product";


const initialState: ProductState = {
    product: [],
    productListModal: false,
    productList: {},
    productListCategory: "",
    productListModalCategory: false
}

export const ProductReducer = createSlice({
    name: "PRODUCT",
    initialState,
    reducers: {
        getProduct(state,{payload}) {
            state.product = payload
        },
        productListModals(state, {payload}) {
            state.productListModal = !payload
        },
        getProductList(state, {payload}) {
            state.productList = {text: payload}
        },
        categoryProduct(state, {payload}) {
            state.productListCategory = payload
        },
        ModalProduct(state,{payload}) {
            state.productListModalCategory = payload
        }
    }
})

export const {getProduct,ModalProduct,categoryProduct,getProductList,productListModals} = ProductReducer.actions
export default ProductReducer.reducer