import React from 'react';
import "./css/ClientHeader.scss"
import logo from "../../../assets/img/lime-header.png"
import Button from "../../../Ui/Button";
import {BsBoxSeam, BsGlobe} from "react-icons/bs";
import {BiBell, BiUser} from "react-icons/bi";
import {SlBasket} from "react-icons/sl";
import {HiOutlineMail} from "react-icons/hi";
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {useAppSelector} from "../../../Hooks/Selector";
import {useAppDispatch} from "../../../Hooks/Dispatch";
import {basketModalREC} from "../../../Store/Actions/ClientAction/Basket";
import {favoriteModalREC} from "../../../Store/Actions/ClientAction/Favorite";
import {ModalProductREC, productListModalREC} from "../../../Store/Actions/ClientAction/Product";
import {getNotificationREC} from "../../../Store/Actions/ClientAction/Notification";

const ClientHeader = () => {
    const {productListModal,productListModalCategory} = useAppSelector(s => s.ProductReducer)
    const {NotificationModal} = useAppSelector(s => s.NotificationReducer)
    const {basketModal} = useAppSelector(s => s.BasketReducer)
    const {favoriteMode} = useAppSelector(s => s.FavoriteReducer)
    const dispatch = useAppDispatch()
    const modes = () => dispatch(basketModalREC(basketModal))
    const favM = () => dispatch(favoriteModalREC(favoriteMode))
    const modProductList = () => {
        dispatch(productListModalREC(productListModal))
        dispatch(ModalProductREC(true))
    }
    const NotificationMode = () => dispatch(getNotificationREC(NotificationModal))

    return (
        <>
            <div className="clientHeader">
                <div className="clientHeader--block">
                    <div onClick={() => dispatch(ModalProductREC(false))}><img src={logo} alt="img"/></div>
                    <div className="clientHeader--block__group">
                        <Button click={modProductList} icon={<BsBoxSeam/>} classes={"clientHeader--btn"}/>
                        <Button icon={<BiBell/>} classes={"clientHeader--btn"}/>
                        <Button click={modes} icon={<SlBasket/>} classes={"clientHeader--btn"}/>
                    </div>
                </div>

                <div className="clientHeader--box">
                    <Button icon={<BsGlobe/>} classes={"clientHeader--btn"}/>
                    <Button icon={<HiOutlineMail/>} classes={"clientHeader--btn"}/>
                    <Button click={favM} styles={{background: favoriteMode ? "" : "green"}} icon={<MdOutlineFavoriteBorder/>} classes={"clientHeader--btn"}/>
                    <Button click={NotificationMode} icon={<BiUser/>} classes={"clientHeader--btn"}/>
                </div>
            </div>
        </>
    );
};

export default ClientHeader;