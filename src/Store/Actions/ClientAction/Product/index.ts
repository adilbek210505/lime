import {appDispatch} from "../../../index";
import {getProduct} from "../../../Reducers/ClientSlice/Product/ProductSlice";

export const getProductREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(getProduct(el))
}