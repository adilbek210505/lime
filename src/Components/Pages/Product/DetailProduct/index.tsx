import React from 'react';
import {useAppSelector} from "../../../../Hooks/Selector";
import Blur from "../../../../Ui/Blur";
import "./detail.scss"
import {FaArrowLeftLong} from "react-icons/fa6";
import lime from "../../../../assets/img/ratingsReviews.png"
import {FaMinus, FaPlus} from "react-icons/fa";
import Button from "../../../../Ui/Button";
import {SlBasket} from "react-icons/sl";
import {dataB} from "../../../../Types/ClientTypes/Product";
import {
    basketDetailREC,
    basketModalDetailREC,
    basketModalREC,
    getBasketREC
} from "../../../../Store/Actions/ClientAction/Basket";
import {useAppDispatch} from "../../../../Hooks/Dispatch";

const DetailProduct = () => {
    const {basketDetail,basketDetailModal, basket} = useAppSelector(s => s.BasketReducer)
    const dispatch = useAppDispatch()
    const basPlus = (el: any) => dispatch(getBasketREC(el))
    const count = basket.some(some => some.id === basketDetail.id)
    const mode = () => {
        dispatch(basketModalREC(true))
        dispatch(basketModalDetailREC(basketDetailModal))
    }

    return (
        <div hidden={basketDetailModal}>
            <Blur classes={"blur"} click={() => dispatch(basketModalDetailREC(basketDetailModal))}/>
            <div className="detail">
                <div className="detail--arrow">
                    <FaArrowLeftLong className="detail--arrow__icon"/>
                </div>
                <div className="detail--group">
                    <div className="detail--group__img">
                        <img src={basketDetail.img} alt=""/>
                    </div>
                    <div className="detail--group__text">
                        <h1>{basketDetail.title}</h1>
                        <div className="detail--group__text--image">
                            <img src={lime} alt=""/>
                            <span>Reviews</span>
                        </div>
                        <p>{basketDetail.description}</p>
                        <h2>{basketDetail.price}с / {basketDetail.kg} kg</h2>
                        <h4>1pc.~0.1 kg</h4>
                        {
                            basket.map(el => (
                                el.id === basketDetail.id &&
                                <div className="detail--group__text--count">
                                    <p>Quantity</p>
                                    <div className="detail--group__text--count__box">
                                        <FaMinus className="detail--group__text--count__box--icon"/>
                                        <h4>{el.quantity}</h4>
                                        <FaPlus onClick={() => basPlus(basketDetail)} className="detail--group__text--count__box--icon"/>
                                    </div>
                                </div>
                            ))
                        }

                        {
                            count ?
                                <Button icon={<SlBasket/>} click={mode} text={"open"}/>
                                :
                                <Button icon={<SlBasket/>} click={() => basPlus(basketDetail)} text={"Add to cart"}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;