import React from 'react';
import "./Notification.scss"
import {NavLink, Route, Routes} from "react-router-dom";
import avatar from "../../../../assets/img/avatar.png"

const Notification = () => {
    return (
        <div className="notification ">

           <div className="avatar">
               <img src={avatar} alt=""/>
               <div className="avatar-text">
                   <h1>Olivia Austin</h1>
                   <h3> oliviaaustin@gmail.com</h3>
               </div>
           </div>


            <div className="tabs">
                <NavLink to="/"><h4> Profile</h4></NavLink>
                <NavLink to="/notification-orders "><h4> My Orders</h4></NavLink>
                <NavLink to="/notification-cards "><h4> Credit Cards</h4></NavLink>
            </div>


        </div>

    );
};

export default Notification;