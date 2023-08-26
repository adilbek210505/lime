import {appDispatch} from "../../../index";
import {
    categoryProduct,
    getProduct,
    getProductList, ModalProduct,
    productListModals
} from "../../../Reducers/ClientSlice/Product/ProductSlice";

export const getProductREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(getProduct(el))
}

export const productListModalREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(productListModals(el))
}

export const getProductListREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(getProductList(el))
}

export const getCategoryREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(categoryProduct(el))
}

export const ModalProductREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(ModalProduct(el))
}