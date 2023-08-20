import React from 'react';
import "./ProductCard.scss"
import {GrFavorite} from "react-icons/gr";
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
import {useAppSelector} from "../../../../Hooks/Selector";
import {getFavoriteREC} from "../../../../Store/Actions/ClientAction/Favorite";
import {MdFavorite} from "react-icons/md";


interface Card {
    el: dataB
}

const ProductCard = ({el}: Card) => {
    const {basket, basketDetailModal, basketModal} = useAppSelector(s => s.BasketReducer)
    const {favorite} = useAppSelector(s => s.FavoriteReducer)
    const dispatch = useAppDispatch()
    const getBAS = () => dispatch(getBasketREC(el))
    const fount = basket.some(item => item.id === el.id)
    const mode = () => dispatch(basketModalREC(true))
    const detail = () => dispatch(basketDetailREC(el))

    const favR = () => dispatch(getFavoriteREC(el))

    const countF = favorite.some((e: any) => e.id === el.id)

    return (
        <div className="product--group__block">
            <div className="product--group__block--new">
                {
                    countF ?
                        <MdFavorite className="product--group__block--new__icon-two" onClick={favR}/>
                        :
                        <GrFavorite className="product--group__block--new__icon" style={{color: "red"}} onClick={favR}/>

                }
            </div>
            <div className="product--group__block--image" onClick={detail}>
                <img onClick={() => dispatch(basketModalDetailREC(basketDetailModal))} src={el.img} alt=""/>
            </div>
            <div>
                <h2>{el.price}c</h2>
                <h1>{el.title}</h1>
                {
                    el.category === "beverages" ? <h3>{el.liter} L</h3> : <h3>{el.kg} kg</h3>
                }
            </div>
            {
                fount ?
                    <Button click={mode} icon={<SlBasket/>} text={`open`}/>
                    :
                    <Button click={getBAS} icon={<SlBasket/>} text={`Add to cart`}/>
            }
        </div>
    );
};

export default ProductCard;