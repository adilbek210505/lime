import React, {useState} from 'react';
import "./Notification.scss"
import {NavLink, Route, Routes} from "react-router-dom";
import avatar from "../../../../assets/img/avatar.png"
import { AiOutlineMore } from 'react-icons/ai';
import { PiPencilSimpleLineLight } from 'react-icons/pi';
import { BsFillCameraFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';


const Notification = () => {
    const [isDivOpen, setIsDivOpen] = useState(false);

    const handleToggleDiv = () => {
        setIsDivOpen(!isDivOpen);
    }
    return (
        <div className="notification ">

          <div className="avatar-both">
              <div className="avatar">
                  <img src={avatar} alt=""/>
                  <div className="avatar-text">
                      <h1>Olivia Austin</h1>
                      <h3> oliviaaustin@gmail.com</h3>
                  </div>
              </div>
                 <div >
                     {isDivOpen && (
                         <div className="new-div" >
                            <NavLink to="/change-profile">
                                <div className="open">
                                    <PiPencilSimpleLineLight/>
                                    <h5> Edit profile</h5>
                                </div>
                            </NavLink>

                            <NavLink to={"/change-photo"}>
                                <div className="open">
                                    <BsFillCameraFill/>
                                    <h5> Change profile photo</h5>
                                </div>
                            </NavLink>

                             <NavLink to={"/profile-delete"}>
                                 <div className="open">
                                     <AiOutlineDelete/>
                                     <h5> Delete</h5>
                                 </div>
                             </NavLink>
                         </div>
                     )}
                 </div>
              <span onClick={handleToggleDiv}> <AiOutlineMore/></span>

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