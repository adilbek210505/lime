import {createSlice} from "@reduxjs/toolkit";
import {ProductState} from "../../../../Types/ClientTypes/Product";


const initialState: ProductState = {
    product: []
}

export const ProductReducer = createSlice({
    name: "PRODUCT",
    initialState,
    reducers: {
        getProduct(state,{payload}) {
            state.product = payload
        }
    }
})

export const {getProduct} = ProductReducer.actions
export default ProductReducer.reducer