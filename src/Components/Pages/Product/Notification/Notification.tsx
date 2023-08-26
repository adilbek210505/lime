import React from 'react';
import "./Notification.scss"
import avatar from "../../../../assets/img/avatar.png"
import {useAppSelector} from "../../../../Hooks/Selector";

const Notification = () => {
    const {NotificationModal} = useAppSelector(s => s.NotificationReducer)

    return (
        <div style={{display: NotificationModal ? "" : "none"}}>
            <div className="notification">
                <div className="avatar">
                    <img src={avatar} alt="img"/>
                    <div className="avatar-text">
                        <h1>Olivia Austin</h1>
                        <h3> oliviaaustin@gmail.com</h3>
                    </div>
                </div>
                <div className="tabs">
                    <h4> Profile</h4>
                    <h4> My Orders</h4>
                    <h4> Credit Cards</h4>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Notification;