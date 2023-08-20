import React from 'react';
import "./Basket.scss"
import {FaArrowLeftLong} from "react-icons/fa6";
import Button from "../../../../Ui/Button";
import {FaMinus, FaPlus} from "react-icons/fa";
import Blur from "../../../../Ui/Blur";
import {useAppSelector} from "../../../../Hooks/Selector";
import {GrClose} from "react-icons/gr";
import {useAppDispatch} from "../../../../Hooks/Dispatch";
import {
    basketModalREC,
    decBasketsREC,
    deleteBasketsREC,
    getBasketREC
} from "../../../../Store/Actions/ClientAction/Basket";
import {dataB} from "../../../../Types/ClientTypes/Product";

const Basket = () => {
    const {basket, basketModal} = useAppSelector(s => s.BasketReducer)
    const dispatch = useAppDispatch()
    const decBAS = (el: dataB) => dispatch(decBasketsREC(el))
    const basPlus = (el: dataB) => dispatch(getBasketREC(el))

    const delBAS = (el: dataB) => dispatch(deleteBasketsREC(el))

    const countBas = basket.reduce((acc, el) => {
        return acc * el.quantity + el.price
    }, 0)
    const mode = () => dispatch(basketModalREC(basketModal))

    return (
        <div hidden={basketModal}>
            <Blur classes={"blur"} click={mode}/>
            <div className="basket">
                <div className="basket--arrow">
                    <FaArrowLeftLong className="basket--arrow__icon"/>
                    <h1>Cart</h1>
                </div>
                <div className="basket--group">
                    <div className="basket--group--nav">
                        <Button click={mode} icon={<FaPlus/>} classes={"basket--group--nav__plus"}/>
                    </div>
                    {
                        basket.length === 0 ? null :
                            <>
                                <div className="basket--group__product">
                                    {
                                        basket.map(el => (
                                            <div className="basket--group__product--box">
                                                <div><img src={el.img} alt=""/></div>
                                                <div className="basket--group__product--box__text">
                                                    <h1>{el.title}</h1>
                                                    <h2>130с/kg</h2>
                                                    <h3>1 pc.~0.1 kg</h3>
                                                </div>
                                                <p>Quantity</p>
                                                <div className="basket--group__product--box__count">
                                                    <FaMinus onClick={() => decBAS(el)}
                                                             className="basket--group__product--box__count--icon"/>
                                                    <h4>{el.quantity}</h4>
                                                    <FaPlus onClick={() => basPlus(el)}
                                                            className="basket--group__product--box__count--icon"/>
                                                </div>
                                                <h5>{el.price * el.quantity}c</h5>
                                                <GrClose onClick={() => delBAS(el)}
                                                         className="basket--group__product__btn"/>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="basket--group__total">
                                    <div className="basket--group__total--text">
                                        <h6>Subtotal <span>430с</span></h6>
                                        <h6>Shipping charges <span>{countBas / 50}</span></h6>
                                    </div>
                                    <div className="basket--group__total--price">
                                        <p>Total <span>{countBas}</span></p>
                                    </div>
                                </div>
                                <div className={"basket--group__btn"}>
                                    <Button text={"Checkout"}/>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Basket;