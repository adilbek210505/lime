import React from 'react';
import "./ProductListModal.scss"
import i from "../../../../../assets/img/fruits.svg"
import g from "../../../../../assets/img/juice.svg"
import o from "../../../../../assets/img/grocery.svg"
import c from "../../../../../assets/img/kids.svg"
import j from "../../../../../assets/img/icon.png"
import {useAppSelector} from "../../../../../Hooks/Selector";
import {productListModals} from "../../../../../Store/Reducers/ClientSlice/Product/ProductSlice";
import Blur from "../../../../../Ui/Blur";
import {useAppDispatch} from "../../../../../Hooks/Dispatch";
import {getProductListREC, productListModalREC} from "../../../../../Store/Actions/ClientAction/Product";

const ProductListModal = () => {
    const {productListModal,productList} = useAppSelector(s => s.ProductReducer)
    const dispatch = useAppDispatch()
    const mod = () => dispatch(productListModals(productListModal))
    const getPr = (el: any) => dispatch(getProductListREC(el))
    const modProductList = () => dispatch(productListModalREC(productListModal))

    return (
        <div className={productListModal ? "trues" : "falses"}>
            <Blur classes={"blur"} click={mod}/>
            <div className="ProductListModal">
                <h1>Product list</h1>
                <button onClick={() => {
                    getPr("vegetables")
                    modProductList()
                }}><img src={i} alt=""/> <span>Vegetables, fruits</span></button>
                <button onClick={() => {
                    getPr("juices")
                    modProductList()
                }}><img src={g} alt=""/> <span>Juices</span></button>
                <button onClick={() => {
                    getPr("grocery")
                    modProductList()
                }}><img src={o} alt=""/> <span>Grocery</span></button>
                <button onClick={() => {
                    getPr("cosmetics")
                    modProductList()
                }}><img src={j} alt=""/> <span>Cosmetics, hygiene</span></button>
                <button onClick={() => {
                    getPr("for kids")
                    modProductList()
                }}><img src={c} alt=""/> <span>For kids</span></button>
            </div>
        </div>
    );
};

export default ProductListModal;